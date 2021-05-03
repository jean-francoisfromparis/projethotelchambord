// Polyfill for Element.prototype.closest (for IE 9+)
if (!Element.prototype.matches) { Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector; }
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

/**
 * @class CalendarPicker.
 * @description Provides a simple way to get a minimalistic calender in your DOM.
 */
export function CalendarPicker(element, options, date) {
    // Core variables.
    this.date = date;
    this._formatDateToInit(this.date);

    this.day = this.date.getDay()
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();

    // Storing the todays date for practical reasons.
    this.today = this.date;

    // The calendars value should always be the current date.
    this.value = this.date;

    // Ranges for the calendar (optional).
    this.min = options.min;
    this.max = options.max;
    this._formatDateToInit(this.min);
    this._formatDateToInit(this.max);

    // Element to insert calendar in.
    this.userElement = document.querySelector(element);

    // Setting current date as readable text.
    this._setDateText();

    // The elements used to build the calendar.
    this.calendarWrapper = document.createElement('div');
    this.calendarElement = document.createElement('div')
    this.calendarHeader = document.createElement('header');
    this.calendarHeaderTitle = document.createElement('h4');
    this.navigationWrapper = document.createElement('section')
    this.previousMonthArrow = document.createElement('button');
    this.nextMonthArrow = document.createElement('button');
    this.calendarGridDays = document.createElement('section')
    this.calendarGrid = document.createElement('section');
    this.calendarDayElementType = 'time';

    // Hard-coded list of all days.
    this.listOfAllDaysAsText = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ];

    // Hard-coded list of all months.
    this.listOfAllMonthsAsText = [
        'Janvier',
        'Fevrier',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ];

    // Creating the calendar
    this.calendarWrapper.classList.add('calendar-wrapper');
    this.calendarElement.classList.add('calendar');
    this.calendarGridDays.classList.add('calendar-days');
    this.calendarGrid.classList.add('calendar-grid');
    this.navigationWrapper.classList.add('navigation-wrapper');
    this.previousMonthArrow.classList.add('previous-month');
    this.nextMonthArrow.classList.add('next-month');
    // this.calendarHeader.classList.add('d-flex');

    this._insertHeaderIntoCalendarWrapper();
    this._insertCalendarGridDaysHeader();
    this._insertDaysIntoGrid();
    this._insertNavigationButtons();
    this._insertCalendarIntoWrapper();

    this.userElement.appendChild(this.calendarWrapper);
}


/**
 * @param {Number} month number, 0 based.
 * @param {Number} year, not zero based, required to account for leap years.
 * @return {Array<Date>} List with date objects for each day of the month.
 * @author Juan Mendes - 30th October 2012.
 */
CalendarPicker.prototype._getDaysInMonth = function (month, year) {
    if ((!month && month !== 0) || (!year && year !== 0)) return;

    let date = new Date(year, month, 1);
    let days = [];

    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

/**
 * @param {DateObject} date.
 * @description Sets the clock of a date to 00:00:00 to be consistent.
 */
CalendarPicker.prototype._formatDateToInit = function (date) {
    if (!date) return;
    date.setHours(0, 0, 0);
}

/**
 * @description Sets the current date as readable text in their own variables
 */
CalendarPicker.prototype._setDateText = function () {
    // Setting current date as readable text.
    let dateData = this.date.toString().split(' ');
    this.dayAsText = dateData[0];
    this.monthAsText = dateData[1];
    this.dateAsText = dateData[2];
    this.yearAsText = dateData[3];
}

/**
 * @description Inserts the calendar into the wrapper and adds eventListeners for the calender-grid.
 */
CalendarPicker.prototype._insertCalendarIntoWrapper = function () {
    this.calendarWrapper.appendChild(this.calendarElement);

    /**
     * @param {Event} event An event from an eventListener.
     */
    let handleSelectedElement = (event) => {
        if (event.target.nodeName.toLowerCase() === this.calendarDayElementType && !event.target.classList.contains('disabled')) {

            // Removes the 'selected' class from all elements that have it.
            Array.from(document.querySelectorAll('.selected')).forEach(element => element.classList.remove('selected'));

            // Adds the 'selected'-class to the selected date.
            event.target.classList.add('selected');

            this.value = event.target.value;

            // Fires the onValueChange function with the provided callback.
            this.onValueChange(this.callback);
        }
    }

    this.calendarGrid.addEventListener('click', handleSelectedElement, false);

    this.calendarGrid.addEventListener('keydown', (keyEvent) => {
        if (keyEvent.key !== 'Enter') return;

        handleSelectedElement(keyEvent);
    }, false);
}

/**
 * @description Adds the "main" calendar-header.
 */
CalendarPicker.prototype._insertHeaderIntoCalendarWrapper = function () {
    this.calendarHeaderTitle.textContent = this.listOfAllMonthsAsText[this.month] + ' - ' + this.year;
    this.calendarHeader.appendChild(this.calendarHeaderTitle);
    this.calendarWrapper.appendChild(this.calendarHeader);
}

/**
 * @description Inserts the calendar-grid header with all the weekdays.
 */
CalendarPicker.prototype._insertCalendarGridDaysHeader = function () {
    this.listOfAllDaysAsText.forEach(day => {
        let dayElement = document.createElement('span');
        dayElement.textContent = day;
        this.calendarGridDays.appendChild(dayElement);
    })

    this.calendarElement.appendChild(this.calendarGridDays);
}

/**
 * @description Adds the "Previous" and "Next" arrows on the side-navigation.
 * Also inits the click-events used to navigating.
 */
CalendarPicker.prototype._insertNavigationButtons = function () {
    // Ugly long string, but at least the svg is pretty.

    this.previousMonthArrow.innerHTML = `<i class="fas fa-caret-left"></i>`;
    this.nextMonthArrow.innerHTML = `<i class="fas fa-caret-right"></i>`;

    this.previousMonthArrow.setAttribute('aria-label', `Go to previous month`);
    this.nextMonthArrow.setAttribute('aria-label', `Go to next month`);

    this.navigationWrapper.appendChild(this.previousMonthArrow);
    this.navigationWrapper.appendChild(this.nextMonthArrow);

    // Cannot use arrow-functions for IE support :(
    let that = this;
    this.navigationWrapper.addEventListener('click', function (clickEvent) {
        if (clickEvent.target.closest(".previous-month")) {
            if (that.month === 0) {
                that.month = 11;
                that.year -= 1;
            } else {
                that.month -= 1;
            }
            that._updateCalendar();
        }

        if (clickEvent.target.closest(".next-month")) {
            if (that.month === 11) {
                that.month = 0;
                that.year += 1;
            } else {
                that.month += 1;
            }
            that._updateCalendar();
        }
    }, false)

    that.calendarHeader.appendChild(that.navigationWrapper);
}

/**
 * @description Adds all the days for current month into the calendar-grid.
 * Takes into account which day the month starts on, so that "empty/placeholder" days can be added
 * in case the month for example starts on a Thursday.
 * Also disables the days that are not within the provided.
 */
CalendarPicker.prototype._insertDaysIntoGrid = function () {
    this.calendarGrid.innerHTML = '';

    let arrayOfDays = this._getDaysInMonth(this.month, this.year);
    let firstDayOfMonth = arrayOfDays[0].getDay();

    // Converting Sunday (0 when using getDay()) to 7 to make it easier to work with.
    firstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

    if (1 < firstDayOfMonth) {
        arrayOfDays = Array(firstDayOfMonth - 1).fill(false, 0).concat(arrayOfDays);
    }

    arrayOfDays.forEach(date => {
        let dateElement = document.createElement(date ? this.calendarDayElementType : 'span');
        let Date = date.toString().split(' ')[2];

        let dateIsTheCurrentValue = this.value.toString() === date.toString();
        if (dateIsTheCurrentValue) this.activeDateElement = dateElement;

        let dateIsBetweenAllowedRange = (this.min || this.max) && (date.toString() !== this.today.toString() && (date < this.min || date > this.max))
        if (dateIsBetweenAllowedRange) {
            dateElement.classList.add('disabled');
        } else {
            dateElement.tabIndex = 0;
            dateElement.value = date;
        }

        dateElement.textContent = date ? Date : '';
        this.calendarGrid.appendChild(dateElement);
    })

    this.calendarElement.appendChild(this.calendarGrid);
    this.activeDateElement.classList.add('selected');
}

/**
 * @description Updates the core-values for the calendar based on the new month and year
 * given by the navigation. Also updates the UI with the new values.
 */
CalendarPicker.prototype._updateCalendar = function () {
    this.date = new Date(this.year, this.month);

    this._setDateText();

    this.day = this.date.getDay();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();

    // Cannot use arrow-functions for IE support :(
    let that = this;
    window.requestAnimationFrame(function () {
        that.calendarHeaderTitle.textContent = that.listOfAllMonthsAsText[that.month] + ' - ' + that.year;
        that._insertDaysIntoGrid();
    })
}

/**
 * @param {Function} callback
 * @description A "listener" that lets the user do something everytime the value changes.
 */
CalendarPicker.prototype.onValueChange = function (callback) {
    if (this.callback) return this.callback(this.value);
    this.callback = callback;
}

