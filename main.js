// import { Line } from '@antv/g2plot';

const g2plot = require('@antv/g2plot');

fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
.then((res) => res.json())
.then((data) => {
const line = new g2plot.Line('container', {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
    // type: 'timeCat',
    tickCount: 5,
    },
    smooth: true,
});

line.render();
});