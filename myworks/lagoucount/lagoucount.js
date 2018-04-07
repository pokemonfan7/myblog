//section1
(
    function () {
        var asd = new XMLHttpRequest();
        asd.open('get', "http://47.104.137.11:8999/gra/lagou/degree", true);
        asd.onreadystatechange = function () {
            if (asd.readyState === 4 && asd.status === 200) {
                // console.log(asd.responseText);
                var degreeCountList = JSON.parse(asd.responseText);
                var countList = degreeCountList.degreeCountList;


                // 路径配置
                require.config({
                    paths: {
                        echarts: 'echarts.baidu.com/build/dist'
                    }
                });

                // 使用
                require(
                    [
                        'echarts',
                        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
                    ],
                    function (ec) {
                        // 基于准备好的dom，初始化echarts图表
                        var myChart = ec.init(document.getElementById('sec1'));

                        var option = {
                            title: {
                                text: '学位统计立标',
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
                        // console.log(countList);
                        // 为echarts对象加载数据
                        myChart.setOption(option);
                    }
                );


            }
        };
        asd.send();
    })();

//section2
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


                // 路径配置
                require.config({
                    paths: {
                        echarts: 'http://echarts.baidu.com/build/dist'
                    }
                });

                // 使用
                require(
                    [
                        'echarts',
                        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
                    ],
                    function (ec) {
                        // 基于准备好的dom，初始化echarts图表
                        var myChart = ec.init(document.getElementById('sec2'));

                        var option = {
                            title : {
                                text: '城市',
                                subtext: '数据来源拉勾网'
                            },
                            tooltip : {
                                trigger: 'axis'
                            },
                            legend: {
                                data:['数量']
                            },
                            toolbox: {
                                show : true,
                                feature : {
                                    mark : {show: true},
                                    dataView : {show: true, readOnly: false},
                                    magicType : {show: true, type: ['line', 'bar']},
                                    restore : {show: true},
                                    saveAsImage : {show: true}
                                }
                            },
                            calculable : true,
                            xAxis : [
                                {
                                    type : 'category',
                                    data : [
                                        cityList[0].city, cityList[1].city, cityList[2].city, cityList[3].city,
                                        cityList[4].city, cityList[5].city, cityList[6].city, cityList[7].city,
                                        cityList[8].city, cityList[9].city, cityList[10].city, cityList[11].city,
                                        cityList[12].city, cityList[13].city, cityList[14].city, cityList[15].city
                                    ]
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            series : [
                                {
                                    name:'蒸发量',
                                    type:'bar',
                                    data:[
                                        cityList[0].cityCount, cityList[1].cityCount, cityList[2].cityCount, cityList[3].cityCount,
                                        cityList[4].cityCount, cityList[5].cityCount, cityList[6].cityCount, cityList[7].cityCount,
                                        cityList[8].cityCount, cityList[9].cityCount, cityList[10].cityCount, cityList[11].cityCount,
                                        cityList[12].cityCount, cityList[13].cityCount, cityList[14].cityCount, cityList[15].cityCount
                                    ],
                                    markPoint : {
                                        data : [
                                            {type : 'max', name: '最大值'},
                                            {type : 'min', name: '最小值'}
                                        ]
                                    },
                                    markLine : {
                                        data : [
                                            {type : 'average', name: '平均值'}
                                        ]
                                    }
                                }
                            ]
                        };
                        // 为echarts对象加载数据
                        myChart.setOption(option);
                    }
                );


            }
        };
        asd.send();
    })();