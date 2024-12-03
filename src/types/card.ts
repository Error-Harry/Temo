export interface CardProps {
    title: string;
    content: string;
    icon: string;
}

export interface DonutProps {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        hoverBackgroundColor: string[];
    }[];
}

export interface LineDataProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        backgroundColor: string;
        borderColor: string;
        tension: number;
    }[];
}

export interface GraphCardProps {
    title: string;
    doughnutData: DonutProps;
    lineData: LineDataProps;
}