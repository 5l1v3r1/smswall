moment.lang('en', {
    months : "january_february_march_april_may_june_juli_august_september_october_november_december".split("_"),
    monthsShort : "jan._feb._mar_apr._may_jun_jul._aug_sep._oct._nov._dec.".split("_"),
    weekdays : "sundag_monday_tuesday_wednesday_thursday_friday_saturday".split("_"),
    weekdaysShort : "sun_mon_tue_wed_thu_fri_sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Today à] LT",
        nextDay: '[Tomorrow à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Yesterday à] LT',
        lastWeek: 'dddd [last à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "sec",
        m : "1 minute",
        mm : "%d minutes",
        h : "1 hour",
        hh : "%d hours",
        d : "1 day",
        dd : "%d days",
        M : "1 month",
        MM : "%d months",
        y : "1 year",
        yy : "%d years"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
