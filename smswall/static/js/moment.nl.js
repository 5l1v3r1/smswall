moment.lang('nl', {
    months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort : "jan._feb._mrt_apr._mei_jun_jul._aug_sep._oct._nov._de�c.".split("_"),
    weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort : "zon._ma._di._woe._don._vr._zat.".split("_"),
    weekdaysMin : "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Vandaag à] LT",
        nextDay: '[Morgen à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Gisteren à] LT',
        lastWeek: 'dddd [vorige à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s geleden",
        s : "sec",
        m : "1 minuut",
        mm : "%d minuten",
        h : "1 uur",
        hh : "%d uren",
        d : "1 dag",
        dd : "%d dagen",
        M : "1 maand",
        MM : "%d maanden",
        y : "1 jaar",
        yy : "%d jaren"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
