const flags = {
  "World": [], 
  "Asia": [
    { "name": "Japan 日本", "image": "https://flagcdn.com/w320/jp.png" },
    { "name": "China 中國", "image": "https://flagcdn.com/w320/cn.png" },
    { "name": "India 印度", "image": "https://flagcdn.com/w320/in.png" },
    { "name": "South Korea 韓國", "image": "https://flagcdn.com/w320/kr.png" },
    { "name": "Indonesia 印尼", "image": "https://flagcdn.com/w320/id.png" },
    { "name": "Afghanistan 阿富汗", "image": "https://flagcdn.com/w320/af.png" },
    { "name": "Armenia 亞美尼亞", "image": "https://flagcdn.com/w320/am.png" },
    { "name": "Azerbaijan 阿塞拜疆", "image": "https://flagcdn.com/w320/az.png" },
    { "name": "Bahrain 巴林", "image": "https://flagcdn.com/w320/bh.png" },
    { "name": "Bangladesh 孟加拉", "image": "https://flagcdn.com/w320/bd.png" },
    { "name": "Bhutan 不丹", "image": "https://flagcdn.com/w320/bt.png" },
    { "name": "Brunei 汶萊", "image": "https://flagcdn.com/w320/bn.png" },
    { "name": "Cambodia 柬埔寨", "image": "https://flagcdn.com/w320/kh.png" },
    { "name": "Georgia 喬治亞", "image": "https://flagcdn.com/w320/ge.png" },
    { "name": "Iran 伊朗", "image": "https://flagcdn.com/w320/ir.png" },
    { "name": "Iraq 伊拉克", "image": "https://flagcdn.com/w320/iq.png" },
    { "name": "Israel 以色列", "image": "https://flagcdn.com/w320/il.png" },
    { "name": "Jordan 約旦", "image": "https://flagcdn.com/w320/jo.png" },
    { "name": "Kazakhstan 哈薩克", "image": "https://flagcdn.com/w320/kz.png" },
    { "name": "Kuwait 科威特", "image": "https://flagcdn.com/w320/kw.png" },
    { "name": "Kyrgyzstan 吉爾吉斯", "image": "https://flagcdn.com/w320/kg.png" },
    { "name": "Laos 寮國", "image": "https://flagcdn.com/w320/la.png" },
    { "name": "Lebanon 黎巴嫩", "image": "https://flagcdn.com/w320/lb.png" },
    { "name": "Malaysia 馬來西亞", "image": "https://flagcdn.com/w320/my.png" },
    { "name": "Maldives 馬爾地夫", "image": "https://flagcdn.com/w320/mv.png" },
    { "name": "Mongolia 蒙古", "image": "https://flagcdn.com/w320/mn.png" },
    { "name": "Myanmar 緬甸", "image": "https://flagcdn.com/w320/mm.png" },
    { "name": "Nepal 尼泊爾", "image": "https://flagcdn.com/w320/np.png" },
    { "name": "North Korea 北韓", "image": "https://flagcdn.com/w320/kp.png" },
    { "name": "Oman 阿曼", "image": "https://flagcdn.com/w320/om.png" },
    { "name": "Pakistan 巴基斯坦", "image": "https://flagcdn.com/w320/pk.png" },
    { "name": "Palestine 巴勒斯坦", "image": "https://flagcdn.com/w320/ps.png" },
    { "name": "Philippines 菲律賓", "image": "https://flagcdn.com/w320/ph.png" },
    { "name": "Qatar 卡達", "image": "https://flagcdn.com/w320/qa.png" },
    { "name": "Saudi Arabia 沙烏地阿拉伯", "image": "https://flagcdn.com/w320/sa.png" },
    { "name": "Singapore 新加坡", "image": "https://flagcdn.com/w320/sg.png" },
    { "name": "Sri Lanka 斯里蘭卡", "image": "https://flagcdn.com/w320/lk.png" },
    { "name": "Syria 敘利亞", "image": "https://flagcdn.com/w320/sy.png" },
    { "name": "Tajikistan 塔吉克", "image": "https://flagcdn.com/w320/tj.png" },
    { "name": "Thailand 泰國", "image": "https://flagcdn.com/w320/th.png" },
    { "name": "Timor-Leste 東帝汶", "image": "https://flagcdn.com/w320/tl.png" },
    { "name": "Turkey 土耳其", "image": "https://flagcdn.com/w320/tr.png" },
    { "name": "Turkmenistan 土庫曼", "image": "https://flagcdn.com/w320/tm.png" },
    { "name": "United Arab Emirates 阿拉伯聯合大公國", "image": "https://flagcdn.com/w320/ae.png" },
    { "name": "Uzbekistan 烏茲別克", "image": "https://flagcdn.com/w320/uz.png" },
    { "name": "Vietnam 越南", "image": "https://flagcdn.com/w320/vn.png" },
    { "name": "Taiwan 台灣", "image": "https://flagcdn.com/w320/tw.png" },
    { "name": "Yemen 葉門", "image": "https://flagcdn.com/w320/ye.png" }
  ],
  "Americas": [
    { "name": "United States 美國", "image": "https://flagcdn.com/w320/us.png" },
    { "name": "Canada 加拿大", "image": "https://flagcdn.com/w320/ca.png" },
    { "name": "Brazil 巴西", "image": "https://flagcdn.com/w320/br.png" },
    { "name": "Mexico 墨西哥", "image": "https://flagcdn.com/w320/mx.png" },
    { "name": "Argentina 阿根廷", "image": "https://flagcdn.com/w320/ar.png" },
    { "name": "Colombia 哥倫比亞", "image": "https://flagcdn.com/w320/co.png" },
    { "name": "Chile 智利", "image": "https://flagcdn.com/w320/cl.png" },
    { "name": "Peru 秘魯", "image": "https://flagcdn.com/w320/pe.png" },
    { "name": "Venezuela 委內瑞拉", "image": "https://flagcdn.com/w320/ve.png" },
    { "name": "Ecuador 厄瓜多", "image": "https://flagcdn.com/w320/ec.png" },
    { "name": "Bolivia 玻利維亞", "image": "https://flagcdn.com/w320/bo.png" },
    { "name": "Paraguay 巴拉圭", "image": "https://flagcdn.com/w320/py.png" },
    { "name": "Uruguay 烏拉圭", "image": "https://flagcdn.com/w320/uy.png" },
    { "name": "Guyana 蓋亞那", "image": "https://flagcdn.com/w320/gy.png" },
    { "name": "Suriname 蘇利南", "image": "https://flagcdn.com/w320/sr.png" },
    { "name": "Belize 貝里斯", "image": "https://flagcdn.com/w320/bz.png" },
    { "name": "Costa Rica 哥斯大黎加", "image": "https://flagcdn.com/w320/cr.png" },
    { "name": "El Salvador 薩爾瓦多", "image": "https://flagcdn.com/w320/sv.png" },
    { "name": "Guatemala 瓜地馬拉", "image": "https://flagcdn.com/w320/gt.png" },
    { "name": "Honduras 洪都拉斯", "image": "https://flagcdn.com/w320/hn.png" },
    { "name": "Nicaragua 尼加拉瓜", "image": "https://flagcdn.com/w320/ni.png" },
    { "name": "Panama 巴拿馬", "image": "https://flagcdn.com/w320/pa.png" },
    { "name": "Cuba 古巴", "image": "https://flagcdn.com/w320/cu.png" },
    { "name": "Dominican Republic 多明尼加共和國", "image": "https://flagcdn.com/w320/do.png" },
    { "name": "Haiti 海地", "image": "https://flagcdn.com/w320/ht.png" },
    { "name": "Jamaica 牙買加", "image": "https://flagcdn.com/w320/jm.png" },
    { "name": "Trinidad and Tobago 千里達及托巴哥", "image": "https://flagcdn.com/w320/tt.png" },
    { "name": "Barbados 巴貝多", "image": "https://flagcdn.com/w320/bb.png" },
    { "name": "Bahamas 巴哈馬", "image": "https://flagcdn.com/w320/bs.png" },
    { "name": "Saint Kitts and Nevis 聖克里斯多福及尼維斯", "image": "https://flagcdn.com/w320/kn.png" },
    { "name": "Saint Lucia 聖露西亞", "image": "https://flagcdn.com/w320/lc.png" },
    { "name": "Saint Vincent and the Grenadines 聖文森及格瑞那丁", "image": "https://flagcdn.com/w320/vc.png" },
    { "name": "Grenada 格瑞那達", "image": "https://flagcdn.com/w320/gd.png" },
    { "name": "Antigua and Barbuda 安地卡及巴布達", "image": "https://flagcdn.com/w320/ag.png" },
    { "name": "Dominica 多明尼加", "image": "https://flagcdn.com/w320/dm.png" }
  ],
  "Europe": [
    { "name": "France 法國", "image": "https://flagcdn.com/w320/fr.png" },
    { "name": "Germany 德國", "image": "https://flagcdn.com/w320/de.png" },
    { "name": "Italy 義大利", "image": "https://flagcdn.com/w320/it.png" },
    { "name": "Spain 西班牙", "image": "https://flagcdn.com/w320/es.png" },
    { "name": "United Kingdom 英國", "image": "https://flagcdn.com/w320/gb.png" },
    { "name": "Austria 奧地利", "image": "https://flagcdn.com/w320/at.png" },
    { "name": "Belgium 比利時", "image": "https://flagcdn.com/w320/be.png" },
    { "name": "Bulgaria 保加利亞", "image": "https://flagcdn.com/w320/bg.png" },
    { "name": "Croatia 克羅埃西亞", "image": "https://flagcdn.com/w320/hr.png" },
    { "name": "Cyprus 賽普勒斯", "image": "https://flagcdn.com/w320/cy.png" },
    { "name": "Czech Republic 捷克", "image": "https://flagcdn.com/w320/cz.png" },
    { "name": "Denmark 丹麥", "image": "https://flagcdn.com/w320/dk.png" },
    { "name": "Estonia 愛沙尼亞", "image": "https://flagcdn.com/w320/ee.png" },
    { "name": "Finland 芬蘭", "image": "https://flagcdn.com/w320/fi.png" },
    { "name": "Greece 希臘", "image": "https://flagcdn.com/w320/gr.png" },
    { "name": "Hungary 匈牙利", "image": "https://flagcdn.com/w320/hu.png" },
    { "name": "Iceland 冰島", "image": "https://flagcdn.com/w320/is.png" },
    { "name": "Ireland 愛爾蘭", "image": "https://flagcdn.com/w320/ie.png" },
    { "name": "Latvia 拉脫維亞", "image": "https://flagcdn.com/w320/lv.png" },
    { "name": "Lithuania 立陶宛", "image": "https://flagcdn.com/w320/lt.png" },
    { "name": "Luxembourg 盧森堡", "image": "https://flagcdn.com/w320/lu.png" },
    { "name": "Malta 馬爾他", "image": "https://flagcdn.com/w320/mt.png" },
    { "name": "Netherlands 荷蘭", "image": "https://flagcdn.com/w320/nl.png" },
    { "name": "Poland 波蘭", "image": "https://flagcdn.com/w320/pl.png" },
    { "name": "Portugal 葡萄牙", "image": "https://flagcdn.com/w320/pt.png" },
    { "name": "Romania 羅馬尼亞", "image": "https://flagcdn.com/w320/ro.png" },
    { "name": "Slovakia 斯洛伐克", "image": "https://flagcdn.com/w320/sk.png" },
    { "name": "Slovenia 斯洛維尼亞", "image": "https://flagcdn.com/w320/si.png" },
    { "name": "Sweden 瑞典", "image": "https://flagcdn.com/w320/se.png" },
    { "name": "Norway 挪威", "image": "https://flagcdn.com/w320/no.png" },
    { "name": "Switzerland 瑞士", "image": "https://flagcdn.com/w320/ch.png" },
    { "name": "Albania 阿爾巴尼亞", "image": "https://flagcdn.com/w320/al.png" },
    { "name": "Andorra 安道爾", "image": "https://flagcdn.com/w320/ad.png" },
    { "name": "Bosnia and Herzegovina 波士尼亞與赫塞哥維納", "image": "https://flagcdn.com/w320/ba.png" },
    { "name": "Moldova 摩爾多瓦", "image": "https://flagcdn.com/w320/md.png" },
    { "name": "Monaco 摩納哥", "image": "https://flagcdn.com/w320/mc.png" },
    { "name": "Montenegro 蒙特內哥羅", "image": "https://flagcdn.com/w320/me.png" },
    { "name": "North Macedonia 北馬其頓", "image": "https://flagcdn.com/w320/mk.png" },
    { "name": "San Marino 聖馬利諾", "image": "https://flagcdn.com/w320/sm.png" },
    { "name": "Serbia 塞爾維亞", "image": "https://flagcdn.com/w320/rs.png" },
    { "name": "Ukraine 烏克蘭", "image": "https://flagcdn.com/w320/ua.png" },
    { "name": "Vatican City 梵蒂岡", "image": "https://flagcdn.com/w320/va.png" },
    { "name": "Liechtenstein 列支敦斯登", "image": "https://flagcdn.com/w320/li.png" }
  ],
  "Africa": [
    { "name": "Algeria 阿爾及利亞", "image": "https://flagcdn.com/w320/dz.png" },
    { "name": "Angola 安哥拉", "image": "https://flagcdn.com/w320/ao.png" },
    { "name": "Benin 貝南", "image": "https://flagcdn.com/w320/bj.png" },
    { "name": "Botswana 波札那", "image": "https://flagcdn.com/w320/bw.png" },
    { "name": "Burkina Faso 布吉納法索", "image": "https://flagcdn.com/w320/bf.png" },
    { "name": "Burundi 蒲隆地", "image": "https://flagcdn.com/w320/bi.png" },
    { "name": "Cabo Verde 維德", "image": "https://flagcdn.com/w320/cv.png" },
    { "name": "Cameroon 喀麥隆", "image": "https://flagcdn.com/w320/cm.png" },
    { "name": "Central African Republic 中非共和國", "image": "https://flagcdn.com/w320/cf.png" },
    { "name": "Chad 查德", "image": "https://flagcdn.com/w320/td.png" },
    { "name": "Comoros 葛摩", "image": "https://flagcdn.com/w320/km.png" },
    { "name": "Democratic Republic of the Congo 剛果民主共和國", "image": "https://flagcdn.com/w320/cd.png" },
    { "name": "Republic of the Congo 剛果共和國", "image": "https://flagcdn.com/w320/cg.png" },
    { "name": "Djibouti 吉布地", "image": "https://flagcdn.com/w320/dj.png" },
    { "name": "Egypt 埃及", "image": "https://flagcdn.com/w320/eg.png" },
    { "name": "Equatorial Guinea 赤道幾內亞", "image": "https://flagcdn.com/w320/gq.png" },
    { "name": "Eritrea 厄利垂亞", "image": "https://flagcdn.com/w320/er.png" },
    { "name": "Eswatini 史瓦帝尼", "image": "https://flagcdn.com/w320/sz.png" },
    { "name": "Ethiopia 衣索比亞", "image": "https://flagcdn.com/w320/et.png" },
    { "name": "Gabon 加彭", "image": "https://flagcdn.com/w320/ga.png" },
    { "name": "Gambia 甘比亞", "image": "https://flagcdn.com/w320/gm.png" },
    { "name": "Ghana 迦納", "image": "https://flagcdn.com/w320/gh.png" },
    { "name": "Guinea 幾內亞", "image": "https://flagcdn.com/w320/gn.png" },
    { "name": "Guinea-Bissau 幾內亞比索", "image": "https://flagcdn.com/w320/gw.png" },
    { "name": "Ivory Coast 象牙海岸", "image": "https://flagcdn.com/w320/ci.png" },
    { "name": "Kenya 肯亞", "image": "https://flagcdn.com/w320/ke.png" },
    { "name": "Lesotho 賴索托", "image": "https://flagcdn.com/w320/ls.png" },
    { "name": "Liberia 賴比瑞亞", "image": "https://flagcdn.com/w320/lr.png" },
    { "name": "Libya 利比亞", "image": "https://flagcdn.com/w320/ly.png" },
    { "name": "Madagascar 馬達加斯加", "image": "https://flagcdn.com/w320/mg.png" },
    { "name": "Malawi 馬拉威", "image": "https://flagcdn.com/w320/mw.png" },
    { "name": "Mali 馬利", "image": "https://flagcdn.com/w320/ml.png" },
    { "name": "Mauritania 茅利塔尼亞", "image": "https://flagcdn.com/w320/mr.png" },
    { "name": "Mauritius 模里西斯", "image": "https://flagcdn.com/w320/mu.png" },
    { "name": "Morocco 摩洛哥", "image": "https://flagcdn.com/w320/ma.png" },
    { "name": "Mozambique 莫三比克", "image": "https://flagcdn.com/w320/mz.png" },
    { "name": "Namibia 納米比亞", "image": "https://flagcdn.com/w320/na.png" },
    { "name": "Niger 尼日", "image": "https://flagcdn.com/w320/ne.png" },
    { "name": "Nigeria 奈及利亞", "image": "https://flagcdn.com/w320/ng.png" },
    { "name": "Rwanda 盧安達", "image": "https://flagcdn.com/w320/rw.png" },
    { "name": "Sao Tome and Principe 聖多美普林西比", "image": "https://flagcdn.com/w320/st.png" },
    { "name": "Senegal 塞內加爾", "image": "https://flagcdn.com/w320/sn.png" },
    { "name": "Seychelles 塞席爾", "image": "https://flagcdn.com/w320/sc.png" },
    { "name": "Sierra Leone 獅子山共和國", "image": "https://flagcdn.com/w320/sl.png" },
    { "name": "Somalia 索馬利亞", "image": "https://flagcdn.com/w320/so.png" },
    { "name": "South Africa 南非", "image": "https://flagcdn.com/w320/za.png" },
    { "name": "South Sudan 南蘇丹", "image": "https://flagcdn.com/w320/ss.png" },
    { "name": "Sudan 蘇丹", "image": "https://flagcdn.com/w320/sd.png" },
    { "name": "Tanzania 坦尚尼亞", "image": "https://flagcdn.com/w320/tz.png" },
    { "name": "Togo 多哥", "image": "https://flagcdn.com/w320/tg.png" },
    { "name": "Tunisia 突尼西亞", "image": "https://flagcdn.com/w320/tn.png" },
    { "name": "Uganda 烏干達", "image": "https://flagcdn.com/w320/ug.png" },
    { "name": "Zambia 尚比亞", "image": "https://flagcdn.com/w320/zm.png" },
    { "name": "Zimbabwe 辛巴威", "image": "https://flagcdn.com/w320/zw.png" }
  ],
  "Oceania": [
    { "name": "Australia 澳洲", "image": "https://flagcdn.com/w320/au.png" },
    { "name": "New Zealand 紐西蘭", "image": "https://flagcdn.com/w320/nz.png" },
    { "name": "Fiji 斐濟", "image": "https://flagcdn.com/w320/fj.png" },
    { "name": "Papua New Guinea 巴布亞紐幾內亞", "image": "https://flagcdn.com/w320/pg.png" },
    { "name": "Tonga 東加", "image": "https://flagcdn.com/w320/to.png" },
    { "name": "Samoa 薩摩亞", "image": "https://flagcdn.com/w320/ws.png" },
    { "name": "Vanuatu 萬那杜", "image": "https://flagcdn.com/w320/vu.png" },
    { "name": "Solomon Islands 索羅門群島", "image": "https://flagcdn.com/w320/sb.png" },
    { "name": "Kiribati 吉里巴斯", "image": "https://flagcdn.com/w320/ki.png" },
    { "name": "Tuvalu 吐瓦魯", "image": "https://flagcdn.com/w320/tv.png" },
    { "name": "Micronesia 密克羅尼西亞", "image": "https://flagcdn.com/w320/fm.png" },
    { "name": "Marshall Islands 馬紹爾群島", "image": "https://flagcdn.com/w320/mh.png" },
    { "name": "Palau 帛琉", "image": "https://flagcdn.com/w320/pw.png" },
    { "name": "Nauru 諾魯", "image": "https://flagcdn.com/w320/nr.png" }
  ]
};

const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const categoryButtons = document.querySelectorAll(".category-button");
const flagImage = document.getElementById("flag-image");
const optionButtons = document.querySelectorAll(".option-button");
const message = document.getElementById("message");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const resultScore = document.getElementById("result-score");
const resultTime = document.getElementById("result-time");
const resultAchievement = document.getElementById("result-achievement");
const resultCategory = document.getElementById("result-category");

let currentFlag;
let score = 0;
let questionCount = 0;
let selectedCategory = null;
let timerInterval;
let time = 0;

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.textContent;
    startPage.style.display = "none";
    quizPage.style.display = "block";
    score = 0;
    questionCount = 0;
    time = 0;
    scoreDisplay.textContent = "Score: " + score;
    startTimer();
    loadQuestion();
  });
});

function loadQuestion() {
  if (questionCount >= 10) {
    endQuiz();
    return;
  }

  let flagList;
  if (selectedCategory === "World") {
    flagList = [];
    const categories = Object.keys(flags).filter(cat => cat !== "World");
    categories.forEach(category => {
      flagList = flagList.concat(flags[category]);
    });
  } else {
    flagList = flags[selectedCategory];
  }

  currentFlag = flagList[Math.floor(Math.random() * flagList.length)];
  flagImage.src = currentFlag.image;

  const correctIndex = Math.floor(Math.random() * 4);
  let options = [currentFlag.name];

  while (options.length < 4) {
    const randomFlag = flagList[Math.floor(Math.random() * flagList.length)];
    if (!options.includes(randomFlag.name)) {
      options.push(randomFlag.name);
    }
  }

  options = options.sort(() => Math.random() - 0.5);

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].textContent = options[i];
    optionButtons[i].onclick = () => checkAnswer(options[i]);
  }
}

function checkAnswer(answer) {
  if (answer === currentFlag.name) {
    message.textContent = "✅Correct!👌";
    score++;
  } else {
    message.textContent = "❎Incorrect.🙅‍♂️ The correct answer was " + currentFlag.name;
  }
  scoreDisplay.textContent = "Score: " + score;
  disableButtons();
  questionCount++;
}

function disableButtons() {
  optionButtons.forEach(button => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function enableButtons() {
  optionButtons.forEach(button => {
    button.disabled = false;
  });
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
  message.textContent = "";
  enableButtons();
  loadQuestion();
});

function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = "Time: " + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  quizPage.style.display = "none";
  resultPage.style.display = "block";

  resultScore.textContent = "Final Score: " + score;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  resultTime.textContent = "Time Taken: " + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + ".";
  resultCategory.textContent = "Region Selected: " + selectedCategory;

  let achievement = "";
  if (score >= 9) {
    achievement = "🥇Gold Medal!🎊";
  } else if (score >= 7) {
    achievement = "🥈Silver Medal!🎊";
  } else if (score >= 5) {
    achievement = "🥉Bronze Medal!🎊";
  } else {
    achievement = "👍Great work! Try harder next time!🎊";
  }
  resultAchievement.textContent = "Congratulations! " + achievement;
}

quizPage.style.display = "none";
resultPage.style.display = "none";
