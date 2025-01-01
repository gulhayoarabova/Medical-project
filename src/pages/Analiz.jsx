import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import ReactApexChart from "react-apexcharts"; // import nomini to'g'rilang

const Analiz = () => {
  const barChartOptions = {
    series: [{
      name: 'Qon tahlili',
      data: [44, 55, 41, 64, 22, 43, 21, 49, 62, 40]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['July 1', 'July 2', 'July 3', 'July 4', 'July 5', 'July 6', 'July 7', 'July 8', 'July 9', 'July 10'],
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    }
  };

  const pieChartOptions = {
    series: [44, 55, false, false, false],
    labels: ['Gemoglobin', 'Leykositlar', 'Gematokrit', 'Trombositlar', 'Eritrositlar'],
    chart: {
      type: 'pie',
      width: 380
    },
    
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div id='analiz' className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white shadow">
          <CardBody className='flex flex-col gap-y-3'>
            <Typography className='text-[20px] font-bold'>Umumiy qon tahlili</Typography>
            <div className="flex items-center justify-between">
                <Typography variant="h2" className='font-medium' color="green">3,843</Typography>
                <Typography variant="small" color="green" className='text-green-900 bg-green-200 py-1 rounded-full px-2'>+25%</Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="flex bg-white shadow">
          <CardBody className='flex flex-col gap-y-3'>
            <Typography className='text-[20px] font-bold'>O'zgarishlar</Typography>
            <div className="flex items-center justify-between">
                <Typography variant="h2" className='font-medium' color="green">2,420</Typography>
                <Typography variant="small" color="green" className='text-green-900 bg-green-200 py-1 rounded-full px-2'>+20%</Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="flex justify-center items-center bg-white shadow">
          <CardBody className='flex flex-col gap-y-3'>
            <Typography className='text-[20px] font-bold'>Salbiy o'zgarishlar</Typography>
            <div className="flex items-center justify-between">
                <Typography variant="h2" className='font-medium' color="red">1,700</Typography>
                <Typography variant="small" color="red" className='text-red-900 bg-red-200 py-1 rounded-full px-2'>-11%</Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="flex justify-center items-center bg-white shadow">
          <CardBody className='flex flex-col gap-y-3'>
            <Typography className='text-[20px] font-bold'>Nisbiy o'zgarishlar</Typography>
            <div className="flex items-center justify-between">
                <Typography variant="h2" className='font-medium' color="green">720</Typography>
                <Typography variant="small" color="green" className='text-green-900 bg-green-200 py-1 rounded-full px-2'>+17%</Typography>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <Card className="p-6 bg-white shadow">
          <CardBody>
            <ReactApexChart options={barChartOptions} series={barChartOptions.series} type="bar" height={350} />
          </CardBody>
        </Card>
        <Card className="p-4 bg-white shadow flex justify-center items-center">
          <CardBody className='flex items-center'>
            <ReactApexChart options={pieChartOptions} series={pieChartOptions.series} type="pie" width={380} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Analiz;
