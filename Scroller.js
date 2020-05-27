class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('.section');
        const sectionArr = [...this.sections];
        const currentSectionIndex = sectionArr.findIndex(this.isScrolledIntoView);
        this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
        this.isThrottled = false;

        this.isScrolledIntoView(this.sections[0]);
    }

    isScrolledIntoView = (element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = Math.floor(rect.bottom);

        const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);

        return isVisible;
    }

    listenScroll = (event) => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false;
        }, 500);

        const direction = event.wheelDelta < 0 ? 1 : -1;

        this.scroll(direction);
    }
    scroll = (direction) => {
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;

        } else if (direction === -1) {
            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;
        }
        this.currentSectionIndex += direction;

        this.scrollToCurrentSection();
    }

    scrollToCurrentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

}