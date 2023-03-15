import { Pie } from 'vue-chartjs'
const primary_color = [
  '#51457F',
  '#62549c',
  '#A7A1BF',
  '#7566b5',
  '#7d6cbb',
  '#8877bd',
  '#9181bd',
  '#6957af',

  // "#544885",
  '#eee',
]

const secondary_color = [
  '#FFC107',
  '#E8B007',
  '#FFD454',
  '#806A2A',
  '#CC9B06',
  '#D19E06',
  '#ECC44E',
  // "#A7A1BF",
  '#B58905',
  '#eee',
]

const cyan_color = [
  '#9C27B0',
  '#CD33E8',
  '#DB7BEC',
  '#613669',
  '#A028B5',
  '#EAC5F0',
  '#AD61BA',
  // "#A7A1BF",
  '#EAC5F0',
  '#eee',
]

export const echart1 = {
  color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
  tooltip: {
    show: true,
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  series: [
    {
      name: 'Sales by Country',
      type: 'pie',
      radius: '60%',
      center: ['50%', '50%'],
      data: [
        { value: 535, name: '' },
        { value: 310, name: '' },
        { value: 234, name: '' },
        { value: 155, name: '' },
        { value: 130, name: '' },
        { value: 348, name: '' },
      ],

      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

export const echart2 = {
  series: [
    {
      type: 'pie',
      data: [30, 40, 20, 50, 40, 80, 90],
      // ...echartOptions.smoothLine,
      lineStyle: {
        color: '#4CAF50',
        // ...echartOptions.lineShadow
      },
      itemStyle: {
        color: '#4CAF50',
      },
    },
  ],
}

export const echart3 = {
  grid: {
    show: false,
    top: 5,
    left: 0,
    right: 0,
    bottom: 0,
  },
  color: ['#ff9800'],
  tooltip: {
    show: true,
    backgroundColor: '#000',
  },
  xAxis: [
    {
      type: 'category',

      axisTick: {
        alignWithLabel: true,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      label: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      data: [
        {
          name: 'Bar 1',
          value: 40,
        },
        {
          name: 'Bar 2',
          value: 60,
          itemStyle: {
            color: '#4CAF50',
          },
        },
        {
          name: 'Bar 3',
          value: 80,
        },
        {
          name: 'Bar 4',
          value: 70,
        },
        {
          name: 'Bar 5',
          value: 60,
        },
        {
          name: 'Bar 6',
          value: 70,
        },
        {
          name: 'Bar 7',
          value: 80,
        },
        {
          name: 'Bar 8',
          value: 40,
        },
        {
          name: 'Bar 9',
          value: 70,
        },
      ],
      label: {
        show: false,
        color: '#4CAF50',
      },
      type: 'bar',
      barWidth: '5%',
      smooth: true,
    },
  ],
}

export const echart4 = {
  grid: {
    show: false,
    top: 5,
    left: 0,
    right: 0,
    bottom: 0,
  },
  color: ['#ff9800'],
  tooltip: {
    show: true,
    backgroundColor: '#000',
  },
  xAxis: [
    {
      type: 'category',

      axisTick: {
        alignWithLabel: true,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      label: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      data: [
        {
          name: 'Bar 1',
          value: 40,
        },
        {
          name: 'Bar 2',
          value: 60,
          itemStyle: {
            color: '#4CAF50',
          },
        },
        {
          name: 'Bar 3',
          value: 80,
        },
        {
          name: 'Bar 4',
          value: 70,
        },
        {
          name: 'Bar 5',
          value: 60,
        },
        {
          name: 'Bar 6',
          value: 70,
        },
        {
          name: 'Bar 7',
          value: 80,
        },
        {
          name: 'Bar 8',
          value: 40,
        },
        {
          name: 'Bar 9',
          value: 70,
          itemStyle: {
            color: '#4CAF50',
          },
        },
      ],
      label: {
        show: false,
        color: '#4CAF50',
      },
      type: 'bar',
      barWidth: '5%',
      smooth: true,
    },
  ],
}

export const ots_watchers_conversion_ratio = {
  color: primary_color,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['OTS', 'Watchers', 'Conversion Ratio'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: true,
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      axisLabel: {
        formatter: '{value}sep',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Persons',
      min: 0,
      max: 4500,
      interval: 500,
      axisLabel: {
        formatter: '{value}',
      },
    },
  ],
  series: [
    {
      name: 'OTS',
      type: 'line',
      symbol: 'none',
      smooth: 0.2,
      areaStyle: {},
      data: [
        1200,
        1320,
        1010,
        0,
        0,
        2300,
        2100,
        3000,
        3500,
        3100,
        0,
        0,
        1200,
        1320,
        1010,
        0,
        0,
        2300,
        2100,
        3000,
        3500,
        3100,
        0,
        0,
        2100,
        3000,
        3500,
        3100,
        1000,
        0,
      ],
    },
    {
      name: 'Watchers',
      type: 'line',
      symbol: 'none',
      areaStyle: {},
      smooth: 0.2,
      data: [
        1800,
        1920,
        1510,
        0,
        0,
        2800,
        2500,
        4300,
        3900,
        3500,
        0,
        0,
        1500,
        1620,
        1910,
        0,
        0,
        2900,
        2800,
        3600,
        3700,
        3800,
        0,
        0,
        2500,
        3400,
        3900,
        3500,
        2000,
        0,
      ],
    },
    {
      name: 'Conversion Ratio',
      type: 'line',
      symbol: 'none',
      smooth: 0.2,
      data: [
        2800,
        2920,
        1910,
        0,
        0,
        3800,
        2800,
        4400,
        4200,
        3900,
        0,
        0,
        1800,
        1920,
        2010,
        0,
        0,
        3500,
        3200,
        4000,
        3900,
        4000,
        0,
        0,
        2900,
        3800,
        4200,
        4000,
        2500,
        0,
      ],
    },
  ],
}

export const dwell_attention_attraction_ratio = {
  color: secondary_color,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Attraction Ratio', 'Average Attention Time', 'Average Dwell Time'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: true,
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      axisLabel: {
        formatter: '{value}sep',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Persons',
      min: 0,
      max: 16,
      interval: 2,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Attraction Ratio',
      type: 'line',
      symbol: 'none',
      yAxisIndex: 1,
      // areaStyle: {},
      smooth: 0.2,
      data: [
        32,
        53,
        60,
        60,
        70,
        80,
        90,
        30,
        35,
        50,
        60,
        70,
        32,
        40,
        50,
        60,
        70,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        20,
        30,
        35,
        50,
        10,
        0,
      ],
    },
    {
      name: 'Average Attention Time',
      type: 'line',
      symbol: 'none',
      areaStyle: {},
      smooth: 0.2,
      data: [
        3,
        5,
        6,
        6,
        7,
        8,
        9,
        4,
        3,
        5,
        6,
        7,
        3,
        4,
        5,
        6,
        7,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        2,
        3,
        5,
        6,
        1,
        0,
      ],
    },
    {
      name: 'Average Dwell Time',
      type: 'line',
      symbol: 'none',
      areaStyle: {},
      smooth: 0.2,
      data: [
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
      ],
    },
  ],
}

export const ots_wathers_conversion_ratio_over_week = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#eee',
      },
    },
  },
  color: primary_color,
  legend: {
    show: true,
    bottom: 5,
    data: ['Conversion Ratio', 'OTS', 'Watchers'],
  },
  xAxis: [
    {
      type: 'category',
      data: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'saturday',
        'Sunday',
      ],
      axisPointer: {
        type: 'shadow',
      },
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      silent: true,
      type: 'value',
      name: 'Persons',
      min: 0,
      max: 3500,
      interval: 500,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      silent: true,
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Conversion Ratio',
      type: 'line',
      smooth: 0.3,
      symbol: 'none',
      yAxisIndex: 1,
      data: [70, 90, 70, 60, 56, 67, 60],
    },
    {
      name: 'OTS',
      type: 'bar',
      barGap: 0,
      data: [3220, 2664, 1432, 2167, 2136, 3262, 2532],
    },
    {
      name: 'Watchers',
      type: 'bar',

      data: [3220, 2664, 2532, 2167, 2136, 3262, 2136],
    },
  ],
}

export const ots_wathers_conversion_ratio_over_day = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#eee',
      },
    },
  },

  color: cyan_color,
  legend: {
    show: true,
    bottom: 5,
    data: ['Conversion Ratio', 'OTS', 'Watchers'],
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '0',
        '1',
        '2',
        '3',
        '5',
        '6',
        '7',
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ],
      axisPointer: {
        type: 'shadow',
      },
      axisLine: {
        show: true,
      },
      axisLabel: {
        formatter: '{value}h',
      },
    },
  ],
  yAxis: [
    {
      silent: true,
      type: 'value',
      name: 'Persons',
      min: 0,
      max: 400,
      interval: 50,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      silent: true,
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Conversion Ratio',
      type: 'line',
      smooth: 0.3,
      symbol: 'none',
      yAxisIndex: 1,
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        70,
        90,
        70,
        60,
        56,
        67,
        60,
        70,
        90,
        70,
        60,
        56,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: 'OTS',
      type: 'bar',
      barGap: 0,
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        322,
        266,
        143,
        216,
        213,
        326,
        253,
        143,
        216,
        213,
        326,
        253,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: 'Watchers',
      type: 'bar',

      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        322,
        266,
        253,
        216,
        213,
        326,
        213,
        253,
        216,
        213,
        326,
        213,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
  ],
}

export const dwell_attention_attraction_ratio_over_week = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#eee',
      },
    },
  },
  color: secondary_color,
  legend: {
    show: true,
    bottom: 5,
    data: ['Attraction Ratio', 'Average Attention Time', 'Average Dwell Time'],
  },
  xAxis: [
    {
      type: 'category',
      data: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'saturday',
        'Sunday',
      ],
      axisPointer: {
        type: 'shadow',
      },
      axisLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      silent: true,
      type: 'value',
      name: 'Seconds',
      min: 0,
      max: 11,
      interval: 1,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      silent: true,
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Attraction Ratio',
      type: 'line',
      smooth: 0.3,
      symbol: 'none',
      yAxisIndex: 1,
      data: [70, 90, 70, 60, 56, 67, 60],
    },
    {
      name: 'Average Attention Time',
      type: 'bar',
      barGap: 0,
      data: [8, 6, 8, 7, 9, 6, 5],
    },
    {
      name: 'Average Dwell Time',
      type: 'bar',

      data: [7, 5, 4, 6, 8, 9, 7],
    },
  ],
}
export const dwell_attention_attraction_ratio_over_day = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#eee',
      },
    },
  },

  color: primary_color,
  legend: {
    show: true,
    bottom: 5,
    data: ['Attraction Ratio', 'Average Attention Time', 'Average Dwell Time'],
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '0',
        '1',
        '2',
        '3',
        '5',
        '6',
        '7',
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ],
      axisPointer: {
        type: 'shadow',
      },
      axisLine: {
        show: true,
      },
      axisLabel: {
        formatter: '{value}h',
      },
    },
  ],
  yAxis: [
    {
      silent: true,
      type: 'value',
      name: 'Seconds',
      min: 0,
      max: 12,
      interval: 2,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      silent: true,
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Attraction Ratio',
      type: 'line',
      smooth: 0.3,
      symbol: 'none',
      yAxisIndex: 1,
      data: [
        60,
        70,
        90,
        70,
        60,
        56,
        70,
        90,
        70,
        60,
        56,
        67,
        60,
        70,
        90,
        70,
        60,
        56,
        60,
        70,
        90,
        70,
        60,
        56,
      ],
    },
    {
      name: 'Average Attention Time',
      type: 'bar',
      barGap: 0,
      data: [
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        10,
        9,
        8,
        7,
        6,
        11,
        10,
        9,
        8,
        7,
        6,
      ],
    },
    {
      name: 'Average Dwell Time',
      type: 'bar',

      data: [
        11,
        10,
        9,
        8,
        7,
        6,
        9,
        10,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        9,
        10,
        11,
        11,
        10,
        9,
        8,
        7,
        6,
      ],
    },
  ],
}

export const global_uptime_across_period = {
  color: primary_color,
  tooltip: {
    trigger: 'axis',
    formatter: '{b} September <br/>{a0} : {c0} </br>{a1} : {c1}',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    bottom: 15,
    data: ['Online Locations', 'Watchers Event'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '13%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: true,
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      axisLabel: {
        formatter: '{value}sep',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Events',
      min: 0,
      max: 3000,
      interval: 500,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  series: [
    {
      name: 'Online Locations',
      type: 'line',
      symbol: 'none',
      yAxisIndex: 1,
      // areaStyle: {},
      smooth: 0.2,
      data: [
        82,
        83,
        80,
        84,
        70,
        80,
        90,
        70,
        85,
        90,
        70,
        70,
        72,
        80,
        80,
        60,
        70,
        80,
        90,
        80,
        70,
        60,
        70,
        80,
        90,
        80,
        75,
        80,
        70,
        90,
      ],
    },
    {
      name: 'Watchers Event',
      type: 'bar',
      symbol: 'none',
      areaStyle: {},
      smooth: 0.2,
      data: [
        2003,
        2405,
        2506,
        2306,
        2307,
        0,
        0,
        0,
        0,
        2100,
        2003,
        2405,
        2506,
        2306,
        2307,
        0,
        0,
        0,
        0,
        2100,
        2003,
        2405,
        2506,
        2306,
        2307,
        0,
        0,
        0,
        0,
        2100,
      ],
    },
  ],
}
