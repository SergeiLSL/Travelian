/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
// function initSliders() {
// 	// Перечень слайдеров
// 	// Проверяем, есть ли слайдер на стронице
// 	if (document.querySelector('.main-slider__slider')) { // Указываем скласс нужного слайдера
// 		// Создаем слайдер
// 		new Swiper('.main-slider__slider', { // Указываем скласс нужного слайдера
// 			// Подключаем модули слайдера
// 			// для конкретного случая
// 			modules: [Navigation],
// 			observer: true,
// 			observeParents: true,
// 			//slidesPerView: 3.5,
// 			spaceBetween: 32,
// 			autoHeight: true,
// 			speed: 800,

// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			loop: true,
// 			//preloadImages: false,
// 			lazy: true,
// 			grabCursor: true,

// 			/*
// 			// Эффекты
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
// 			*/

// 			// Пагинация

// 			pagination: {
// 				el: '.swiper-pagination',
// 				clickable: true,
// 			},


// 			// Скроллбар
// 			/*
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 				draggable: true,
// 			},
// 			*/

// 			// Кнопки "влево/вправо"
// 			navigation: {
// 				prevEl: '.swiper-button-prev',
// 				nextEl: '.swiper-button-next',
// 			},

// 			// Брейкпоинты
			
// 			breakpoints: {
// 				// 320: {
// 				// 	slidesPerView: 1,
// 				// 	spaceBetween: 5,
// 				// 	autoHeight: true,
// 				// },
// 				// 530: {
// 				// 	slidesPerView: 2,
// 				// 	spaceBetween: 20,
// 				// 	autoHeight: true,
// 				// },
// 				// 768: {
// 				// 	slidesPerView: 3,
// 				// 	spaceBetween: 20,
// 				// },
// 				// 992: {
// 				// 	slidesPerView: 3.5,
// 				// 	spaceBetween: 20,
// 				// },
// 				// 1268: {
// 				// 	slidesPerView: 3.5,
// 				// 	spaceBetween: 32,
// 				// },
// 			},
			
// 			// События
// 			on: {

// 			}
// 		});
// 	}
// }
// // Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

// window.addEventListener("load", function (e) {
// 	// Запуск инициализации слайдеров
// 	initSliders();
// 	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
// 	//initSlidersScroll();
// });

//========================================================================================================================================================
// ! Инициализация слайдерa destinations__slider
function initSlidersDestinations() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.destinations__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.destinations__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			//direction: 'vertical',
			slidesPerView: 3,
			spaceBetween: 32,
			autoHeight: true,
			speed: 800,
			loop: true,
			grabCursor: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.destinations-button-left',
				nextEl: '.destinations-button-right'
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 5,
					autoHeight: true,
				},
				530: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 20,
					autoHeight: true,
				},
				1152: {
					slidesPerView: 2.7,
					spaceBetween: 32,
					autoHeight: true,
				},
				1440: {
					slidesPerView: 3.35,
					spaceBetween: 32,
					autoHeight: true,
				},
			},
			// События
			on: {
			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSlidersDestinations();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

//========================================================================================================================================================
// ! Инициализация слайдерa experiences__slider
function initSlidersExperiences() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.experiences__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.experiences__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			//direction: 'vertical',
			slidesPerView: 2.25,
			spaceBetween: 32,
			autoHeight: true,
			speed: 800,
			loop: true,
			grabCursor: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.experiences-button-left',
				nextEl: '.experiences-button-right'
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 5,
					autoHeight: true,
				},
				530: {
					slidesPerView: 1.5,
					spaceBetween: 10,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2.17,
					spaceBetween: 20,
					autoHeight: true,
				},
				1152: {
					slidesPerView: 2.4,
					spaceBetween: 32,
					autoHeight: true,
				},
				1440: {
					slidesPerView: 2.5,
					spaceBetween: 32,
					autoHeight: true,
				},
			},
			// События
			on: {
			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSlidersExperiences();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

//========================================================================================================================================================

//========================================================================================================================================================
// ! Инициализация слайдерa offer__slider
function initSlidersOffer() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.offer__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.offer__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			//direction: 'vertical',
			slidesPerView: 3,
			spaceBetween: 32,
			autoHeight: true,
			speed: 800,
			loop: true,
			grabCursor: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.offer-button-left',
				nextEl: '.offer-button-right'
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 5,
					autoHeight: true,
				},
				530: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				1152: {
					slidesPerView: 3,
					spaceBetween: 32,
					autoHeight: true,
				},
			},
			// События
			on: {
			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSlidersOffer();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
//========================================================================================================================================================
