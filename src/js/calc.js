const places = document.querySelectorAll('[data-name]');

const containersType = document.querySelectorAll(
  '.calc__containers-list input[type=radio]'
);

let place;

const getPlace = (places, item) => {
  places.forEach((place) => {
    if (place.classList.contains('is-active')) {
      place.classList.remove('is-active');
    }
  });

  item.classList.add('is-active');
  place = parseInt(item.getAttribute('data-value'));

  // console.log(typeof place);
  // return place;
};

const loaderField = document.querySelector('#loading');

const calculateResult = () => {
  let finalPrice = 0;

  const place = document
    .querySelector('.is-active[data-value]')
    .getAttribute('data-value');

  const loaderPrice = document.querySelector(
    '.calc__containers-list input[type=radio]'
  );

  const loadingText = document.querySelector('.calc__final-loading span');

  if (loaderField.checked !== false) {
    loadingText.innerHTML = 'Есть';
    finalPrice =
      parseInt(place) + parseInt(loaderPrice.getAttribute('data-loader'));
  } else {
    loadingText.innerHTML = 'Нет';
    finalPrice = parseInt(place);
  }

  // finalPrice = parseInt(place) + parseInt(loaderPrice);

  console.log(finalPrice);
  document.querySelector('.calc__final-price span').innerHTML =
    String(finalPrice).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + ' руб.';
};

const select = document.getElementById('garbage-type');

const constructionContainers = document.querySelectorAll('[data-construction]');
const householdContainers = document.querySelectorAll('[data-household]');
const industrialContainers = document.querySelectorAll('[data-industrial]');
const snowContainers = document.querySelectorAll('[data-snow]');

const hideElements = (elements) => {
  elements.forEach((element) => {
    element.style.display = 'none';
  });
};

const showElements = (elements) => {
  elements.forEach((element) => {
    element.style.display = 'flex';
  });
};

const getGarbageType = () => {
  if (select.value === 'construction') {
    console.log('Строительный');
    hideElements(householdContainers);
    hideElements(industrialContainers);
    hideElements(snowContainers);
    showElements(constructionContainers);
    calculateResult();
  } else if (select.value === 'household') {
    console.log('Бытовой');
    hideElements(constructionContainers);
    hideElements(industrialContainers);
    hideElements(snowContainers);
    showElements(householdContainers);
    calculateResult();
  } else {
    console.log('Промышленный');
    hideElements(constructionContainers);
    hideElements(householdContainers);
    hideElements(snowContainers);
    showElements(industrialContainers);
    calculateResult();
  }
};

const selectService = document.getElementById('type');

const getService = () => {
  if (selectService.value === 'garbage') {
    document.querySelector('.calc__checkbox').style.opacity = '1';
    select.style.pointerEvents = 'all';
    select.style.opacity = '1';
    getGarbageType();
  } else if (selectService.value === 'snow') {
    select.style.pointerEvents = 'none';
    select.style.opacity = '0.5';
    loaderField.checked = false;
    document.querySelector('.calc__checkbox').style.opacity = '0';
    hideElements(constructionContainers);
    hideElements(householdContainers);
    hideElements(industrialContainers);
    showElements(snowContainers);
    calculateResult();
  }
};

getService();
selectService.addEventListener('change', () => {
  getService();
  getGarbageType();
});

getGarbageType();
select.addEventListener('change', getGarbageType);

const currentMskPlace = document.querySelectorAll(
  '[data-name=САО], [data-name=СВАО], [data-name=ВАО], [data-name=ЗАО], [data-name=ЦАО]'
);

const southMskPlace = document.querySelectorAll(
  '[data-name=ЮВАО], [data-name=ЮАО],[data-name=ЮЗАО],[data-name=СЗАО]'
);

const citiesCurrentPrice = document.querySelectorAll(
  '.city-list li[data-areabase]'
);

const citiesHigherPrice = document.querySelectorAll(
  '.city-list li[data-areahigher]'
);

const selectContainerType = (container) => {
  const currentPrice = container.getAttribute('value');
  const currentPriceMsk = container.getAttribute('data-moscow');
  const currentPriceMskSouth = container.getAttribute('data-south');
  const currentPriceMskArea = container.getAttribute('data-undermos');
  const currentLoader = container.getAttribute('data-loader');

  currentMskPlace.forEach((item) => {
    item.setAttribute('data-value', currentPriceMsk);
  });
  southMskPlace.forEach((item) => {
    item.setAttribute('data-value', currentPriceMskSouth);
  });
  citiesCurrentPrice.forEach((item) => {
    item.setAttribute('data-value', currentPriceMskSouth);
  });
  citiesHigherPrice.forEach((item) => {
    item.setAttribute('data-value', currentPriceMskArea);
  });
};

containersType.forEach((item) => {
  item.addEventListener('change', () => {
    loaderField.checked = false;
    console.log(item.getAttribute('data-type'));
    selectContainerType(item);
    calculateResult();
  });
});

places.forEach((item) => {
  item.addEventListener('click', (e) => {
    getPlace(places, item);
    calculateResult();
  });
});

loaderField.addEventListener('change', calculateResult);
