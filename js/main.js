//비주얼배너
const mainBanner1 = () => {
    const $bannerli = getAll('#mainVisual .mainBanner li');
    const $prev = get('#mainVisual .prev');
    const $next = get('#mainVisual .next');

    let current = 0, //현재번호
        old = 0, // 과거 - 이미 끝난번호
        size = 100, // 100% 처리
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        banner();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        banner();
    });

    //공통
    const banner = () => {
        // 현재는 0의 위치로
        $bannerli[current].style.left = `0px`;
        $bannerli[current].style.zIndex = 10;
        $bannerli[current].classList.add('on');
        // 과거는 -100%로 이동하기
        $bannerli[old].style.left = `-${size}%`;
        $bannerli[old].style.zIndex = 1;
        $bannerli[old].classList.remove('on');

        lastBanner(old);
        old = current; //이미끝난 배너는 과거로 설정
    };

    const lastBanner = (z) => {
        setTimeout(() => {
            // 맨 앞으로 이동
            $bannerli[z].style.left = `${size}%`;
        }, 400); // transition 시간동일
    };
};
const mainBanner = () => {
    const $bannerli = getAll('#mainVisual .mainBanner li');
    const $prev = get('#mainVisual .prev');
    const $next = get('#mainVisual .next');

    let current = 0, //현재번호
        old = 0, // 과거 - 이미 끝난번호
        size = 100, // 100% 처리
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        // banner(true);
        banner('next');
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        // banner(false);
        banner('prev');
    });

    //공통
    const banner = (txt) => {
        const num = txt === 'next' ? size : -size;
        $bannerli[current].style.transition = '0s';
        // 순간이동
        $bannerli[current].style.left = `${num}%`;
        setTimeout(() => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.left = `0px`;
            $bannerli[current].style.zIndex = 10;
            $bannerli[current].classList.add('on');

            $bannerli[old].style.left = `${num * -1}%`;
            $bannerli[old].style.zIndex = 1;
            $bannerli[old].classList.remove('on');

            old = current; //이미끝난 배너는 과거로 설정
        }, 20); // transition 시간동일
    };

    const lastBanner = (z) => {};
};

//이벤트배너
const eventBanner = () => {};

const sectionPage1 = () => {
    const $con0 = get('#mainVisual');
    const $con1 = get('.main .con1');
    const $con2 = get('.main .con2');
    const $con3 = get('.main .con3');
    const $con4 = get('.main .con4');
    const $menulis = getAll('.menu li');
    // console.log($con3.offsetTop);
    // ㄴ con별로 top 위치값 확인
    let ty = 0;

    $menulis[0].addEventListener('click', (e) => {
        ty = $con0.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[1].addEventListener('click', (e) => {
        ty = $con1.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[2].addEventListener('click', (e) => {
        ty = $con2.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[3].addEventListener('click', (e) => {
        ty = $con3.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[4].addEventListener('click', (e) => {
        ty = $con4.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
};

const sectionPage2 = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    // console.log($cons[0].offsetTop);

    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    // console.log(posY);
    // ㄴ posY 배열을 만들어서 각각의 con별 탑위치 넣어줌

    const $menulis = getAll('.menu li');
    // console.log($con3.offsetTop);
    // ㄴ con별로 top 위치값 확인

    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
            // e.currentTarget.classList.add('on');
        });
    });
};

const menuBar1 = () => {
    const $menu = get('.menu');
    const $menulis = getAll('.menu li');
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');

    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });

    let ty = 0;

    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });

    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;

        if (ty >= posY[0]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[0].classList.add('on');
        }
        if (ty >= posY[1]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[1].classList.add('on');
        }
        if (ty >= posY[2]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[2].classList.add('on');
        }
        if (ty >= posY[3]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[3].classList.add('on');
        }
        if (ty >= posY[4]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[4].classList.add('on');
        }

        if (ty > 600) {
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

const menuBar = () => {
    const $menu = get('.menu');
    const $menulis = getAll('.menu li');
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');

    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    posY[posY.length - 1] = posY[posY.length - 1] - 300;

    let ty = 0;

    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            // $menulis.forEach((item) => item.classList.remove('on'));
            // itemLi.classList.add('on');
            // ㄴ 아래 효과랑 겹쳐서 툭툭 튕긴다??@@
        });
    });

    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }

        if (ty > 600) {
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
    // sectionPage();
};

(() => {
    mainInit();
})();
