
//city
(
    function () {
        var asd = new XMLHttpRequest();
        asd.open('get', "http://47.104.137.11:8999/gra/lagou/city", true);
        asd.onreadystatechange = function () {
            if (asd.readyState === 4 && asd.status === 200) {
                // console.log(asd.responseText);
                var cityCountList = JSON.parse(asd.responseText);
                // console.log(cityCountList);
                var cityList = cityCountList.cityCountList;
                console.log(cityList);

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec1'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '城市',
                        subtext: '数据来源拉勾网'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['数量']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: [
                                cityList[0].city, cityList[1].city, cityList[2].city, cityList[3].city,
                                cityList[4].city, cityList[5].city, cityList[6].city, cityList[7].city,
                                cityList[8].city, cityList[9].city, cityList[10].city, cityList[11].city,
                                cityList[12].city, cityList[13].city, cityList[14].city, cityList[15].city
                            ]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '蒸发量',
                            type: 'bar',
                            data: [
                                cityList[0].cityCount, cityList[1].cityCount, cityList[2].cityCount, cityList[3].cityCount,
                                cityList[4].cityCount, cityList[5].cityCount, cityList[6].cityCount, cityList[7].cityCount,
                                cityList[8].cityCount, cityList[9].cityCount, cityList[10].cityCount, cityList[11].cityCount,
                                cityList[12].cityCount, cityList[13].cityCount, cityList[14].cityCount, cityList[15].cityCount
                            ],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        }
        asd.send();
    })();

//degree
(
    function () {
        var asd=new XMLHttpRequest();
        asd.open('get','http://47.104.137.11:8999/gra/lagou/degree',true);
        asd.onreadystatechange=function(){
            if(asd.readyState==4&&asd.status==200){
                // console.log(asd.responseText);
                var degreeCountList = JSON.parse(asd.responseText);
                var countList = degreeCountList.degreeCountList;

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec2'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '学位统计',
                        subtext: '数据来自拉勾网'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['2018年']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: ['博士', '硕士', '本科', '大专', '不限']
                        }
                    ],
                    series: [
                        {
                            name: '2018年',
                            type: 'bar',
                            data: [countList[1].count, countList[4].count, countList[3].count, countList[2].count, countList[0].count]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);



                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec3'));

                // 指定图表的配置项和数据
                var option = {
                    backgroundColor: '#2c343c',

                    title: {
                        text: '学位统计',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {value: countList[1].count, name: '博士'},
                                {value: countList[4].count, name: '硕士'},
                                {value: countList[3].count, name: '本科'},
                                {value: countList[2].count, name: '大专'},
                                {value: countList[0].count, name: '不限'}
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        }
        asd.send();
    }
)();

//salary
(
    function () {
        var asd = new XMLHttpRequest();
        asd.open('get', "http://47.104.137.11:8999/gra/lagou/salary", true);
        asd.onreadystatechange = function () {
            if (asd.readyState === 4 && asd.status === 200) {
                // console.log(asd.responseText);
                var salaryList = JSON.parse(asd.responseText);
                // console.log(cityCountList);
                // var cityList = cityCountList.cityCountList;
                console.log(salaryList);

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec4'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '工资状况',
                        subtext: '数据来自拉勾网'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['2018年']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: ['1', '2', '3', '4', '5']
                        }
                    ],
                    series: [
                        {
                            name: '2018年',
                            type: 'bar',
                            data: [salaryList.levelOne, salaryList.levelTwo, salaryList.levelThree, salaryList.levelFour, salaryList.levelFive]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec5'));

                // 指定图表的配置项和数据
                var option = {
                    backgroundColor: '#2c343c',

                    title: {
                        text: '工资状况',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {value: salaryList.levelOne, name: '等级1'},
                                {value: salaryList.levelTwo, name: '等级2'},
                                {value: salaryList.levelThree, name: '等级3'},
                                {value: salaryList.levelFour, name: '等级4'},
                                {value: salaryList.levelFive, name: '等级5'}
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        }
        asd.send();
    })();

//work-year
(
    function () {
        var asd = new XMLHttpRequest();
        asd.open('get', "http://47.104.137.11:8999/gra/lagou/work-year", true);
        asd.onreadystatechange = function () {
            if (asd.readyState === 4 && asd.status === 200) {
                // console.log(asd.responseText);
                var workYearList = JSON.parse(asd.responseText);
                // console.log(cityCountList);
                var workYearList = workYearList.workYearCountList;
                console.log(workYearList);

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec6'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '工作年限',
                        subtext: '数据来自拉勾网'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['2018年']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: [
                                workYearList[0].minYear, workYearList[1].minYear, workYearList[2].minYear,
                                workYearList[3].minYear, workYearList[4].minYear, workYearList[5].minYear
                            ]
                        }
                    ],
                    series: [
                        {
                            name: '2018年',
                            type: 'bar',
                            data: [
                                workYearList[0].count, workYearList[1].count, workYearList[2].count,
                                workYearList[3].count, workYearList[4].count, workYearList[5].count
                            ]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('sec7'));

                // 指定图表的配置项和数据
                var option = {
                    backgroundColor: '#2c343c',

                    title: {
                        text: '工作年限',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '工作年限',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {value: workYearList[0].count, name: "-1"},
                                {value: workYearList[1].count, name: "0"},
                                {value: workYearList[2].count, name: "1"},
                                {value: workYearList[3].count, name: "3"},
                                {value: workYearList[4].count, name: "5"},
                                {value: workYearList[5].count, name: "10"}
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        }
        asd.send();
    })();