// Mobile App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile App Loaded');

    // 스플래시 화면 처리
    const splashScreen = document.getElementById('splashScreen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 800);
    }, 3000);

    // 뷰포트 높이 보정 (모바일 브라우저 주소창 고려)
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // 스크롤 애니메이션
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll(
        '.concern-content, .point-header, .process-title, ' +
        '.package-section, .final-message-title, .final-message-desc, .final-image, .final-cta-button, ' +
        '.point-item, .step-card, .package-card'
    );

    animateElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // 이미지 로드 에러 처리
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.error('Image failed to load:', this.src);
        });
    });

    // 플로팅 카카오 버튼 스크롤 제어 (IntersectionObserver 사용)
    const floatingKakaoBtn = document.querySelector('.floating-kakao-btn');
    const finalMessageSection = document.querySelector('.final-message-section');

    if (floatingKakaoBtn && finalMessageSection) {
        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // final-message-section이 화면에 보이기 시작하면 플로팅 버튼 숨기기
                if (entry.isIntersecting) {
                    floatingKakaoBtn.classList.add('hidden');
                } else {
                    floatingKakaoBtn.classList.remove('hidden');
                }
            });
        }, {
            root: null,
            threshold: 0,
            rootMargin: '0px'
        });

        buttonObserver.observe(finalMessageSection);
    }
});

// 유틸리티 함수들
const utils = {
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    },

    isAndroid() {
        return /Android/.test(navigator.userAgent);
    },

    vibrate(duration = 50) {
        if ('vibrate' in navigator) {
            navigator.vibrate(duration);
        }
    }
};

window.appUtils = utils;