// 詞庫與分類組態，供 App 按需引入

export const INITIAL_CATEGORIES = {
  character: { id: "character", label: { "zh-tw": "人物", en: "CHARACTER" }, color: "blue" },
  item: { id: "item", label: { "zh-tw": "物品", en: "ITEM" }, color: "amber" },
  action: { id: "action", label: { "zh-tw": "動作", en: "ACTION" }, color: "rose" },
  location: { id: "location", label: { "zh-tw": "地點", en: "LOCATION" }, color: "emerald" },
  visual: { id: "visual", label: { "zh-tw": "畫面", en: "VISUALS" }, color: "violet" },
  other: { id: "other", label: { "zh-tw": "其他", en: "OTHER" }, color: "slate" }
};

// --- 初始資料組態 (Updated with new banks for examples) ---
export const INITIAL_BANKS = {
  role: {
    label: { "zh-tw": "角色身份", en: "Role" },
    category: "character",
    options: [
      { "zh-tw": "遊戲與動漫概念美術設計大師", en: "Master of Game and Anime Concept Art" },
      { "zh-tw": "資深影視角色原畫師", en: "Senior Film Character Concept Artist" },
      { "zh-tw": "賽博龐克風格設計師", en: "Cyberpunk Style Designer" },
      { "zh-tw": "暗黑幻想風格插畫師", en: "Dark Fantasy Style Illustrator" },
      { "zh-tw": "美術攝影與電影寫實風格", en: "Fine-art photography blended with cinematic realism" }
    ]
  },
  subject: {
    label: { "zh-tw": "主體物件", en: "Subject" },
    category: "character",
    options: [
      { "zh-tw": "女性角色", en: "Female Character" },
      { "zh-tw": "男性角色", en: "Male Character" },
      { "zh-tw": "機甲少女", en: "Mecha Girl" },
      { "zh-tw": "怪物擬人化", en: "Monster Anthropomorphism" },
      { "zh-tw": "奇幻種族(精靈/惡魔)", en: "Fantasy Race (Elf/Demon)" },
      { "zh-tw": "女性，約20歲", en: "Female, around 20 years old" },
      { "zh-tw": "年輕韓國女團偶像", en: "Young Korean female K-pop idol" }
    ]
  },
  hair_style: {
    label: { "zh-tw": "髮型樣式", en: "Hair Style" },
    category: "character",
    options: [
      { "zh-tw": "短髮，柔和凌亂的深色頭髮", en: "Short, softly tousled dark hair" },
      { "zh-tw": "深色波浪長髮", en: "Dark wavy long hair" },
      { "zh-tw": "黑色直髮，垂在肩上", en: "Black straight hair, falling over shoulders" },
      { "zh-tw": "淺金色捲髮", en: "Light blonde curly hair" },
      { "zh-tw": "高馬尾辮", en: "High ponytail" }
    ]
  },
  character_companion: {
    label: { "zh-tw": "合影角色", en: "Companion" },
    category: "character",
    options: [
      { "zh-tw": "死侍 (Deadpool)", en: "Deadpool" },
      { "zh-tw": "超人 (Superman)", en: "Superman" },
      { "zh-tw": "愛因斯坦 (Einstein)", en: "Einstein" },
      { "zh-tw": "神奇女俠 (Wonder Woman)", en: "Wonder Woman" },
      { "zh-tw": "鋼鐵人 (Iron Man)", en: "Iron Man" },
      { "zh-tw": "皮卡丘 (Pikachu)", en: "Pikachu" },
      { "zh-tw": "哥斯拉 (Godzilla)", en: "Godzilla" },
      { "zh-tw": "初音未來 (Hatsune Miku)", en: "Hatsune Miku" }
    ]
  },
  layout_focus: {
    label: { "zh-tw": "構圖重心", en: "Layout Focus" },
    category: "visual",
    options: [
      { "zh-tw": "全身立繪", en: "Full-body Portrait" },
      { "zh-tw": "半身肖像", en: "Half-body Portrait" },
      { "zh-tw": "動態戰鬥姿勢", en: "Dynamic Action Pose" },
      { "zh-tw": "背影回眸", en: "Back View Looking Back" }
    ]
  },
  grid_pose: { 
    label: { "zh-tw": "九宮格動作", en: "Grid Pose" }, 
    category: "action", 
    options: [
      { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
      { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      { "zh-tw": "單色下巴託手", en: "Monochrome hand on chin" },
      { "zh-tw": "透過模糊肩帶拍攝", en: "Shooting through blurred shoulder straps" },
      { "zh-tw": "正面特寫陰影", en: "Frontal close-up with shadows" },
      { "zh-tw": "斜角拍攝", en: "Angled shot" },
      { "zh-tw": "雙手置於鎖骨", en: "Hands on collarbones" },
      { "zh-tw": "坐姿半身側面", en: "Seated half-body profile" },
      { "zh-tw": "側面微距水滴", en: "Side macro with water drops" },
      { "zh-tw": "閉眼仰頭享受", en: "Eyes closed looking up in enjoyment" },
      { "zh-tw": "用手遮擋陽光", en: "Shading eyes from sun with hand" },
      { "zh-tw": "回眸一笑", en: "Looking back with a smile" },
      { "zh-tw": "吹泡泡糖特寫", en: "Close-up blowing bubble gum" },
      { "zh-tw": "正面直視鏡頭，表情平靜，眼神清澈", en: "Staring straight at the camera, calm expression, clear eyes" },
      { "zh-tw": "凝視鏡頭，嘴角微微上揚，展現自信", en: "Staring at the camera, slight smile, showing confidence" },
      { "zh-tw": "專注地看著鏡頭，表情柔和，眼神溫和", en: "Looking intently at the camera, soft expression, gentle eyes" },
      { "zh-tw": "側身回望，眼神溫柔，嘴角上揚", en: "Side view looking back, gentle eyes, smiling" },
      { "zh-tw": "轉身回眸，長髮飄逸，笑容自然", en: "Turning back, flowing hair, natural smile" },
      { "zh-tw": "手輕撫下巴，表情優雅，眼神柔和", en: "Hand gently on chin, elegant expression, soft eyes" },
      { "zh-tw": "單手支撐下巴，表情自然，眼神專注", en: "Supporting chin with one hand, natural expression, focused eyes" },
      { "zh-tw": "利用肩帶營造景深，焦點清晰在眼睛", en: "Using shoulder straps for depth of field, focus on eyes" },
      { "zh-tw": "正在吹泡泡糖，表情可愛，眼神專注", en: "Blowing bubble gum, cute expression, focused eyes" },
      { "zh-tw": "側面微距特寫，突出面部輪廓和細節", en: "Side macro close-up, highlighting facial contours and details" }
    ] 
  },
  
  camera_angle: {
    label: { "zh-tw": "拍攝角度", en: "Camera Angle" },
    category: "visual",
    options: [
      { "zh-tw": "臉頰和頸部特寫", en: "Cheek and neck close-up" },
      { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      { "zh-tw": "單色下巴託手肖像", en: "Monochrome hand on chin portrait" },
      { "zh-tw": "透過模糊的肩帶拍攝", en: "Shooting through blurred shoulder straps" },
      { "zh-tw": "正面特寫，面部陰影交錯", en: "Frontal close-up, interlocking facial shadows" },
      { "zh-tw": "斜角拍攝的原始人像", en: "Raw portrait from an angle" },
      { "zh-tw": "雙手置於鎖骨附近的特寫", en: "Close-up with hands near collarbones" },
      { "zh-tw": "坐姿半身側面照", en: "Seated half-body profile shot" },
      { "zh-tw": "側面微距照", en: "Side macro shot" },
      { "zh-tw": "上半身特寫", en: "upper-body close-up" },
      { "zh-tw": "平視、略微隱藏的中景鏡頭", en: "eye-level, slightly hidden intimate medium shot" },
      { "zh-tw": "腰部以上的美術肖像", en: "Waist-up fine-art portrait" }
    ]
  },
  connectors: {
    label: { "zh-tw": "視覺引導", en: "Connectors" },
    category: "visual",
    options: [
      { "zh-tw": "手繪箭頭或引導線", en: "Hand-drawn arrows or guide lines" },
      { "zh-tw": "虛線連線", en: "Dashed line connections" },
      { "zh-tw": "彩色光束", en: "Colored light beams" },
      { "zh-tw": "半透明資料線", en: "Translucent data cables" }
    ]
  },
  underwear_style: {
    label: { "zh-tw": "時尚內著設計", en: "Innerwear Style" },
    category: "item",
    options: [
      { "zh-tw": "簡約舒適棉質內衣", en: "Simple and comfortable cotton innerwear" },
      { "zh-tw": "運動風格透氣內衣", en: "Athletic style breathable innerwear" },
      { "zh-tw": "極簡主義無痕內衣", en: "Minimalist seamless innerwear" },
      { "zh-tw": "時尚剪裁內搭", en: "Fashionable cut inner layers" },
      { "zh-tw": "“純美風”服飾", en: "'pure-aesthetic' outfit style" }
    ]
  },
  clothing: {
    label: { "zh-tw": "人物服飾", en: "Clothing" },
    category: "item",
    options: [
      { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      { "zh-tw": "白色絲綢襯衫", en: "White silk shirt" },
      { "zh-tw": "黑色修身西裝", en: "Black slim-fit suit" },
      { "zh-tw": "戰術機能風外套", en: "Tactical techwear jacket" },
      { "zh-tw": "復古碎花連衣裙", en: "Vintage floral print dress" },
      { "zh-tw": "略顯成熟的“大姐姐”時尚風格", en: "Slightly mature 'onee-san' fashion style" },
      { "zh-tw": "柔和青色復古碎花連衣裙", en: "Muted teal floral dress with subtle vintage patterns" }
    ]
  },
  accessory_glasses: {
    label: { "zh-tw": "眼鏡配飾", en: "Glasses" },
    category: "item",
    options: [
      { "zh-tw": "戴著有輕微鏡面反射的眼鏡", en: "wearing glasses with mild lens reflections" },
      { "zh-tw": "戴著時尚的太陽鏡", en: "wearing stylish sunglasses" },
      { "zh-tw": "戴著黑框近視眼鏡", en: "wearing black-rimmed glasses" },
      { "zh-tw": "不戴眼鏡", en: "no glasses" }
    ]
  },
  clothing_male: {
    label: { "zh-tw": "男性服飾", en: "Male Clothing" },
    category: "item",
    options: [
      { "zh-tw": "剪裁合身的深藍西裝", en: "Tailored deep blue suit" },
      { "zh-tw": "復古棕色皮夾克", en: "Vintage brown leather jacket" },
      { "zh-tw": "戰術背心與工裝褲", en: "Tactical vest and cargo pants" },
      { "zh-tw": "寬鬆的灰色連帽衫", en: "Loose grey hoodie" },
      { "zh-tw": "白色亞麻襯衫", en: "White linen shirt" },
      { "zh-tw": "黑色高領毛衣", en: "Black turtleneck sweater" }
    ]
  },
  clothing_female: {
    label: { "zh-tw": "女性服飾", en: "Female Clothing" },
    category: "item",
    options: [
      { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      { "zh-tw": "絲綢吊帶晚禮服", en: "Silk slip evening gown" },
      { "zh-tw": "機車皮衣與短裙", en: "Biker leather jacket and short skirt" },
      { "zh-tw": "白色蕾絲襯衫", en: "White lace blouse" },
      { "zh-tw": "黑色緊身連體衣", en: "Black tight bodysuit" },
      { "zh-tw": "優雅的香奈兒風套裝", en: "Elegant Chanel-style suit" },
      { "zh-tw": "半脫的灰色大號連帽衫，露出白色吊帶", en: "half-removed oversized grey hoodie, revealing white camisole" }
    ]
  },
  expressions: {
    label: { "zh-tw": "表情集", en: "Expressions" },
    category: "character",
    options: [
      { "zh-tw": "瘋狂、病嬌、狂喜", en: "Crazy, Yandere, Ecstatic" },
      { "zh-tw": "羞澀、躲閃、臉紅", en: "Shy, Evasive, Blushing" },
      { "zh-tw": "冷漠、鄙視、高傲", en: "Indifferent, Contemptuous, Proud" },
      { "zh-tw": "痛苦、忍耐、咬唇", en: "Painful, Enduring, Biting lip" }
    ]
  },
  character_originality: {
    label: { "zh-tw": "人物原創性", en: "Character Originality" },
    category: "character",
    options: [
      { "zh-tw": "創作一個原創人物", en: "Create an original character" },
      { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      { "zh-tw": "對知名角色再創作", en: "Re-create a well-known character" }
    ]
  },
  character_groups: {
    label: { "zh-tw": "人物組合", en: "Character Groups" },
    category: "character",
    options: [
      { "zh-tw": "中國古代開國皇帝", en: "Ancient Chinese Founding Emperors" },
      { "zh-tw": "漫威人物", en: "Marvel Characters" },
      { "zh-tw": "金庸古龍武俠人物", en: "Jin Yong & Gu Long Wuxia Characters" },
      { "zh-tw": "三國知名人物", en: "Famous Three Kingdoms Figures" },
      { "zh-tw": "知名軍事家（拿破崙、凱撒、曹操等）", en: "Famous Military Strategists (Napoleon, Caesar, Cao Cao, etc.)" },
      { "zh-tw": "全球知名運動員", en: "World-famous Athletes" },
      { "zh-tw": "中外知名偵探（包青天、狄仁傑、福爾摩斯、柯南等）", en: "Famous Detectives (Bao Zheng, Di Renjie, Sherlock Holmes, Conan, etc.)" },
      { "zh-tw": "動漫遊戲角色", en: "Anime & Game Characters" },
      { "zh-tw": "歷史名人", en: "Historical Celebrities" },
      { "zh-tw": "明星藝人", en: "Stars & Celebrities" }
    ]
  },
  social_media: {
    label: { "zh-tw": "社交媒體", en: "Social Media" },
    category: "location",
    options: [
      { "zh-tw": "微信朋友圈", en: "WeChat Moments" },
      { "zh-tw": "微博", en: "Weibo" },
      { "zh-tw": "Twitter(X)", en: "Twitter(X)" },
      { "zh-tw": "小紅書", en: "Little Red Book (Xiaohongshu)" },
      { "zh-tw": "Instagram", en: "Instagram" },
      { "zh-tw": "Facebook", en: "Facebook" },
      { "zh-tw": "抖音", en: "Douyin" },
      { "zh-tw": "TikTok", en: "TikTok" }
    ]
  },
  texture_zoom: {
    label: { "zh-tw": "材質特寫", en: "Texture Zoom" },
    category: "visual",
    options: [
      { "zh-tw": "絲滑感", en: "Silkiness" },
      { "zh-tw": "精細的皮膚紋理", en: "Fine skin texture" },
      { "zh-tw": "絲襪的抽絲細節", en: "Snagged details on silk stockings" },
      { "zh-tw": "皮革的光澤與磨損", en: "Luster and wear on leather" }
    ]
  },
  action_detail: {
    label: { "zh-tw": "動作細節", en: "Action Detail" },
    category: "action",
    options: [
      { "zh-tw": "優雅的行走姿態", en: "Elegant walking posture" },
      { "zh-tw": "自信的站立", en: "Confident standing" },
      { "zh-tw": "開懷大笑", en: "Laughing out loud" },
      { "zh-tw": "專注的眼神", en: "Focused gaze" }
    ]
  },
  special_view: {
    label: { "zh-tw": "特殊視角", en: "Special View" },
    category: "visual",
    options: [
      { "zh-tw": "被踩在腳下的仰視視角", en: "Low-angle view from being stepped on" },
      { "zh-tw": "從門縫中偷窺的視角", en: "Perspective of peeking through a door crack" },
      { "zh-tw": "鏡子反射的背影", en: "Back view reflected in a mirror" },
      { "zh-tw": "監視攝影機的俯視視角", en: "Top-down view from a security camera" }
    ]
  },
  bag_content: {
    label: { "zh-tw": "隨身包袋", en: "Bag Content" },
    category: "item",
    options: [
      { "zh-tw": "日常通勤包或手拿包", en: "Daily commuter bag or clutch" },
      { "zh-tw": "戰術腿包", en: "Tactical leg bag" },
      { "zh-tw": "可愛的絨毛背包", en: "Cute plush backpack" },
      { "zh-tw": "透明材質的痛包", en: "Ita-bag made of transparent material" }
    ]
  },
  cosmetics: {
    label: { "zh-tw": "美妝與護理", en: "Cosmetics" },
    category: "item",
    options: [
      { "zh-tw": "常用的化妝品組合", en: "Commonly used cosmetics combo" },
      { "zh-tw": "散落的口紅與粉餅", en: "Scattered lipsticks and compact powder" },
      { "zh-tw": "便攜式補妝鏡", en: "Portable makeup mirror" },
      { "zh-tw": "香水小樣與護手霜", en: "Perfume samples and hand cream" }
    ]
  },
  private_items: {
    label: { "zh-tw": "品質生活好物", en: "Quality Life Items" },
    category: "item",
    options: [
      { "zh-tw": "香薰加溼器", en: "Aroma Diffuser" },
      { "zh-tw": "降噪耳機", en: "Noise-cancelling Headphones" },
      { "zh-tw": "復古黑膠唱片機", en: "Vintage Vinyl Player" },
      { "zh-tw": "智慧運動手錶", en: "Smart Sports Watch" }
    ]
  },
  city_name: {
    label: { "zh-tw": "城市/國家", en: "City/Country" },
    category: "location",
    options: [
      { "zh-tw": "廣州", en: "Guangzhou" },
      { "zh-tw": "上海", en: "Shanghai" },
      { "zh-tw": "北京", en: "Beijing" },
      { "zh-tw": "深圳", en: "Shenzhen" },
      { "zh-tw": "杭州", en: "Hangzhou" },
      { "zh-tw": "成都", en: "Chengdu" },
      { "zh-tw": "西安", en: "Xi'an" },
      { "zh-tw": "重慶", en: "Chongqing" },
      { "zh-tw": "南京", en: "Nanjing" },
      { "zh-tw": "蘇州", en: "Suzhou" },
      { "zh-tw": "京都", en: "Kyoto" },
      { "zh-tw": "巴塞羅那", en: "Barcelona" },
      { "zh-tw": "墨西哥城", en: "Mexico City" },
      { "zh-tw": "聖彼得堡", en: "St. Petersburg" },
      { "zh-tw": "巴黎", en: "Paris" },
      { "zh-tw": "倫敦", en: "London" },
      { "zh-tw": "紐約", en: "New York" },
      { "zh-tw": "東京", en: "Tokyo" }
    ]
  },
  art_tool: {
    label: { "zh-tw": "繪畫工具", en: "Art Tool" },
    category: "item",
    options: [
      { "zh-tw": "毛筆", en: "Ink Brush" },
      { "zh-tw": "畫筆", en: "Paintbrush" },
      { "zh-tw": "調色刀", en: "Palette Knife" },
      { "zh-tw": "觸控筆", en: "Stylus" },
      { "zh-tw": "傳統和紙畫筆", en: "Traditional Washi Brush" }
    ]
  },
  art_style: {
    label: { "zh-tw": "畫風", en: "Art Style" },
    category: "visual",
    options: [
      { "zh-tw": "浮世繪 (Ukiyo-e)", en: "Ukiyo-e" },
      { "zh-tw": "畢加索立體主義 (Cubism)", en: "Cubism" },
      { "zh-tw": "弗裡達超現實主義 (Surrealism)", en: "Surrealism" },
      { "zh-tw": "列賓現實主義 (Realism)", en: "Realism" },
      { "zh-tw": "高品質的 2D 插畫風格", en: "High-quality 2D illustration style" },
      { "zh-tw": "寫實厚塗風格", en: "Realistic impasto style" },
      { "zh-tw": "賽博龐克霓虹風格", en: "Cyberpunk neon style" },
      { "zh-tw": "水彩手繪風格", en: "Watercolor hand-drawn style" }
    ]
  },
  background_style: {
    label: { "zh-tw": "背景風格", en: "Background Style" },
    category: "visual",
    options: [
      { "zh-tw": "漫畫網格筆記本", en: "Manga grid notebook" },
      { "zh-tw": "藍圖設計稿紙", en: "Blueprint design paper" },
      { "zh-tw": "工業風金屬背景", en: "Industrial metal background" },
      { "zh-tw": "極簡純色背景", en: "Minimalist solid color background" }
    ]
  },
  classic_scene: {
    label: { "zh-tw": "經典場景", en: "Classic Scene" },
    category: "location",
    options: [
      { "zh-tw": "駭客任務", en: "The Matrix" },
      { "zh-tw": "千與千尋", en: "Spirited Away" },
      { "zh-tw": "瘋狂動物城（Zootopia）", en: "Zootopia" },
      { "zh-tw": "生活大爆炸", en: "The Big Bang Theory" },
      { "zh-tw": "霍格華茲魔法學院", en: "Hogwarts School of Witchcraft and Wizardry" },
      { "zh-tw": "侏羅紀公園叢林入口", en: "Jurassic Park Jungle Entrance" },
      { "zh-tw": "星際大戰塔圖因市集", en: "Star Wars Tatooine Market" },
      { "zh-tw": "魔戒夏爾", en: "The Lord of the Rings - The Shire" },
      { "zh-tw": "冰與火之歌君臨城城牆", en: "Game of Thrones - King's Landing Walls" },
      { "zh-tw": "全面啟動折疊城市", en: "Inception - Folding City" },
      { "zh-tw": "賽博龐克霓虹夜市", en: "Cyberpunk Neon Night Market" },
      { "zh-tw": "未來城市空港樞紐", en: "Future City Spaceport Hub" }
    ]
  },
  position: {
    label: { "zh-tw": "文字位置", en: "Text Position" },
    category: "location",
    options: [
      { "zh-tw": "頂部中央", en: "Top Center" },
      { "zh-tw": "底部中央", en: "Bottom Center" },
      { "zh-tw": "左上角偏中", en: "Top Left biased center" },
      { "zh-tw": "右上角偏中", en: "Top Right biased center" },
      { "zh-tw": "畫面中上方懸浮", en: "Floating in top middle" }
    ]
  },
  render_style: {
    label: { "zh-tw": "渲染風格", en: "Render Style" },
    category: "visual",
    options: [
      { "zh-tw": "Octane Render 和 Cinema 4D", en: "Octane Render and Cinema 4D" },
      { "zh-tw": "樂高積木風格", en: "LEGO Block Style" },
      { "zh-tw": "Unreal Engine 5 寫實光追", en: "Unreal Engine 5 Realistic Ray Tracing" },
      { "zh-tw": "Pixar 卡通渲染", en: "Pixar Cartoon Rendering" },
      { "zh-tw": "黏土動畫質感", en: "Claymation Texture" },
      { "zh-tw": "手辦級實體渲染", en: "Figurine-level Physical Rendering" },
      { "zh-tw": "3D像素風格", en: "3D Pixel Art Style" },
      { "zh-tw": "手工毛線針織風格", en: "Hand-knitted Yarn Style" },
      { "zh-tw": "毛線針織", en: "Knitted Yarn" },
      { "zh-tw": "毛氈與黏土", en: "Felt and Clay" },
      { "zh-tw": "紙殼紙板", en: "Cardboard" }
    ]
  },
  show_name: {
    label: { "zh-tw": "劇名", en: "Show Name" },
    category: "other",
    options: [
      { "zh-tw": "鐵達尼號", en: "Titanic" },
      { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
      { "zh-tw": "哈利·波特", en: "Harry Potter" },
      { "zh-tw": "星際效應", en: "Interstellar" },
      { "zh-tw": "千與千尋", en: "Spirited Away" },
      { "zh-tw": "復仇者聯盟", en: "The Avengers" }
    ]
  },
  character_name: {
    label: { "zh-tw": "角色", en: "Character Name" },
    category: "character",
    options: [
      { "zh-tw": "Jack and Rose", en: "Jack and Rose" },
      { "zh-tw": "龍貓", en: "Totoro" },
      { "zh-tw": "哈利·波特", en: "Harry Potter" },
      { "zh-tw": "庫珀", en: "Cooper" },
      { "zh-tw": "千尋", en: "Chihiro" },
      { "zh-tw": "綠巨人", en: "Hulk" },
      { "zh-tw": "薩諾斯", en: "Thanos" },
      { "zh-tw": "鋼鐵人", en: "Iron Man" }
    ]
  },
  art_type: {
    label: { "zh-tw": "藝術門類", en: "Art Type" },
    category: "other",
    options: [
      { "zh-tw": "美術學", en: "Fine Arts" },
      { "zh-tw": "時尚學", en: "Fashion Studies" },
      { "zh-tw": "建築學", en: "Architecture" },
      { "zh-tw": "攝影學", en: "Photography" },
      { "zh-tw": "雕塑藝術", en: "Sculpture Art" },
      { "zh-tw": "工業設計", en: "Industrial Design" }
    ]
  },
  company: {
    label: { "zh-tw": "公司", en: "Company" },
    category: "location",
    options: [
      { "zh-tw": "Apple", en: "Apple" },
      { "zh-tw": "任天堂（Nintendo）", en: "Nintendo" },
      { "zh-tw": "SONY", en: "SONY" },
      { "zh-tw": "宜家（IKEA）", en: "IKEA" }
    ]
  },
  dominant_colors: {
    label: { "zh-tw": "主色調", en: "Dominant Colors" },
    category: "visual",
    options: [
      { "zh-tw": "傳統的京都紅與古樸的墨黑色", en: "Traditional Kyoto red and antique ink black" },
      { "zh-tw": "地中海藍與陽光金", en: "Mediterranean blue and sunny gold" },
      { "zh-tw": "鮮豔的仙人掌綠與深紅色", en: "Vibrant cactus green and deep red" },
      { "zh-tw": "冷峻的極光藍與雪白色", en: "Cool aurora blue and snow white" },
      { "zh-tw": "莫蘭迪色系", en: "Morandi tones" },
      { "zh-tw": "進階灰與極簡白", en: "High-end gray and minimalist white" }
    ]
  },
  background_color_clean: {
    label: { "zh-tw": "背景色", en: "Background Color" },
    category: "visual",
    options: [
      { "zh-tw": "純白", en: "Pure White" },
      { "zh-tw": "明亮的天空藍", en: "Bright Sky Blue" },
      { "zh-tw": "陽光般的淺黃色", en: "Sunny Light Yellow" },
      { "zh-tw": "清爽的薄荷綠", en: "Refreshing Mint Green" },
      { "zh-tw": "奶油色", en: "Cream Color" }
    ]
  },
  city_glimpse_subtitle: {
    label: { "zh-tw": "副標題內容", en: "Subtitle Content" },
    category: "other",
    options: [
      { "zh-tw": "古韻悠長的千年古都", en: "The thousand-year-old ancient capital" },
      { "zh-tw": "高迪的奇幻建築之城", en: "Gaudí's city of fantastic architecture" },
      { "zh-tw": "色彩斑斕的藝術靈魂", en: "Vibrant soul of art" },
      { "zh-tw": "北方的威尼斯，藝術的殿堂", en: "Venice of the North, the temple of art" }
    ]
  },
  ratio: {
    label: { "zh-tw": "畫幅比例", en: "Aspect Ratio" },
    category: "visual",
    options: [
      { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" },
      { "zh-tw": "9:16直式構圖", en: "9:16 Vertical" },
      { "zh-tw": "1:1", en: "1:1 Square" },
      { "zh-tw": "4:3橫式構圖", en: "4:3 Horizontal" },
      { "zh-tw": "16:9橫式構圖", en: "16:9 Horizontal" },
      { "zh-tw": "圓形畫幅", en: "Circular Aspect Ratio" },
      { "zh-tw": "2:3直式構圖", en: "2:3 Vertical" }
    ]
  },
  // Fashion Template additions
  fashion_deconstruct: {
    label: { "zh-tw": "穿搭解構", en: "Fashion Deconstruct" },
    category: "item",
    options: [
      { "zh-tw": "整齊折疊的外套和精緻的高跟鞋", en: "Neatly folded coat and exquisite high heels" },
      { "zh-tw": "散落的配飾與包包", en: "Scattered accessories and bags" },
      { "zh-tw": "懸掛的襯衫與百褶裙", en: "Hanging shirt and pleated skirt" },
      { "zh-tw": "堆疊的金屬配飾與皮帶", en: "Stacked metal accessories and belts" }
    ]
  },
  toy_companion: {
    label: { "zh-tw": "互動公仔", en: "Toy Companion" },
    category: "item",
    options: [
      { "zh-tw": "Labubu藝術公仔", en: "Labubu Art Toy" },
      { "zh-tw": "暴力熊積木熊", en: "Bearbrick" },
      { "zh-tw": "泡泡瑪特Molly", en: "Pop Mart Molly" },
      { "zh-tw": "復古泰迪熊", en: "Vintage Teddy Bear" },
      { "zh-tw": "賽博龐克機械狗", en: "Cyberpunk Robo-Dog" }
    ]
  },
  
  // Old ones preserved for compatibility or other templates
  lens_param: {
    label: { "zh-tw": "九宮格鏡頭", en: "Lens Parameter" },
    category: "visual",
    options: [
      { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      { "zh-tw": "85mm, f/2.0", en: "85mm, f/2.0" },
      { "zh-tw": "50mm, f/2.2", en: "50mm, f/2.2" },
      { "zh-tw": "50mm, f/2.5", en: "50mm, f/2.5" },
      { "zh-tw": "50mm, f/3.2", en: "50mm, f/3.2" },
      { "zh-tw": "35mm, f/4.5", en: "35mm, f/4.5" },
      { "zh-tw": "85mm, f/1.9", en: "85mm, f/1.9" },
      { "zh-tw": "50mm, f/1.8", en: "50mm, f/1.8" },
      { "zh-tw": "85mm, f/2.2", en: "85mm, f/2.2" },
      { "zh-tw": "50mm, f/2.0", en: "50mm, f/2.0" }
    ]
  },
  lighting: {
    label: { "zh-tw": "燈光佈置", en: "Lighting" },
    category: "visual",
    options: [
      { "zh-tw": "大型頂置柔光箱，輕微側向反射光", en: "Large overhead softbox, slight side reflection" },
      { "zh-tw": "自然窗光", en: "Natural window light" },
      { "zh-tw": "倫勃朗光", en: "Rembrandt lighting" },
      { "zh-tw": "賽博龐克霓虹光", en: "Cyberpunk neon lighting" },
      { "zh-tw": "影棚硬光", en: "Studio hard light" },
      { "zh-tw": "隨意的肖像攝影，帶有日常快照氛圍", en: "Casual portrait photography with a daily snapshot vibe" },
      { "zh-tw": "隱藏相機拍攝風格，Portra 400 膠片質感", en: "Hidden camera style, Portra 400 film grain aesthetic" },
      { "zh-tw": "陰天下的柔和自然光", en: "Soft natural light under overcast sky" }
    ]
  },
  sticker_core: {
    label: { "zh-tw": "核心貼紙", en: "Sticker Core" },
    category: "item",
    options: [
      { "zh-tw": "使用者穿著甜美約會裝的照片", en: "Photo of user in a sweet date outfit" },
      { "zh-tw": "復古搖滾樂隊T恤穿搭", en: "Vintage rock band T-shirt outfit" },
      { "zh-tw": "日系JK制服穿搭", en: "Japanese JK uniform outfit" },
      { "zh-tw": "極簡職場通勤裝", en: "Minimalist office commuter outfit" }
    ]
  },
  sticker_decor: {
    label: { "zh-tw": "裝飾元素", en: "Sticker Decor" },
    category: "item",
    options: [
      { "zh-tw": "手繪愛心、閃光符號", en: "Hand-drawn hearts, sparkle symbols" },
      { "zh-tw": "星星、月亮貼紙", en: "Star and moon stickers" },
      { "zh-tw": "復古郵票與票據", en: "Vintage stamps and bills" },
      { "zh-tw": "賽博故障風Glitch元素", en: "Cyberpunk glitch elements" }
    ]
  },
  action_pose: {
    label: { "zh-tw": "互動姿勢", en: "Action Pose" },
    category: "action",
    options: [
      { "zh-tw": "用手指在男人腦後比劃'兔耳朵'", en: "Using fingers to make 'bunny ears' behind the man's head" },
      { "zh-tw": "勾肩搭背比V字手勢", en: "Arm around shoulder making V sign" },
      { "zh-tw": "互相指著對方大笑", en: "Pointing at each other and laughing" },
      { "zh-tw": "背靠背酷炫站姿", en: "Cool back-to-back standing pose" }
    ]
  },
  background_scene: {
    label: { "zh-tw": "背景場景", en: "Background Scene" },
    category: "location",
    options: [
      { "zh-tw": "俯瞰紐約市的復仇者大廈樓頂", en: "Rooftop of Avengers Tower overlooking New York City" },
      { "zh-tw": "廢棄的工業倉庫", en: "Abandoned industrial warehouse" },
      { "zh-tw": "熙熙攘攘的時代廣場", en: "Bustling Times Square" },
      { "zh-tw": "外太空飛船內部", en: "Inside a space-age spaceship" },
      { "zh-tw": "昏暗、平凡的房間，身後有一面素牆", en: "Dark, ordinary room with a plain wall behind the subject" },
      { "zh-tw": "昏暗舒適的後臺更衣室或私密宿舍", en: "dimly lit, cozy backstage dressing room or private dorm room" },
      { "zh-tw": "盛開的鬱鬱蔥蔥的花園", en: "Lush garden in full bloom" }
    ]
  },

  // 影片分鏡-影視色調
  video_color_tone: {
    label: { "zh-tw": "影視色調", en: "Cinematic Color Tone" },
    category: "visual",
    options: [
      { "zh-tw": "冷藍調，暗部發青（如《銀翼殺手2049》）", en: "Cool blue tones, teal shadows (Blade Runner 2049 style)" },
      { "zh-tw": "暖橙調，黃金時刻質感（如《瘋狂的麥克斯》）", en: "Warm orange tones, golden hour feel (Mad Max: Fury Road style)" },
      { "zh-tw": "高對比青橙撞色（Teal & Orange）", en: "High-contrast teal and orange color grading" },
      { "zh-tw": "低飽和灰綠調，膠片顆粒感（如《拯救大兵瑞恩》）", en: "Desaturated olive-green tones, film grain (Saving Private Ryan style)" },
      { "zh-tw": "霓虹紫粉調，高飽和賽博感", en: "Neon purple-pink, high-saturation cyberpunk feel" },
      { "zh-tw": "黑白高反差，黑色電影風格（Film Noir）", en: "High-contrast black and white, Film Noir style" },
      { "zh-tw": "莫蘭迪低飽和柔和調", en: "Morandi muted pastel tones" },
      { "zh-tw": "日系清透過曝暖調", en: "Japanese overexposed warm pastel tones" }
    ]
  },

  // 影片分鏡-影視風格
  video_art_style: {
    label: { "zh-tw": "影視風格", en: "Cinematic Style" },
    category: "visual",
    options: [
      { "zh-tw": "好萊塢大片質感（高成本電影感）", en: "Hollywood blockbuster cinematic quality" },
      { "zh-tw": "獨立電影紀實風格（手持、自然光）", en: "Indie film documentary style (handheld, natural lighting)" },
      { "zh-tw": "日本動畫電影風格（如新海誠）", en: "Japanese anime film style (Makoto Shinkai)" },
      { "zh-tw": "港片黃金時代（暗色、霓虹、快節奏）", en: "Hong Kong golden era (dark, neon, fast-paced)" },
      { "zh-tw": "韓式影視風格（進階感、低飽和）", en: "Korean drama cinematic style (premium, desaturated)" },
      { "zh-tw": "復古錄像帶 VHS 風格", en: "Retro VHS tape aesthetic" },
      { "zh-tw": "MV 風格（快速剪輯、視覺衝擊）", en: "Music video style (fast cuts, visual impact)" },
      { "zh-tw": "遊戲 CG 過場動畫風格", en: "Game CG cutscene style" }
    ]
  },

  // 影片分鏡-場景型別
  scene_type: {
    label: { "zh-tw": "場景型別", en: "Scene Type" },
    category: "location",
    options: [
      { "zh-tw": "古代酒館內部，燭光搖曳", en: "Ancient tavern interior, candlelight flickering" },
      { "zh-tw": "未來都市霓虹街巷", en: "Futuristic neon-lit urban alley" },
      { "zh-tw": "雪山之巔，雲海翻湧", en: "Snow-capped mountain peak, sea of clouds" },
      { "zh-tw": "廢棄太空站走廊，紅燈閃爍", en: "Abandoned space station corridor, red lights flashing" },
      { "zh-tw": "深夜雨中的日本街道", en: "Rainy Japanese street at night" },
      { "zh-tw": "戰場廢墟，硝煙瀰漫", en: "Battlefield ruins, smoke-filled" },
      { "zh-tw": "熱帶雨林深處，瀑布飛流", en: "Deep tropical rainforest, cascading waterfall" },
      { "zh-tw": "賽博龐克地下酒吧", en: "Cyberpunk underground bar" }
    ]
  },

  // Fish Eye Urban Template additions
  lens_type: {
    label: { "zh-tw": "鏡頭型別", en: "Lens Type" },
    category: "visual",
    options: [
      { "zh-tw": "標準鏡頭", en: "Standard Lens" },
      { "zh-tw": "廣角鏡頭", en: "Wide-angle Lens" },
      { "zh-tw": "長焦鏡頭", en: "Telephoto Lens" },
      { "zh-tw": "極端魚眼鏡頭", en: "Extreme Fisheye Lens" },
      { "zh-tw": "移軸鏡頭", en: "Tilt-shift Lens" },
      { "zh-tw": "微距鏡頭", en: "Macro Lens" }
    ]
  },
  school_uniform: {
    label: { "zh-tw": "校服樣式", en: "School Uniform" },
    category: "item",
    options: [
      { "zh-tw": "傳統水手服校服", en: "Traditional Sailor Uniform" },
      { "zh-tw": "灰色開襟和格子裙校服", en: "Grey cardigan and plaid skirt uniform" },
      { "zh-tw": "英倫風百褶裙校服", en: "British style pleated skirt uniform" },
      { "zh-tw": "日系JK制服", en: "Japanese JK Uniform" },
      { "zh-tw": "運動校服", en: "Tracksuit School Uniform" },
      { "zh-tw": "冬季大衣校服", en: "Winter coat school uniform" }
    ]
  },
  urban_location: {
    label: { "zh-tw": "城市地點", en: "Urban Location" },
    category: "location",
    options: [
      { "zh-tw": "澀谷十字路口", en: "Shibuya Crossing" },
      { "zh-tw": "東京塔下", en: "Under Tokyo Tower" },
      { "zh-tw": "時代廣場", en: "Times Square" },
      { "zh-tw": "艾菲爾鐵塔旁", en: "By the Eiffel Tower" },
      { "zh-tw": "中央公園", en: "Central Park" },
      { "zh-tw": "北京王府井", en: "Beijing Wangfujing" },
      { "zh-tw": "上海外灘", en: "Shanghai Bund" },
      { "zh-tw": "香港維多利亞港", en: "Hong Kong Victoria Harbour" }
    ]
  },
  dynamic_action: {
    label: { "zh-tw": "動態動作", en: "Dynamic Action" },
    category: "action",
    options: [
      { "zh-tw": "一隻手誇張地伸向鏡頭前景", en: "One hand exaggeratedly reaching towards the foreground" },
      { "zh-tw": "雙臂張開擁抱天空", en: "Arms open wide embracing the sky" },
      { "zh-tw": "旋轉跳躍", en: "Spinning and jumping" },
      { "zh-tw": "奔跑前進", en: "Running forward" },
      { "zh-tw": "蹲下撿拾", en: "Squatting down to pick up" },
      { "zh-tw": "揮手致意", en: "Waving greeting" },
      { "zh-tw": "舞蹈姿勢", en: "Dance pose" },
      { "zh-tw": "比心手勢", en: "Heart gesture" }
    ]
  },
  action_status: {
    label: { "zh-tw": "行為狀態", en: "Action Status" },
    category: "action",
    options: [
      { "zh-tw": "玩PS5", en: "playing PS5" },
      { "zh-tw": "彈吉他", en: "playing the guitar" },
      { "zh-tw": "在電腦前寫程式碼", en: "coding in front of a computer" },
      { "zh-tw": "拿著香蕉在畫畫", en: "painting with a banana" },
      { "zh-tw": "穿潛水腳蹼", en: "putting on diving fins" },
      { "zh-tw": "正在調酒", en: "mixing a cocktail" },
      { "zh-tw": "在看一本厚厚的舊書", en: "reading a thick old book" },
      { "zh-tw": "在修剪巨大的室內綠植", en: "trimming a giant indoor plant" },
      { "zh-tw": "正在閱讀書籍", en: "reading a book" },
      { "zh-tw": "整理衣領時自信地看向鏡頭", en: "looking confidently into the lens while adjusting collar" },
      { "zh-tw": "溫柔地凝視著鏡頭，帶著淡淡的憂鬱", en: "Looking gently toward the camera, with a touch of melancholy" }
    ]
  },
  draw_style: {
    label: { "zh-tw": "繪畫風格", en: "Drawing Style" },
    category: "visual",
    options: [
      { "zh-tw": "手繪漫畫風格", en: "Hand-drawn Manga Style" },
      { "zh-tw": "Disney手繪草稿風格", en: "Disney Hand-drawn Sketch Style" },
      { "zh-tw": "吉卜力手繪風格", en: "Ghibli Hand-drawn Style" },
      { "zh-tw": "美式漫畫風格", en: "American Comic Style" }
    ]
  },
  fingernail_detail: {
    label: { "zh-tw": "手指甲細節", en: "Fingernail Detail" },
    category: "visual",
    options: [
      { "zh-tw": "手指甲清晰可見", en: "Fingernails clearly visible" },
      { "zh-tw": "塗有鮮豔指甲油", en: "Coated with bright nail polish" },
      { "zh-tw": "自然裸色指甲", en: "Natural nude nails" },
      { "zh-tw": "裝飾有鑽石指甲", en: "Decorated with diamond nails" },
      { "zh-tw": "漸變色指甲", en: "Gradient nails" },
      { "zh-tw": "藝術圖案指甲", en: "Artistic pattern nails" }
    ]
  },
  building_cluster: {
    label: { "zh-tw": "建築群", en: "Building Cluster" },
    category: "location",
    options: [
      { "zh-tw": "扭曲的澀谷109大樓和其他建築林立", en: "Distorted Shibuya 109 building and other forest of buildings" },
      { "zh-tw": "紐約摩天大樓群", en: "New York skyscraper cluster" },
      { "zh-tw": "巴黎古典建築", en: "Parisian classical architecture" },
      { "zh-tw": "上海現代高層建築", en: "Shanghai modern high-rise buildings" },
      { "zh-tw": "東京傳統寺廟與現代建築混合", en: "Mix of traditional Tokyo temples and modern architecture" },
      { "zh-tw": "倫敦金融城高樓", en: "City of London high-rises" }
    ]
  },
  monster_element: {
    label: { "zh-tw": "怪獸元素", en: "Monster Element" },
    category: "character",
    options: [
      { "zh-tw": "巨大的粉色和藍色漸變卡通怪獸", en: "Giant pink and blue gradient cartoon monster" },
      { "zh-tw": "機械機器人怪獸", en: "Mecha robot monster" },
      { "zh-tw": "神話傳說中的龍", en: "Legendary dragon" },
      { "zh-tw": "外星生物", en: "Alien creature" },
      { "zh-tw": "海洋深淵巨獸", en: "Deep sea behemoth" },
      { "zh-tw": "森林精靈", en: "Forest elf" }
    ]
  },
  monster_feature: {
    label: { "zh-tw": "怪獸特徵", en: "Monster Feature" },
    category: "character",
    options: [
      { "zh-tw": "巨大的觸手和角", en: "Giant tentacles and horns" },
      { "zh-tw": "鋒利的爪子和牙齒", en: "Sharp claws and teeth" },
      { "zh-tw": "多彩的翅膀", en: "Colorful wings" },
      { "zh-tw": "發光的眼睛", en: "Glowing eyes" },
      { "zh-tw": "金屬外殼", en: "Metal shell" },
      { "zh-tw": "藤蔓植物", en: "Vining plants" }
    ]
  },
  distorted_city: {
    label: { "zh-tw": "扭曲城市", en: "Distorted City" },
    category: "location",
    options: [
      { "zh-tw": "扭曲的城市景觀", en: "Distorted urban landscape" },
      { "zh-tw": "鏡面反射的城市", en: "Specularly reflected city" },
      { "zh-tw": "夢幻泡泡中的城市", en: "City inside dream bubbles" },
      { "zh-tw": "像素化的城市", en: "Pixelated city" },
      { "zh-tw": "水墨畫風格的城市", en: "Ink-wash style city" },
      { "zh-tw": "未來科幻城市", en: "Future sci-fi city" }
    ]
  },
  lighting_atmosphere: {
    label: { "zh-tw": "燈光氛圍", en: "Lighting Atmosphere" },
    category: "visual",
    options: [
      { "zh-tw": "陽光明媚", en: "Sunny" },
      { "zh-tw": "月光皎潔", en: "Bright moonlight" },
      { "zh-tw": "霓虹燈閃爍", en: "Flickering neon lights" },
      { "zh-tw": "燭光搖曳", en: "Flickering candlelight" },
      { "zh-tw": "舞台聚光燈", en: "Stage spotlights" },
      { "zh-tw": "自然晨光", en: "Natural morning light" },
      { "zh-tw": "夕陽餘暉", en: "Sunset afterglow" },
      { "zh-tw": "室內暖光", en: "Indoor warm light" }
    ]
  },
  shadow_contrast: {
    label: { "zh-tw": "陰影對比", en: "Shadow Contrast" },
    category: "visual",
    options: [
      { "zh-tw": "光影對比強烈", en: "Strong light-shadow contrast" },
      { "zh-tw": "柔和的陰影", en: "Soft shadows" },
      { "zh-tw": "戲劇性陰影", en: "Dramatic shadows" },
      { "zh-tw": "無陰影平光", en: "No-shadow flat lighting" },
      { "zh-tw": "輪廓光", en: "Rim lighting" },
      { "zh-tw": "背光剪影", en: "Backlit silhouette" }
    ]
  },
  travel_location: {
    label: { "zh-tw": "旅遊地點", en: "Travel Location" },
    category: "location",
    options: [
      { "zh-tw": "西藏拉薩布達拉宮", en: "Potala Palace, Lhasa, Tibet" },
      { "zh-tw": "湖南林中小寨", en: "Forest Village in Hunan" },
      { "zh-tw": "東北雪鄉", en: "Snow Village in Northeast China" },
      { "zh-tw": "老北京胡同", en: "Old Beijing Hutongs" },
      { "zh-tw": "雲南大理洱海", en: "Erhai Lake, Dali, Yunnan" },
      { "zh-tw": "新疆喀納斯湖", en: "Kanas Lake, Xinjiang" },
      { "zh-tw": "四川九寨溝", en: "Jiuzhaigou, Sichuan" },
      { "zh-tw": "桂林漓江", en: "Li River, Guilin" },
      { "zh-tw": "張家界天門山", en: "Tianmen Mountain, Zhangjiajie" },
      { "zh-tw": "敦煌莫高窟", en: "Mogao Grottoes, Dunhuang" },
      { "zh-tw": "內蒙古呼倫貝爾草原", en: "Hulunbuir Grassland, Inner Mongolia" },
      { "zh-tw": "台灣日月潭", en: "Sun Moon Lake, Taiwan" }
    ]
  },
  comic_scene: {
    label: { "zh-tw": "漫畫場景", en: "Comic Scene" },
    category: "location",
    options: [
      { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
      { "zh-tw": "繁華的街頭", en: "Busy street" },
      { "zh-tw": "溫馨的教室", en: "Cozy classroom" },
      { "zh-tw": "現代咖啡廳", en: "Modern cafe" },
      { "zh-tw": "公園長椅", en: "Park bench" },
      { "zh-tw": "圖書館角落", en: "Library corner" },
      { "zh-tw": "藝術工作室", en: "Art studio" },
      { "zh-tw": "屋頂天台", en: "Rooftop" },
      { "zh-tw": "火車站月臺", en: "Railway platform" },
      { "zh-tw": "書店一角", en: "Bookstore corner" }
    ]
  },
  designer: {
    label: { "zh-tw": "設計師", en: "Designer" },
    category: "character",
    options: [
      { "zh-tw": "安東尼·高迪 (Antoni Gaudí)", en: "Antoni Gaudí" },
      { "zh-tw": "Jonathan Ive (Jony Ive)", en: "Jonathan Ive" },
      { "zh-tw": "Gio Ponti", en: "Gio Ponti" },
      { "zh-tw": "迪特·拉姆斯 (Dieter Rams)", en: "Dieter Rams" },
      { "zh-tw": "菲利普·史塔克 (Philippe Starck)", en: "Philippe Starck" },
      { "zh-tw": "原研哉 (Kenya Hara)", en: "Kenya Hara" },
      { "zh-tw": "深澤直人 (Naoto Fukasawa)", en: "Naoto Fukasawa" },
      { "zh-tw": "薩哈·哈蒂 (Zaha Hadid)", en: "Zaha Hadid" },
      { "zh-tw": "馬克·紐森 (Marc Newson)", en: "Marc Newson" },
      { "zh-tw": "湯姆·迪克森 (Tom Dixon)", en: "Tom Dixon" },
      { "zh-tw": "賈斯珀·莫里森 (Jasper Morrison)", en: "Jasper Morrison" },
      { "zh-tw": "康斯坦丁·葛切奇 (Konstantin Grcic)", en: "Konstantin Grcic" }
    ]
  },
  design_item: {
    label: { "zh-tw": "設計物品", en: "Design Item" },
    category: "item",
    options: [
      { "zh-tw": "無人機", en: "Drone" },
      { "zh-tw": "撞球桌", en: "Pool table" },
      { "zh-tw": "拖拉機", en: "Tractor" },
      { "zh-tw": "機械鍵盤", en: "Mechanical keyboard" },
      { "zh-tw": "復古打字機", en: "Vintage typewriter" },
      { "zh-tw": "單眼相機", en: "DSLR camera" },
      { "zh-tw": "掃地機器人", en: "Robot vacuum" },
      { "zh-tw": "咖啡機", en: "Coffee machine" },
      { "zh-tw": "檯燈", en: "Desk lamp" },
      { "zh-tw": "椅子", en: "Chair" },
      { "zh-tw": "音響系統", en: "Sound system" },
      { "zh-tw": "手錶", en: "Watch" },
      { "zh-tw": "自行車", en: "Bicycle" },
      { "zh-tw": "電動滑板車", en: "Electric scooter" },
      { "zh-tw": "藍牙耳機", en: "Bluetooth headphones" },
      { "zh-tw": "智慧音箱", en: "Smart speaker" },
      { "zh-tw": "刮鬍刀", en: "Razor" },
      { "zh-tw": "電風扇", en: "Electric fan" },
      { "zh-tw": "水壺", en: "Kettle" }
    ]
  },
  rain_shape: {
    label: { "zh-tw": "雨水形象", en: "Rain Shape" },
    category: "visual",
    options: [
      { "zh-tw": "芭蕾舞者", en: "Ballerina" },
      { "zh-tw": "飛舞的蝴蝶", en: "Flying butterfly" },
      { "zh-tw": "奔跑的駿馬", en: "Running steed" },
      { "zh-tw": "綻放的蓮花", en: "Blooming lotus" },
      { "zh-tw": "輕盈的羽毛", en: "Light feather" },
      { "zh-tw": "靈動的音符", en: "Lively musical note" }
    ]
  },
  fruit: {
    label: { "zh-tw": "水果", en: "Fruit" },
    category: "item",
    options: [
      { "zh-tw": "獼猴桃", en: "Kiwi" },
      { "zh-tw": "橙子", en: "Orange" },
      { "zh-tw": "蘋果", en: "Apple" },
      { "zh-tw": "草莓", en: "Strawberry" },
      { "zh-tw": "檸檬", en: "Lemon" },
      { "zh-tw": "葡萄", en: "Grape" },
      { "zh-tw": "芒果", en: "Mango" },
      { "zh-tw": "椰子", en: "Coconut" }
    ]
  },
  xmas_theme: {
    label: { "zh-tw": "聖誕主題", en: "Christmas Theme" },
    category: "other",
    options: [
      { "zh-tw": "抽象聖誕樹", en: "an abstract Christmas Tree" },
      { "zh-tw": "聖誕雪花", en: "Christmas snowflake" },
      { "zh-tw": "馴鹿與森林", en: "Reindeer and forest" },
      { "zh-tw": "聖誕裝飾球", en: "Christmas ornaments" },
      { "zh-tw": "聖誕薑餅屋", en: "Christmas gingerbread house" }
    ]
  },
  jewelry_style: {
    label: { "zh-tw": "珠寶樣式", en: "Jewelry Style" },
    category: "item",
    options: [
      { "zh-tw": "精美的金色背鏈", en: "Fine gold back necklace" },
      { "zh-tw": "簡約銀色鏈條", en: "Minimalist silver chain" },
      { "zh-tw": "珍珠身體鏈", en: "Pearl body chain" },
      { "zh-tw": "鑽石露背項鍊", en: "Diamond back drop necklace" },
      { "zh-tw": "祖母綠吊墜背鏈", en: "Emerald pendant back necklace" }
    ]
  },
  flower_type: {
    label: { "zh-tw": "花卉品種", en: "Flower Type" },
    category: "item",
    options: [
      { "zh-tw": "一束深紅色玫瑰", en: "A bouquet of deep red roses" },
      { "zh-tw": "優雅的白色馬蹄蓮", en: "Elegant white calla lilies" },
      { "zh-tw": "淡粉色牡丹", en: "Pale pink peonies" },
      { "zh-tw": "名貴的深色蘭花", en: "Exotic dark orchids" },
      { "zh-tw": "乾枯的桉樹葉", en: "Dried eucalyptus leaves" },
      { "zh-tw": "鮮豔的向日葵", en: "Vibrant sunflowers" },
      { "zh-tw": "白色和淡桃色花瓣在空中飄落", en: "White and pale peach flower petals drifting through the air" }
    ]
  },
  character_type_pixar: {
    label: { "zh-tw": "角色模式", en: "Character Mode" },
    category: "character",
    options: [
      { "zh-tw": "單人角色：聚焦於個人生活方式", en: "Single: Focus on personal lifestyle" },
      { "zh-tw": "情侶角色：每人18件物品，用愛心符號連線，冷暖對比", en: "Couple: 18 items each, heart connectors, contrast" },
      { "zh-tw": "孕婦角色：包含孕期用品、嬰兒圖標及B超照片", en: "Pregnant: Includes pregnancy items, baby icons, ultrasound" },
      { "zh-tw": "親子角色：包含成人與兒童用品，體現家庭溫馨", en: "Family: Includes adult and child items, family warmth" }
    ]
  },
  theme_pixar: {
    label: { "zh-tw": "配色主題", en: "Theme & Color" },
    category: "visual",
    options: [
      { "zh-tw": "女性/時尚主題：香檳金、玫瑰金、奶油色、櫻花粉", en: "Female/Fashion: Champagne Gold, Rose Gold, Cream, Cherry Pink" },
      { "zh-tw": "男性/科技主題：鋼藍色、深灰色、電光藍、銀色", en: "Male/Tech: Steel Blue, Dark Grey, Electric Blue, Silver" },
      { "zh-tw": "正式/奢華主題：純黑、24K金、深紅色、象牙白", en: "Formal/Luxury: Pure Black, 24K Gold, Deep Red, Ivory White" },
      { "zh-tw": "情侶/對比主題：冷暖色調對比", en: "Couple/Contrast: Contrast of warm and cool tones" }
    ]
  },
  item_layout_pixar: {
    label: { "zh-tw": "物品佈局", en: "Item Layout" },
    category: "visual",
    options: [
      { "zh-tw": "90度直角整齊排列 (Knolling)", en: "90-degree Knolling layout" },
      { "zh-tw": "放射式構圖 (Radial)", en: "Radial composition" },
      { "zh-tw": "階梯式錯落佈局 (Step)", en: "Step-like staggered layout" },
      { "zh-tw": "網格對稱佈局 (Grid)", en: "Grid symmetrical layout" }
    ]
  },
  fashion_parts: {
    label: { "zh-tw": "時尚穿搭拆解", en: "Fashion Deconstruction" },
    category: "item",
    options: [
      { "zh-tw": "風衣拆解：翻領、肩章、腰帶、袖口束帶、主衣身", en: "Trench coat: Lapel, epaulets, belt, cuffs, main body" },
      { "zh-tw": "西裝拆解：駁領、口袋、內襯、袖釦、墊肩", en: "Suit: Lapel, pockets, lining, cufflinks, shoulder pads" },
      { "zh-tw": "運動鞋拆解：鞋底、鞋面、鞋帶、氣墊、鞋墊", en: "Sneakers: Sole, upper, laces, air cushion, insole" },
      { "zh-tw": "連衣裙拆解：蕾絲邊、拉鍊、腰部剪裁、裙襬、領口", en: "Dress: Lace trim, zipper, waist cut, hem, neckline" },
      { "zh-tw": "包袋拆解：五金鎖釦、肩帶、內袋、縫線細節、手柄", en: "Bag: Metal lock, strap, inner pocket, stitching, handle" }
    ]
  },
  beauty_items: {
    label: { "zh-tw": "美妝個護拆解", en: "Beauty Deconstruction" },
    category: "item",
    options: [
      { "zh-tw": "彩妝：口紅（帶切面）、眼影盤、粉餅、腮紅刷", en: "Makeup: Lipstick (cut), eyeshadow palette, compact, blush brush" },
      { "zh-tw": "護膚：精華液瓶、面霜罐、美容儀、面膜", en: "Skincare: Serum bottle, cream jar, beauty device, mask" },
      { "zh-tw": "香氛：香水瓶（帶液體折射）、香薰蠟燭、擴香器", en: "Fragrance: Perfume bottle (refraction), scented candle, diffuser" },
      { "zh-tw": "洗護：洗面奶、爽膚水、卸妝油、潔面儀", en: "Cleansing: Cleanser, toner, cleansing oil, facial device" }
    ]
  },
  digital_items: {
    label: { "zh-tw": "數碼生活拆解", en: "Digital Deconstruction" },
    category: "item",
    options: [
      { "zh-tw": "手機拆解：手機殼、螢幕內容、攝像頭模組、主板元件", en: "Phone: Case, screen content, camera module, motherboard" },
      { "zh-tw": "相機拆解：鏡頭組、機身、閃光燈、儲存卡、肩帶", en: "Camera: Lens set, body, flash, memory card, strap" },
      { "zh-tw": "影音：無線耳機、智慧手錶、平板電腦、藍牙音箱", en: "Audio: Wireless headphones, smartwatch, tablet, speaker" },
      { "zh-tw": "辦公：筆記本電腦、鍵盤軸體、滑鼠、手繪板", en: "Office: Laptop, keyboard switches, mouse, drawing tablet" }
    ]
  },
  underwater_color: {
    label: { "zh-tw": "水下色調", en: "Underwater Color" },
    category: "location",
    options: [
      { "zh-tw": "深青色透明水下", en: "deep teal transparent underwater" },
      { "zh-tw": "晶瑩剔透的淺藍色", en: "crystal clear light blue" },
      { "zh-tw": "神秘的深海藍", en: "mysterious deep sea blue" },
      { "zh-tw": "夢幻的翡翠綠", en: "dreamy emerald green" }
    ]
  },
  creatures: {
    label: { "zh-tw": "伴隨生物", en: "Creatures" },
    category: "character",
    options: [
      { "zh-tw": "許多銀色小魚", en: "many small silver fish" },
      { "zh-tw": "發光的水母", en: "glowing jellyfish" },
      { "zh-tw": "五彩斑斕的熱帶魚", en: "colorful tropical fish" },
      { "zh-tw": "巨大的藍鯨(背景)", en: "a giant blue whale in the background" }
    ]
  },
  luxury_hobby_items: {
    label: { "zh-tw": "個人愛好/奢華", en: "Hobby & Luxury" },
    category: "item",
    options: [
      { "zh-tw": "珠寶：項鍊、耳環、戒指（寶石帶色散效果）", en: "Jewelry: Necklace, earrings, ring (gemstone dispersion)" },
      { "zh-tw": "藝術：畫筆、調色盤、素描本、顏料軟管", en: "Art: Brushes, palette, sketchbook, paint tubes" },
      { "zh-tw": "生活：咖啡機、磨豆機、高檔手辦元件、限量書籍", en: "Life: Coffee machine, grinder, high-end figure parts, limited books" },
      { "zh-tw": "運動：網球拍、滑板、滑雪鏡、運動相機、水壺", en: "Sports: Tennis racket, skateboard, ski goggles, action cam, bottle" }
    ]
  },
  // 新年海報相關詞庫
  clothing_style_chinese: {
    label: { "zh-tw": "中式服飾風格", en: "Chinese Clothing Style" },
    category: "item",
    options: [
      { "zh-tw": "傳統暗紅色中式長袍", en: "Traditional dark red Chinese robe" },
      { "zh-tw": "古典紅色漢服", en: "Classical red Hanfu" },
      { "zh-tw": "傳統金色龍袍", en: "Traditional golden dragon robe" },
      { "zh-tw": "深紫色唐裝", en: "Deep purple Tang suit" },
      { "zh-tw": "寶藍色旗袍", en: "Sapphire blue Qipao" },
      { "zh-tw": "墨綠色傳統長衫", en: "Dark green traditional long gown" },
      { "zh-tw": "硃紅色將軍戰袍", en: "Vermilion general's battle robe" },
      { "zh-tw": "紫金色錦緞華服", en: "Purple-gold brocade noble attire" }
    ]
  },
  clothing_color_traditional: {
    label: { "zh-tw": "傳統服裝顏色", en: "Traditional Clothing Color" },
    category: "visual",
    options: [
      { "zh-tw": "暗紅色", en: "Dark Red" },
      { "zh-tw": "硃紅色", en: "Vermilion" },
      { "zh-tw": "寶藍色", en: "Sapphire Blue" },
      { "zh-tw": "金黃色", en: "Golden Yellow" },
      { "zh-tw": "紫金色", en: "Purple Gold" },
      { "zh-tw": "墨綠色", en: "Dark Green" },
      { "zh-tw": "深紫色", en: "Deep Purple" },
      { "zh-tw": "玄黑色", en: "Mystic Black" }
    ]
  },
  year_number: {
    label: { "zh-tw": "年份", en: "Year" },
    category: "other",
    options: [
      { "zh-tw": "2025", en: "2025" },
      { "zh-tw": "2026", en: "2026" },
      { "zh-tw": "2027", en: "2027" },
      { "zh-tw": "2028", en: "2028" },
      { "zh-tw": "2029", en: "2029" },
      { "zh-tw": "2030", en: "2030" }
    ]
  },
  greeting_new_year: {
    label: { "zh-tw": "新年祝福語", en: "New Year Greeting" },
    category: "other",
    options: [
      { "zh-tw": "馬到成功", en: "Immediate Success" },
      { "zh-tw": "龍馬精神", en: "Vigorous Spirit" },
      { "zh-tw": "馬不停蹄", en: "Unremitting Efforts" },
      { "zh-tw": "一馬當先", en: "Take the Lead" },
      { "zh-tw": "龍騰虎躍", en: "Dragon Soaring and Tiger Leaping" },
      { "zh-tw": "新年快樂", en: "Happy New Year" },
      { "zh-tw": "萬事如意", en: "May All Go Well" },
      { "zh-tw": "恭喜發財", en: "Wishing You Prosperity" }
    ]
  },
  background_color_festive: {
    label: { "zh-tw": "節日背景顏色", en: "Festive Background Color" },
    category: "visual",
    options: [
      { "zh-tw": "紅色背景", en: "Red background" },
      { "zh-tw": "金色背景", en: "Gold background" },
      { "zh-tw": "紅金漸變背景", en: "Red-gold gradient background" },
      { "zh-tw": "深紅背景", en: "Deep red background" },
      { "zh-tw": "硃紅背景", en: "Vermilion background" },
      { "zh-tw": "暖橙紅背景", en: "Warm orange-red background" }
    ]
  },
  // 社交媒體背景顏色（用於社交卡片樣板）
  social_bg_color: {
    label: { "zh-tw": "社交媒體背景色", en: "Social Media Background Color" },
    category: "visual",
    options: [
      { "zh-tw": "粉色和勃艮第紅", en: "pink and burgundy" },
      { "zh-tw": "薄荷綠和珊瑚色", en: "mint green and coral" },
      { "zh-tw": "淡紫色和薰衣草色", en: "lavender and lilac" },
      { "zh-tw": "天藍色和白色", en: "sky blue and white" },
      { "zh-tw": "金色和奶油色", en: "gold and cream" },
      { "zh-tw": "黑色和霓虹粉", en: "black and neon pink" },
      { "zh-tw": "橙色和青色漸變", en: "orange and cyan gradient" },
      { "zh-tw": "綠色和黃色搭配", en: "green and yellow combo" },
      { "zh-tw": "藍色和紫色混搭", en: "blue and purple mix" },
      { "zh-tw": "紅色和金色搭配", en: "red and gold combo" }
    ]
  },
  // 社交媒體使用者名（用於社交卡片樣板）
  social_profile_name: {
    label: { "zh-tw": "社交媒體使用者名", en: "Social Media Profile Name" },
    category: "other",
    options: [
      { "zh-tw": "@RealMe+", en: "@RealMe+" },
      { "zh-tw": "@PromptFill", en: "@PromptFill" },
      { "zh-tw": "@CreativeAI", en: "@CreativeAI" },
      { "zh-tw": "@ArtLover", en: "@ArtLover" },
      { "zh-tw": "@DesignPro", en: "@DesignPro" },
      { "zh-tw": "@VisualArtist", en: "@VisualArtist" },
      { "zh-tw": "@PhotoMaster", en: "@PhotoMaster" },
      { "zh-tw": "@StudioX", en: "@StudioX" },
      { "zh-tw": "@CreativeMind", en: "@CreativeMind" },
      { "zh-tw": "@DigitalCreator", en: "@DigitalCreator" }
    ]
  },
  // 人物型別（用於社交卡片樣板）
  character_type: {
    label: { "zh-tw": "人物型別", en: "Character Type" },
    category: "character",
    options: [
      { "zh-tw": "女性", en: "woman" },
      { "zh-tw": "男性", en: "man" },
      { "zh-tw": "女孩", en: "girl" },
      { "zh-tw": "男孩", en: "boy" },
      { "zh-tw": "少女", en: "teenage girl" },
      { "zh-tw": "少年", en: "teenage boy" },
      { "zh-tw": "兒童", en: "child" },
      { "zh-tw": "嬰兒", en: "baby" },
      { "zh-tw": "老人", en: "elderly person" },
      { "zh-tw": "年輕人", en: "young person" }
    ]
  },
  // 裝扮材質（用於地鐵玩偶裝扮樣板）
  costume_material: {
    label: { "zh-tw": "裝扮材質", en: "Costume Material" },
    category: "item",
    options: [
      { "zh-tw": "羊毛", en: "wool" },
      { "zh-tw": "絨毛", en: "plush" },
      { "zh-tw": "棉質", en: "cotton" },
      { "zh-tw": "絲綢", en: "silk" },
      { "zh-tw": "天鵝絨", en: "velvet" },
      { "zh-tw": "人造毛皮", en: "faux fur" },
      { "zh-tw": "緞面", en: "satin" },
      { "zh-tw": "牛仔布", en: "denim" },
      { "zh-tw": "針織面料", en: "knit fabric" },
      { "zh-tw": "亞麻", en: "linen" }
    ]
  },
  // 地鐵裝扮型別（用於地鐵玩偶裝扮樣板）
  subway_costume: {
    label: { "zh-tw": "地鐵裝扮型別", en: "Subway Costume Type" },
    category: "character",
    options: [
      { "zh-tw": "粉色羊毛兔子裝扮", en: "Pink wool rabbit costume" },
      { "zh-tw": "黃色小雞裝扮", en: "Yellow chick costume" },
      { "zh-tw": "棕色泰迪熊裝扮", en: "Brown teddy bear costume" },
      { "zh-tw": "白色熊貓裝扮", en: "White panda costume" },
      { "zh-tw": "橙色狐狸裝扮", en: "Orange fox costume" },
      { "zh-tw": "灰色貓咪裝扮", en: "Grey cat costume" },
      { "zh-tw": "藍色河馬裝扮", en: "Blue hippo costume" },
      { "zh-tw": "綠色恐龍裝扮", en: "Green dinosaur costume" },
      { "zh-tw": "紫色獨角獸裝扮", en: "Purple unicorn costume" },
      { "zh-tw": "彩虹色小馬裝扮", en: "Rainbow pony costume" }
    ]
  },
  // 車廂型別（用於地鐵玩偶裝扮樣板）
  location: {
    label: { "zh-tw": "車廂型別", en: "Carriage Type" },
    category: "location",
    options: [
      { "zh-tw": "日本地鐵", en: "Japanese subway" },
      { "zh-tw": "韓國地鐵", en: "Korean subway" },
      { "zh-tw": "北京地鐵", en: "Beijing subway" },
      { "zh-tw": "上海地鐵", en: "Shanghai subway" },
      { "zh-tw": "倫敦地鐵", en: "London Underground" },
      { "zh-tw": "紐約地鐵", en: "New York subway" },
      { "zh-tw": "巴黎地鐵", en: "Paris Metro" },
      { "zh-tw": "輕軌車廂", en: "Light rail carriage" },
      { "zh-tw": "高鐵車廂", en: "High-speed rail carriage" },
      { "zh-tw": "普通列車車廂", en: "Regular train carriage" }
    ]
  },
  // 頭飾配飾（用於地鐵玩偶裝扮樣板）
  accessory: {
    label: { "zh-tw": "頭飾配飾", en: "Head Accessory" },
    category: "item",
    options: [
      { "zh-tw": "粉色花朵髮夾", en: "pink flower hair clip" },
      { "zh-tw": "藍色蝴蝶結", en: "blue butterfly bow" },
      { "zh-tw": "紅色髮帶", en: "red hair band" },
      { "zh-tw": "小皇冠", en: "small crown" },
      { "zh-tw": "貓咪耳朵", en: "cat ears" },
      { "zh-tw": "兔耳朵", en: "rabbit ears" },
      { "zh-tw": "髮箍", en: "headband" },
      { "zh-tw": "鴨舌帽", en: "baseball cap" },
      { "zh-tw": "針織帽", en: "beanie hat" },
      { "zh-tw": "耳機", en: "headphones" }
    ]
  },
  character_heroic: {
    label: { "zh-tw": "人物型別", en: "Character Type" },
    category: "character",
    options: [
      { "zh-tw": "年輕學生", en: "Young Student" },
      { "zh-tw": "都市白領", en: "Urban Professional" },
      { "zh-tw": "文藝青年", en: "Artistic Youth" },
      { "zh-tw": "普通上班族", en: "Office Worker" },
      { "zh-tw": "威武將軍", en: "Mighty General" },
      { "zh-tw": "英勇武者", en: "Brave Warrior" },
      { "zh-tw": "傳奇英雄", en: "Legendary Hero" },
      { "zh-tw": "武俠高手", en: "Martial Arts Master" }
    ]
  },
  room_style_cute: {
    label: { "zh-tw": "可愛房間風格", en: "Cute Room Style" },
    category: "location",
    options: [
      { "zh-tw": "可愛粉色房間，粉彩床和牆壁，原創動物玩偶，妖精燈光，可愛海報，絨毛地毯", en: "Cute pink room, pastel pink bed and walls, original cute animal plushies, fairy lights, cute posters, fluffy rug" },
      { "zh-tw": "簡約白色房間，白色傢俱，綠植，自然光，木質地板", en: "Minimalist white room, white furniture, plants, natural light, wooden floor" },
      { "zh-tw": "復古粉色房間，復古傢俱，絲絨窗簾，古典裝飾，溫暖氛圍", en: "Vintage pink room, vintage furniture, velvet curtains, classic decor, warm atmosphere" },
      { "zh-tw": "夢幻紫色房間，紫色床單，星星燈串，夢幻壁紙，柔軟地毯", en: "Dreamy purple room, purple sheets, star lights, dreamy wallpaper, soft carpet" },
      { "zh-tw": "清新藍色房間，藍色床品，海洋裝飾，貝殼元素，清爽感覺", en: "Fresh blue room, blue bedding, ocean decor, shell elements, refreshing feel" },
      { "zh-tw": "溫暖橙色房間，橙色傢俱，陽光充足，活力裝飾，舒適地毯", en: "Warm orange room, orange furniture, abundant sunlight, energetic decor, cozy rug" },
      { "zh-tw": "北歐風格房間，灰色床品，簡約設計，自然材質，柔和燈光", en: "Nordic style room, grey bedding, minimalist design, natural materials, soft lighting" },
      { "zh-tw": "日式和風房間，榻榻米，紙燈籠，竹子裝飾，禪意氛圍", en: "Japanese style room, tatami, paper lanterns, bamboo decor, zen atmosphere" }
    ]
  },
  cute_outfit: {
    label: { "zh-tw": "可愛服裝", en: "Cute Outfit" },
    category: "item",
    options: [
      { "zh-tw": "黑色緊身吊帶連衣裙，長度到臀部，無袖，細肩帶", en: "Black tight camisole dress, hip-length, sleeveless, thin straps" },
      { "zh-tw": "白色蕾絲連衣裙，及膝長度，短袖，優雅設計", en: "White lace dress, knee-length, short sleeves, elegant design" },
      { "zh-tw": "粉色學院風制服，百褶裙，領結，長袖襯衫", en: "Pink school uniform, pleated skirt, bow tie, long-sleeved shirt" },
      { "zh-tw": "藍色吊帶裙，A字型，及膝長度，夏天風格", en: "Blue spaghetti strap dress, A-line, knee-length, summer style" },
      { "zh-tw": "紅色緊身連衣裙，高領，長袖，修身設計", en: "Red tight dress, high neck, long sleeves, slim-fit design" },
      { "zh-tw": "黃色揹帶褲裙，可愛風格，短款，休閒設計", en: "Yellow overall dress, cute style, short length, casual design" },
      { "zh-tw": "紫色睡裙，絲綢材質，吊帶，舒適款", en: "Purple nightgown, silk material, spaghetti straps, comfortable style" },
      { "zh-tw": "格子圖案連衣裙，英倫風格，及膝，長袖", en: "Plaid dress, British style, knee-length, long sleeves" }
    ]
  },
  product_category: {
    label: { "zh-tw": "產品類別", en: "Product Category" },
    category: "item",
    options: [
      { "zh-tw": "現代椅子", en: "Modern Chair" },
      { "zh-tw": "智慧手錶", en: "Smart Watch" },
      { "zh-tw": "高端耳機", en: "Premium Headphones" },
      { "zh-tw": "設計師檯燈", en: "Designer Lamp" },
      { "zh-tw": "陶瓷器皿", en: "Ceramic Ware" },
      { "zh-tw": "玻璃花瓶", en: "Glass Vase" },
      { "zh-tw": "皮革包袋", en: "Leather Bag" },
      { "zh-tw": "便攜音箱", en: "Portable Speaker" }
    ]
  },
  // 飲料產品專用詞庫
  drink_product: {
    label: { "zh-tw": "飲料產品", en: "Drink Product" },
    category: "item",
    options: [
      { "zh-tw": "芬達軟飲料罐", en: "Fanta softdrink can" },
      { "zh-tw": "可口可樂罐", en: "Coca-Cola can" },
      { "zh-tw": "百事可樂罐", en: "Pepsi cola can" },
      { "zh-tw": "雪碧汽水罐", en: "Sprite soda can" },
      { "zh-tw": "紅牛能量飲料罐", en: "Red Bull energy drink can" },
      { "zh-tw": "啤酒罐", en: "Beer can" },
      { "zh-tw": "橙汁瓶", en: "Orange juice bottle" },
      { "zh-tw": "運動飲料瓶", en: "Sports drink bottle" }
    ]
  },
  drink_action: {
    label: { "zh-tw": "飲料動態", en: "Drink Action" },
    category: "action",
    options: [
      { "zh-tw": "爆炸，橙子從罐中湧出", en: "exploding with oranges bursting from the can" },
      { "zh-tw": "噴濺，水珠四處飛散", en: "splashing with water droplets flying everywhere" },
      { "zh-tw": "溢出，液體從罐口流下", en: "overflowing with liquid pouring from the rim" },
      { "zh-tw": "旋轉，形成漩渦效果", en: "spinning creating a swirling vortex effect" },
      { "zh-tw": "靜止擺放，表面凝結水珠", en: "stationary with condensation droplets on surface" },
      { "zh-tw": "被打開，罐蓋飛起", en: "being opened with tab flying off" },
      { "zh-tw": "被擠壓，變形扭曲", en: "being crushed and deformed" },
      { "zh-tw": "懸浮在空中，周圍有氣泡", en: "floating in air surrounded by bubbles" }
    ]
  },
  drink_background: {
    label: { "zh-tw": "飲料拍攝背景", en: "Drink Photography Background" },
    category: "visual",
    options: [
      { "zh-tw": "橙色背景", en: "orange background" },
      { "zh-tw": "藍色背景", en: "blue background" },
      { "zh-tw": "紅色背景", en: "red background" },
      { "zh-tw": "漸變橙色背景", en: "gradient orange background" },
      { "zh-tw": "漸變藍綠色背景", en: "gradient teal background" },
      { "zh-tw": "純白色背景", en: "pure white background" },
      { "zh-tw": "純黑色背景", en: "pure black background" },
      { "zh-tw": "模糊的城市背景", en: "blurred city background" }
    ]
  },
  drink_camera_angle: {
    label: { "zh-tw": "飲料拍攝角度", en: "Drink Camera Angle" },
    category: "visual",
    options: [
      { "zh-tw": "高角度俯拍橙汁旋轉形成的圓弧", en: "high angle overhead shot capturing the swirling arc of orange juice" },
      { "zh-tw": "低角度英雄鏡頭", en: "low angle heroic shot" },
      { "zh-tw": "平視正面鏡頭", en: "eye-level front shot" },
      { "zh-tw": "側面45度鏡頭", en: "45-degree side angle shot" },
      { "zh-tw": "微距特寫鏡頭", en: "macro close-up shot" },
      { "zh-tw": "鳥瞰俯視鏡頭", en: "bird's eye overhead shot" }
    ]
  },
  // 護膚品廣告專用詞庫
  skincare_product: {
    label: { "zh-tw": "護膚品產品", en: "Skincare Product" },
    category: "item",
    options: [
      { "zh-tw": "精華滴管瓶", en: "serum dropper bottle" },
      { "zh-tw": "面霜罐", en: "cream jar" },
      { "zh-tw": "化妝水瓶", en: "toner bottle" },
      { "zh-tw": "安瓶", en: "ampoule" },
      { "zh-tw": "精華液瓶", en: "essence bottle" },
      { "zh-tw": "眼霜罐", en: "eye cream jar" },
      { "zh-tw": "防曬霜瓶", en: "sunscreen bottle" },
      { "zh-tw": "身體乳瓶", en: "body lotion bottle" }
    ]
  },
  skincare_color: {
    label: { "zh-tw": "護膚品顏色", en: "Skincare Product Color" },
    category: "visual",
    options: [
      { "zh-tw": "粉桃色", en: "pink-peach colored" },
      { "zh-tw": "淡粉色", en: "light pink colored" },
      { "zh-tw": "透明金色", en: "transparent golden colored" },
      { "zh-tw": "淡紫色", en: "light lavender colored" },
      { "zh-tw": "薄荷綠色", en: "mint green colored" },
      { "zh-tw": "透明無色", en: "clear transparent colored" },
      { "zh-tw": "玫瑰粉色", en: "rose pink colored" },
      { "zh-tw": "琥珀色", en: "amber colored" }
    ]
  },
  fantasy_character_pose: {
    label: { "zh-tw": "奇幻人物姿態", en: "Fantasy Character Pose" },
    category: "action",
    options: [
      { "zh-tw": "坐在瓶蓋上", en: "sitting on the bottle cap" },
      { "zh-tw": "漂浮在瓶身旁邊", en: "floating beside the bottle" },
      { "zh-tw": "倚靠在瓶身上", en: "leaning against the bottle" },
      { "zh-tw": "站在瓶蓋邊緣", en: "standing on the edge of the cap" },
      { "zh-tw": "躺在瓶身上", en: "lying on top of the bottle" },
      { "zh-tw": "圍繞瓶子飛舞", en: "dancing around the bottle" },
      { "zh-tw": "坐在漂浮的水果上", en: "sitting on floating fruits" },
      { "zh-tw": "懸停在瓶子上方", en: "hovering above the bottle" }
    ]
  },
  fantasy_floating_elements: {
    label: { "zh-tw": "奇幻漂浮元素", en: "Fantasy Floating Elements" },
    category: "item",
    options: [
      { "zh-tw": "成熟桃子和桃子切片", en: "ripe peaches and peach slices" },
      { "zh-tw": "玫瑰花瓣和花蕾", en: "rose petals and buds" },
      { "zh-tw": "閃亮泡泡和星星", en: "sparkling bubbles and stars" },
      { "zh-tw": "羽毛和絲綢飄帶", en: "feathers and silk ribbons" },
      { "zh-tw": "水果切片和漿果", en: "fruit slices and berries" },
      { "zh-tw": "水珠和冰晶", en: "water droplets and ice crystals" },
      { "zh-tw": "發光光點和火花", en: "glowing light dots and sparkles" },
      { "zh-tw": "雲朵和彩虹碎片", en: "clouds and rainbow fragments" }
    ]
  },
  fantasy_sky_background: {
    label: { "zh-tw": "奇幻天空背景", en: "Fantasy Sky Background" },
    category: "location",
    options: [
      { "zh-tw": "明亮清澈的藍天", en: "bright clear blue sky" },
      { "zh-tw": "柔和粉色日落天空", en: "soft pink sunset sky" },
      { "zh-tw": "夢幻紫色星空", en: "dreamy purple starry sky" },
      { "zh-tw": "溫暖金色日出天空", en: "warm golden sunrise sky" },
      { "zh-tw": "柔和雲層天空", en: "soft cloudy sky" },
      { "zh-tw": "漸變橙粉色天空", en: "gradient orange-pink sky" },
      { "zh-tw": "霧濛濛的晨空", en: "misty morning sky" },
      { "zh-tw": "絢麗極光天空", en: "colorful aurora sky" }
    ]
  },
  pastel_color_palette: {
    label: { "zh-tw": "粉彩色調搭配", en: "Pastel Color Palette" },
    category: "visual",
    options: [
      { "zh-tw": "粉桃色和天藍色", en: "pastel peach and sky blue" },
      { "zh-tw": "淡紫色和粉色", en: "lavender and pink" },
      { "zh-tw": "薄荷綠和黃色", en: "mint green and yellow" },
      { "zh-tw": "玫瑰色和金色", en: "rose and gold" },
      { "zh-tw": "天藍色和白色", en: "sky blue and white" },
      { "zh-tw": "珊瑚色和青色", en: "coral and teal" },
      { "zh-tw": "薰衣草色和奶油色", en: "lavender and cream" },
      { "zh-tw": "粉色和灰色", en: "pink and grey" }
    ]
  },
  fantasy_dress_style: {
    label: { "zh-tw": "奇幻連衣裙風格", en: "Fantasy Dress Style" },
    category: "item",
    options: [
      { "zh-tw": "優雅飄逸的連衣裙", en: "elegant flowing dress" },
      { "zh-tw": "薄紗仙女裙", en: "tulle fairy dress" },
      { "zh-tw": "絲綢禮服裙", en: "silk evening gown" },
      { "zh-tw": "雪紡長裙", en: "chiffon long dress" },
      { "zh-tw": "蕾絲花邊裙", en: "lace dress" },
      { "zh-tw": "花瓣裙", en: "petal dress" },
      { "zh-tw": "閃亮亮片裙", en: "sparkling sequin dress" },
      { "zh-tw": "羽毛裝飾裙", en: "feather-trimmed dress" }
    ]
  },
  environment_style: {
    label: { "zh-tw": "環境風格", en: "Environment Style" },
    category: "location",
    options: [
      { "zh-tw": "極簡建築室內", en: "Minimal Architectural Interior" },
      { "zh-tw": "現代工業空間", en: "Modern Industrial Space" },
      { "zh-tw": "北歐風格房間", en: "Nordic Style Room" },
      { "zh-tw": "現代主義畫廊", en: "Modern Gallery" },
      { "zh-tw": "高端工作室", en: "Premium Studio" },
      { "zh-tw": "極簡主義住宅", en: "Minimalist Residence" },
      { "zh-tw": "建築攝影棚", en: "Architectural Studio" },
      { "zh-tw": "設計展廊", en: "Design Showcase" }
    ]
  },
  primary_material: {
    label: { "zh-tw": "主要材質", en: "Primary Material" },
    category: "item",
    options: [
      { "zh-tw": "木材", en: "Wood" },
      { "zh-tw": "金屬", en: "Metal" },
      { "zh-tw": "皮革", en: "Leather" },
      { "zh-tw": "玻璃", en: "Glass" },
      { "zh-tw": "塑料", en: "Plastic" },
      { "zh-tw": "織物", en: "Fabric" },
      { "zh-tw": "陶瓷", en: "Ceramic" },
      { "zh-tw": "石材", en: "Stone" }
    ]
  },
  drawing_style: {
    label: { "zh-tw": "繪圖風格", en: "Drawing Style" },
    category: "visual",
    options: [
      { "zh-tw": "建築線圖風格", en: "Architectural Line Drawing Style" },
      { "zh-tw": "技術正交繪圖", en: "Technical Orthographic Drawing" },
      { "zh-tw": "工程製圖風格", en: "Engineering Drawing Style" },
      { "zh-tw": "工業設計草圖", en: "Industrial Design Sketch" },
      { "zh-tw": "建築剖面圖", en: "Architectural Section Drawing" },
      { "zh-tw": "產品技術圖紙", en: "Product Technical Drawing" }
    ]
  },
  character_subject: {
    label: { "zh-tw": "人物主體", en: "Character Subject" },
    category: "character",
    options: [
      { "zh-tw": "年輕女性，長髮，微笑", en: "Young woman with long hair, smiling" },
      { "zh-tw": "成熟男性，短髮，嚴肅表情", en: "Mature man with short hair, serious expression" },
      { "zh-tw": "青少年，活潑開朗", en: "Teenager, lively and cheerful" },
      { "zh-tw": "兒童，天真可愛", en: "Child, innocent and cute" },
      { "zh-tw": "老人，慈祥溫和", en: "Elderly person, kind and gentle" },
      { "zh-tw": "時尚女性，精緻妝容", en: "Fashionable woman with exquisite makeup" },
      { "zh-tw": "商務男士，西裝革履", en: "Business man in suit and tie" },
      { "zh-tw": "運動型人物，充滿活力", en: "Athletic person, full of energy" }
    ]
  },
  portrait_view: {
    label: { "zh-tw": "畫面視角", en: "Portrait View" },
    category: "visual",
    options: [
      { "zh-tw": "正面肖像", en: "Front portrait" },
      { "zh-tw": "側面肖像", en: "Side profile portrait" },
      { "zh-tw": "半身像", en: "Half-body shot" },
      { "zh-tw": "全身像", en: "Full-body shot" },
      { "zh-tw": "四分之三側面", en: "Three-quarter view" },
      { "zh-tw": "仰視角度", en: "Low-angle shot" },
      { "zh-tw": "俯視角度", en: "High-angle shot" },
      { "zh-tw": "特寫頭像", en: "Close-up headshot" }
    ]
  },
  line_art_style: {
    label: { "zh-tw": "線稿風格", en: "Line Art Style" },
    category: "visual",
    options: [
      { "zh-tw": "鋼筆墨水風格", en: "Pen and ink style" },
      { "zh-tw": "鉛筆素描風格", en: "Pencil sketch style" },
      { "zh-tw": "炭筆粗獷風格", en: "Charcoal bold style" },
      { "zh-tw": "墨水筆繪風格", en: "Ink pen drawing style" },
      { "zh-tw": "漫畫線條風格", en: "Manga line style" },
      { "zh-tw": "鋼筆淡彩風格", en: "Pen and wash style" },
      { "zh-tw": "蝕刻版畫風格", en: "Etching print style" },
      { "zh-tw": "鋼筆速寫風格", en: "Pen sketch style" }
    ]
  },
  shading_technique: {
    label: { "zh-tw": "陰影技法", en: "Shading Technique" },
    category: "visual",
    options: [
      { "zh-tw": "極簡排線陰影", en: "Minimalist cross-hatching" },
      { "zh-tw": "點畫陰影", en: "Stippling shading" },
      { "zh-tw": "平塗陰影", en: "Flat shading" },
      { "zh-tw": "細緻排線", en: "Detailed cross-hatching" },
      { "zh-tw": "粗線條陰影", en: "Bold line shading" },
      { "zh-tw": "漸變陰影", en: "Gradient shading" },
      { "zh-tw": "無陰影，純輪廓", en: "No shading, outline only" },
      { "zh-tw": "漫畫風格陰影", en: "Comic style shading" }
    ]
  },
  background_treatment: {
    label: { "zh-tw": "背景處理", en: "Background Treatment" },
    category: "location",
    options: [
      { "zh-tw": "白色背景", en: "White background" },
      { "zh-tw": "淺灰背景", en: "Light gray background" },
      { "zh-tw": "簡單幾何背景", en: "Simple geometric background" },
      { "zh-tw": "抽象線條背景", en: "Abstract line background" },
      { "zh-tw": "漫畫速度線", en: "Manga speed lines" },
      { "zh-tw": "點狀紋理背景", en: "Dotted texture background" },
      { "zh-tw": "無背景，透明", en: "No background, transparent" },
      { "zh-tw": "深色背景", en: "Dark background" }
    ]
  },
  classic_game: {
    label: { "zh-tw": "經典遊戲", en: "Classic Game" },
    category: "other",
    options: [
      { "zh-tw": "Donkey Kong (1981 街機遊戲)", en: "Donkey Kong (1981 vintage arcade game)" },
      { "zh-tw": "超級馬里奧兄弟 (1985)", en: "Super Mario Bros (1985)" },
      { "zh-tw": "塞爾達傳說 (1986)", en: "The Legend of Zelda (1986)" },
      { "zh-tw": "吃豆人 (1980 街機遊戲)", en: "Pac-Man (1980 arcade game)" },
      { "zh-tw": "太空侵略者 (1978)", en: "Space Invaders (1978)" },
      { "zh-tw": "俄羅斯方塊 (1984)", en: "Tetris (1984)" },
      { "zh-tw": "魂鬥羅 (1987)", en: "Contra (1987)" },
      { "zh-tw": "街頭霸王 II (1991)", en: "Street Fighter II (1991)" },
      { "zh-tw": "刺蝟索尼克 (1991)", en: "Sonic the Hedgehog (1991)" },
      { "zh-tw": "惡魔城 (1986)", en: "Castlevania (1986)" },
      { "zh-tw": "洛克人 (1987)", en: "Mega Man (1987)" },
      { "zh-tw": "馬里奧賽車 (1992)", en: "Mario Kart (1992)" },
      { "zh-tw": "口袋妖怪 紅/藍 (1996)", en: "Pokémon Red/Blue (1996)" },
      { "zh-tw": "星之卡比 (1992)", en: "Kirby's Dream Land (1992)" },
      { "zh-tw": " chrono trigger (1995)", en: "Chrono Trigger (1995)" },
      { "zh-tw": "最終幻想 VI (1994)", en: "Final Fantasy VI (1994)" }
    ]
  },
  scientific_discovery: {
    label: { "zh-tw": "科學發現", en: "Scientific Discovery" },
    category: "other",
    options: [
      { "zh-tw": "DNA結構", en: "The Structure of DNA" },
      { "zh-tw": "相對論", en: "The Theory of Relativity" },
      { "zh-tw": "微生物理論", en: "The Germ Theory" },
      { "zh-tw": "日心說", en: "Heliocentrism" },
      { "zh-tw": "進化論", en: "The Theory of Evolution" },
      { "zh-tw": "萬有引力", en: "The Law of Universal Gravitation" },
      { "zh-tw": "電磁理論", en: "Electromagnetic Theory" },
      { "zh-tw": "元素週期表", en: "The Periodic Table of Elements" },
      { "zh-tw": "量子力學", en: "Quantum Mechanics" },
      { "zh-tw": "原子結構", en: "The Atomic Structure" },
      { "zh-tw": "光的波動說", en: "The Wave Theory of Light" },
      { "zh-tw": "大陸漂移說", en: "Continental Drift" },
      { "zh-tw": "疫苗接種", en: "Vaccination" },
      { "zh-tw": "血液循環", en: "Blood Circulation" },
      { "zh-tw": "苯環結構", en: "The Structure of Benzene" },
      { "zh-tw": "雙螺旋發現", en: "The Double Helix Discovery" }
    ]
  },
  cute_pose_dynamic: {
    label: { "zh-tw": "可愛動態姿勢", en: "Cute Dynamic Pose" },
    category: "action",
    options: [
      { "zh-tw": "向前走時回望，從正上方自信俏皮地俯視，迷人微笑", en: "Walking forward while looking back, confidently and playfully looking down from directly above, charming smile" },
      { "zh-tw": "坐在床邊，雙腿交叉，手玩頭髮，溫柔微笑", en: "Sitting on bed edge, legs crossed, playing with hair, gentle smile" },
      { "zh-tw": "站立姿勢，手放在臀部，自信直視鏡頭", en: "Standing pose, hands on hips, confidently looking at camera" },
      { "zh-tw": "躺在床上，側身支撐頭部，俏皮表情", en: "Lying on bed, propping head with hand, playful expression" },
      { "zh-tw": "跪坐姿勢，雙手放在膝蓋上，無辜表情", en: "Kneeling pose, hands on knees, innocent expression" },
      { "zh-tw": "靠著牆站立，一隻腳抬起，酷酷的表情", en: "Leaning against wall, one foot raised, cool expression" },
      { "zh-tw": "坐在地板上，雙腿伸直，看書，專注表情", en: "Sitting on floor, legs extended, reading book, focused expression" },
      { "zh-tw": "跳躍姿勢，雙手舉起，快樂笑容，動態感", en: "Jumping pose, hands raised, happy smile, dynamic feel" }
    ]
  },
  fitness_location: {
    label: { "zh-tw": "健身場景", en: "Fitness Location" },
    category: "location",
    options: [
      { "zh-tw": "繁忙的健身房，鏡子和器械隨處可見", en: "Busy gym with mirrors and equipment visible" },
      { "zh-tw": "現代健身房，有氧區和力量區", en: "Modern gym with cardio and weight areas" },
      { "zh-tw": "瑜伽教室，木地板和鏡子", en: "Yoga studio with wooden floor and mirrors" },
      { "zh-tw": "家庭健身區，簡潔整潔", en: "Home workout area, clean and organized" },
      { "zh-tw": "戶外跑步機平臺，城市天際線背景", en: "Outdoor treadmill platform with city skyline" }
    ]
  },
  fitness_pose: {
    label: { "zh-tw": "健身姿勢", en: "Fitness Pose" },
    category: "action",
    options: [
      { "zh-tw": "半蹲姿勢，側身對鏡子", en: "Half-squat pose, turned sideways to mirror" },
      { "zh-tw": "站立伸展，手臂高舉", en: "Standing stretch with arms raised" },
      { "zh-tw": "平板支撐姿勢，側視鏡頭", en: "Plank pose, side view to camera" },
      { "zh-tw": "弓步姿勢，肌肉緊繃", en: "Lunge pose, muscles tensed" },
      { "zh-tw": "啞鈴推舉，專注表情", en: "Dumbbell press, focused expression" },
      { "zh-tw": "瑜伽樹式姿勢，單腿站立", en: "Yoga tree pose, standing on one leg" },
      { "zh-tw": "深蹲底部姿勢，大腿發力", en: "Bottom of squat position, leg muscles engaged" },
      { "zh-tw": "壺鈴擺動，動態姿態", en: "Kettlebell swing, dynamic pose" }
    ]
  },
  fitness_clothing: {
    label: { "zh-tw": "健身服裝", en: "Fitness Clothing" },
    category: "item",
    options: [
      { "zh-tw": "運動裙，緊身貼身", en: "Sports skirt, tight and form-fitting" },
      { "zh-tw": "運動短褲和運動背心", en: "Athletic shorts and sports bra" },
      { "zh-tw": "緊身瑜伽褲和運動上衣", en: "Tight yoga leggings and athletic top" },
      { "zh-tw": "運動套裝，舒適透氣", en: "Athletic set, comfortable and breathable" },
      { "zh-tw": "健身連衣裙，時尚運動風", en: "Fitness dress, sporty and stylish" },
      { "zh-tw": "騎行短褲和運動內衣", en: "Cycling shorts and sports bra" },
      { "zh-tw": "壓縮衣和運動長褲", en: "Compression shirt and athletic pants" },
      { "zh-tw": "無袖運動背心和緊身褲", en: "Sleeveless sports tank and tight pants" }
    ]
  },
  selfie_style: {
    label: { "zh-tw": "自拍風格", en: "Selfie Style" },
    category: "visual",
    options: [
      { "zh-tw": "原始真實的鏡子自拍", en: "Raw, authentic mirror selfie" },
      { "zh-tw": "隨意的生活抓拍", en: "Candid daily life snapshot" },
      { "zh-tw": "自然不做擺拍", en: "Natural, unposed shot" },
      { "zh-tw": "日常生活氛圍", en: "Authentic daily life atmosphere" },
      { "zh-tw": "真實記錄瞬間", en: "Genuine moment captured" }
    ]
  },
  photo_effect: {
    label: { "zh-tw": "拍照效果", en: "Photo Effect" },
    category: "visual",
    options: [
      { "zh-tw": "機頂閃光燈直閃", en: "On-camera flash firing" },
      { "zh-tw": "慢快門導致的運動模糊", en: "Motion blur from slow shutter speed" },
      { "zh-tw": "明顯的膠片顆粒感", en: "Noticeable film grain" },
      { "zh-tw": "自然光線柔和", en: "Soft natural lighting" },
      { "zh-tw": "高對比度戲劇光影", en: "High contrast dramatic lighting" },
      { "zh-tw": "輕微鏡頭眩光", en: "Slight lens flare" },
      { "zh-tw": "淺景深背景虛化", en: "Shallow depth of field, background blur" },
      { "zh-tw": "暗角效果", en: "Vignette effect" }
    ]
  },
  physical_state: {
    label: { "zh-tw": "身體狀態", en: "Physical State" },
    category: "character",
    options: [
      { "zh-tw": "健康健美的身材", en: "Healthy athletic build" },
      { "zh-tw": "身材苗條緊緻", en: "Slim and toned physique" },
      { "zh-tw": "肌肉線條分明", en: "Defined muscle lines" },
      { "zh-tw": "自然勻稱的體型", en: "Natural balanced physique" },
      { "zh-tw": "柔韌靈活的身體", en: "Flexible and agile body" },
      { "zh-tw": "力量感十足的肌肉", en: "Powerful muscular build" }
    ]
  },
  sweat_appearance: {
    label: { "zh-tw": "汗水狀態", en: "Sweat Appearance" },
    category: "character",
    options: [
      { "zh-tw": "頭髮凌亂溼透，汗水明顯", en: "Hair disheveled and damp with sweat" },
      { "zh-tw": "皮膚微微出汗，光澤感", en: "Skin slightly sweaty, glossy look" },
      { "zh-tw": "汗珠掛在額頭和鼻尖", en: "Sweat beads on forehead and nose tip" },
      { "zh-tw": "後背汗水浸溼衣物", en: "Back sweat soaking through clothes" },
      { "zh-tw": "汗水順著臉頰流下", en: "Sweat streaming down cheeks" },
      { "zh-tw": "輕微運動出汗痕跡", en: "Light exercise sweat traces" }
    ]
  },
  facial_expression: {
    label: { "zh-tw": "面部表情", en: "Facial Expression" },
    category: "character",
    options: [
      { "zh-tw": "臉頰泛紅，眼神迷離", en: "Cheeks flushed red, dreamy and slightly unfocused eyes" },
      { "zh-tw": "專注嚴肅的表情", en: "Focused and serious expression" },
      { "zh-tw": "笑容自然燦爛", en: "Natural and bright smile" },
      { "zh-tw": "咬牙堅持的神情", en: "Gritted teeth, determined look" },
      { "zh-tw": "平靜放鬆的面容", en: "Calm and relaxed face" },
      { "zh-tw": "眼神堅定有力", en: "Firm and powerful gaze" },
      { "zh-tw": "運動後的滿足表情", en: "Post-exercise satisfied expression" },
      { "zh-tw": "略帶疲憊但充滿成就感", en: "Slightly tired but accomplished look" }
    ]
  },
  // ===== 微縮模型系列（新增） =====
  miniature_character: {
    label: { "zh-tw": "微縮人物角色", en: "Miniature Character" },
    category: "character",
    options: [
      { "zh-tw": "消防員", en: "Firefighter" },
      { "zh-tw": "短跑運動員", en: "Sprinter" },
      { "zh-tw": "園丁", en: "Gardener" },
      { "zh-tw": "廚師", en: "Chef" },
      { "zh-tw": "建築工人", en: "Construction Worker" },
      { "zh-tw": "醫生", en: "Doctor" },
      { "zh-tw": "探險家", en: "Explorer" },
      { "zh-tw": "騎士", en: "Knight" },
      { "zh-tw": "忍者", en: "Ninja" },
      { "zh-tw": "宇航員", en: "Astronaut" },
      { "zh-tw": "警察", en: "Police Officer" },
      { "zh-tw": "畫家", en: "Painter" }
    ]
  },
  giant_object: {
    label: { "zh-tw": "巨型日常物品", en: "Giant Everyday Object" },
    category: "item",
    options: [
      { "zh-tw": "燃燒的火柴棍", en: "Burning Matchstick" },
      { "zh-tw": "CD唱片", en: "CD Disc" },
      { "zh-tw": "咖啡杯", en: "Coffee Mug" },
      { "zh-tw": "鉛筆", en: "Pencil" },
      { "zh-tw": "書本", en: "Book" },
      { "zh-tw": "訂書機", en: "Stapler" },
      { "zh-tw": "回形針", en: "Paperclip" },
      { "zh-tw": "骰子", en: "Dice" },
      { "zh-tw": "檯燈", en: "Desk Lamp" },
      { "zh-tw": "鬧鐘", en: "Alarm Clock" },
      { "zh-tw": "牙刷", en: "Toothbrush" },
      { "zh-tw": "遙控器", en: "Remote Control" },
      { "zh-tw": "橡皮擦", en: "Eraser" },
      { "zh-tw": "網球", en: "Tennis Ball" },
      { "zh-tw": "雞蛋", en: "Egg" }
    ]
  },
  miniature_action: {
    label: { "zh-tw": "微縮動作", en: "Miniature Action" },
    category: "action",
    options: [
      { "zh-tw": "攀爬巨型物體", en: "Climbing the giant object" },
      { "zh-tw": "奮力推開", en: "Pushing with great effort" },
      { "zh-tw": "高舉過頭", en: "Lifting overhead" },
      { "zh-tw": "跳躍躲避", en: "Jumping to dodge" },
      { "zh-tw": "拉拽掙扎", en: "Pulling and struggling" },
      { "zh-tw": "衝鋒撞擊", en: "Charging and colliding" },
      { "zh-tw": "支撐抵抗", en: "Bracing and resisting" },
      { "zh-tw": "滑下奔跑", en: "Sliding down and running" },
      { "zh-tw": "跨越障礙", en: "Leaping over obstacle" },
      { "zh-tw": "緊抱不放", en: "Holding on tight" },
      { "zh-tw": "揮拳攻擊", en: "Punching" },
      { "zh-tw": "蜷縮防禦", en: "Crouching defensively" }
    ]
  },
  // ==================== Pop Mart Plush Toys Template ====================
  plush_expression: {
    label: { "zh-tw": "絨毛玩具表情", en: "Plush Toy Expression" },
    category: "character",
    options: [
      { "zh-tw": "眨眼俏皮表情", en: "winking with playful expression" },
      { "zh-tw": "張嘴大笑表情", en: "laughing out loud with open mouth" },
      { "zh-tw": "驚訝表情", en: "shocked face" },
      { "zh-tw": "睏倦表情", en: "sleepy face" },
      { "zh-tw": "暴躁表情", en: "grumpy face" },
      { "zh-tw": "吐舌頭表情", en: "tongue sticking out" },
      { "zh-tw": "調皮微笑", en: "playful smirks" },
      { "zh-tw": "無辜大眼表情", en: "innocent big eyes" },
      { "zh-tw": "害羞臉紅表情", en: "shy blushing face" },
      { "zh-tw": "呆萌茫然表情", en: "dazed confused expression" }
    ]
  },
  cute_accessory: {
    label: { "zh-tw": "可愛配飾", en: "Cute Accessory" },
    category: "item",
    options: [
      { "zh-tw": "針織帽", en: "beanie hats" },
      { "zh-tw": "耳機", en: "headphones" },
      { "zh-tw": "派對錐形帽", en: "party cone hats" },
      { "zh-tw": "唐朝傳統帽子", en: "traditional Tang dynasty hats" },
      { "zh-tw": "滑雪鏡", en: "ski goggles" },
      { "zh-tw": " funky star-shaped glasses", en: "funky star-shaped glasses" },
      { "zh-tw": "厚圍巾", en: "thick scarves" },
      { "zh-tw": "蝴蝶結", en: "bow ties" },
      { "zh-tw": "手持幸運幣", en: "holding small lucky coins" },
      { "zh-tw": "小皇冠", en: "small crowns" },
      { "zh-tw": "蝴蝶結髮夾", en: "bow hair clips" },
      { "zh-tw": "小鈴鐺項圈", en: "small bell collar" }
    ]
  },
  festive_archway: {
    label: { "zh-tw": "節日拱門場景", en: "Festive Archway Scene" },
    category: "location",
    options: [
      { "zh-tw": "中國傳統拱門", en: "traditional Chinese archway" },
      { "zh-tw": "春節紅燈籠拱門", en: "Chinese New Year red lantern archway" },
      { "zh-tw": "金色裝飾拱門", en: "golden decorative archway" },
      { "zh-tw": "櫻花拱門", en: "cherry blossom archway" },
      { "zh-tw": "彩燈裝飾拱門", en: "festive light decorated archway" },
      { "zh-tw": "復古雕花拱門", en: "vintage carved archway" },
      { "zh-tw": "現代簡約拱門", en: "modern minimalist archway" },
      { "zh-tw": "童話糖果拱門", en: "fairytale candy archway" }
    ]
  },
  // ==================== 3D Isometric Diorama Template ====================
  exhibition_type: {
    label: { "zh-tw": "展覽型別", en: "Exhibition Type" },
    category: "location",
    options: [
      { "zh-tw": "現代藝術展覽", en: "modern art exhibition" },
      { "zh-tw": "產品設計展", en: "product design showcase" },
      { "zh-tw": "博物館收藏展", en: "museum collection display" },
      { "zh-tw": "科技創新展", en: "technology innovation exhibition" },
      { "zh-tw": "時尚珠寶展", en: "fashion jewelry exhibition" },
      { "zh-tw": "古董文物展", en: "antique artifacts exhibition" },
      { "zh-tw": "玩具收藏展", en: "toy collection display" },
      { "zh-tw": "植物園藝展", en: "botanical garden exhibition" },
      { "zh-tw": "攝影作品展", en: "photography portfolio show" },
      { "zh-tw": "概念設計展", en: "concept design exhibition" }
    ]
  },
  display_objects: {
    label: { "zh-tw": "展示物體", en: "Display Objects" },
    category: "item",
    options: [
      { "zh-tw": "抽象雕塑和裝置藝術", en: "abstract sculptures and installation art" },
      { "zh-tw": "電子產品原型和設備", en: "electronic product prototypes and gadgets" },
      { "zh-tw": "古代文物和歷史遺物", en: "ancient artifacts and historical relics" },
      { "zh-tw": "未來科技設備和機器人", en: "futuristic tech devices and robots" },
      { "zh-tw": "精緻珠寶和寶石", en: "exquisite jewelry and gemstones" },
      { "zh-tw": "限量版玩具和手辦", en: "limited edition toys and figurines" },
      { "zh-tw": "多肉植物和盆景", en: "succulent plants and bonsai" },
      { "zh-tw": "裝裱照片和藝術品", en: "framed photos and artwork" },
      { "zh-tw": "概念汽車和交通工具", en: "concept cars and vehicles" },
      { "zh-tw": "傢俱和家居設計", en: "furniture and home decor" }
    ]
  },
  pod_structure: {
    label: { "zh-tw": "展臺結構", en: "Pod Structure" },
    category: "location",
    options: [
      { "zh-tw": "玻璃立方體展臺", en: "glass cube pod" },
      { "zh-tw": "開放式圓形平臺", en: "open circular platform" },
      { "zh-tw": "懸浮展示臺", en: "floating display podium" },
      { "zh-tw": "多層階梯展架", en: "multi-tiered stepped display" },
      { "zh-tw": "嵌入式壁龕展示", en: "recessed niche display" },
      { "zh-tw": "透明圓柱體展櫃", en: "transparent cylindrical showcase" },
      { "zh-tw": "L型轉角展臺", en: "L-shaped corner podium" },
      { "zh-tw": "模組化組合展架", en: "modular interconnected display units" },
      { "zh-tw": "旋轉展示臺", en: "rotating turntable display" },
      { "zh-tw": "嵌入式地面展示窗", en: "recessed floor showcase window" }
    ]
  },
  // ==================== Chinese Traditional Bridal Portrait Template ====================
  bridal_hair_decoration: {
    label: { "zh-tw": "新娘髮飾", en: "Bridal Hair Decoration" },
    category: "item",
    options: [
      { "zh-tw": "紅色紙剪花和蝴蝶裝飾", en: "red paper-cut flowers and butterflies" },
      { "zh-tw": "金色鳳冠和珍珠流蘇", en: "golden phoenix coronet with pearl tassels" },
      { "zh-tw": "紅色絨花裝飾", en: "red velvet flower ornaments" },
      { "zh-tw": "傳統銀飾髮簪", en: "traditional silver hairpins" },
      { "zh-tw": "玉石髮釵和紅花", en: "jade hairpin with red flowers" },
      { "zh-tw": "珍珠髮網和小巧皇冠", en: "pearl hair net with small crown" },
      { "zh-tw": "紅色綢帶和鈴鐺", en: "red silk ribbons with bells" },
      { "zh-tw": "梅花紙剪裝飾", en: "plum blossom paper-cut decorations" },
      { "zh-tw": "金色步搖晃動髮飾", en: "golden buyao swaying hair ornament" },
      { "zh-tw": "繡花髮帶和玉簪", en: "embroidered headband with jade hairpin" }
    ]
  },
  traditional_bridal_attire: {
    label: { "zh-tw": "傳統新娘服飾", en: "Traditional Bridal Attire" },
    category: "item",
    options: [
      { "zh-tw": "紅色緞面旗袍", en: "red satin cheongsam" },
      { "zh-tw": "紅色繡花裙褂", en: "red embroidered wedding gown" },
      { "zh-tw": "傳統鳳冠霞帔", en: "traditional phoenix coronet and robe" },
      { "zh-tw": "紅色漢服婚服", en: "red Hanfu wedding dress" },
      { "zh-tw": "金色刺繡旗袍", en: "gold-embroidered cheongsam" },
      { "zh-tw": "紅色龍鳳呈祥褂", en: "red dragon-phoenix auspicious gown" },
      { "zh-tw": "錦緞旗袍配披肩", en: "brocade cheongsam with shawl" },
      { "zh-tw": "傳統大紅喜服", en: "traditional grand red wedding attire" },
      { "zh-tw": "紅色蕾絲邊旗袍", en: "red lace-trimmed cheongsam" },
      { "zh-tw": "蘇繡旗袍禮服", en: "Suzhou embroidery cheongsam gown" }
    ]
  },
  bridal_jewelry: {
    label: { "zh-tw": "新娘首飾", en: "Bridal Jewelry" },
    category: "item",
    options: [
      { "zh-tw": "白色珍珠首飾和小珍珠耳環", en: "white pearl jewelry and small pearl earrings" },
      { "zh-tw": "黃金項鍊和耳環套裝", en: "gold necklace and earrings set" },
      { "zh-tw": "玉石手鐲和吊墜", en: "jade bracelet and pendant" },
      { "zh-tw": "紅寶石項鍊和耳飾", en: "ruby necklace and ear ornaments" },
      { "zh-tw": "傳統銀飾手鐲和項鍊", en: "traditional silver bracelet and necklace" },
      { "zh-tw": "珍珠項鍊和鑽石耳釘", en: "pearl necklace and diamond studs" },
      { "zh-tw": "翡翠耳環和項鍊", en: "emerald earrings and necklace" },
      { "zh-tw": "黃金鳳形胸針", en: "golden phoenix-shaped brooch" },
      { "zh-tw": "珍珠髮飾和項鍊套裝", en: "pearl hair ornaments and necklace set" },
      { "zh-tw": "紅珊瑚手串和耳墜", en: "red coral bracelet and drop earrings" }
    ]
  },
  // ==================== Premium Food Advertising Template ====================
  premium_food_subject: {
    label: { "zh-tw": "高端食品主體", en: "Premium Food Subject" },
    category: "item",
    options: [
      { "zh-tw": "手工巧克力球", en: "handcrafted chocolate truffles" },
      { "zh-tw": "新鮮漿果塔", en: "fresh berry tartlets" },
      { "zh-tw": "精緻馬卡龍", en: "delicate macarons" },
      { "zh-tw": "日式和果子", en: "Japanese wagashi sweets" },
      { "zh-tw": "手工冰淇淋球", en: "artisanal ice cream scoops" },
      { "zh-tw": "精緻法式糕點", en: "elegant French pastries" },
      { "zh-tw": "新鮮壽司拼盤", en: "fresh sushi platter" },
      { "zh-tw": "手工意麵卷", en: "handmade pasta bundles" },
      { "zh-tw": "精緻杯子蛋糕", en: "gourmet cupcakes" },
      { "zh-tw": "新鮮牛油果片", en: "fresh avocado slices" },
      { "zh-tw": "手工奶酪球", en: "artisanal cheese balls" },
      { "zh-tw": "精緻水果塔", en: "elegant fruit tarts" }
    ]
  },
  ingredient_bits: {
    label: { "zh-tw": "配料碎屑裝飾", en: "Ingredient Bits" },
    category: "item",
    options: [
      { "zh-tw": "可可粉和金箔碎屑", en: "cocoa powder and gold flakes" },
      { "zh-tw": "新鮮薄荷葉和檸檬皮屑", en: "fresh mint leaves and lemon zest" },
      { "zh-tw": "烤堅果碎和海鹽", en: "toasted nut crumbs and sea salt" },
      { "zh-tw": "芝麻和蔥花碎", en: "sesame seeds and scallion bits" },
      { "zh-tw": "抹茶粉和紅豆碎", en: "matcha powder and red bean bits" },
      { "zh-tw": "香草籽和糖粉", en: "vanilla bean specks and powdered sugar" },
      { "zh-tw": "辣椒粉和青檸碎", en: "chili powder and lime zest" },
      { "zh-tw": "羅勒葉和帕爾馬乾酪碎", en: "basil leaves and parmesan crisps" },
      { "zh-tw": "肉桂粉和橙皮屑", en: "cinnamon powder and orange zest" },
      { "zh-tw": "椰絲和芒果碎", en: "shredded coconut and mango bits" },
      { "zh-tw": "新鮮香草和橄欖油飛濺", en: "fresh herbs and olive oil splashes" },
      { "zh-tw": "食用花卉和花粉", en: "edible flowers and pollen" }
    ]
  },
  // ==================== Forbidden City Phoenix Portrait Template ====================
  imperial_palace_scene: {
    label: { "zh-tw": "皇家宮殿場景", en: "Imperial Palace Scene" },
    category: "location",
    options: [
      { "zh-tw": "紫禁城雪夜，飛雪飄零", en: "Forbidden City snow night with falling snowflakes" },
      { "zh-tw": "頤和園黃昏，夕陽餘暉", en: "Summer Palace at dusk with golden sunset" },
      { "zh-tw": "天壇清晨，薄霧繚繞", en: "Temple of Heaven at dawn with misty atmosphere" },
      { "zh-tw": "故宮午門，春節燈火", en: "Forbidden City Meridian Gate with festival lights" },
      { "zh-tw": "圓明園遺址，月光灑落", en: "Old Summer Palace ruins under moonlight" },
      { "zh-tw": "北海公園白塔，冬雪紛飛", en: "Beihai Park White Pagoda in winter snow" },
      { "zh-tw": "天安門城樓，黎明曙光", en: "Tiananmen Gate at dawn break" },
      { "zh-tw": "雍和宮，香火繚繞", en: "Yonghe Temple with incense smoke rising" },
      { "zh-tw": "瀋陽故宮，秋葉飄落", en: "Shenyang Imperial Palace with autumn leaves" },
      { "zh-tw": "承德避暑山莊，夏日荷花", en: "Chengde Mountain Resort with summer lotus" }
    ]
  },
  phoenix_crown: {
    label: { "zh-tw": "鳳冠髮飾", en: "Phoenix Crown" },
    category: "item",
    options: [
      { "zh-tw": "華麗繁複的金鳳冠", en: "ornate golden phoenix crown" },
      { "zh-tw": "珍珠點綴的鳳冠", en: "pearl-embellished phoenix crown" },
      { "zh-tw": "紅寶石鳳凰髮釵", en: "ruby phoenix hairpin" },
      { "zh-tw": "翡翠流蘇鳳冠", en: "jade tassel phoenix crown" },
      { "zh-tw": "金龍戲珠髮飾", en: "golden dragon playing with pearl hairpiece" },
      { "zh-tw": "綵鳳朝陽頭飾", en: "colorful phoenix facing sun headpiece" },
      { "zh-tw": "寶石鑲嵌的鳳冠", en: "gemstone-encrusted phoenix crown" },
      { "zh-tw": "金絲編織的鳳簪", en: "gold-woven phoenix hairpin" },
      { "zh-tw": "珊瑚與珍珠鳳冠", en: "coral and pearl phoenix crown" },
      { "zh-tw": "傳統步搖髮飾", en: "traditional buyao swaying hair ornament" }
    ]
  },
  flowing_garment: {
    label: { "zh-tw": "流動華服", en: "Flowing Garment" },
    category: "item",
    options: [
      { "zh-tw": "流動的紅橙色絲綢華服", en: "flowing red-orange silk robes" },
      { "zh-tw": "飄逸的紫色紗衣", en: "flowing purple silk gauze" },
      { "zh-tw": "金色刺繡錦緞長袍", en: "gold-embroidered brocade robes" },
      { "zh-tw": "紅色霞帔鳳冠霞帔", en: "red xiapei royal cape" },
      { "zh-tw": "白色漢服仙氣飄飄", en: "white Hanfu with ethereal vibe" },
      { "zh-tw": "藍色漸變雲紋華服", en: "blue gradient cloud-pattern robes" },
      { "zh-tw": "粉色櫻花主題長裙", en: "pink cherry blossom themed gown" },
      { "zh-tw": "綠色翡翠質感絲綢", en: "green jade-like silk robes" },
      { "zh-tw": "黑色繡金龍紋長袍", en: "black dragon-embroidered robes" },
      { "zh-tw": "彩色羽衣霓裳", en: "colorful feather rainbow gown" }
    ]
  },
  festive_props: {
    label: { "zh-tw": "節日道具", en: "Festive Props" },
    category: "item",
    options: [
      { "zh-tw": "口中叼著中式紅包，手中拿著展開的春節祝福", en: "holding red envelope in mouth and unfolded spring festival blessing in hand" },
      { "zh-tw": "手持燈籠，提著福字掛件", en: "holding lantern with Fu character ornament" },
      { "zh-tw": "拿著春聯，提著鞭炮串", en: "holding spring couplet and firecracker string" },
      { "zh-tw": "捧著元寶托盤，拿著金算盤", en: "holding gold ingot tray and golden abacus" },
      { "zh-tw": "手提花燈，拿著梅花枝", en: "carrying flower lantern and plum blossom branch" },
      { "zh-tw": "拿著福字牌，手捧如意", en: "holding Fu character plaque and jade ruyi scepter" },
      { "zh-tw": "手持紅包袋，提著中國結", en: "holding red envelope bag and Chinese knot" },
      { "zh-tw": "拿著糖葫蘆，提著餃子籃", en: "holding candied hawthorn and dumpling basket" },
      { "zh-tw": "手捧酒杯，拿著梅花扇", en: "holding wine cup and plum blossom fan" },
      { "zh-tw": "手持鞭炮，拿著福字窗花", en: "holding firecrackers and Fu character paper cutting" }
    ]
  },

  // ==================== 室內設計詞庫 ====================

  room_type: {
    label: { "zh-tw": "室內空間型別", en: "Room Type" },
    category: "location",
    options: [
      { "zh-tw": "客廳", en: "Living Room" },
      { "zh-tw": "臥室", en: "Bedroom" },
      { "zh-tw": "廚房", en: "Kitchen" },
      { "zh-tw": "浴室", en: "Bathroom" },
      { "zh-tw": "書房", en: "Study Room" },
      { "zh-tw": "餐廳", en: "Dining Room" },
      { "zh-tw": "辦公室", en: "Office" },
      { "zh-tw": "陽臺", en: "Balcony" },
      { "zh-tw": "娛樂室", en: "Entertainment Room" },
      { "zh-tw": "衣帽間", en: "Walk-in Closet" }
    ]
  },

  interior_design_style: {
    label: { "zh-tw": "室內設計風格", en: "Interior Design Style" },
    category: "visual",
    options: [
      { "zh-tw": "現代輕奢風格", en: "Modern Light Luxury Style" },
      { "zh-tw": "北歐簡約風格", en: "Nordic Minimalist Style" },
      { "zh-tw": "工業風格", en: "Industrial Style" },
      { "zh-tw": "新中式風格", en: "New Chinese Style" },
      { "zh-tw": "現代簡約風格", en: "Modern Minimalist Style" },
      { "zh-tw": "美式鄉村風格", en: "American Country Style" },
      { "zh-tw": "歐式古典風格", en: "European Classical Style" },
      { "zh-tw": "日式和風風格", en: "Japanese Style" },
      { "zh-tw": "波普藝術風格", en: "Pop Art Style" },
      { "zh-tw": "復古懷舊風格", en: "Vintage Retro Style" },
      { "zh-tw": "地中海風格", en: "Mediterranean Style" },
      { "zh-tw": "極簡主義風格", en: "Minimalism Style" }
    ]
  },

  furniture_set: {
    label: { "zh-tw": "傢俱組合", en: "Furniture Set" },
    category: "item",
    options: [
      { "zh-tw": "沙發、地毯、茶几、電視", en: "Sofa, rug, coffee table, TV" },
      { "zh-tw": "雙人床、床頭櫃、檯燈、衣櫃", en: "Double bed, nightstand, lamp, wardrobe" },
      { "zh-tw": "餐桌、餐椅、吊燈、餐具櫃", en: "Dining table, chairs, pendant light, sideboard" },
      { "zh-tw": "辦公桌、辦公椅、書架、檯燈", en: "Desk, office chair, bookshelf, desk lamp" },
      { "zh-tw": "沙發組合、茶几、電視櫃、落地燈", en: "Sofa set, coffee table, TV cabinet, floor lamp" },
      { "zh-tw": "浴缸、洗手檯、馬桶、浴室櫃", en: "Bathtub, vanity, toilet, bathroom cabinet" },
      { "zh-tw": "灶臺、櫥櫃、冰箱、餐桌", en: "Stove, cabinets, refrigerator, dining table" },
      { "zh-tw": "懶人沙發、茶几、落地燈、書架", en: "Bean bag, coffee table, floor lamp, bookshelf" }
    ]
  },

  ceiling_material: {
    label: { "zh-tw": "天花板材質", en: "Ceiling Material" },
    category: "visual",
    options: [
      { "zh-tw": "白色乳膠漆平頂", en: "White latex flat ceiling" },
      { "zh-tw": "石膏線裝飾吊頂", en: "Gypsum molding decorative ceiling" },
      { "zh-tw": "木質格柵吊頂", en: "Wooden grid ceiling" },
      { "zh-tw": "簡約跌級吊頂", en: "Minimalist stepped ceiling" },
      { "zh-tw": "金屬鋁扣板吊頂", en: "Metal aluminum ceiling" },
      { "zh-tw": "原木色木質天花板", en: "Natural wood ceiling" },
      { "zh-tw": "藝術塗料質感天花", en: "Artistic paint texture ceiling" },
      { "zh-tw": "鏡面玻璃吊頂", en: "Mirrored glass ceiling" },
      { "zh-tw": "布藝軟包吊頂", en: "Fabric upholstered ceiling" },
      { "zh-tw": "裸露混凝土頂面", en: "Exposed concrete ceiling" }
    ]
  },

  wall_material: {
    label: { "zh-tw": "牆面材質", en: "Wall Material" },
    category: "visual",
    options: [
      { "zh-tw": "白色乳膠漆牆面", en: "White latex paint wall" },
      { "zh-tw": "暖白色牆面與裝飾畫", en: "Warm white walls with decorative art" },
      { "zh-tw": "淺灰色藝術塗料", en: "Light gray artistic paint" },
      { "zh-tw": "原木色木飾面板", en: "Natural wood veneer panel" },
      { "zh-tw": "大理石紋理牆面", en: "Marble texture wall" },
      { "zh-tw": "文化石裝飾牆", en: "Cultural stone decorative wall" },
      { "zh-tw": "淺色木紋壁紙", en: "Light wood grain wallpaper" },
      { "zh-tw": "淺灰色硅藻泥牆面", en: "Light gray diatom mud wall" },
      { "zh-tw": "白色護牆板", en: "White wainscoting panel" },
      { "zh-tw": "暖色瓷磚牆面", en: "Warm color ceramic tile wall" },
      { "zh-tw": "裸露紅磚牆面", en: "Exposed red brick wall" }
    ]
  },

  floor_material: {
    label: { "zh-tw": "地板材質", en: "Floor Material" },
    category: "visual",
    options: [
      { "zh-tw": "淺灰色大理石地磚", en: "Light gray marble tile" },
      { "zh-tw": "淺灰色巖板地面", en: "Light gray sintered stone floor" },
      { "zh-tw": "暖色實木複合地板", en: "Warm engineered wood flooring" },
      { "zh-tw": "淺橡色強化地板", en: "Light oak laminate flooring" },
      { "zh-tw": "深灰色大理石地面", en: "Dark gray marble floor" },
      { "zh-tw": "原木色實木地板", en: "Natural wood solid floor" },
      { "zh-tw": "米色拋光磚", en: "Beige polished tile" },
      { "zh-tw": "淺灰色仿古磚", en: "Light gray antique brick tile" },
      { "zh-tw": "深色地毯鋪地", en: "Dark carpet flooring" },
      { "zh-tw": "水磨石地面", en: "Terrazzo flooring" },
      { "zh-tw": "混凝土拋光地面", en: "Polished concrete floor" }
    ]
  },

  interior_lighting: {
    label: { "zh-tw": "室內光線效果", en: "Interior Lighting" },
    category: "visual",
    options: [
      { "zh-tw": "自然光線", en: "Natural lighting" },
      { "zh-tw": "暖色調柔和燈光", en: "Warm soft lighting" },
      { "zh-tw": "冷色調明亮燈光", en: "Cool bright lighting" },
      { "zh-tw": "專業建築攝影光線", en: "Professional architectural photography lighting" },
      { "zh-tw": "側面窗戶自然光", en: "Side window natural light" },
      { "zh-tw": "柔和漫射光線", en: "Soft diffused lighting" },
      { "zh-tw": "戲劇性光影對比", en: "Dramatic light and shadow contrast" },
      { "zh-tw": "黃金時刻陽光", en: "Golden hour sunlight" },
      { "zh-tw": "多雲天柔和光線", en: "Overcast soft lighting" },
      { "zh-tw": "夜晚溫馨燈光", en: "Cozy evening lighting" }
    ]
  },

  render_quality: {
    label: { "zh-tw": "渲染質量", en: "Render Quality" },
    category: "other",
    options: [
      { "zh-tw": "4K超高清分辨率", en: "4K Ultra HD resolution" },
      { "zh-tw": "8K超高清分辨率", en: "8K Ultra HD resolution" },
      { "zh-tw": "照片級真實渲染", en: "Photorealistic rendering" },
      { "zh-tw": "電影級渲染質量", en: "Cinematic rendering quality" },
      { "zh-tw": "高清細節", en: "High definition details" },
      { "zh-tw": "超精細紋理細節", en: "Ultra-fine texture details" },
      { "zh-tw": "真實光影渲染", en: "Realistic lighting rendering" },
      { "zh-tw": "專業建築渲染", en: "Professional architectural rendering" }
    ]
  },

  room_condition: {
    label: { "zh-tw": "房間狀態", en: "Room Condition" },
    category: "location",
    options: [
      { "zh-tw": "精緻裝修，高檔材料的質感與細節", en: "Exquisitely decorated, high-end materials with refined details" },
      { "zh-tw": "毛坯房，裸露的混凝土表面，未完工的狀態", en: "Unfinished rough room, exposed concrete surfaces, incomplete state" },
      { "zh-tw": "髒亂破舊，雜亂的佈置與陳舊材質表達", en: "Dirty and dilapidated, cluttered layout with worn materials" },
      { "zh-tw": "簡約整潔，現代都市風格", en: "Minimalist and tidy, modern urban style" },
      { "zh-tw": "豪華高檔，奢華裝修與精緻裝飾", en: "Luxurious high-end, opulent decoration with exquisite ornaments" },
      { "zh-tw": "溫馨舒適，充滿生活氣息", en: "Cozy and comfortable, full of life atmosphere" },
      { "zh-tw": "工業風，裸露管線與原始材質", en: "Industrial style, exposed pipes and raw materials" },
      { "zh-tw": "極簡主義，留白空間與極少裝飾", en: "Minimalist, negative space with minimal decoration" }
    ]
  },
  anatomy_teaching_style: {
    label: { "zh-tw": "解剖教學風格", en: "Anatomy Teaching Style" },
    category: "visual",
    options: [
      { "zh-tw": "Proko 風格（簡化幾何、教學導向、清晰構造線）", en: "Proko style (simplified geometry, educational focus, clear construction lines)" },
      { "zh-tw": "Hampton 風格（構造線、體塊分析、結構化方法）", en: "Hampton style (construction lines, form analysis, structural approach)" },
      { "zh-tw": "Vilppu 風格（手勢素描、流暢線條、動態感）", en: "Vilppu style (gesture drawing, flowing lines, dynamic feeling)" },
      { "zh-tw": "Bammes 風格（德國解剖學、精確構造、科學方法）", en: "Bammes style (German anatomy, precise construction, scientific method)" },
      { "zh-tw": "Loomis 風格（經典比例、標準人體、結構化）", en: "Loomis style (classic proportions, standard human figure, structured)" },
      { "zh-tw": "Bridgman 風格（體塊分析、建築感、厚重體積）", en: "Bridgman style (mass analysis, architectural feel, heavy volume)" },
      { "zh-tw": "Hogarth 風格（動態誇張、戲劇性線條、肌肉強調）", en: "Hogarth style (dynamic exaggeration, dramatic lines, muscle emphasis)" },
      { "zh-tw": "醫學解剖學教材風格（精確、科學、詳細標註）", en: "Medical anatomy textbook style (precise, scientific, detailed labels)" }
    ]
  },
  construction_line_color: {
    label: { "zh-tw": "構造線顏色", en: "Construction Line Color" },
    category: "visual",
    options: [
      { "zh-tw": "紫色/紫羅蘭色（主構造線）", en: "Purple/violet sketch lines (primary construction)" },
      { "zh-tw": "青色/綠松石色（方向指引線）", en: "Cyan/turquoise directional guidelines" },
      { "zh-tw": "藍色（專業構造線）", en: "Blue professional construction lines" },
      { "zh-tw": "紅色（強調高亮線）", en: "Red accent highlight lines" },
      { "zh-tw": "橙色（活力高亮線）", en: "Orange energetic highlight lines" },
      { "zh-tw": "綠色（輔助參考線）", en: "Green auxiliary reference lines" },
      { "zh-tw": "多色混合（紫/青/藍組合）", en: "Multi-color combination (purple/cyan/blue mix)" }
    ]
  },

  // 影片打鬥風格詞庫
  fight_style: {
    label: { "zh-tw": "打鬥風格", en: "Fight Style" },
    category: "action",
    options: [
      { "zh-tw": "武俠飄逸風（輕功、劍氣、衣袂飄飄）", en: "Wuxia elegant style (light kung fu, sword aura, flowing robes)" },
      { "zh-tw": "硬派寫實格鬥（拳拳到肉、真實打擊感）", en: "Hardcore realistic combat (hard-hitting, raw impact)" },
      { "zh-tw": "暗殺潛行風（迅捷暗殺、一擊致命）", en: "Stealth assassination style (swift kills, one-hit lethal)" },
      { "zh-tw": "港片動作風（成龍式、環境互動、幽默打鬥）", en: "Hong Kong action style (Jackie Chan-esque, environmental interaction, comedic)" },
      { "zh-tw": "日式劍戟風（拔刀術、一刀流、靜與動的對比）", en: "Japanese chambara style (iaijutsu, single-stroke, contrast of stillness and motion)" },
      { "zh-tw": "現代近身格鬥（綜合格鬥、槍械近戰混合）", en: "Modern close-quarters combat (MMA, gun-fu hybrid)" },
      { "zh-tw": "魔幻戰鬥風（元素法術、能量衝擊波）", en: "Fantasy combat style (elemental magic, energy shockwaves)" }
    ]
  },

  // 鏡頭節奏詞庫
  camera_rhythm: {
    label: { "zh-tw": "鏡頭節奏", en: "Camera Rhythm" },
    category: "visual",
    options: [
      { "zh-tw": "快速切換蒙太奇（多角度快速剪輯）", en: "Rapid montage cutting (multi-angle fast edits)" },
      { "zh-tw": "長鏡頭一鏡到底（沉浸式跟隨拍攝）", en: "Long take single shot (immersive follow-through)" },
      { "zh-tw": "慢動作特寫穿插（關鍵瞬間減速）", en: "Slow-motion close-up intercuts (key moment deceleration)" },
      { "zh-tw": "環繞旋轉跟拍（360度圍繞主角運鏡）", en: "Orbiting tracking shot (360° rotation around subject)" },
      { "zh-tw": "推拉變焦節奏（緊張感逐步遞進）", en: "Push-pull zoom rhythm (gradually building tension)" },
      { "zh-tw": "穩定器跟拍配合手持晃動（動靜結合）", en: "Stabilized tracking mixed with handheld shake (dynamic contrast)" }
    ]
  },

  // 科幻電影風格詞庫
  sci_fi_movie_style: {
    label: { "zh-tw": "科幻電影風格", en: "Sci-Fi Movie Style" },
    category: "visual",
    options: [
      { "zh-tw": "好萊塢科幻大片（Hollywood Sci-Fi Blockbuster）", en: "Hollywood Sci-Fi Blockbuster" },
      { "zh-tw": "賽博龐克美學（Cyberpunk Aesthetics）", en: "Cyberpunk Aesthetics" },
      { "zh-tw": "末日廢土風格（Post-Apocalyptic Wasteland）", en: "Post-Apocalyptic Wasteland" },
      { "zh-tw": "太空歌劇史詩（Space Opera Epic）", en: "Space Opera Epic" },
      { "zh-tw": "反烏托邦未來（Dystopian Future）", en: "Dystopian Future" },
      { "zh-tw": "硬核科幻寫實（Hard Sci-Fi Realism）", en: "Hard Sci-Fi Realism" },
      { "zh-tw": "日本動漫未來風（Japanese Anime Future）", en: "Japanese Anime Future" },
      { "zh-tw": "復古未來主義（Retro-Futurism）", en: "Retro-Futurism" }
    ]
  },

  // 未來載具詞庫
  futuristic_vehicle: {
    label: { "zh-tw": "未來載具", en: "Futuristic Vehicle" },
    category: "item",
    options: [
      { "zh-tw": "流線型反重力飛行器（Anti-gravity Vehicle）", en: "Streamlined Anti-gravity Vehicle" },
      { "zh-tw": "太空戰鬥機（Space Fighter）", en: "Space Fighter" },
      { "zh-tw": "磁懸浮超跑（Magnetic Levitation Sports Car）", en: "Magnetic Levitation Sports Car" },
      { "zh-tw": "重型運輸飛船（Heavy Cargo Spaceship）", en: "Heavy Cargo Spaceship" },
      { "zh-tw": "單兵飛行裝甲（Single-Person Flight Armor）", en: "Single-Person Flight Armor" },
      { "zh-tw": "懸浮摩托車（Hover Motorcycle）", en: "Hover Motorcycle" },
      { "zh-tw": "隱形偵察機（Stealth Reconnaissance Craft）", en: "Stealth Reconnaissance Craft" },
      { "zh-tw": "量子穿梭機（Quantum Shuttle）", en: "Quantum Shuttle" }
    ]
  },

  // 賽博龐克城市場景詞庫
  cyberpunk_city_scene: {
    label: { "zh-tw": "賽博龐克城市場景", en: "Cyberpunk City Scene" },
    category: "location",
    options: [
      { "zh-tw": "未來主義超級城市峽谷（Megacity Canyon）", en: "Futuristic Megacity Canyon" },
      { "zh-tw": "多層立體浮空城市（Multi-tier Floating City）", en: "Multi-tier Floating City" },
      { "zh-tw": "地下霓虹城寨（Underground Neon Town）", en: "Underground Neon Town" },
      { "zh-tw": "軌道空間站都市（Orbital Space Station City）", en: "Orbital Space Station City" },
      { "zh-tw": "廢棄工業廢土城（Abandoned Industrial Wasteland City）", en: "Abandoned Industrial Wasteland City" },
      { "zh-tw": "海底透明穹頂城市（Underwater Dome City）", en: "Underwater Dome City" },
      { "zh-tw": "雲端天空之城（Cloud Sky City）", en: "Cloud Sky City" },
      { "zh-tw": "數位虛擬矩陣都市（Digital Virtual Matrix City）", en: "Digital Virtual Matrix City" }
    ]
  },

  // 跟拍鏡頭型別詞庫
  tracking_camera_shot: {
    label: { "zh-tw": "跟拍鏡頭型別", en: "Tracking Camera Shot" },
    category: "visual",
    options: [
      { "zh-tw": "極具縱深感的廣角跟拍（Wide Angle Tracking Shot）", en: "Wide Angle Tracking Shot with Deep Depth" },
      { "zh-tw": "俯瞰追蹤拍攝（Overhead Tracking Shot）", en: "Overhead Tracking Shot" },
      { "zh-tw": "側面平行跟隨（Side Parallel Follow）", en: "Side Parallel Follow" },
      { "zh-tw": "斜向45度跟拍（Diagonal 45° Tracking）", en: "Diagonal 45° Tracking" },
      { "zh-tw": "螺旋上升環繞（Spiral Ascent Orbit）", en: "Spiral Ascent Orbit" },
      { "zh-tw": "低空掠過跟拍（Low Altitude Sweep）", en: "Low Altitude Sweep" },
      { "zh-tw": "穿越障礙跟拍（Obstacle Weaving Shot）", en: "Obstacle Weaving Shot" },
      { "zh-tw": "遠景縮放跟拍（Dolly Zoom Tracking）", en: "Dolly Zoom Tracking" }
    ]
  },

  // 動作鏡頭型別詞庫
  action_camera_shot: {
    label: { "zh-tw": "動作鏡頭型別", en: "Action Camera Shot" },
    category: "visual",
    options: [
      { "zh-tw": "緊張的駕駛艙視角（Cockpit View）", en: "Tense Cockpit View" },
      { "zh-tw": "緊湊跟拍（Tight Action Shot）", en: "Tight Action Shot" },
      { "zh-tw": "第一人稱視角（First-Person POV）", en: "First-Person POV" },
      { "zh-tw": "動作 GoPro 附著視角（Action GoPro Mount）", en: "Action GoPro Mount" },
      { "zh-tw": "急速甩鏡頭（Whip Pan Transition）", en: "Whip Pan Transition" },
      { "zh-tw": "慢動作特寫（Slow-Motion Close-Up）", en: "Slow-Motion Close-Up" },
      { "zh-tw": "動態震動鏡頭（Dynamic Camera Shake）", en: "Dynamic Camera Shake" },
      { "zh-tw": "多角度快速切換（Multi-Angle Quick Cut）", en: "Multi-Angle Quick Cut" }
    ]
  },

  // 自然環境型別詞庫
  natural_environment: {
    label: { "zh-tw": "自然環境型別", en: "Natural Environment Type" },
    category: "location",
    options: [
      { "zh-tw": "古代雨林（Ancient Rainforest）", en: "Ancient Rainforest" },
      { "zh-tw": "雪山峽谷（Snow Mountain Canyon）", en: "Snow Mountain Canyon" },
      { "zh-tw": "沙漠綠洲（Desert Oasis）", en: "Desert Oasis" },
      { "zh-tw": "冰川峽谷（Glacier Canyon）", en: "Glacier Canyon" },
      { "zh-tw": "火山熔岩地帶（Volcanic Lava Zone）", en: "Volcanic Lava Zone" },
      { "zh-tw": "熱帶群島（Tropical Archipelago）", en: "Tropical Archipelago" },
      { "zh-tw": "大峽谷（Grand Canyon）", en: "Grand Canyon" },
      { "zh-tw": "北極冰原（Arctic Ice Field）", en: "Arctic Ice Field" }
    ]
  },

  // 軍用飛行器詞庫
  military_aircraft: {
    label: { "zh-tw": "軍用飛行器", en: "Military Aircraft" },
    category: "item",
    options: [
      { "zh-tw": "戰鬥機（Fighter Jet）", en: "Fighter Jet" },
      { "zh-tw": "隱形戰機（Stealth Fighter）", en: "Stealth Fighter" },
      { "zh-tw": "攻擊機（Attack Aircraft）", en: "Attack Aircraft" },
      { "zh-tw": "偵察機（Reconnaissance Plane）", en: "Reconnaissance Plane" },
      { "zh-tw": "轟炸機（Bomber）", en: "Bomber" },
      { "zh-tw": "垂直起降戰機（VTOL Aircraft）", en: "VTOL Aircraft" },
      { "zh-tw": "無人戰鬥機（UCAV）", en: "UCAV" },
      { "zh-tw": "超音速截擊機（Supersonic Interceptor）", en: "Supersonic Interceptor" }
    ]
  },

  // 航拍開場鏡頭詞庫
  aerial_opening_shot: {
    label: { "zh-tw": "航拍開場鏡頭", en: "Aerial Opening Shot" },
    category: "visual",
    options: [
      { "zh-tw": "史詩超廣角航拍（Epic Ultra Wide Aerial Shot）", en: "Epic Ultra Wide Aerial Shot" },
      { "zh-tw": "俯瞰全景（Overhead Panoramic View）", en: "Overhead Panoramic View" },
      { "zh-tw": "側面橫掃（Lateral Sweep）", en: "Lateral Sweep" },
      { "zh-tw": "垂直俯衝（Vertical Dive）", en: "Vertical Dive" },
      { "zh-tw": "環繞旋轉（Orbiting Rotation）", en: "Orbiting Rotation" },
      { "zh-tw": "平推向前（Straight Push Forward）", en: "Straight Push Forward" },
      { "zh-tw": "斜角俯衝（Diagonal Dive）", en: "Diagonal Dive" },
      { "zh-tw": "高角度俯瞰（High Angle Overlook）", en: "High Angle Overlook" }
    ]
  },

  // 動態跟拍風格詞庫
  dynamic_tracking_shot: {
    label: { "zh-tw": "動態跟拍風格", en: "Dynamic Tracking Shot Style" },
    category: "visual",
    options: [
      { "zh-tw": "第三人稱緊密跟拍（Third-Person Tight Tracking）", en: "Third-Person Tight Tracking" },
      { "zh-tw": "第一人稱視角（First-Person POV）", en: "First-Person POV" },
      { "zh-tw": "側面跟隨（Side Follow）", en: "Side Follow" },
      { "zh-tw": "頭頂俯視追蹤（Top-Down Tracking）", en: "Top-Down Tracking" },
      { "zh-tw": "斜後方45度跟拍（45-Degree Rear Tracking）", en: "45-Degree Rear Tracking" },
      { "zh-tw": "動態環繞跟拍（Dynamic Orbit Tracking）", en: "Dynamic Orbit Tracking" },
      { "zh-tw": "分離鏡頭（Split Shot）", en: "Split Shot" },
      { "zh-tw": "震動跟拍（Shaky Tracking）", en: "Shaky Tracking" }
    ]
  },
  // 角色設計表專用詞庫
  character_animal: {
    label: { "zh-tw": "動物角色型別", en: "Animal Character Type" },
    category: "character",
    options: [
      { "zh-tw": "小兔子", en: "Little Bunny" },
      { "zh-tw": "小熊", en: "Little Bear" },
      { "zh-tw": "小貓", en: "Little Kitten" },
      { "zh-tw": "小狗", en: "Little Puppy" },
      { "zh-tw": "小狐狸", en: "Little Fox" },
      { "zh-tw": "小松鼠", en: "Little Squirrel" },
      { "zh-tw": "小刺蝟", en: "Little Hedgehog" },
      { "zh-tw": "小鳥", en: "Little Bird" },
      { "zh-tw": "小老鼠", en: "Little Mouse" },
      { "zh-tw": "小龍", en: "Little Dragon" }
    ]
  },
  fur_color: {
    label: { "zh-tw": "毛色/主色調", en: "Fur Color / Main Color" },
    category: "character",
    options: [
      { "zh-tw": "柔和溫暖的粉彩黃色", en: "Soft warm pastel yellow" },
      { "zh-tw": "純白色", en: "Pure white" },
      { "zh-tw": "淺棕色", en: "Light brown" },
      { "zh-tw": "奶油色", en: "Creamy white" },
      { "zh-tw": "粉彩粉色", en: "Pastel pink" },
      { "zh-tw": "粉彩藍色", en: "Pastel blue" },
      { "zh-tw": "粉彩綠色", en: "Pastel green" },
      { "zh-tw": "淺灰色", en: "Light gray" },
      { "zh-tw": "橙黃色", en: "Orange-yellow" },
      { "zh-tw": "淺紫色", en: "Light purple" }
    ]
  },
  body_description: {
    label: { "zh-tw": "身體特徵", en: "Body Features" },
    category: "character",
    options: [
      { "zh-tw": "大圓頭和小橢圓身體", en: "Large round head and small oval body" },
      { "zh-tw": "圓潤可愛的身體", en: "Round and cute body" },
      { "zh-tw": "小巧玲瓏的身體", en: "Small and delicate body" },
      { "zh-tw": "胖乎乎的身體", en: "Chubby body" },
      { "zh-tw": "纖細優雅的身體", en: "Slender and elegant body" },
      { "zh-tw": "方方正正的身體", en: "Square and sturdy body" },
      { "zh-tw": "修長的身體", en: "Elongated body" },
      { "zh-tw": "緊湊的身體", en: "Compact body" }
    ]
  },
  character_accessories: {
    label: { "zh-tw": "服裝配飾", en: "Accessories" },
    category: "item",
    options: [
      { "zh-tw": "小紅橙色探險家圍巾和棕色小挎包", en: "Small red-orange adventurer scarf and tiny brown satchel" },
      { "zh-tw": "藍色小領結", en: "Small blue bow tie" },
      { "zh-tw": "紅色小領巾", en: "Small red neckerchief" },
      { "zh-tw": "粉色蝴蝶結", en: "Pink bow" },
      { "zh-tw": "小帽子", en: "Small hat" },
      { "zh-tw": "小背包", en: "Small backpack" },
      { "zh-tw": "圍裙", en: "Apron" },
      { "zh-tw": "小斗篷", en: "Small cape" },
      { "zh-tw": "眼鏡", en: "Glasses" },
      { "zh-tw": "無配飾", en: "No accessories" }
    ]
  },
  character_persona: {
    label: { "zh-tw": "角色定位", en: "Character Persona" },
    category: "character",
    options: [
      { "zh-tw": "可愛的奇幻探險家", en: "Cute fantasy explorer" },
      { "zh-tw": "小小魔法師", en: "Little wizard" },
      { "zh-tw": "勇敢的小騎士", en: "Brave little knight" },
      { "zh-tw": "好奇的小探險家", en: "Curious little explorer" },
      { "zh-tw": "溫柔的小護士", en: "Gentle little nurse" },
      { "zh-tw": "調皮的小淘氣", en: "Playful little mischief" },
      { "zh-tw": "聰明的小學者", en: "Smart little scholar" },
      { "zh-tw": "善良的小幫手", en: "Kind little helper" },
      { "zh-tw": "小小廚師", en: "Little chef" },
      { "zh-tw": "小小藝術家", en: "Little artist" }
    ]
  },
  design_sheet_type: {
    label: { "zh-tw": "設計表型別", en: "Design Sheet Type" },
    category: "other",
    options: [
      { "zh-tw": "角色轉身表（character turnaround sheet）", en: "Character turnaround sheet" },
      { "zh-tw": "表情表（expression sheet）", en: "Expression sheet" },
      { "zh-tw": "姿勢表（pose sheet）", en: "Pose sheet" },
      { "zh-tw": "完整角色設定表（full character model sheet）", en: "Full character model sheet" },
      { "zh-tw": "動作參考表（action reference sheet）", en: "Action reference sheet" },
      { "zh-tw": "色彩設計表（color design sheet）", en: "Color design sheet" }
    ]
  },
  // 漫畫頁面專用詞庫（精簡版）
  comic_subject: {
    label: { "zh-tw": "漫畫主體", en: "Comic Subject" },
    category: "character",
    options: [
      { "zh-tw": "兩個潛行的忍者", en: "two stealthy ninjas" },
      { "zh-tw": "兩個武士", en: "two samurai warriors" },
      { "zh-tw": "兩個盜賊", en: "two thieves" },
      { "zh-tw": "兩個刺客", en: "two assassins" },
      { "zh-tw": "兩個劍客", en: "two swordsmen" },
      { "zh-tw": "兩個偵探", en: "two detectives" },
      { "zh-tw": "兩個間諜", en: "two spies" }
    ]
  },
  comic_location: {
    label: { "zh-tw": "場景地點", en: "Location" },
    category: "location",
    options: [
      { "zh-tw": "古日本寺廟", en: "ancient Japanese temple" },
      { "zh-tw": "城堡", en: "castle" },
      { "zh-tw": "宮殿", en: "palace" },
      { "zh-tw": "武士道場", en: "samurai dojo" },
      { "zh-tw": "忍者村落", en: "ninja village" },
      { "zh-tw": "森林神社", en: "forest shrine" },
      { "zh-tw": "山頂古堡", en: "mountain fortress" }
    ]
  },
  comic_time: {
    label: { "zh-tw": "時間", en: "Time of Day" },
    category: "visual",
    options: [
      { "zh-tw": "夜晚", en: "night" },
      { "zh-tw": "黎明", en: "dawn" },
      { "zh-tw": "黃昏", en: "dusk" },
      { "zh-tw": "午夜", en: "midnight" },
      { "zh-tw": "月圓之夜", en: "full moon night" },
      { "zh-tw": "暴雨之夜", en: "stormy night" }
    ]
  },
  comic_art_style: {
    label: { "zh-tw": "漫畫風格", en: "Comic Art Style" },
    category: "visual",
    options: [
      { "zh-tw": "傳統黑白漫畫風格", en: "traditional black and white manga style" },
      { "zh-tw": "現代彩漫風格", en: "modern colored manga style" },
      { "zh-tw": "水墨漫畫風格", en: "ink wash manga style" },
      { "zh-tw": "美式漫畫風格", en: "American comic book style" },
      { "zh-tw": "復古印刷風格", en: "vintage print style" },
      { "zh-tw": "素描手繪風格", en: "sketchy hand-drawn style" }
    ]
  },

  // ========== 創意容器樣板詞庫 ==========
  container_type: {
    label: { "zh-tw": "容器型別", en: "Container Type" },
    category: "item",
    options: [
      { "zh-tw": "750ml玻璃酒瓶", en: "750ml glass wine bottle" },
      { "zh-tw": "500ml透明玻璃水瓶", en: "500ml clear glass water bottle" },
      { "zh-tw": "1升玻璃罐", en: "1 liter glass jar" },
      { "zh-tw": "玻璃香水瓶", en: "glass perfume bottle" },
      { "zh-tw": "球形玻璃容器", en: "spherical glass vessel" },
      { "zh-tw": "透明玻璃燒杯", en: "transparent glass beaker" },
      { "zh-tw": "復古玻璃燈泡", en: "vintage glass light bulb" },
      { "zh-tw": "柱形玻璃花瓶", en: "cylindrical glass vase" },
      { "zh-tw": "玻璃試管", en: "glass test tube" },
      { "zh-tw": "透明玻璃球", en: "transparent glass sphere" }
    ]
  },

  view_type: {
    label: { "zh-tw": "檢視型別", en: "View Type" },
    category: "visual",
    options: [
      { "zh-tw": "橫截面檢視", en: "cross-section view" },
      { "zh-tw": "透檢視", en: "transparent view" },
      { "zh-tw": "剖面圖", en: "cutaway view" },
      { "zh-tw": "側檢視", en: "side view" },
      { "zh-tw": "俯檢視", en: "top-down view" },
      { "zh-tw": "內部視角", en: "interior view" },
      { "zh-tw": "透明剖檢視", en: "see-through section view" },
      { "zh-tw": "微觀視角", en: "microscopic view" }
    ]
  },

  landscape_location: {
    label: { "zh-tw": "景觀地點", en: "Landscape Location" },
    category: "location",
    options: [
      { "zh-tw": "特蘭西瓦尼亞葡萄園", en: "Transylvania vineyard" },
      { "zh-tw": "托斯卡納向日葵田", en: "Tuscan sunflower field" },
      { "zh-tw": "京都竹林", en: "Kyoto bamboo forest" },
      { "zh-tw": "瑞士阿爾卑斯山村", en: "Swiss Alpine village" },
      { "zh-tw": "普羅旺斯薰衣草田", en: "Provence lavender field" },
      { "zh-tw": "挪威峽灣", en: "Norwegian fjord" },
      { "zh-tw": "撒哈拉沙漠綠洲", en: "Sahara desert oasis" },
      { "zh-tw": "亞馬遜雨林", en: "Amazon rainforest" },
      { "zh-tw": "中國水墨山水", en: "Chinese ink landscape" },
      { "zh-tw": "日本櫻花山谷", en: "Japanese cherry blossom valley" }
    ]
  },

  landscape_features: {
    label: { "zh-tw": "景觀特徵", en: "Landscape Features" },
    category: "location",
    options: [
      { "zh-tw": "起伏山丘、整齊葡萄架、土路、小農舍", en: "rolling hills, neat vine rows, dirt paths, small farmhouse" },
      { "zh-tw": "連綿山脈、松樹林、石板路、山間小屋", en: "mountain ranges, pine forests, stone paths, mountain cabins" },
      { "zh-tw": "竹林小徑、石燈籠、溪流、茶屋", en: "bamboo paths, stone lanterns, streams, tea house" },
      { "zh-tw": "金色花海、柏樹路、農莊、稻草人", en: "golden flower fields, cypress roads, farmhouses, scarecrows" },
      { "zh-tw": "紫色花田、石牆、薰衣草農舍、蜜蜂", en: "purple flower fields, stone walls, lavender farmhouses, bees" },
      { "zh-tw": "瀑布、峭壁、漁村、漁船", en: "waterfalls, cliffs, fishing villages, fishing boats" },
      { "zh-tw": "棕櫚樹、水池、棕櫚葉小屋、沙漠狐狸", en: "palm trees, water pools, palm leaf huts, desert foxes" },
      { "zh-tw": "熱帶雨林、藤蔓、樹屋、鸚鵡", en: "rainforest, vines, treehouses, parrots" },
      { "zh-tw": "山峰、雲霧、古松、寺廟", en: "mountain peaks, clouds, ancient pines, temple" },
      { "zh-tw": "櫻花樹、神社、木橋、狐狸雕像", en: "cherry blossom trees, shrine, wooden bridge, fox statues" }
    ]
  },

  lighting_time: {
    label: { "zh-tw": "時間光照", en: "Lighting Time" },
    category: "visual",
    options: [
      { "zh-tw": "清晨陽光", en: "morning sunlight" },
      { "zh-tw": "午後金色陽光", en: "afternoon golden sunlight" },
      { "zh-tw": "日落霞光", en: "sunset glow" },
      { "zh-tw": "正午明亮陽光", en: "midday bright sunlight" },
      { "zh-tw": "黎明柔光", en: "dawn soft light" },
      { "zh-tw": "黃昏暮光", en: "dusk twilight" },
      { "zh-tw": "月光", en: "moonlight" },
      { "zh-tw": "多雲漫射光", en: "overcast diffused light" }
    ]
  },

  detail_level: {
    label: { "zh-tw": "細節程度", en: "Detail Level" },
    category: "visual",
    options: [
      { "zh-tw": "複雜細節", en: "intricate details" },
      { "zh-tw": "超精細細節", en: "ultra-fine details" },
      { "zh-tw": "微觀細節", en: "microscopic details" },
      { "zh-tw": "精緻紋理", en: "refined textures" },
      { "zh-tw": "寫實細節", en: "realistic details" },
      { "zh-tw": "極簡細節", en: "minimalist details" }
    ]
  },

  glass_effect: {
    label: { "zh-tw": "玻璃效果", en: "Glass Effect" },
    category: "visual",
    options: [
      { "zh-tw": "真實玻璃反射", en: "realistic glass reflections" },
      { "zh-tw": "水晶般透明", en: "crystal clear transparency" },
      { "zh-tw": "玻璃折射效果", en: "glass refraction effects" },
      { "zh-tw": "彩虹色反光", en: "iridescent reflections" },
      { "zh-tw": "磨砂玻璃質感", en: "frosted glass texture" },
      { "zh-tw": "厚重玻璃邊緣", en: "thick glass edges" },
      { "zh-tw": "玻璃高光", en: "glass highlights" },
      { "zh-tw": "透明玻璃效果", en: "transparent glass effects" }
    ]
  },

  background_type: {
    label: { "zh-tw": "背景型別", en: "Background Type" },
    category: "visual",
    options: [
      { "zh-tw": "工作室背景", en: "studio background" },
      { "zh-tw": "極簡純色背景", en: "minimalist solid color background" },
      { "zh-tw": "漸變背景", en: "gradient background" },
      { "zh-tw": "白色背景", en: "white background" },
      { "zh-tw": "深色背景", en: "dark background" },
      { "zh-tw": "模糊自然背景", en: "blurred natural background" },
      { "zh-tw": "紋理背景", en: "textured background" },
      { "zh-tw": "無縫背景", en: "seamless background" }
    ]
  },

  museum_theme: {
    label: { "zh-tw": "博物館主題", en: "Museum Theme" },
    category: "other",
    options: [
      { "zh-tw": "明制漢服", en: "Ming Dynasty Hanfu" },
      { "zh-tw": "唐代官服", en: "Tang Dynasty Official Robe" },
      { "zh-tw": "宋代文人便服", en: "Song Dynasty Scholar Casual Wear" },
      { "zh-tw": "清代朝服", en: "Qing Dynasty Court Attire" },
      { "zh-tw": "漢代曲裾深衣", en: "Han Dynasty Quju Shenyi Robe" },
      { "zh-tw": "中國古代甲冑", en: "Ancient Chinese Armor" },
      { "zh-tw": "斗栱（木建構築構件）", en: "Dougong Timber Bracket" },
      { "zh-tw": "景泰藍掐絲琺琅", en: "Cloisonné Enamel Craftsmanship" },
      { "zh-tw": "宋代汝窯青瓷", en: "Song Dynasty Ru Ware Celadon" },
      { "zh-tw": "敦煌供養人服飾", en: "Dunhuang Donor Figure Attire" },
      { "zh-tw": "傳統雲紋錦緞織物", en: "Traditional Cloud Pattern Brocade" },
      { "zh-tw": "清代滿族女性旗裝", en: "Qing Dynasty Manchu Women's Qi Attire" },
      { "zh-tw": "古代玉器與紋飾體系", en: "Ancient Jade and Decorative Pattern System" },
      { "zh-tw": "明式木質傢俱結構", en: "Ming Style Wooden Furniture Structure" }
    ]
  },

  ad_regional_style: {
    label: { "zh-tw": "廣告地域風格", en: "Ad Regional Style" },
    category: "other",
    options: [
      { "zh-tw": "中式廣告", en: "Chinese advertisements" },
      { "zh-tw": "日式廣告", en: "Japanese advertisements" },
      { "zh-tw": "韓式廣告", en: "Korean advertisements" },
      { "zh-tw": "意大利廣告", en: "Italian advertisements" },
      { "zh-tw": "法式廣告", en: "French advertisements" },
      { "zh-tw": "美式廣告", en: "American advertisements" },
      { "zh-tw": "北歐風廣告", en: "Nordic-style advertisements" },
      { "zh-tw": "港式復古廣告", en: "Hong Kong retro-style advertisements" }
    ]
  },

  city_landmarks: {
    label: { "zh-tw": "對應地標", en: "City Landmarks" },
    category: "location",
    options: [
      { "zh-tw": "珠江新城雙塔、獵德大橋、白雲山輪廓、嶺南騎樓", en: "Zhujiang New Town twin towers, Liede Bridge, Baiyun Mountain silhouette, Lingnan arcade buildings" },
      { "zh-tw": "外灘、東方明珠、陸家嘴天際線、石庫門", en: "The Bund, Oriental Pearl Tower, Lujiazui skyline, Shikumen" },
      { "zh-tw": "故宮角樓、國貿CBD、衚衕灰瓦、天壇剪影", en: "Forbidden City corner towers, Guomao CBD, hutong grey tiles, Temple of Heaven silhouette" },
      { "zh-tw": "平安金融中心、深圳灣大橋、蓮花山、濱海天際線", en: "Ping An IFC, Shenzhen Bay Bridge, Lianhuashan, coastal skyline" },
      { "zh-tw": "雷峰塔、三潭印月、錢江新城、南宋御街", en: "Leifeng Pagoda, Three Pools Mirroring the Moon, Qianjiang New Town, Southern Song Imperial Street" },
      { "zh-tw": "九眼橋、太古裡、青城山輪廓、錦江夜色", en: "Jiuyan Bridge, Taikoo Li, Qingcheng Mountain silhouette, Jinjiang River night" },
      { "zh-tw": "大雁塔、城牆、鐘樓、大唐不夜城", en: "Giant Wild Goose Pagoda, city wall, Bell Tower, Datang Everbright City" },
      { "zh-tw": "洪崖洞、長江索道、兩江交匯、山城夜景", en: "Hongya Cave, Yangtze River cableway, two rivers merge, mountain city night view" },
      { "zh-tw": "紫峰大廈、長江大橋、中山陵、秦淮河", en: "Zifeng Tower, Nanjing Yangtze River Bridge, Sun Yat-sen Mausoleum, Qinhuai River" },
      { "zh-tw": "蘇州園林亭臺、東方之門、古運河、平江路", en: "Suzhou classical garden pavilions, Gate of the Orient, ancient canal, Pingjiang Road" }
    ]
  },

  poster_texture_style: {
    label: { "zh-tw": "紋理樣式", en: "Texture Style" },
    category: "visual",
    options: [
      { "zh-tw": "大面積留白 + 淡宣紙肌理", en: "Generous negative space with light rice-paper grain" },
      { "zh-tw": "絹本淡紋 + 柔和絲感", en: "Subtle silk-scroll weave with soft sheen" },
      { "zh-tw": "微顆粒巖彩 + 手工紙觸感", en: "Fine mineral pigment grain with handmade paper tactility" },
      { "zh-tw": "祥雲水紋浮雕燙金質感", en: "Embossed auspicious clouds and water ripples with gold-foil hot-stamp feel" },
      { "zh-tw": "雲紋錦緞肌理 + 低調光澤", en: "Brocade cloud pattern texture with understated luster" },
      { "zh-tw": "冰裂釉紋 + 清透層次", en: "Crackle-glaze pattern with clear layered depth" }
    ]
  },

  classical_poem: {
    label: { "zh-tw": "經典詩詞篇目", en: "Classical Poem" },
    category: "other",
    options: [
      { "zh-tw": "春夜喜雨", en: "A Welcome Rain on a Spring Night" },
      { "zh-tw": "靜夜思", en: "Quiet Night Thoughts" },
      { "zh-tw": "登鸛雀樓", en: "On the Stork Tower" },
      { "zh-tw": "憫農（其一）", en: "Pity the Farmers (Part One)" },
      { "zh-tw": "詠鵝", en: "Ode to the Goose" },
      { "zh-tw": "望廬山瀑布", en: "Gazing at the Waterfall on Mount Lu" },
      { "zh-tw": "江雪", en: "River Snow" },
      { "zh-tw": "贈汪倫", en: "To Wang Lun" },
      { "zh-tw": "遊子吟", en: "Song of the Wandering Son" },
      { "zh-tw": "回鄉偶書", en: "Homecoming" },
      { "zh-tw": "敕勒歌", en: "Song of Chile" },
      { "zh-tw": "早發白帝城", en: "Early Departure from Baidi City" },
      { "zh-tw": "楓橋夜泊", en: "Mooring at Maple Bridge by Night" },
      { "zh-tw": "清明", en: "Qingming" },
      { "zh-tw": "黃鶴樓送孟浩然之廣陵", en: "Seeing Meng Haoran Off at Yellow Crane Tower" }
    ]
  },

  app_icon_category: {
    label: { "zh-tw": "APP 品類", en: "App Category" },
    category: "other",
    options: [
      { "zh-tw": "運動類APP", en: "Sports app" },
      { "zh-tw": "醫療健康", en: "Health & medical" },
      { "zh-tw": "本地生活", en: "Local services" },
      { "zh-tw": "金融理財", en: "Finance & wealth" },
      { "zh-tw": "教育學習", en: "Education" },
      { "zh-tw": "社交娛樂", en: "Social & entertainment" },
      { "zh-tw": "電商購物", en: "E-commerce" },
      { "zh-tw": "出行導覽", en: "Travel & navigation" }
    ]
  },

  collab_theme_a: {
    label: { "zh-tw": "聯名主題 A（文學/童話 IP）", en: "Collab Theme A (Story IP)" },
    category: "other",
    options: [
      { "zh-tw": "小王子", en: "The Little Prince" },
      { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
      { "zh-tw": "千與千尋", en: "Spirited Away" },
      { "zh-tw": "哈利·波特", en: "Harry Potter" },
      { "zh-tw": "魔戒", en: "The Lord of the Rings" },
      { "zh-tw": "小王子（原版插畫風格）", en: "Le Petit Prince (original illustration style)" },
      { "zh-tw": "愛麗絲夢遊仙境", en: "Alice in Wonderland" },
      { "zh-tw": "彼得·潘", en: "Peter Pan" }
    ]
  },

  collab_theme_b: {
    label: { "zh-tw": "聯名主題 B（科技/航天/科幻）", en: "Collab Theme B (Tech / Space / Sci-Fi)" },
    category: "other",
    options: [
      { "zh-tw": "SpaceX", en: "SpaceX" },
      { "zh-tw": "NASA", en: "NASA" },
      { "zh-tw": "中國航天", en: "China National Space Administration (CNSA)" },
      { "zh-tw": "歐洲航天局 (ESA)", en: "European Space Agency (ESA)" },
      { "zh-tw": "Blue Origin", en: "Blue Origin" },
      { "zh-tw": "星際迷航", en: "Star Trek" },
      { "zh-tw": "星際大戰", en: "Star Wars" },
      { "zh-tw": "國際空間站", en: "International Space Station" }
    ]
  },

  card_game_collection: {
    label: { "zh-tw": "卡牌集主題", en: "Card Collection Theme" },
    category: "other",
    options: [
      { "zh-tw": "中國古代詩人", en: "Ancient Chinese poets" },
      { "zh-tw": "水滸英雄", en: "Water Margin heroes" },
      { "zh-tw": "三國人物", en: "Three Kingdoms characters" },
      { "zh-tw": "西遊記人物", en: "Journey to the West characters" },
      { "zh-tw": "唐宋名家", en: "Tang and Song masters" },
      { "zh-tw": "仙俠武俠名士", en: "Wuxia and immortal heroes" },
      { "zh-tw": "封神演義人物", en: "Investiture of the Gods characters" }
    ]
  },

  ancient_celebrity: {
    label: { "zh-tw": "古代名人", en: "Historical Figure" },
    category: "character",
    options: [
      { "zh-tw": "蘇軾", en: "Su Shi" },
      { "zh-tw": "李白", en: "Li Bai" },
      { "zh-tw": "杜甫", en: "Du Fu" },
      { "zh-tw": "王羲之", en: "Wang Xizhi" },
      { "zh-tw": "李清照", en: "Li Qingzhao" },
      { "zh-tw": "陸游", en: "Lu You" },
      { "zh-tw": "辛棄疾", en: "Xin Qiji" },
      { "zh-tw": "王維", en: "Wang Wei" },
      { "zh-tw": "白居易", en: "Bai Juyi" },
      { "zh-tw": "歐陽修", en: "Ouyang Xiu" },
      { "zh-tw": "陶淵明", en: "Tao Yuanming" }
    ]
  }
};

export const INITIAL_DEFAULTS = {
  role: { "zh-tw": "遊戲與動漫概念美術設計大師", en: "Master of Game and Anime Concept Art" },
  subject: { "zh-tw": "女性角色", en: "Female Character" },
  character_companion: { "zh-tw": "死侍 (Deadpool)", en: "Deadpool" },
  layout_focus: { "zh-tw": "全身立繪", en: "Full-body Portrait" },
  camera_angle: { "zh-tw": "臉頰和頸部特寫", en: "Cheek and neck close-up" },
  connectors: { "zh-tw": "手繪箭頭或引導線", en: "Hand-drawn arrows or guide lines" },
  underwear_style: { "zh-tw": "簡約舒適棉質內衣", en: "Simple and comfortable cotton innerwear" },
  clothing: { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
  clothing_male: { "zh-tw": "剪裁合身的深藍西裝", en: "Tailored deep blue suit" },
  clothing_female: { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
  expressions: { "zh-tw": "瘋狂、病嬌、狂喜", en: "Crazy, Yandere, Ecstatic" },
  character_originality: { "zh-tw": "創作一個原創人物", en: "Create an original character" },
  character_groups: { "zh-tw": "中外知名偵探（包青天、狄仁傑、福爾摩斯、柯南等）", en: "Famous Detectives (Bao Zheng, Di Renjie, Sherlock Holmes, Conan, etc.)" },
  social_media: { "zh-tw": "微信朋友圈", en: "WeChat Moments" },
  texture_zoom: { "zh-tw": "精細的皮膚紋理", en: "Fine skin texture" },
  action_detail: { "zh-tw": "自信的站立", en: "Confident standing" },
  special_view: { "zh-tw": "背影回眸", en: "Back view reflected in a mirror" },
  bag_content: { "zh-tw": "日常通勤包或手拿包", en: "Daily commuter bag or clutch" },
  cosmetics: { "zh-tw": "常用的化妝品組合", en: "Commonly used cosmetics combo" },
  private_items: { "zh-tw": "智慧運動手錶", en: "Smart Sports Watch" },
  art_style: { "zh-tw": "高品質的 2D 插畫風格", en: "High-quality 2D illustration style" },
  background_style: { "zh-tw": "漫畫網格筆記本", en: "Manga grid notebook" },
  fashion_deconstruct: { "zh-tw": "整齊折疊的外套和精緻的高跟鞋", en: "Neatly folded coat and exquisite high heels" },
  toy_companion: { "zh-tw": "Labubu藝術公仔", en: "Labubu Art Toy" },
  classic_scene: { "zh-tw": "駭客任務", en: "The Matrix" },
  render_style: { "zh-tw": "Octane Render 和 Cinema 4D", en: "Octane Render and Cinema 4D" },
  position: { "zh-tw": "頂部中央", en: "Top Center" },
  company: { "zh-tw": "任天堂（Nintendo）", en: "Nintendo" },
  ratio: { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" },
  
  // Grid defaults
  grid_pose: { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
  
  // Legacy defaults
  lens_param: { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
  lighting: { "zh-tw": "大型頂置柔光箱，輕微側向反射光", en: "Large overhead softbox, slight side reflection" },
  sticker_core: { "zh-tw": "使用者穿著甜美約會裝的照片", en: "Photo of user in a sweet date outfit" },
  sticker_decor: { "zh-tw": "手繪愛心、閃光符號", en: "Hand-drawn hearts, sparkle symbols" },
  action_pose: { "zh-tw": "用手指在男人腦後比劃'兔耳朵'", en: "Using fingers to make 'bunny ears' behind the man's head" },
  background_scene: { "zh-tw": "俯瞰紐約市的復仇者大廈樓頂", en: "Rooftop of Avengers Tower overlooking New York City" },
  
  // Fish Eye Urban defaults
  lens_type: { "zh-tw": "極端魚眼鏡頭", en: "Extreme Fisheye Lens" },
  school_uniform: { "zh-tw": "灰色開襟和格子裙校服", en: "Grey cardigan and plaid skirt uniform" },
  urban_location: { "zh-tw": "澀谷十字路口", en: "Shibuya Crossing" },
  dynamic_action: { "zh-tw": "一隻手誇張地伸向鏡頭前景", en: "One hand exaggeratedly reaching towards the foreground" },
  fingernail_detail: { "zh-tw": "手指甲清晰可見", en: "Fingernails clearly visible" },
  building_cluster: { "zh-tw": "扭曲的澀谷109大樓和其他建築林立", en: "Distorted Shibuya 109 building and other forest of buildings" },
  crowd_traffic: { "zh-tw": "擠滿行人和車輛", en: "Bustling traffic" },
  monster_element: { "zh-tw": "巨大的粉色和藍色漸變卡通怪獸", en: "Giant pink and blue gradient cartoon monster" },
  monster_feature: { "zh-tw": "巨大的觸手和角", en: "Giant tentacles and horns" },
  distorted_city: { "zh-tw": "扭曲的城市景觀", en: "Distorted urban landscape" },
  lighting_atmosphere: { "zh-tw": "陽光明媚", en: "Sunny" },
  shadow_contrast: { "zh-tw": "光影對比強烈", en: "Strong light-shadow contrast" },
  travel_location: { "zh-tw": "西藏拉薩布達拉宮", en: "Potala Palace, Lhasa, Tibet" },
  comic_scene: { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
  designer: { "zh-tw": "Jonathan Ive (Jony Ive)", en: "Jonathan Ive" },
  design_item: { "zh-tw": "無人機", en: "Drone" },
  rain_shape: { "zh-tw": "芭蕾舞者", en: "Ballerina" },
  art_type: { "zh-tw": "美術學", en: "Fine Arts" },
  show_name: { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
  character_name: { "zh-tw": "龍貓", en: "Totoro" },
  fruit: { "zh-tw": "檸檬", en: "Lemon" },
  xmas_theme: { "zh-tw": "抽象聖誕樹", en: "an abstract Christmas Tree" },
  jewelry_style: { "zh-tw": "精美的金色背鏈", en: "Fine gold back necklace" },
  flower_type: { "zh-tw": "一束深紅色玫瑰", en: "A bouquet of deep red roses" },
  character_type_pixar: { "zh-tw": "單人角色：聚焦於個人生活方式", en: "Single: Focus on personal lifestyle" },
  theme_pixar: { "zh-tw": "女性/時尚主題：香檳金、玫瑰金、奶油色、櫻花粉", en: "Female/Fashion: Champagne Gold, Rose Gold, Cream, Cherry Pink" },
  item_layout_pixar: { "zh-tw": "90度直角整齊排列 (Knolling)", en: "90-degree Knolling layout" },
  fashion_parts: { "zh-tw": "風衣拆解：翻領、肩章、腰帶、袖口束帶、主衣身", en: "Trench coat: Lapel, epaulets, belt, cuffs, main body" },
  beauty_items: { "zh-tw": "彩妝：口紅（帶切面）、眼影盤、粉餅、腮紅刷", en: "Makeup: Lipstick (cut), eyeshadow palette, compact, blush brush" },
  digital_items: { "zh-tw": "手機拆解：手機殼、螢幕內容、攝像頭模組、主板元件", en: "Phone: Case, screen content, camera module, motherboard" },
  luxury_hobby_items: { "zh-tw": "珠寶：項鍊、耳環、戒指（寶石帶色散效果）", en: "Jewelry: Necklace, earrings, ring (gemstone dispersion)" },
  underwater_color: { "zh-tw": "深青色透明水下", en: "deep teal transparent underwater" },
  creatures: { "zh-tw": "許多銀色小魚", en: "many small silver fish" },
  city_name: { "zh-tw": "京都", en: "Kyoto" },
  art_tool: { "zh-tw": "毛筆", en: "Ink Brush" },
  dominant_colors: { "zh-tw": "傳統的京都紅與古樸的墨黑色", en: "Traditional Kyoto red and antique ink black" },
  background_color_clean: { "zh-tw": "純白", en: "Pure White" },
  city_glimpse_subtitle: { "zh-tw": "古韻悠長的千年古都", en: "The thousand-year-old ancient capital" },
  action_status: { "zh-tw": "玩PS5", en: "playing PS5" },
  draw_style: { "zh-tw": "手繪漫畫風格", en: "Hand-drawn Manga Style" },
  hair_style: { "zh-tw": "短髮，柔和凌亂的深色頭髮", en: "Short, softly tousled dark hair" },
  accessory_glasses: { "zh-tw": "戴著有輕微鏡面反射的眼鏡", en: "wearing glasses with mild lens reflections" },
  // 新年海報預設值
  clothing_style_chinese: { "zh-tw": "古典紅色漢服", en: "Classical red Hanfu" },
  clothing_color_traditional: { "zh-tw": "暗紅色", en: "Dark Red" },
  year_number: { "zh-tw": "2026", en: "2026" },
  greeting_new_year: { "zh-tw": "馬到成功", en: "Immediate Success" },
  background_color_festive: { "zh-tw": "紅色背景", en: "Red background" },
  character_heroic: { "zh-tw": "文藝青年", en: "Artistic Youth" },
  // 可愛動態姿勢預設值
  room_style_cute: { "zh-tw": "可愛粉色房間，粉彩床和牆壁，原創動物玩偶，妖精燈光，可愛海報，絨毛地毯", en: "Cute pink room, pastel pink bed and walls, original cute animal plushies, fairy lights, cute posters, fluffy rug" },
  cute_outfit: { "zh-tw": "黑色緊身吊帶連衣裙，長度到臀部，無袖，細肩帶", en: "Black tight camisole dress, hip-length, sleeveless, thin straps" },
  cute_pose_dynamic: { "zh-tw": "向前走時回望，從正上方自信俏皮地俯視，迷人微笑", en: "Walking forward while looking back, confidently and playfully looking down from directly above, charming smile" },

  // 產品設計規範圖預設值
  product_category: { "zh-tw": "現代椅子", en: "Modern Chair" },
  environment_style: { "zh-tw": "極簡建築室內", en: "Minimal Architectural Interior" },
  drawing_style: { "zh-tw": "建築線圖風格", en: "Architectural Line Drawing Style" },

  // 人物轉手繪預設值
  character_subject: { "zh-tw": "年輕女性，長髮，微笑", en: "Young woman with long hair, smiling" },
  portrait_view: { "zh-tw": "正面肖像", en: "Front portrait" },
  line_art_style: { "zh-tw": "鋼筆墨水風格", en: "Pen and ink style" },
  shading_technique: { "zh-tw": "極簡排線陰影", en: "Minimalist cross-hatching" },
  background_treatment: { "zh-tw": "白色背景", en: "White background" },

  // 經典遊戲真實化預設值
  classic_game: { "zh-tw": "Donkey Kong (1981 街機遊戲)", en: "Donkey Kong (1981 vintage arcade game)" },

  // 科學發現紙雕模型預設值
  scientific_discovery: { "zh-tw": "DNA結構", en: "The Structure of DNA" },

  // 健身自拍場景預設值
  fitness_location: { "zh-tw": "繁忙的健身房，鏡子和器械隨處可見", en: "Busy gym with mirrors and equipment visible" },
  fitness_pose: { "zh-tw": "半蹲姿勢，側身對鏡子", en: "Half-squat pose, turned sideways to mirror" },
  fitness_clothing: { "zh-tw": "運動裙，緊身貼身", en: "Sports skirt, tight and form-fitting" },
  selfie_style: { "zh-tw": "原始真實的鏡子自拍", en: "Raw, authentic mirror selfie" },
  photo_effect: { "zh-tw": "機頂閃光燈直閃", en: "On-camera flash firing" },
  physical_state: { "zh-tw": "健康健美的身材", en: "Healthy athletic build" },
  sweat_appearance: { "zh-tw": "頭髮凌亂溼透，汗水明顯", en: "Hair disheveled and damp with sweat" },
  facial_expression: { "zh-tw": "臉頰泛紅，眼神迷離", en: "Cheeks flushed red, dreamy and slightly unfocused eyes" },
  // 微縮模型系列預設值
  miniature_character: { "zh-tw": "消防員", en: "Firefighter" },
  giant_object: { "zh-tw": "燃燒的火柴棍", en: "Burning Matchstick" },
  // Pop Mart 絨毛玩具預設值
  plush_expression: { "zh-tw": "眨眼俏皮表情", en: "winking with playful expression" },
  cute_accessory: { "zh-tw": "針織帽", en: "beanie hats" },
  festive_archway: { "zh-tw": "中國傳統拱門", en: "traditional Chinese archway" },
  // 3D等距透視展臺預設值
  exhibition_type: { "zh-tw": "現代藝術展覽", en: "modern art exhibition" },
  display_objects: { "zh-tw": "抽象雕塑和裝置藝術", en: "abstract sculptures and installation art" },
  pod_structure: { "zh-tw": "玻璃立方體展臺", en: "glass cube pod" },
  // 中國傳統新娘肖像預設值
  bridal_hair_decoration: { "zh-tw": "紅色紙剪花和蝴蝶裝飾", en: "red paper-cut flowers and butterflies" },
  traditional_bridal_attire: { "zh-tw": "紅色緞面旗袍", en: "red satin cheongsam" },
  bridal_jewelry: { "zh-tw": "白色珍珠首飾和小珍珠耳環", en: "white pearl jewelry and small pearl earrings" },
  // 高端食品廣告預設值
  premium_food_subject: { "zh-tw": "手工巧克力球", en: "handcrafted chocolate truffles" },
  ingredient_bits: { "zh-tw": "可可粉和金箔碎屑", en: "cocoa powder and gold flakes" },
  // 紫禁城雪夜人形鳳凰預設值
  imperial_palace_scene: { "zh-tw": "紫禁城雪夜", en: "Forbidden City snow night" },
  phoenix_crown: { "zh-tw": "華麗繁複的金鳳冠", en: "ornate golden phoenix crown" },
  flowing_garment: { "zh-tw": "流動的紅橙色絲綢華服", en: "flowing red-orange silk robes" },
  festive_props: { "zh-tw": "口中叼著中式紅包，手中拿著展開的春節祝福", en: "holding red envelope in mouth and unfolded spring festival blessing in hand" },
  // 室內設計預設值
  room_type: { "zh-tw": "客廳", en: "Living Room" },
  interior_design_style: { "zh-tw": "現代輕奢風格", en: "Modern Light Luxury Style" },
  furniture_set: { "zh-tw": "沙發、地毯、茶几、電視", en: "Sofa, rug, coffee table, TV" },
  ceiling_material: { "zh-tw": "白色乳膠漆平頂", en: "White latex flat ceiling" },
  wall_material: { "zh-tw": "白色乳膠漆牆面", en: "White latex paint wall" },
  floor_material: { "zh-tw": "淺灰色大理石地磚", en: "Light gray marble tile" },
  interior_lighting: { "zh-tw": "自然光線", en: "Natural lighting" },
  render_quality: { "zh-tw": "4K超高清分辨率", en: "4K Ultra HD resolution" },
  room_condition: { "zh-tw": "精緻裝修，高檔材料的質感與細節", en: "Exquisitely decorated, high-end materials with refined details" },
  // 解剖學人物畫預設值
  anatomy_teaching_style: { "zh-tw": "Proko 風格（簡化幾何、教學導向、清晰構造線）", en: "Proko style (simplified geometry, educational focus, clear construction lines)" },
  construction_line_color: { "zh-tw": "紫色/紫羅蘭色（主構造線）", en: "Purple/violet sketch lines (primary construction)" },
  // 影片分鏡-影視色調預設值
  video_color_tone: { "zh-tw": "冷藍調，暗部發青（如《銀翼殺手2049》）", en: "Cool blue tones, teal shadows (Blade Runner 2049 style)" },
  // 影片分鏡-影視風格預設值
  video_art_style: { "zh-tw": "好萊塢大片質感（高成本電影感）", en: "Hollywood blockbuster cinematic quality" },
  // 影片分鏡-場景型別預設值
  scene_type: { "zh-tw": "古代酒館內部，燭光搖曳", en: "Ancient tavern interior, candlelight flickering" },
  // 酒館武打戲影片預設值
  fight_style: { "zh-tw": "武俠飄逸風（輕功、劍氣、衣袂飄飄）", en: "Wuxia elegant style (light kung fu, sword aura, flowing robes)" },
  camera_rhythm: { "zh-tw": "快速切換蒙太奇（多角度快速剪輯）", en: "Rapid montage cutting (multi-angle fast edits)" },
  // 賽博龐克飛行器影片預設值
  sci_fi_movie_style: { "zh-tw": "賽博龐克美學（Cyberpunk Aesthetics）", en: "Cyberpunk Aesthetics" },
  futuristic_vehicle: { "zh-tw": "流線型反重力飛行器（Anti-gravity Vehicle）", en: "Streamlined Anti-gravity Vehicle" },
  cyberpunk_city_scene: { "zh-tw": "未來主義超級城市峽谷（Megacity Canyon）", en: "Futuristic Megacity Canyon" },
  tracking_camera_shot: { "zh-tw": "極具縱深感的廣角跟拍（Wide Angle Tracking Shot）", en: "Wide Angle Tracking Shot with Deep Depth" },
  action_camera_shot: { "zh-tw": "緊張的駕駛艙視角（Cockpit View）", en: "Tense Cockpit View" },
  // 雨林瀑布戰機穿越影片預設值
  natural_environment: { "zh-tw": "古代雨林（Ancient Rainforest）", en: "Ancient Rainforest" },
  military_aircraft: { "zh-tw": "戰鬥機（Fighter Jet）", en: "Fighter Jet" },
  aerial_opening_shot: { "zh-tw": "史詩超廣角航拍（Epic Ultra Wide Aerial Shot）", en: "Epic Ultra Wide Aerial Shot" },
  dynamic_tracking_shot: { "zh-tw": "第三人稱緊密跟拍（Third-Person Tight Tracking）", en: "Third-Person Tight Tracking" },
  // 社交卡片樣板預設值
  social_bg_color: { "zh-tw": "粉色和勃艮第紅", en: "pink and burgundy" },
  social_profile_name: { "zh-tw": "@RealMe+", en: "@RealMe+" },
  character_type: { "zh-tw": "女性", en: "woman" },
  // 地鐵玩偶裝扮樣板預設值
  costume_material: { "zh-tw": "羊毛", en: "wool" },
  subway_costume: { "zh-tw": "粉色羊毛兔子裝扮", en: "Pink wool rabbit costume" },
  location: { "zh-tw": "日本地鐵", en: "Japanese subway" },
  accessory: { "zh-tw": "粉色花朵髮夾", en: "pink flower hair clip" },
  // 飲料產品樣板預設值
  drink_product: { "zh-tw": "芬達軟飲料罐", en: "Fanta softdrink can" },
  drink_action: { "zh-tw": "爆炸，橙子從罐中湧出", en: "exploding with oranges bursting from the can" },
  drink_background: { "zh-tw": "橙色背景", en: "orange background" },
  drink_camera_angle: { "zh-tw": "高角度俯拍橙汁旋轉形成的圓弧", en: "high angle overhead shot capturing the swirling arc of orange juice" },
  // 護膚品廣告樣板預設值
  skincare_product: { "zh-tw": "精華滴管瓶", en: "serum dropper bottle" },
  skincare_color: { "zh-tw": "粉桃色", en: "pink-peach colored" },
  fantasy_character_pose: { "zh-tw": "坐在瓶蓋上", en: "sitting on the bottle cap" },
  fantasy_dress_style: { "zh-tw": "優雅飄逸的連衣裙", en: "elegant flowing dress" },
  fantasy_floating_elements: { "zh-tw": "成熟桃子和桃子切片", en: "ripe peaches and peach slices" },
  fantasy_sky_background: { "zh-tw": "明亮清澈的藍天", en: "bright clear blue sky" },
  pastel_color_palette: { "zh-tw": "粉桃色和天藍色", en: "pastel peach and sky blue" },
  // 角色設計表樣板預設值
  character_animal: { "zh-tw": "小兔子", en: "Little Bunny" },
  fur_color: { "zh-tw": "柔和溫暖的粉彩黃色", en: "Soft warm pastel yellow" },
  body_description: { "zh-tw": "大圓頭和小橢圓身體", en: "Large round head and small oval body" },
  character_accessories: { "zh-tw": "小紅橙色探險家圍巾和棕色小挎包", en: "Small red-orange adventurer scarf and tiny brown satchel" },
  character_persona: { "zh-tw": "可愛的奇幻探險家", en: "Cute fantasy explorer" },
  design_sheet_type: { "zh-tw": "角色轉身表（character turnaround sheet）", en: "Character turnaround sheet" },
  // 漫畫頁面樣板預設值
  comic_subject: { "zh-tw": "兩個潛行的忍者", en: "two stealthy ninjas" },
  comic_location: { "zh-tw": "古日本寺廟", en: "ancient Japanese temple" },
  comic_time: { "zh-tw": "夜晚", en: "night" },
  comic_art_style: { "zh-tw": "傳統黑白漫畫風格", en: "traditional black and white manga style" },
  // 創意容器樣板預設值
  container_type: { "zh-tw": "750ml玻璃酒瓶", en: "750ml glass wine bottle" },
  view_type: { "zh-tw": "橫截面檢視", en: "cross-section view" },
  landscape_location: { "zh-tw": "特蘭西瓦尼亞葡萄園", en: "Transylvania vineyard" },
  landscape_features: { "zh-tw": "起伏山丘、整齊葡萄架、土路、小農舍", en: "rolling hills, neat vine rows, dirt paths, small farmhouse" },
  lighting_time: { "zh-tw": "清晨陽光", en: "morning sunlight" },
  detail_level: { "zh-tw": "複雜細節", en: "intricate details" },
  glass_effect: { "zh-tw": "真實玻璃反射", en: "realistic glass reflections" },
  background_type: { "zh-tw": "工作室背景", en: "studio background" },
  // 博物館圖鑑訊息圖樣板預設值
  museum_theme: { "zh-tw": "明制漢服", en: "Ming Dynasty Hanfu" },
  ad_regional_style: { "zh-tw": "中式廣告", en: "Chinese advertisements" },
  city_landmarks: {
    "zh-tw": "珠江新城雙塔、獵德大橋、白雲山輪廓、嶺南騎樓",
    en: "Zhujiang New Town twin towers, Liede Bridge, Baiyun Mountain silhouette, Lingnan arcade buildings"
  },
  poster_texture_style: { "zh-tw": "大面積留白 + 淡宣紙肌理", en: "Generous negative space with light rice-paper grain" },
  classical_poem: { "zh-tw": "春夜喜雨", en: "A Welcome Rain on a Spring Night" },
  app_icon_category: { "zh-tw": "運動類APP", en: "Sports app" },
  collab_theme_a: { "zh-tw": "小王子", en: "The Little Prince" },
  collab_theme_b: { "zh-tw": "SpaceX", en: "SpaceX" },
  card_game_collection: { "zh-tw": "中國古代詩人", en: "Ancient Chinese poets" },
  ancient_celebrity: { "zh-tw": "蘇軾", en: "Su Shi" }
};

