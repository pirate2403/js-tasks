function School(name, minYears) {
    // осуществлен перевод в arrow function
    // используется camelCase
    // так как снаружи вызывается только метод WELCOME убрал this чтобы не было доступа снаружи
    minYears = parseInt(minYears);
    schoolName = name.trim();
    // добавил методы(parseInt, trim) при присвоении переменных, убрал контекст, т.к переменнтые используются внутри функции
    if (!schoolName) {
        throw Error("Не указано название школы");
    }
    if (!minYears) {
        throw Error("Не указано минимальное количество лет");
    }
    // убрал лишние проверки
    checkAge = (age) => {
        if (age < minYears) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${minYears} лет или больше`
            };
        } else if (age >= minYears) {
            return {
                result: true,
                message: `Добро пожаловать в автошколу "${schoolName}"!`
            };
        }
    };
    //используются переменные без this, исправлена интерпаляция и второй блок else if
    getTeacherList = [
        "А. С. Иванов",
        "В. С. Петров",
        "И. А. Сидоров"
    ]
    // заменил return OBJ на ARR, так как используется в след методе LENGTH
    getTeacher = (id) => {
        if (!id) { id = Math.floor(Math.random() * getTeacherList.length); }
        return getTeacherList[id];
    };
    // если не задавать id в ручную, то id сгенерируется автоматом

    //дописана функция попроверке введенных данных
    checkValue = (val, promptMes) => {
        let data = String(val);
        data = data ? data : prompt(promptMes);
        let count = 0;

        if (data === null) {
            return;
        }

        while (!data || !data.trim() || data === NaN) {
            alert('Вы не ввели данные, повторите ввод!');
            data = prompt(promptMes);
            count++
            if (count === 1) {
                return
            }
        }
        return data;
    }

    this.welcome = (name, years) => {
        const schoolAddress = 'Санкт-Петербург, ул. Пушкина, дом 23';
        const teacherName = getTeacher();

        let persone = checkValue(name, 'Как вас зовут?');
        if (!persone) {
            alert('Вы не указали имя. Попробуйте начать сначала.');
            return;
        }

        let personeYear = checkValue(years, 'Укажите ваш возраст')// prompt       
        if (!personeYear) {
            alert('Вы не указали возраст. Попробуйте начать сначала.');
            return;
        }

        if (checkAge(personeYear).result) {
            alert(`Добро пожаловать в автошколу "${schoolName}", ${persone} \nВаш преподаватель: ${teacherName} \nЖдём вас по адресу: ${schoolAddress}`);
        } else if (!checkAge(personeYear).result) {
            return alert(`Уважаемый ${persone}, ${checkAge(personeYear).message}`);
        }
        // Убрал лишний alert и return
    };
    // Убрал retutn
}

const autoSchool = new School('Parus', 18);

// autoSchool.welcome();
// autoSchool.welcome("Тест");
// autoSchool.welcome("", 15);
// autoSchool.welcome("Тест", 16);
// autoSchool.welcome("Тест", 18);



// было призведено более 15 изменений


