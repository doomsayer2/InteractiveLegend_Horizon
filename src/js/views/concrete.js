const sourceData1 = require('./data/tempOslo.json'); // Oslo Chart data
const sourceData2 = require('./data/tempTallinn.json'); // Tallinn Chart data
const sourceData3 = require('./data/tempMunich.json'); // Munich Chart data

const TEXTS = {
  ONE:
    'The areas illustrate the progress of <span class="hT">average temperature</span> (y-axis) in <span class="hT">Oslo</span>, <span class="hT">Tallinn</span> and <span class="hT">Munich</span> for a specific <span class="hT">month</span> (x-axis).',
  TWO:
    'Light blue areas indicate a low <span class="hT">average temperature</span> (y-axis).',
  THREE:
    'Dark blue areas indicate a high <span class="hT">average temperature</span> (y-axis).',
  FOUR:
    'A high <span class="hT">average temperature</span> in <span class="hT">Oslo</span> in <span class="hT">February</span> and <span class="hT">July</span> can be retrieved from the graph due to a dark colored area.',
  FIVE:
    'Compared to the <span class="hT">other cities</span>, <span class="hT">Tallinn</span> shows a shorter period in the year when the temperatures are above 15°C.',
  SIX:
    'In all three <span class="hT">cities</span>, <span class="hT">February</span> is the coldest month.'
};

const TEXTGROUPS = {
  g1: 'Reading',
  g2: 'Using'
};

export class ConcreteDataProvider {
  getVizData(chartID) {
    switch (chartID) {
      case 1:
        return this.viz;
      case 2:
        return this.viz2;
      case 3:
        return this.viz3;
      default:
        return this.viz;
    }
  }

  getSingleHintData(hintId) {
    switch (hintId) {
      case 1:
        return this.hint_1;
      case 2:
        return this.hint_2;
      case 3:
        return this.hint_3;
      case 4:
        return this.hint_4;
      case 5:
        return this.hint_5;
      case 6:
        return this.hint_6;
      default:
        return this.hint_1;
    }
  }

  getAllHintData() {
    return this.allHints;
  }

  constructor() {
    // Config for first chart -- here it is Oslo
    this.viz = {
      data: {
        values: sourceData1
      },
      spec: {
        layer: [
          {
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                scale: {
                  zero: false,
                  nice: false
                },
                axis: {
                  title: 'Month',
                  labelAngle: 0
                }
              },
              y: {
                field: 'temp',
                type: 'quantitative',
                scale: {
                  domain: [-3, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.6
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp > 15 ? datum.temp - 15 : 0',
                as: 'ny'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                axis: {
                  title: 'Month'
                }
              },
              y: {
                field: 'ny',
                type: 'quantitative',
                scale: {
                  domain: [-3, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp < -2 ? datum.temp + 2 : 0',
                as: 'ny2'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal'
              },
              y: {
                field: 'ny2',
                type: 'quantitative',
                scale: {
                  domain: [-3, 15]
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          }
        ],
        config: {
          area: {
            interpolate: 'monotone'
          }
        },
        width: 500,
        height: 120,
        title: 'Average temperature in Oslo, Norway in 2018'
      }
    };

    // Config for the second chart -- here it is
    this.viz2 = {
      data: {
        values: sourceData2
      },
      spec: {
        layer: [
          {
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                scale: {
                  zero: false,
                  nice: false
                },
                axis: {
                  title: 'Month',
                  labelAngle: 0
                }
              },
              y: {
                field: 'temp',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.6
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp > 15 ? datum.temp - 15 : 0',
                as: 'ny'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                axis: {
                  title: 'Month'
                }
              },
              y: {
                field: 'ny',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp < -2 ? datum.temp + 2 : 0',
                as: 'ny2'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal'
              },
              y: {
                field: 'ny2',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          }
        ],
        config: {
          area: {
            interpolate: 'monotone'
          }
        },
        width: 500,
        height: 120,
        title: 'Average temperature in Tallinn, Estonia in 2018'
      }
    };

    // Config for the third chart -- here it is
    this.viz3 = {
      data: {
        values: sourceData3
      },
      spec: {
        layer: [
          {
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                scale: {
                  zero: false,
                  nice: false
                },
                axis: {
                  title: 'Month',
                  labelAngle: 0
                }
              },
              y: {
                field: 'temp',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.6
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp > 15 ? datum.temp - 15 : 0',
                as: 'ny'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal',
                axis: {
                  title: 'Month'
                }
              },
              y: {
                field: 'ny',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          },
          {
            transform: [
              {
                calculate: 'datum.temp < -2 ? datum.temp + 2 : 0',
                as: 'ny2'
              }
            ],
            mark: {
              type: 'area',
              clip: true,
              orient: 'vertical'
            },
            encoding: {
              x: {
                field: 'date',
                type: 'ordinal'
              },
              y: {
                field: 'ny2',
                type: 'quantitative',
                scale: {
                  domain: [-6, 15]
                },
                axis: {
                  title: 'Average temperature in °C'
                }
              },
              opacity: {
                value: 0.8
              },
              tooltip: [
                { field: 'date', type: 'ordinal', title: 'Month' },
                {
                  field: 'temp',
                  type: 'quantitative',
                  title: 'Average temperature in °C'
                }
              ]
            }
          }
        ],
        config: {
          area: {
            interpolate: 'monotone'
          }
        },
        width: 500,
        height: 120,
        title: 'Average temperature in Munich, Germany in 2018'
      }
    };

    this.hint_1 = {
      hintID: 1,
      text: {
        h1: `<div class="vizHint">${TEXTS.ONE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_2 = {
      hintID: 2,
      text: {
        h2: `<div class="vizHint">${TEXTS.TWO}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_3 = {
      hintID: 3,
      text: {
        h3: `<div class="vizHint">${TEXTS.THREE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_4 = {
      hintID: 4,
      text: {
        h4: `<div class="vizHint">${TEXTS.FOUR}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_5 = {
      hintID: 5,
      text: {
        h5: `<div class="vizHint">${TEXTS.FIVE}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_6 = {
      hintID: 6,
      text: {
        h6: `<div class="vizHint">${TEXTS.SIX}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.allHints = {
      hintIDs: [
        this.hint_1.hintID,
        this.hint_2.hintID,
        this.hint_3.hintID,
        this.hint_4.hintID,
        this.hint_5.hintID,
        this.hint_6.hintID
      ],
      text: [
        {
          h1: `<div class="vizHint">${TEXTS.ONE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h2: `<div class="vizHint">${TEXTS.TWO}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h3: `<div class="vizHint">${TEXTS.THREE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h4: `<div class="vizHint">${TEXTS.FOUR}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h5: `<div class="vizHint">${TEXTS.FIVE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h6: `<div class="vizHint">${TEXTS.SIX}</div>`,
          group: `${TEXTGROUPS.g2}`
        }
      ]
    };
  }
}
