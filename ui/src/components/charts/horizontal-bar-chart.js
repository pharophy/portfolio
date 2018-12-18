import {customElement, bindable } from 'aurelia-framework';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@customElement('horizontal-bar-chart')
export class HorizontalBarChart {
  @bindable elementId;
  @bindable data;
  @bindable keyProp;
  @bindable valueProp;
  @bindable guides;

  constructor(elementId, data, keyProp, valueProp, guides = null) {
    this.elementId = elementId;
    this.data = data;
    this.keyProp = keyProp;
    this.valueProp = valueProp;
    this.guides = guides;
  }

  attached() {
    let chart = am4core.create(this.elementId, am4charts.XYChart);

    chart.colors.saturation = 0.4;

    chart.data = this.data;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = this.keyProp;
    categoryAxis.renderer.minGridDistance = 20;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.maxLabelPosition = 0.98;
    valueAxis.strictMinMax = true;
    valueAxis.baseValue = 0;
    valueAxis.max = 5;
    valueAxis.min = 0;
    valueAxis.renderer.labels.template.adapter.add('text', (text, target) => {
      return isNaN(text) ? text : '';
    });

    if (this.guides) {
      this.createRanges(valueAxis, this.guides);
    }

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = this.keyProp;
    series.dataFields.valueX = this.valueProp;
    //TODO: uncomment when descriptions are better
    //series.tooltipText = '{description}';
    series.tooltip.dy = -10;
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 1000;
    series.sequencedInterpolationDelay = 100;
    series.columns.template.strokeOpacity = 0;

    //add cursor to chart:
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'zoomY';

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add('fill', (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }

  createRanges(valueAxis, guides) {
    for (const guide of guides) {
      let range = valueAxis.axisRanges.create();
      range.value = guide.value;

      if (guide.endValue) {
        range.endValue = guide.endValue;
      }

      if (guide.axisFill) {
        range.axisFill.fill = am4core.color(guide.fillColor);
        range.axisFill.fillOpacity = 0.5;
      }

      range.grid.stroke = am4core.color(guide.color);
      range.grid.strokeWidth = 2;
      range.grid.strokeOpacity = 1;

      range.label.fill = range.grid.stroke;
      range.label.inside = false;
      range.label.text = guide.text;
      range.label.align = 'top';
      range.label.verticalCenter = 'bottom';
    }
  }
}
