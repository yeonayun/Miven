// 스크롤 이벤트를 감지하여 이미지를 나타내는 함수
let isFirstScroll = true; // 첫 번째 스크롤 여부를 나타내는 변수

function revealImages() {
    const image1 = document.getElementById('num11');
    const image2 = document.getElementById('num12');
    const image3 = document.getElementById('num13');
    const image4 = document.getElementById('num14');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const image1Top = image1.getBoundingClientRect().top + scrollY;
    const image2Top = image2.getBoundingClientRect().top + scrollY;
    const image3Top = image3.getBoundingClientRect().top + scrollY;
    const image4Top = image4.getBoundingClientRect().top + scrollY;

    // num11이 화면에 나타나는 경우
    if (scrollY > image1Top - windowHeight + 100 && isFirstScroll) {
        image1.style.opacity = '1'; // 투명도를 1로 변경하여 보이게 함
        image1.style.animation = 'floatUp 0.3s ease-in-out forwards'; // floatUp 애니메이션 적용
        isFirstScroll = false; // 첫 번째 스크롤이 끝났으므로 isFirstScroll 값을 false로 변경
    }

    // num11이 화면에 나타나고, 두 번째 스크롤인 경우
    if (scrollY > image1Top - windowHeight + 100 && !isFirstScroll && !image2.classList.contains('revealed')) {
        image2.style.opacity = '1'; // 투명도를 1로 변경하여 보이게 함
        image2.style.animation = 'floatUp 0.3s ease-in-out forwards'; // floatUp 애니메이션 적용
        image2.classList.add('revealed'); // 이미지가 나타났음을 표시
    }

    // num12가 화면에 나타나고, 세 번째 스크롤인 경우
    if (scrollY > image2Top - windowHeight + 100 && image2.style.opacity === '1' && !image3.classList.contains('revealed')) {
        image3.style.opacity = '1'; // 투명도를 1로 변경하여 보이게 함
        image3.style.animation = 'floatUp 0.3s ease-in-out forwards'; // floatUp 애니메이션 적용
        image3.classList.add('revealed'); // 이미지가 나타났음을 표시
    }

    // num13이 화면에 나타나고, 네 번째 스크롤인 경우
    if (scrollY > image3Top - windowHeight + 100 && image3.style.opacity === '1' && !image4.classList.contains('revealed')) {
        image4.style.opacity = '1'; // 투명도를 1로 변경하여 보이게 함
        image4.style.animation = 'floatUp 0.3s ease-in-out forwards'; // floatUp 애니메이션 적용
        image4.classList.add('revealed'); // 이미지가 나타났음을 표시
    }
}

// 초기에는 이미지들을 안 보이게 설정
document.getElementById('num11').style.opacity = '0';
document.getElementById('num12').style.opacity = '0';
document.getElementById('num13').style.opacity = '0';
document.getElementById('num14').style.opacity = '0';

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', revealImages);

