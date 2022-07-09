// Block text one
function myFunction_one() {
  var copyText = document.getElementById("myInput_one");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_one");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_one() {
  var tooltip = document.getElementById("myTooltip_one");
  tooltip.innerHTML = "Copy text";}


    
// Block text two
function myFunction_two() {
  var copyText = document.getElementById("myInput_two");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_two");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_two() {
  var tooltip = document.getElementById("myTooltip_two");
  tooltip.innerHTML = "Copy link";}



// Block text three
function myFunction_three() {
  var copyText = document.getElementById("myInput_three");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_three");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_three() {
  var tooltip = document.getElementById("myTooltip_three");
  tooltip.innerHTML = "Copy text";}



// Block text four
function myFunction_four() {
  var copyText = document.getElementById("myInput_four");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_four");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_four() {
  var tooltip = document.getElementById("myTooltip_four");
  tooltip.innerHTML = "Copy link";}



// Block text five
function myFunction_five() {
  var copyText = document.getElementById("myInput_five");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_five");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_five() {
  var tooltip = document.getElementById("myTooltip_five");
  tooltip.innerHTML = "Copy text";}



// Block text six
function myFunction_six() {
  var copyText = document.getElementById("myInput_six");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip_six");
  tooltip.innerHTML = "Copied to clipboard";}

function outFunc_six() {
  var tooltip = document.getElementById("myTooltip_six");
  tooltip.innerHTML = "Copy link";}



// Switch language
let eng = {
  lorem: '<p><b>About me:</b><br><br> I am currently studying computer science at an educational institution that specializes in technical programming. <br><br> Participated in small projects such as: VTosters (Tester) / VKNext (Tester) / InstaNext (Advisor) / VaiNote (Advisor). <br><br> Technologies I have worked with over the past year: HTML, CSS, JavaScript, C++, Python, Java, SQL. <br><br> I am engaged in the creation of one-page websites in a designer style. And I also use other creative services.</p>',
  ipsum: '<p><b>My social networks: </b><br><br> Telegram: <a href="https://t.me/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> GitHub: <a href="https://github.com/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Dribbble: <a href="https://dribbble.com/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Figma: <a href="https://www.figma.com/@eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Mail: <a href="mailto:e.viktorovvv@gmail.com" target="_blank">e.viktorovvv@gmail.com</a><br><br><br> Resume: <a href="index/Resume.pdf" target="_blank">Resume.pdf</a></p>',
  dolor: '<p><b>My projects:</b><br><br> Creation of one-page sites in designer style with "taplink" schematics.<br><br> Completely handmade in terms of graphics and code.<br> Compared to "taplink", you will have a unique design that will stand out from the rest.<br><br> You can order a project just by contacting me.<br> You can see my work at the links below:<br><br> <a href="index/works/Caten/index.html" target="_blank" tabindex="0">• Caten</a><br><br> <a href="index/works/Matter/index.html" target="_blank" tabindex="0">• Matter</a><br><br> <a href="index/works/Micfe/index.html" target="_blank" tabindex="0" >• Micfe</a> </p>',
  amet_may: '<p>May 1, 2022</p>',
  amet_june: '<p>June 29, 2022</p>',
  amet_july: '<p>July 1, 2022</p>',
  amet_edit: '<i><p>edited </i>15:11</p>',
  elitL: "Light",
  elitD: "Dark",
  eiusmod_text: "Copy text",
  tempor_link: "Copy link",
  reserv: "<p>© Network Profile 2022 <br>All Rights Reserved</p>",
};

let rus = {
  lorem: '<p><b>Обо мне:</b><br><br> В настоящее время я изучаю информатику в учебном заведении, которое специализируется на техническом программировании. <br><br> Участвовал в небольших проектах таких как: VTosters (Тестер) / VKNext (Тестер) / InstaNext (Советник) / VaiNote (Советник). <br><br> Технологии, с которыми я работал за последний год: HTML, CSS, JavaScript, C++, Python, Java, SQL. <br><br> Занимаюсь созданием одностраничных сайтов в дизайнерском стиле. А так же использую и другие творческие сервисы.</p>',
  ipsum: '<p><b>Мои социальные сети: </b><br><br> Telegram: <a href="https://t.me/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> GitHub: <a href="https://github.com/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Dribbble: <a href="https://dribbble.com/eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Figma: <a href="https://www.figma.com/@eugeneviktorov" target="_blank">@eugeneviktorov</a><br><br> Почта: <a href="mailto:e.viktorovvv@gmail.com" target="_blank">e.viktorovvv@gmail.com</a><br><br><br> Резюме: <a href="index/Resume.pdf" target="_blank">Resume.pdf</a></p>',
  dolor: '<p><b>Мои проекты:</b><br><br> Создание одностраничных сайтов в дизайнерском стиле со схематикой "taplink".<br><br> Полностью ручная работа с точки зрения графики и кода.<br> По сравнению с "taplink", у вас будет уникальный дизайн, который будет выделяться на фоне остальных.<br><br> Вы можете заказать проект, просто связавшись со мной.<br> Мои работы по ссылкам ниже:<br><br> <a href="index/works/Caten/index.html" target="_blank" tabindex="0">• Caten</a><br><br> <a href="index/works/Matter/index.html" target="_blank" tabindex="0">• Matter</a><br><br> <a href="index/works/Micfe/index.html" target="_blank" tabindex="0" >• Micfe</a></p>',
  amet_may: '<p>Май 1, 2022</p>',
  amet_june: '<p>Июнь 29, 2022</p>',
  amet_july: '<p>Июль 1, 2022</p>',
  amet_edit: '<i><p>изменено </i>15:11</p>',
  elitL: "Светлая",
  elitD: "Тёмная",
  eiusmod_text: "Copy text",
  tempor_link: "Copy link",
  reserv: "<p>© Network Profile 2022 <br>Все Права Защищены</p>",
};

changeLagnuage();
function changeLagnuage(){
  let language = lang.checked ?  rus : eng;
  document.querySelectorAll('[text]').forEach(el => {el.innerHTML = language[el.getAttribute('text')];})}



// Theme System
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
  document.body.classList.add('dark-theme');}

else {
  document.body.classList.remove('dark-theme');}



// Dark theme Button
const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {document.body.classList.toggle("dark-theme");});



// Switch theme
changeTheme();
function changeTheme(){
  let language = theme.checked ? darks : lights;
  document.querySelectorAll('[text]').forEach(el => {el.innerHTML = themes[el.getAttribute('text')];})}