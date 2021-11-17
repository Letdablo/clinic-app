
import { Radar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

type datasets = {
    label: string,
    backgroundColor: string,
    borderColor: string,
    pointBackgroundColor: string,
    poingBorderColor: string,
    pointHoverBackgroundColor: string,
    pointHoverBorderColor: string,
    data: number[],
}

type RadarDataType = {
    labels: string[],
    datasets: datasets[];
};

const RadarData: RadarDataType = {
    labels: ["Total Cholesterol", "LDL Cholesterol", "HDL Cholesterol", "Triglycerides", "non HDL C", "TG/HDL Ratio"],
    datasets: [
        {
            label: "Blood test",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "rgba(34, 202, 236, 1)",
            pointBackgroundColor: "rgba(34, 202, 236, 1)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 202, 236, 1)",
            data: [],
        },
    ],
};
const RadarOptions: any = {
    scale: {
        ticks: {
            start: 0,
            min: 0,
            max: 16,
            stepSize: 20,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)",
        },
        angleLines: {
            color: "rgba(255, 255, 255, .3)",
            lineWidth: 1,
        },
        gridLines: {
            color: "rgba(255, 255, 255, .3)",
            circular: true,
        },
    },
};


type RadarChartProps = {
    data: number[];
};


export default function RadarChart({ data }: RadarChartProps) {
    const [dataRadar, setDataRadar] = useState<number[] | undefined>(undefined);



    useEffect(() => {
        if (data.length > 0) {
            setDataRadar(data)
            RadarData.datasets[0].data = data
        }
    }, [data]);


    if (!dataRadar)
        return (<div />)
    return (
        <Radar data={RadarData} options={RadarOptions} />
    );
}
