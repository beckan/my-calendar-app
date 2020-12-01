import dayjs from "dayjs";

const getDatesInWeek = (startDate: dayjs.ConfigType) => {
    const dates: dayjs.ConfigType[] = [];

    for (let i = 0; i < 7; i++) {
        if (dayjs.isDayjs(startDate)) {
            dates.push(startDate.add(i, 'day'));
        }
    }
    return dates;
}

export default getDatesInWeek;