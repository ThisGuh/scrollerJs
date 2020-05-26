document.addEventListener('DOMContentLoaded', () => {

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
    let isThrottled = false;

    document.addEventListener('mousewheel', (event) => {
        if (isThrottled) return;
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 500);

        const direction = event.wheelDelta < 0 ? 1 : -1;

        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;

        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }
        currentSectionIndex += direction;

        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    })

})
