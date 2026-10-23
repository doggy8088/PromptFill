/**
 * @typedef {Object} TemplateConfig
 * @property {string} id - 唯一識別符號，建議使用 'tpl_' 前綴
 * @property {string|Object} name - 樣板顯示名稱，支援雙語物件 {"zh-tw": string, en: string} 或單語言字串
 * @property {string|Object} content - 樣板內容，支援 markdown 和 {{variable}} 變數，支援雙語物件 {"zh-tw": string, en: string} 或單語言字串
 * @property {string} imageUrl - 預覽縮略圖 URL
 * @property {string[]} [imageUrls] - 多圖預覽陣列
 * @property {Object[]} [source] - 參考素材陣列
 * @property {string} source[].type - 素材型別 ('image' | 'video')
 * @property {string} source[].url - 素材連結
 * @property {Object} source[].label - 素材標記 {cn, en}
 * @property {Object.<string, string|Object>} selections - 預設選中的變數值 map，支援雙語物件或字串
 * @property {string[]} tags - 樣板標記陣列，可選值：建築、人物、攝影、產品、圖表、卡通、寵物、遊戲、創意
 * @property {string|string[]} language - 樣板語言，可選值：
 *   - "zh-tw" - 僅支援中文
 *   - 'en' - 僅支援英文
 *   - ["zh-tw", 'en'] - 支援雙語（預設值）
 * 
 * @example 雙語樣板
 * {
 *   id: "tpl_example",
 *   name: { "zh-tw": "範例樣板", en: "Example Template" },
 *   content: { "zh-tw": "中文內容...", en: "English content..." },
 *   language: ["zh-tw", "en"]
 * }
 * 
 * @example 單語言樣板（僅中文）
 * {
 *   id: "tpl_cn_only",
 *   name: "僅中文樣板",
 *   content: "中文內容...",
 *   language: "zh-tw",
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"  ,
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"// 或 ["zh-tw"]
 * }
 */

/**
 * 樣板系統版本號，每次更新 templates.js 或 banks.js 時請更新此版本號
 */
export const SYSTEM_DATA_VERSION = "1.2.2";

/**
 * 分享功能正式環境域名（掃碼匯入需使用公網可存取地址）
 * 留空則自動使用當前存取地址
 */
export const PUBLIC_SHARE_URL = "https://aipromptfill.com";

export const TEMPLATE_COMIC_PAGE = {
  "zh-tw": `單頁動態漫畫，{{comic_subject: 兩個潛行的忍者}}在{{comic_time: 夜晚}}潛入{{comic_location: 古日本寺廟}}，多面板佈局，粗黑色面板邊框，白色間隔區：頂部寬幅全景鏡頭展示月下的寺廟，裝飾性的木製寶塔，石燈籠，星空下的櫻花樹；中間面板：一個忍者用鉤索無聲地躍過高牆，第二個忍者蹲在深處陰影中避開巡邏守衛的燈籠；底部特寫鏡頭：蒙面者緊張對話，一個忍者扔出手裡劍，傳統黑色忍者裝束配兜帽和武士刀，戲劇性高對比度光照，冷藍色月光，暖橙色燈籠光暈，粗墨線，半調陰影，排線，最少的對話氣泡帶日文文字 Shhh…，{{comic_art_style: 傳統黑白漫畫風格}}`,
  en: `single dynamic comic book page, {{comic_subject: two stealthy ninjas}} infiltrating {{comic_location: ancient Japanese temple}} at {{comic_time: night}}, multi-panel layout, bold black panel borders, white gutters: top wide establishing shot of moonlit temple with ornate wooden pagodas, stone lanterns, cherry blossom trees under starry sky; middle panels: one ninja leaping silently over high wall with grappling hook, second ninja crouching in deep shadow avoiding patrolling guard lanterns; bottom close-up panels: masked faces in tense conversation, one ninja throwing a shuriken, traditional black shinobi outfits with hoods and katanas, dramatic high-contrast lighting, cool blue moonlight, warm orange lantern glow, thick ink lines, halftone shading, crosshatching, minimal speech bubbles with Japanese text Shhh…, {{comic_art_style: traditional black and white manga style}}`
};

export const TEMPLATE_3D_FURNITURE_PIXAR = {
  "zh-tw": `{{background_color_clean}}背景，{{render_style}}風格的{{interior_design_style}}3D傢俱，{{furniture_set}}，正面視角，帶有正確的三維透視`,
  en: `{{background_color_clean}} background, {{interior_design_style}} style 3D furniture in {{render_style}} style, {{furniture_set}}, front view with proper 3D perspective`
};

export const TEMPLATE_CHARACTER_DESIGN_SHEET = {
  "zh-tw": `{{character_animal}}角色設計表，角色名叫{{character_name: June}}，適合幼兒故事書，{{fur_color: 柔和溫暖的粉彩黃色毛髮}}，{{body_description: 大圓頭和小橢圓身體}}，長耳朵微微下垂，桃粉色內耳，小巧粉色鼻子，大而黑的眼睛帶著溫和的高光，淡淡的紅潤臉頰，簡單的曲線微笑，佩戴{{character_accessories: 小紅橙色探險家圍巾和棕色小挎包}}，{{character_persona: 可愛的奇幻探險家}}，包含多種姿勢和表情（站立、跳躍、抬頭、漂浮、伸展、蜷曲睡覺），表情表（好奇、堅定、驚訝、開心、睏倦），正面檢視、側面檢視、背面檢視，姿勢草圖，類似動畫角色設定表的整潔佈局，{{art_style: 高品質的 2D 插畫風格}}，{{line_art_style: 鋼筆墨水風格}}，{{shading_technique: 極簡排線陰影}}，白色背景，專業的{{design_sheet_type: 角色轉身表}}`,
  en: `character design sheet for a {{character_animal}} named {{character_name: June}}, toddler-friendly storybook character, {{fur_color: soft warm pastel yellow fur}}, {{body_description: large round head and small oval body}}, long slightly floppy ears with peach inner ears, tiny pink nose, large dark eyes with gentle highlights, subtle blush cheeks, simple curved smile, wearing {{character_accessories: small red-orange adventurer scarf and tiny brown satchel}}, {{character_persona: cute fantasy explorer}}, multiple poses and expressions (standing, hopping, looking up, floating, reaching, sleeping curled up), expression sheet (curious, determined, surprised, happy, sleepy), front view, side view, back view, pose sketches, clean layout like an animation model sheet, {{art_style: High-quality 2D illustration style}}, {{line_art_style: fine ink linework}}, {{shading_technique: minimal shading}}, white background, professional {{design_sheet_type: character turnaround sheet}}`
};

export const TEMPLATE_SKETCH_REALITY_COMPARISON = {
  "zh-tw": `### 手繪速寫與實景對比

剛剛畫完速寫，把畫紙和實景放在一起拍攝，展示"看我畫得多像"的效果。

**核心場景：**
一個人手持剛剛完成的速寫作品，畫紙旁邊就是畫中所描繪的真實場景。兩者並排同框，形成強烈的視覺對比——左邊是真實的建築或場景，右邊是手中的速寫畫作。畫紙內容必須與實景完美對應，展現出高超的繪畫技巧和觀察力。

**構圖佈局：**
- 手繪畫作：手持畫紙，位於畫面一側（右側或左側均可），清晰展示完整的速寫作品
- 真實場景：畫紙旁邊就是畫中描繪的真實場景，兩者在同一畫面中
- 速寫風格：採用 {{line_art_style}}，展現手繪的藝術質感
- 分離展示：畫紙和實景是兩個獨立的部分，不是融合疊加，而是物理分離的對比展示

**視覺效果：**
- 手繪部分：清晰的線條、流暢的筆觸、完整的構圖，展現速寫的藝術魅力
- 實景部分：真實的場景細節、自然的光影、豐富的色彩，與手繪形成呼應
- 對比效果：觀眾可以清楚地看到速寫與實景的相似度，感受到"畫得真像"的讚歎
- 整體氛圍：自然真實的拍攝感，帶有輕微的顆粒感和膠片質感，像是藝術家完成作品後的紀念照片

**情感表達：**
這不是融合特效，而是真實的對比展示——藝術家站在自己剛剛描繪的場景前，舉起畫紙與實景合影，展現對場景的觀察和再現能力。`,
  en: `### Sketch to Reality Comparison

Just finished a sketch, placing the artwork alongside the real scene for a photo, showing "look how accurately I captured this" effect.

**Core Scene:**
A person holding a freshly completed sketch drawing, with the real scene depicted in the artwork visible right next to the paper. Both elements share the same frame, creating a strong visual comparison—the real building or scene on one side, the sketch drawing in hand on the other. The artwork must perfectly correspond to the actual scene, demonstrating exceptional drawing skill and observation.

**Composition Layout:**
- Hand-drawn artwork: Holding the sketch paper on one side of the frame (right or left), clearly displaying the complete sketch
- Real scene: Immediately beside the paper is the actual scene depicted in the drawing, both within the same shot
- Sketch style: Using {{line_art_style}}, showcasing the artistic quality of the hand-drawn work
- Separated display: The drawing and real scene are two independent elements, not blended or overlapped, but physically separate for comparison

**Visual Effects:**
- Sketch portion: Clear lines, fluid brushstrokes, complete composition, showcasing the artistic charm of the sketch
- Real scene portion: Authentic scene details, natural lighting, rich colors, echoing with the hand-drawn work
- Comparison effect: Viewers can clearly see the similarity between sketch and reality, feeling the amazement of "it looks just like the real thing"
- Overall atmosphere: Natural authentic photography feel, with subtle grain and film texture, like a commemorative photo after the artist completed their work

**Emotional Expression:**
This is not a fusion effect, but a genuine comparison display—the artist standing before the scene they just depicted, holding up their drawing alongside the actual view, demonstrating their power of observation and recreation.`
};

export const TEMPLATE_BRAND_CONCEPT_OBJECT = {
  "zh-tw": `### 品牌概念單品 (Brand Concept Object)
一張由 {{company}} 設計並概念化的高端、光滑的概念藝術雜誌編輯照片，展示一個獨特且出乎意料的功能性物品。

**1. 概念與物品 (AI 發明):**
基於 {{company}} 的設計哲學、品牌傳承和材料語言，通過品牌的視角重新詮釋並設計一個全新的實用單品：{{design_item}}。該物品應具有雕塑感，同時具備功能性，且絕非該品牌常規生產的服裝或包袋。

**2. 材質與細節:**
該物品由 {{company}} 標誌性的超優質、高觸感材料製成（例如：具有歲月的異域皮革、拉絲航空級鈦金屬、雕刻啞光陶瓷、模製碳纖維或高科技時尚面料）。每個細節都超寫實：清晰的縫線、微觀材料紋理、精密刻印以及複雜的材質對比。

**3. 攝影與燈光:**
使用飛思中畫幅相機配合 100mm 微距鏡頭拍攝。極淺的景深，焦點清晰地聚集在物品的核心細節上，背景呈現出奶油般細膩平滑的虛化效果。燈光是複雜的工作室柔光箱布光：柔和、包裹式的補光，配合精準的輪廓光，以突出輪廓和材質紋理。

**4. 環境:**
純淨、超淺的馬卡龍色調（如：脫飽和薄荷綠、淺粉色或乳白色）的無縫工作室環形背景，無陰影。

**5. 佈局與 UI 元素:**
- **右下角:** {{company}} 的小型、低調、單色灰色 Logo。
- **左下角:** 小型、極簡的單色灰色文本描述。格式：“CONCEPT STUDY: [產品名稱]. MATERIAL: [主要材質]. SS25。”字體風格類似 Manrope Regular，字間距緊湊。

**規格:**
- **畫幅:** {{ratio}}`,
  en: `### Brand Concept Object
A high-end, glossy concept art magazine editorial photograph of a unique, unexpected functional object conceptualized and designed by {{company}}.

**1. The Concept & Object (AI Invention):**
Based on the design philosophy, heritage, and material vocabulary of {{company}}, reinterpret and design a novel utility product: {{design_item}}. The object should feel sculptural yet functional, and definitely NOT a standard item like clothing or bags usually produced by the brand.

**2. Materials & Details (Hyper-Premium):**
The object is constructed from ultra-premium, highly tactile materials characteristic of {{company}} (e.g., patinated exotic leather, brushed aerospace-grade titanium, sculpted matte ceramics, molded carbon fiber, or technical high-fashion textiles). Every detail is hyper-realistic: visible stitching, microscopic material grain, precision engravings, and complex texture contrasts.

**3. Photography & Lighting (Cinematic Studio):**
Shot on a medium format Phase One camera with a 100mm macro lens. Extremely shallow depth of field, with sharp focus on the hero details of the object and a creamy, smooth bokeh background. The lighting is sophisticated studio softbox lighting: gentle, enveloping fill light with precise rim lighting to accentuate contours and material textures.

**4. Environment:**
A seamless, impeccably clean studio cyclorama background in a pure, ultra-light pastel tone (e.g., desaturated mint, pale blush, or off-white), free of shadows.

**5. Layout & UI Elements (Strict Placement):**
- **Bottom Right Corner:** A small, understated, monochrome gray logo of {{company}}.
- **Bottom Left Corner:** Small, minimalist monochrome gray text. Format: "CONCEPT STUDY: [Invented Product Name]. MATERIAL: [Main Materials]. SS25." Font styled like Manrope Regular with very tight tracking.

**Specifications:**
- **Ratio:** {{ratio}}`
};

export const TEMPLATE_WOODEN_ART_XMAS = {
  "zh-tw": `### 雷射切割木質層疊藝術 (Wood Art & Xmas)
一件通過雷射切割工藝製作的、細節豐富的多層木質藝術品插畫。

**視覺風格:**
- **工藝:** 雷射切割木質面板藝術，包含大量精細的層疊結構。
- **藝術風格:** 抽象藝術，每一層都擁有不同的互補色彩。
- **主題:** 藝術品主題為 {{xmas_theme}}，融合了幾何圖形與豐富的材質紋理，展現大師級水準。

**攝影與呈現:**
- **風格:** 頂級產品促銷攝影風格，強調深度感與木質纖維的真實觸感。
- **美學:** 專業的商業攝影構圖，利用光影勾勒出每一層木板的邊緣，畫面乾淨且極具格調。

**規格:**
- **畫幅:** {{ratio}}`,
  en: `### Wood Art & Xmas (Laser-Cut Layered Art)
A beautiful, detailed illustration of multi-layered wooden art created by laser cutting techniques.

**Visual Style:**
- **Technique:** Laser-cut wooden panel art with numerous intricate layers and precise craftsmanship.
- **Art Style:** Abstract art where each layer features a distinct, complementary color.
- **Theme:** The artwork theme is {{xmas_theme}}, integrating geometric shapes and rich textures, showcasing maestro-level artistry.

**Photography & Presentation:**
- **Style:** Top-tier product promotion photography, emphasizing depth and the authentic tactile quality of wood.
- **Aesthetics:** Professional commercial photography composition, using light and shadow to define the edges of each wooden layer, resulting in a clean and highly stylish image.

**Specifications:**
- **Ratio:** {{ratio}}`
};

export const TEMPLATE_CREATIVE_CONTAINER = {
  "zh-tw": `### 創意容器攝影

透明的750ml玻璃酒瓶，橫截面檢視，內部展示來自{{landscape_location: 特蘭西瓦尼亞葡萄園}}的微觀世界景觀，{{lighting_time: 清晨陽光}}投下柔和陰影，超寫實主義，複雜細節，景深效果，真實玻璃反射，自然窗光，工作室背景。`,

  en: `### Creative Container Photography

Transparent 750ml glass wine bottle, cross-section view, inside showing a miniature world of {{landscape_location: Transylvania vineyard}} landscapes, {{lighting_time: morning sunlight}} casting soft shadows, hyperrealistic, intricate details, depth of field, realistic glass reflections, natural window light, studio background.`
};

export const TEMPLATE_MUSEUM_INFOGRAPHIC = {
  "zh-tw": `請根據【{{museum_theme}}】自動生成一張"博物館圖鑑式中文拆解訊息圖"。要求整張圖兼具真實寫實主視覺、結構拆解、中文標註、材質說明、紋樣寓意、色彩含義和核心特徵總結。你需要根據【{{museum_theme}}】自動判斷最合適的主體物件、服飾體系、器物結構、時代風格、關鍵部件、材質工藝、顏色方案與版式結構，使用者無需再提供其他訊息。

**整體風格**：國家博物館展板 · 歷史服飾圖鑑 · 文博專題訊息圖。背景採用米白、絹紙白、淺茶色等紙張質感，整體進階、剋制、專業、可收藏。

**版式結構（固定）**：
- 頂部：中文主標題 + 副標題 + 導語
- 左側：結構拆解區，中文引線標註關鍵部件，並配局部特寫
- 右上：材質 / 工藝 / 質感區，展示真實紋理小樣並附說明
- 右中：紋樣 / 色彩 / 寓意區，展示主色板、紋樣樣本和文化解釋
- 底部：穿著順序 / 構成流程圖 + 核心特徵總結

若主題適合人物展示，則以真實人物全身站姿為中央主體；若更適合器物或單體結構，則改為中心主體拆解圖，但整體仍保持完整中文訊息圖形式。**所有文字必須為簡體中文**，清晰、規整、可讀，不要亂碼、錯字、英文或拼音。重點突出真實結構、材質差異、文化說明與圖鑑氣質。

**避免**：海報感、影樓感、電商感、動漫感、cosplay感、亂標註、錯結構、糊字、假材質、過度裝飾。`
};

export const TEMPLATE_NINE_GRID_DESIGNERS = {
  "zh-tw": `九宮格圖片，展現九位當代知名設計師設計的同一組物體：{{design_item}}，包括設計師頭像，設計師對於設計的中文文字解讀和作品呈現。排版統一規則。`
};

export const TEMPLATE_FOUR_PANEL_ADS = {
  "zh-tw": `生成四張並列排布的虛構{{ad_regional_style}}，涵蓋多種不同品類，由專業設計師打造的潮流版式。畫幅比例 1:1。`,
  en: `Generate images of four fictional {{ad_regional_style}} in various genres, arranged side by side. In trendy designs made by professional designers. Aspect ratio 1:1`
};

export const TEMPLATE_GUOCHAO_CITY_POSTER = {
  "zh-tw": `新中式極簡風格高端城市海報，9:16 豎版構圖，以{{city_name}}為核心主題，畫面中心為抽象幾何化的該城市標誌性塔樓，造型簡潔但具有辨識度。

整體採用 S 型流動構圖，從下方向上延展，珠江水系被設計為流動的水波紋與傳統祥雲紋樣融合，環繞整個畫面形成視覺動線（若城市非臨江，則改為該城市代表性水系與祥雲紋樣融合）。

{{city_name}}地標建築以「留白 + 線描 + 局部色塊」的方式點綴其中：{{city_landmarks}}，傳統與現代建築自然融合，層次遞進，遠近虛實分明。

風格控制：極簡 + 進階 + 東方意境，不雜亂不過度寫實。

色彩方案（重點）：高飽和但剋制，中國紅、青藍、鎏金為主色，輔以少量暖金高光點綴，形成強烈視覺衝擊但不俗豔。

背景：大面積純淨留白或淡宣紙肌理，增強呼吸感與進階感，背景紋理：{{poster_texture_style}}。

細節：祥雲與水紋具有輕微浮雕/燙金質感，局部加入微光粒子或流動光線，增強現代感。

光影：柔和漸變光 + 局部高光，突出恢弘大氣氛圍。

整體風格：國潮進階插畫 / 品牌海報級質感 / 8K / 超清細節。`,
  en: `Premium Neo-Chinese minimalist city poster, 9:16 vertical aspect ratio, centered on {{city_name}} as the core theme, with an abstract geometric iconic tower of the city as the focal point—clean, simple, and recognizable.

Overall S-curved flowing composition extending upward from the bottom; the city's representative water system is rendered as flowing ripples fused with traditional auspicious cloud motifs, forming a visual flow around the frame (adapt to the city's geography if not river-adjacent).

Landmarks of {{city_name}} are dotted with negative space + line art + localized color blocks: {{city_landmarks}}. Traditional and modern architecture blend naturally with layered depth and clear foreground/background separation.

Style: minimal + premium + Eastern mood—not cluttered, not overly photorealistic.

Color palette (key): saturated yet restrained—Chinese red, cyan-blue, and gilt gold as primaries, with warm gold highlights for strong impact without vulgarity.

Background: large clean negative space or light rice-paper texture for breathability and premium feel; background texture: {{poster_texture_style}}.

Details: auspicious clouds and water ripples with subtle emboss / gold-foil hot-stamp quality; micro light particles or flowing light streaks for a modern touch.

Lighting: soft gradient light + local highlights for a majestic atmosphere.

Overall: Guochao premium illustration / brand-poster quality / 8K / ultra-sharp detail.`
};

export const TEMPLATE_TEXTBOOK_POEM_PAGE = {
  "zh-tw": `生成《{{classical_poem}}》的語文課本單頁，風格參照中小學語文教材：含課題序號與篇名、作者及朝代、詩詞全文、作者簡介（小框）、與詩詞意境相符的插圖背景，以及「詩文解讀」板塊，須含寫作背景、詩句理解（逐聯或逐句）、主題思想等詳細內容。版面整潔、層級分明、字體清晰可讀，全文簡體中文，不要亂碼錯字。`,
  en: `Generate a single Chinese language textbook page for "{{classical_poem}}", in primary/middle-school textbook style: lesson number and title, author and dynasty, full poem text, author bio in a side box, mood-matching illustrated background, and a "詩文解讀" section with writing background, line-by-line understanding, and central theme in detail. Clean hierarchy, legible typography, all text in Simplified Chinese.`
};

export const TEMPLATE_APP_ICONFONT = {
  "zh-tw": `生成一套{{app_icon_category}}的 iconfont 圖標集：極簡線性圖標，白底，雙色（深灰/黑 + 一組強調色），統一線寬約 2px、圓角端點，網格整齊排列（如 3×7），每個圖標下方配簡體中文標記，頂部含標題與規格說明（如 24px、描邊粗細）。圖標語義需貼合該品類常見功能與場景。風格專業、扁平、向量感。`,
  en: `Generate a full iconfont set for {{app_icon_category}}: minimalist line icons, white background, two-tone (dark gray/black + one accent color), uniform ~2px stroke with rounded caps and joins, neat grid (e.g. 3×7), Chinese label under each icon, header with title and specs (e.g. 24px, stroke weight). Icons must match typical features and scenarios for this category. Professional flat vector UI style.`
};

export const TEMPLATE_COLLAB_POSTCARD = {
  "zh-tw": `設計一張{{collab_theme_a}}與{{collab_theme_b}}聯名的明信片：左右分欄（一側主插畫、一側信箋與文字區），航空郵件風格斜紋邊框、郵票與郵戳、雙語標語與手寫體名句，水彩手繪質感、可見紙紋，夜色與星光氛圍，兩側 IP 與品牌元素自然融合、不違和，進階收藏感。`,
  en: `Design a collaborative postcard for {{collab_theme_a}} × {{collab_theme_b}}: split layout (main illustration + correspondence area), airmail diagonal border, postage stamp and postmark, bilingual tagline and handwritten-style quote, soft watercolor hand-drawn look with paper grain, night sky and stars, seamless mashup of both worlds, premium collectible feel.`
};

export const TEMPLATE_GACHA_CARD_SET = {
  "zh-tw": `為「{{card_game_collection}}」設計一套高階手遊抽卡/套卡展示圖：新中式華貴風格，深色底、鎏金紋樣與書法標題。須包含 SSR / SR / R 三檔稀有度展示（小卡陣 + 色條區分），中心為重點卡大畫幅立繪；含單卡卡面設計、人物簡介、屬性或戰力數值、主動/被動/覺醒等技能圖標與較詳細中文說明、羈絆與陣容推薦範例。SSR 稀有卡邊框與高光需有鐳射/全息/粒子等進階質感。整體排版層級清晰，像真實遊戲卡面設定頁，簡體中文為主。`,
  en: `Design a premium mobile gacha card-set showcase for "{{card_game_collection}}": Neo-Chinese luxury UI, dark ground, gold filigree, calligraphy title. Include SSR / SR / R tiers (grid + color coding), large featured card in center; card art, character bio, stats, active/passive/ultimate skills with icons and detailed Chinese descriptions, synergy bonds and sample lineup. SSR cards need holographic foil, laser-rainbow border, or particle effects. Clear information hierarchy like an in-game card spec sheet, Simplified Chinese for text.`
};

export const TEMPLATE_ANCIENT_CELEBRITY_BUSINESS_CARD = {
  "zh-tw": `為{{ancient_celebrity}}設計一個古代的名片，正反面都需要展示，展現中式東方美學`,
  en: `Design an ancient name card for {{ancient_celebrity}}, showing both front and back, with Chinese Oriental aesthetics.`
};

export const TEMPLATE_HERITAGE_BUILDING_DECONSTRUCTION = {
  "zh-tw": `生成一個{{heritage_building}}的建築拆解圖，有詳細的說明，中式美學風格`,
  en: `Generate an architectural deconstruction diagram of {{heritage_building}} with detailed annotations, in Chinese aesthetic style.`
};

export const TEMPLATE_RETRO_SKEUOMORPHIC_ICONS = {
  "zh-tw": `生成一組復古擬物化風格的{{retro_device_theme}}圖標，圖中配有圖標名稱。`,
  en: `Generate a set of vintage skeuomorphic {{retro_device_theme}} icons, each with its name labeled on the image.`
};

export const TEMPLATE_LIFESTYLE_APP_UI = {
  "zh-tw": `生成一個{{utility_app_category}}的行動裝置端 App 界面 UI 設計，中文界面；現代簡潔、卡片化佈局、圓角與留白舒適、訊息層級清晰、底部導覽與狀態欄完整。`,
  en: `Generate a mobile app UI design for {{utility_app_category}}, Chinese interface; modern minimalist, card-based layout, comfortable rounded corners and whitespace, clear information hierarchy, bottom navigation and status bar.`
};

export const TEMPLATE_GEOMETRIC_PRODUCT_POSTER = {
  "zh-tw": `請為{{subject_product}}創作一張“極簡幾何裝置風產品海報”。

如果我提供了產品圖片，請以該圖片為主要參考，保留產品的核心外觀特徵、包裝形態、顏色、材質、品牌識別和整體氣質，並優先沿用產品圖中的主色調與配色關係進行設計。
如果我沒有提供產品圖片，請根據{{subject_product}}自動生成符合該產品定位的產品外觀與包裝設計，並根據產品屬性、品類特徵和氣質，自動匹配自然合理的主色、輔助色、道具造型與展示方式。

海報整體風格要求：
畫面採用高鍵白色或暖白色攝影棚背景，整體乾淨、通透、柔和、明亮，具有進階商業感與現代品牌視覺氣質。構圖不是普通電商棚拍，而是像品牌視覺提案、藝術靜物攝影與3D產品陳列結合的概念海報。

畫面主體應包含：
1. {{subject_product}}本體
2. 產品包裝
3. 與產品相關的原料、切片、部件、功能元素或材質細節

三者共同構成完整的視覺鏈路，使觀者一眼就能理解“這是什麼產品、內容是什麼、賣點或來源是什麼”。

場景中加入簡潔且具有設計感的幾何裝置道具，例如：圓柱、方塊、長條塊、圓環、球體、半圓、平臺、堆疊積木、亞克力支架、玩具感結構體等，用於承託、懸置、圍繞或襯托產品主體，形成富有秩序感、節奏感和層次感的藝術陳列構圖。

整體配色應圍繞產品本身自然展開，以產品關聯色為主視覺核心，搭配白色、奶油色、淺灰色等中性色，必要時加入少量輔助點綴色，使畫面顏色統一、剋制、舒適、清爽，不雜亂、不花哨。不同產品應自動適配不同配色，不固定使用某一種背景色。

材質表現要細膩真實，具有高品質商業渲染質感。透明塑料、亞克力、磨砂材質、紙質標記、玻璃、金屬、光滑塑膠、果肉紋理、食材紋理或產品表面細節都應自然可信。可以有輕微反射與柔和陰影，但不要過重、不要髒亂。

構圖要求留白充足，主體明確，畫面平衡，視覺整潔，具有輕鬆、溫和、現代、精緻、親和、帶一點童趣但不幼稚的品牌氣質。整體感覺像一張高審美的品牌產品KV海報，非常適合電商主視覺、社交媒體種草圖、產品展示圖。

輸出要求：
- 豎版構圖
- 3:4 比例
- 單張海報
- 進階感、簡潔感、品牌感強`,
  en: `Please create a "Minimalist Geometric Installation Style Product Poster" for {{subject_product}}.

If I provide a product image, please use it as the main reference, preserving the product's core appearance features, packaging form, color, material, brand identity, and overall temperament, and prioritize using the primary color tone and color relationships from the product image for the design.
If I do not provide a product image, please automatically generate a product appearance and packaging design that fits the {{subject_product}}'s positioning, and match naturally reasonable primary and auxiliary colors, prop shapes, and display methods based on the product attributes, category characteristics, and temperament.

Overall Poster Style Requirements:
The image uses a high-key white or warm white studio background, overall clean, transparent, soft, and bright, with a high-end commercial feel and modern brand visual temperament. The composition is not a common e-commerce studio shot, but a conceptual poster combining brand visual proposals, artistic still-life photography, and 3D product displays.

The main subject of the image should include:
1. The {{subject_product}} itself
2. Product packaging
3. Raw materials, slices, components, functional elements, or material details related to the product

These three together form a complete visual chain, allowing viewers to immediately understand "what this product is, what the content is, and what the selling point or source is."

Incorporate simple and design-oriented geometric installation props into the scene, such as: cylinders, blocks, long strips, rings, spheres, semicircles, platforms, stacked blocks, acrylic stands, toy-like structures, etc., used to support, suspend, surround, or set off the main product, forming an artistic display composition with a sense of order, rhythm, and layering.

The overall color palette should naturally revolve around the product itself, with the product's associated colors as the visual core, paired with neutral colors like white, cream, and light gray. Add small amounts of auxiliary accent colors when necessary to keep the image color unified, restrained, comfortable, and fresh, without being cluttered or gaudy. Different products should automatically adapt to different color schemes; do not use a fixed background color.

Material representation should be delicate and realistic, with a high-quality commercial rendering texture. Transparent plastic, acrylic, frosted materials, paper labels, glass, metal, smooth plastic, fruit pulp texture, food texture, or product surface details should all be natural and believable. There can be slight reflections and soft shadows, but not too heavy or messy.

Composition requirements call for ample white space, clear subject matter, a balanced image, and visual tidiness, with a brand temperament that is relaxed, gentle, modern, exquisite, approachable, and slightly playful but not childish. The overall feel is like a high-aesthetic brand product KV poster, very suitable for e-commerce key visuals, social media grass-planting posts, and product display images.

Output requirements:
- Vertical composition
- 3:4 ratio
- Single poster
- Strong sense of high-end quality, simplicity, and branding`
};

export const TEMPLATE_APPLE_EVENT_BENTO = {
  "zh-tw": `生成一頁蘋果風格的發佈會圖片，以{{layout_style_bento}}形式呈現最新一代的{{apple_style_product}}的宣傳頁`,
  en: `Generate an Apple-style event keynote slide, presenting the latest generation of {{apple_style_product}} in a {{layout_style_bento}} format.`
};

export const TEMPLATE_BIG_ISOMETRIC_WHITE_ARCH = {
  "zh-tw": `生成一張等距軸測視角的{{arch_building_name}}的概念建築白模渲染圖
使用簡化的白模搭配極簡化的周邊環境，參考BIG交易所經典的分析圖表達風格
使用AO效果和細線輪廓描邊
整體風格清新自然，無任何文字
使用飽和度較低的色彩為周邊環境填色，如道路淺灰，植物淺綠，建築保持白色
畫幅比例：{{ratio}}。`,
  en: `Generate an isometric axonometric conceptual white mass architectural rendering of {{arch_building_name}}.
Simplified white massing with minimal surrounding context, in the classic analytical diagram expression style associated with BIG (Bjarke Ingels Group).
Ambient occlusion (AO) with fine line contour outlining.
Overall fresh, natural mood, no text anywhere.
Low-saturation colors for the environment: light gray roads, pale green plants, architecture remains pure white.
Aspect ratio: {{ratio}}.`
};

export const TEMPLATE_FOOD_PERSONIFICATION_REALISTIC = {
  "zh-tw": `這是我今天的食物，基於這個圖，把食物轉變為真實人類別的形象。幫我生成符合這張照片和性格特徵的，將食物進行擬人化的照片，生成結果中不需要原始食物的本體，理解為食物突然變成了具象的擬人化。在生成圖像的右上角放上原圖，使用回形針將原圖放置在生成圖像的右上角`,
  en: `This is my food today. Based on this image, turn the food into the appearance of a real human being. Generate a photographic personification that matches this photo—its vibe, textures, palette, and implied personality—with the dish translated into human form. Do not depict the unchanged original dish as its own standalone subject on the canvas; imagine the food suddenly becomes a concrete, lifelike personification. Place the original image as a small inset in the top-right corner of the final image, held by a paper clip so it looks pinned to the corner like a reference note.`
};

export const TEMPLATE_LEGO_MODULAR_TYPOGRAPHY_POSTER = {
  "zh-tw": `生成一張「樂高積木字體概念海報」。
請根據主題設計一套原創積木風格字體，不使用官方 LEGO 標誌。主標題由真實塑料積木模組拼成，帶凸點、厚度、陰影和拼接結構。根據主題含義自動生成一個核心視覺隱喻，並把它做成進階設計展海報：乾淨留白、網格排版、訊息圖邏輯、概念板結構。畫面包含主標題、概念圖形、字體樣本、模組結構、顏色圖例和細線標註。整體進階、剋制、現代、有收藏級海報感，不像兒童玩具廣告。比例根據主題自動選擇。
主題：{{lego_typography_theme}}`,
  en: `Generate a "LEGO-inspired modular toy-brick typography concept poster".
Design an original brick-style typeface system for the theme—do not include official LEGO trademarks or logos. The main headline must look built from realistic plastic brick modules with studs, thickness, shadows, and clear stacking logic. Based on the theme, invent one core visual metaphor, then execute it as a premium exhibition poster: generous white space, grid-driven layout, infographic logic, concept-board structure. The image should include the main title, metaphor graphic, type specimen, module breakdown, color legend, and fine leader-line annotations. Overall tone: refined, restrained, modern, collector-grade—never a childish toy ad. Choose an appropriate aspect ratio automatically from the theme.
Theme: {{lego_typography_theme}}`
};

export const TEMPLATE_FUTURISTIC_SPORT_EDITORIAL_POSTER = {
  "zh-tw": `進階時尚未來感運動裝社論海報，動態寬腿站姿的全身女性模特，{{sport_luxe_ensemble}}，{{beauty_editorial_look}}，自信的社論表情，影棚時尚攝影，居中構圖，模特身後帶有{{inflatable_studio_backdrop}}，粗體超大白色字體「{{hero_typography_word}}」部分位於拍攝物件身後，進階運動品牌廣告活動美學，超潔淨的照明，柔和漫反射的影棚陰影，奢華街頭服飾廣告，當代雜誌封面設計，極簡主義排版，微妙的未來感圖形微文本，高度精修的商業時尚後期修圖，銳利對焦，電影級柔和對比度，照片寫實，高細節，8k`,
  en: `Premium futuristic sportswear editorial poster, full-length female model in a dynamic wide-legged stance, {{sport_luxe_ensemble}}, {{beauty_editorial_look}}, confident editorial expression, studio fashion photography, centered composition, behind the model {{inflatable_studio_backdrop}}, oversized bold white typography for "{{hero_typography_word}}" partially placed behind the subject, premium sport brand campaign aesthetic, ultra-clean lighting, soft diffused studio shadows, luxury streetwear advertising, contemporary magazine cover design, minimalist layout, subtle futuristic graphic micro-type, highly polished commercial fashion retouching, tack-sharp focus, cinematic soft contrast, photorealistic, ultra-detailed, 8K`
};

export const TEMPLATE_GIANT_SNEAKER_FASHION_AD = {
  "zh-tw": `高端時尚廣告海報。年輕女性{{model_styling_outfit}}，隨意倚靠在一雙約為她身高三倍的巨型白色運動鞋上，鞋側印有「{{campaign_brand_word}}」字樣。{{studio_set_floor}}。粗體巨幅白色無襯線字體「{{campaign_brand_word}}」鋪滿她身後的整個背景。底部居中為白色斜體標語：{{advert_campaign_tagline}}。右上角小號灰色文字：Designed with GPT Image 2。照片級寫實，時尚雜誌編輯大片風格，中畫幅相機觀感。`,
  en: `A high-end fashion advertisement poster. A young woman {{model_styling_outfit}} leans casually against a giant white sneaker that is 3x her height, the sneaker has "{{campaign_brand_word}}" written on its side. {{studio_set_floor}}. Bold massive white sans-serif typography "{{campaign_brand_word}}" fills the entire background behind her. Tagline at bottom center in white italic font: "{{advert_campaign_tagline}}" Small text top-right corner reads "Designed with GPT Image 2" in grey. Photorealistic, editorial magazine style, medium format camera look.`
};

export const TEMPLATE_ICONIC_ARCHITECTURE_ART_POSTER = {
  "zh-tw": `以知名建築「{{iconic_architecture}}」為場景，製作一個高端的「{{poster_art_style}}」海報。
海報中心是建築的插畫形式表達；背景為一個英文單詞，以巨大加粗的英文字體排布，氣質需與建築相匹配；周邊配以描述該建築設計哲學的小字排版。
整體以一種極其高端的當代藝術海報形式呈現。
用色搭配剋制不張揚：色面與線條可呼應建築構件，亦可作為建築整體向外的一部分延展。`,
  en: `Create a premium {{poster_art_style}} poster centered on the iconic building {{iconic_architecture}}.
At the center, present the architecture as a refined editorial illustration. Behind it, place ONE English keyword in massive ultra-bold condensed sans-serif typography that emotionally and conceptually matches the building; surround with micro-type articulating design philosophy on a restrained grid.
Present as collectors'-grade contemporary architectural art.
Use a subdued palette coordinated with the architecture—color planes and linework may read as discrete structural echoes or as quiet outward extensions from the massing.`
};

export const TEMPLATE_MIRROR_SELFIE_CHIBI_CLONES = {
  "zh-tw": `一位年輕女性在極簡現代的家中拍鏡子自拍，{{casual_mirror_outfit}}。她周圍是可愛的Q版迷你版自己，{{chibi_clone_manner}}。{{cozy_mirror_room}}。{{selfie_render_blend}}。`,
  en: `A young woman takes a mirror selfie in a minimal modern home, {{casual_mirror_outfit}}. Cute chibi mini versions of herself surround her, {{chibi_clone_manner}}. {{cozy_mirror_room}}. {{selfie_render_blend}}.`
};

export const TEMPLATE_LEGO_LANDMARK_STREET_FILM = {
  "zh-tw": `創作一張極具創意的圖片：一張經典建築的街拍圖，模擬行人在街上拍攝的建築照片，但要具備建築視覺化的構圖與美感。形成反差的是，主體建築由巨大的樂高塊建構而成——就像經典樂高顆粒以與真實世界相融的尺度巨獸化存在，凸點與拼縫清晰可讀。核心建築為「{{iconic_architecture}}」。拍攝風格：{{street_film_photography}}。`,
  en: `Create a highly creative image: a street photograph of a classic landmark, as if a passerby shot it from the sidewalk, yet keep the disciplined composition and formal beauty of architectural visualization. The twist: the entire landmark is built from life-scaled LEGO bricks—giant studs and interlocking seams at real-world proportions, reading as a plausible civic volume. Core building: {{iconic_architecture}}. Photographic treatment: {{street_film_photography}}.`
};

export const TEMPLATE_MIDCENTURY_EDITORIAL_COVER = {
  "zh-tw": `你是一名頂級雜誌封面藝術總監、視覺隱喻設計師、Mid-century 商業插畫師、超現實拼貼藝術家與編輯排版設計師。請根據使用者提供的主題，創作一張具有統一系列感的編輯封面海報。整體視覺固定為：**現代極簡編輯設計 × 1940s–1960s 復古商業插畫人物 × 當代或未來事物 × 超現實視覺隱喻 × 大面積留白**。最終畫面應像一本屬於今天的獨立雜誌，請來一位 1958 年的商業插畫師，描繪一個只有今天才會發生的話題。

## 使用者輸入

**主題 / 主標題：** {{editorial_cover_theme}}

**副標題：** {{editorial_cover_subtitle}}

**畫幅比例：** {{editorial_cover_ratio}}

**人物設定：** {{editorial_cover_cast}}

**情感傾向：** {{editorial_cover_emotion}}

除以上訊息外，其餘視覺設計全部由你自動完成，包括主題色彩、人物數量、年齡、職業、動作、鏡頭、服裝、現代道具、超現實程度、文字層級、版式和構圖。

不要看到標題關鍵詞就直接找對應圖片。先理解主題真正想表達的核心觀點、人物處境、行為變化或矛盾關係，再把它轉化成一個**一眼能理解、第二眼才發現有點荒誕的視覺隱喻**。優先尋找“人的動作 + 一個核心物體 + 一個反常關係”，而不是關鍵詞 + 圖標。整張封面儘量只講一個視覺故事：**一個主題、一個動作、一個核心道具、一個隱喻、一次時代錯位**。如果某個元素不能幫助理解主題，就刪除，不要為了豐富畫面而堆東西。

人物必須明顯來自 1940s–1960s 美國商業廣告、舊雜誌或 Mid-century illustration 世界，具有真實的復古插畫感、紅潤臉頰、經典髮型、復古服裝、舊廣告人物氣質，但**禁止每次都使用同一種漂亮女性臉、同一個男性臉或固定一男一女組合**。根據主題自動判斷誰最適合承載內容，可以是年輕人、中年人、導師、學者、編輯、程式設計師、工程師、攝影師、主持人、旅行者、工作搭檔、雙女性、雙男性、一男一女、單人或三人以內的小群像。人物的臉型、年齡、髮型、職業氣質、服裝和鏡頭角度都應自然變化。系列統一感來自風格，不來自重複使用同一張臉。

人物不能只是站著看鏡頭，必須正在發生動作，例如輸入、寫作、拍攝、駕駛、觀察、偵錯、連線、組裝、整理、主持、講述、討論、創造、操控或面對某個意外。雙人或多人時必須有互動關係，而不是並排合照。人物也不必每次突出臉部，可以用側臉、背影、局部身體、手部動作、俯視、仰視、回頭、探出畫面等方式變化構圖。畫面應該像故事發生到一半時被截取下來的一瞬間。

核心趣味來自**時代錯位**：復古人物正在使用屬於今天甚至未來的事物，例如 laptop、AI、coding interface、digital human、camera、drone、rocket、modern car、database、terminal、server、knowledge graph、video editing interface、creative software 等，但現代物體必須服務主題，禁止為了科技感無意義堆疊。允許加入輕微超現實關係，例如人物進入螢幕、坐在巨型鍵盤上、駕駛火箭、從資料夾中開車出來、把程式碼當作實物操作、把知識或聲音變成可觸碰的東西。超現實要聰明、剋制、略荒誕，通常只保留 **1 個主要隱喻 + 1 個輔助細節**。

整體質感採用 **Mid-century advertising illustration + Vintage editorial collage + Surreal retro montage + Modern editorial design**。人物與插畫帶有 halftone dots、舊印刷顆粒、褪色油墨、輕微套色偏移、紙張纖維、screen print texture、磨損和不完全均勻的顏料覆蓋，像真正從舊雜誌中剪下來的插畫，而不是光滑的現代數位繪畫或 3D CG。背景保持白色、暖白、象牙白或奶油白，只允許輕微紙張紋理，不要畫完整辦公室、城市或複雜背景。

版式核心是**大量留白 + 一小塊視覺事件**。橫版如 16:9、5:2、3:1 時，預設左側約 65%–75% 用於標題、副標題和留白，右側約 25%–35% 出現人物與視覺隱喻，明顯左輕右重。尤其 5:2 和 3:1，要強化橫向呼吸感，禁止主體居中、左右五五分、滿版插畫或把普通方圖硬裁成長圖。豎版則把標題放在上方或左上，人物放在下方或右下；方形也保持明顯不對稱。插畫邊緣禁止規則矩形、圓角卡片或相框，應使用 irregular feathered edges、faded ink edge、dry brush dissolve、paper collage erosion、halftone fade 等方式，讓舊雜誌油墨自然消失進白色背景。

標題使用現代 Editorial Typography，與復古人物形成時代反差。中文可以使用高對比宋體、現代宋體、極簡黑體或窄體黑體，英文可使用 Didone、Bodoni-like Serif、Editorial Serif 或 Condensed Sans。整張封面文字越少越好，優先只保留主標題和副標題，必要時可以有一行極小英文 editorial note，但不要自動加入賣點列表、功能圖標、複雜標記或大量說明。主標題視覺優先級最高，可適當突出一個數位或關鍵詞。

色彩無需使用者填寫，根據主題和情感自動判斷。背景保持白或暖白，人物和道具使用典型復古印刷色，例如 Tomato Red、Faded Coral、Mustard Yellow、Avocado Green、Olive Green、Teal、Powder Blue、Burgundy、Dusty Pink、Lavender、Warm Brown 等。通常控制為 **1 個主強調色 + 1–2 個輔助色 + 黑色文字 + 白色背景**，整張圖主要顏色不超過 3–5 種。避免 AI 藍紫漸變、霓虹燈、賽博龐克、發光芯片、AI 大腦、機器人頭像、科技粒子、全息 HUD、大量漂浮 UI、程式碼雨等常見 AI 科技套路。即使主題是 AI、Coding、數位人或知識庫，也優先表達“人在用科技做什麼”，而不是“科技長什麼樣”。

最終畫面要做到：**第一眼看到標題，第二眼看到人物事件，第三眼發現這個復古人物正在做一件不屬於那個年代的事情，第四眼理解這種時代錯位為什麼與主題有關。** 不要展示分析過程，不要解釋視覺隱喻，不要給多個方案，不要做拼圖，直接生成一張完整封面。始終堅持：**一個主題，一個動作，一個隱喻，一次時代錯位，一張封面。**`,

  en: `You are a top magazine-cover art director, visual-metaphor designer, mid-century commercial illustrator, surreal collage artist, and editorial typographer. From the user's theme, create one editorial cover poster that feels like a unified series. The visual system is fixed: **modern minimal editorial design × 1940s–1960s vintage commercial-illustration figures × contemporary or future objects × a surreal visual metaphor × generous white space**. The final image should feel like today's independent magazine, drawn by a 1958 commercial illustrator, about a topic that could only exist now.

## User Input

**Theme / Main Title:** {{editorial_cover_theme}}

**Subtitle:** {{editorial_cover_subtitle}}

**Aspect Ratio:** {{editorial_cover_ratio}}

**Cast:** {{editorial_cover_cast}}

**Emotional Tone:** {{editorial_cover_emotion}}

Everything else is decided by you: palette, number of figures, age, occupation, action, camera, clothing, contemporary props, degree of surrealism, type hierarchy, layout, and composition.

Do not illustrate title keywords as clip-art. First understand the real argument, the character's situation, the behavioral shift, or the contradiction—then turn it into a metaphor that is **readable at a glance and slightly absurd on the second look**. Prefer “a human action + one core object + one unnatural relationship,” not “keyword + icon.” Tell only one visual story: **one theme, one action, one hero prop, one metaphor, one anachronism**. Delete anything that does not help the theme.

Figures must clearly belong to 1940s–1960s American advertising, vintage magazines, or mid-century illustration: rosy cheeks, period hair, vintage clothes, old-ad presence. **Never reuse the same pretty female face, the same male face, or a fixed man-and-woman pair.** Choose whoever best carries the idea: young or middle-aged, mentor, scholar, editor, programmer, engineer, photographer, host, traveler, work partners, two women, two men, a mixed pair, a single figure, or a small group of three or fewer. Faces, ages, hair, occupational vibe, clothes, and camera angle should change naturally. Series unity comes from style, not from repeating one face.

Figures must be mid-action—typing, writing, shooting, driving, observing, debugging, connecting, assembling, sorting, hosting, narrating, discussing, creating, operating, or confronting a surprise—never just standing for the camera. Pairs and groups need interaction, not a lineup. Faces need not always dominate: profile, back view, cropped body, hands, high angle, low angle, a glance back, or a figure stepping out of frame are welcome. The image should feel like a story paused halfway through.

The core pleasure is **anachronism**: vintage figures using things that belong to today or tomorrow—laptop, AI, coding interface, digital human, camera, drone, rocket, modern car, database, terminal, server, knowledge graph, video-editing UI, creative software—but only if the object serves the theme. Mild surrealism is allowed: entering a screen, sitting on a giant keyboard, driving a rocket, exiting a folder in a car, handling code as a physical object, making knowledge or sound tangible. Keep it smart, restrained, slightly absurd: usually **1 main metaphor + 1 supporting detail**.

Finish as **Mid-century advertising illustration + vintage editorial collage + surreal retro montage + modern editorial design**. Halftone dots, old print grain, faded ink, slight misregistration, paper fiber, screen-print texture, wear, and uneven pigment—as if cut from a real old magazine, not smooth digital painting or 3D CG. Background stays white, warm white, ivory, or cream with only light paper texture. No full office, city, or complex set.

Layout is **lots of white space + one small visual event**. For landscape 16:9, 5:2, 3:1: about 65%–75% left for title, subtitle, and air; 25%–35% right for figure and metaphor—clearly left-light, right-heavy. Especially on 5:2 and 3:1, emphasize horizontal breath; no centered subject, 50/50 split, full-bleed illustration, or a square image cropped into a banner. For portrait, title top or top-left, figure bottom or bottom-right; squares stay clearly asymmetrical. Illustration edges must not be a clean rectangle, rounded card, or picture frame. Use irregular feathered edges, faded ink, dry-brush dissolve, collage erosion, or halftone fade so vintage ink dissolves into white.

Titles use modern editorial typography against vintage figures. Chinese may be high-contrast Song, modern Song, minimal Hei, or condensed Hei; English may be Didone, Bodoni-like serif, editorial serif, or condensed sans. As little type as possible: prefer title and subtitle only, plus one tiny English editorial note if needed. No feature lists, function icons, busy labels, or long captions. The main title has highest priority; one number or keyword may be emphasized.

Do not ask the user for color. Infer palette from theme and emotion. Background white or warm white. Figures and props in vintage print colors: Tomato Red, Faded Coral, Mustard Yellow, Avocado Green, Olive Green, Teal, Powder Blue, Burgundy, Dusty Pink, Lavender, Warm Brown. Usually **1 accent + 1–2 supporting colors + black type + white ground**; no more than 3–5 main colors. Avoid AI purple-blue gradients, neon, cyberpunk, glowing chips, AI brains, robot heads, tech particles, holographic HUDs, floating UI, and code rain. Even for AI, coding, digital humans, or knowledge bases, show **what a person is doing with the technology**, not what the technology looks like.

The finished cover should work like this: **first the title, then the human event, then the realization that this vintage person is doing something from the wrong era, then why that anachronism belongs to the theme.** Do not show analysis, do not explain the metaphor, do not offer multiple options, do not make a collage board. Output one complete cover. Always: **one theme, one action, one metaphor, one anachronism, one cover.**`
};

export const TEMPLATE_VISUAL_MEMORY_PAGE = {
  "zh-tw": `將參考照片轉譯為一張 {{aspect_ratio}} 的編輯藝術書頁，版式為：{{display_mode}}。作品不是照片濾鏡或完整重繪，而是提取原圖最值得留下的空間、物件、光線與色彩關係，再轉化為攝影與抽象色塊的兩層記憶。

記憶核心：{{memory_core}}
重點保留：{{preserved_elements}}
抽象程度：{{abstraction_level}}
色塊語言：{{block_language}}
色彩策略：{{color_strategy}}
輸出比例：{{aspect_ratio}}

攝影部分保留原始攝影，可根據構圖適度裁切，但不得改變物件關係、增加人物或重新繪製照片。選擇最能體現記憶核心的局部作為視覺中心。

抽象部分使用少量大小懸殊的色塊重組同一畫面。以形態方向、位置、比例和色彩對應原圖中的重要物件，不追求寫實細節。允許透明疊印、輕微錯位、邊緣中斷、軟硬變化和局部留白。構圖應不對稱、重心明確，避免彩色幾何拼圖、低多邊形、向量圖標和普通抽象壁紙。

在最安靜的留白區加入極少量文字。主文字：{{main_text}}；輔助文字：{{supporting_text}}；語言：{{text_language}}。

文字必須來自畫面中能夠確認的空間、物件、動作、天氣、光線或情緒，不虛構地點、日期、人物身份和事件。使用中小字號、纖細現代字體，輔助文字更小更淡；文字總面積不超過畫面的 5%，不得壓住主要色塊。避免超大標題、描邊、陰影、發光、隨機英文和勵志文案。

攝影與抽象通過色彩與方向產生呼應，區域之間保留乾淨間隔。整體具有攝影藝術書、當代美術館出版物和私人影像檔案氣質：安靜、剋制、精確，留白充分。`,

  en: `Translate the reference photograph into an editorial artist-book page at {{aspect_ratio}}, using this presentation: {{display_mode}}. This is not a photo filter or a full redraw. Extract the spatial, object, light, and color relationships most worth keeping, then turn them into two layers of memory: photography and abstract color fields.

Memory core: {{memory_core}}
Preserve: {{preserved_elements}}
Abstraction: {{abstraction_level}}
Block language: {{block_language}}
Color strategy: {{color_strategy}}
Output ratio: {{aspect_ratio}}

Keep the photographic portion as the original photograph. Modest cropping for composition is allowed, but do not change object relationships, add people, or repaint the photo. Choose the crop that best carries the memory core as the visual center.

In the abstract portion, rebuild the same scene with a few color blocks of sharply unequal size. Let shape direction, position, proportion, and color correspond to important objects in the source. Do not chase realistic detail. Allow transparent overprinting, slight misregistration, broken edges, hard/soft contrast, and local whitespace. Keep the composition asymmetrical with a clear center of gravity. Avoid colorful geometric puzzles, low-poly, vector icons, and generic abstract wallpapers.

Place a very small amount of type in the quietest leftover space. Main text: {{main_text}}. Supporting text: {{supporting_text}}. Language: {{text_language}}.

All words must come from space, objects, actions, weather, light, or mood that can be confirmed in the picture. Do not invent places, dates, identities, or events. Use a small-to-medium thin modern typeface; supporting text smaller and paler. Type occupies no more than 5% of the page and must not cover primary color blocks. Avoid oversized titles, outlines, shadows, glow, random English, and motivational copy.

Photography and abstraction should echo each other through color and direction, with a clean interval between zones. The whole page should feel like a photography artist book, a contemporary museum publication, and a private image archive: quiet, restrained, precise, with generous white space.`
};

export const TEMPLATE_MEMORY_EXHIBITION_TICKET = {
  "zh-tw": `將參考照片轉譯為一張 {{aspect_ratio}} 豎版私人記憶展覽票。採用上下佈局：上部保留攝影記憶，下部呈現由同一照片生成的抽象、重製或概念化圖像。不要出現“原始”“轉譯”“對比”等解釋性標記，讓兩幅畫面自行建立聯繫。

展覽主題：{{exhibition_theme}}
說明文字：{{description}}
記憶核心：{{memory_core}}
轉譯方式：{{translation_mode}}
轉譯重點：{{translation_focus}}
抽象編號：{{serial_code}}
輸出比例：{{aspect_ratio}}

上部約佔 40%–45%，保留原始攝影質感，但允許大膽裁切。可以放大局部、截斷邊緣、減少背景，將最有視覺張力的物件、動作或空間關係作為主體。不得改變人物和物件關係，不增加照片中不存在的內容，不進行插畫化重繪。

下部約佔 40%–45%，必須重新創作，不能重複照片、簡單描摹或疊加濾鏡。提取原圖中的輪廓、比例、方向、材質、色彩與空間節奏，通過剪影、幾何切片、專色色塊、排線、網點、負形、比例放大、局部缺失和套印錯位進行重組。保持高度抽象，但仍能通過結構和顏色感知它來自上方照片。轉譯方式以 {{translation_mode}} 為主。

上下區域之間保留暖白紙張間隔。整張票面使用剋制的虛線撕口、邊緣打孔、票號區、細線和由原圖紋理衍生的底紋，至少保留 30% 的安靜留白。

字體固定採用經典油墨活版印刷語言。中文標題使用窄長宋體鉛字，橫細豎重；說明文字使用舊式細宋體或印刷黑體；編號使用窄體工業無襯線或打字機字體。文字呈現輕微滲墨、濃淡不均、鉛字磨損、紙面壓痕和極輕套印偏移，但必須清晰準確。文字放在畫面外側留白區，不遮擋攝影和轉譯主體。

色彩：{{color_strategy}}。禁止虛構地點、日期、機構、人物身份和票價；避免隨機英文、發光字、書法字、商業活動門票樣板及重度復古汙漬。最終效果應像一張收藏級當代藝術展覽票。`,

  en: `Translate the reference photograph into a {{aspect_ratio}} portrait private-memory exhibition ticket. Use a stacked layout: photography kept above, and below it an abstract, remade, or conceptual image generated from the same photo. Do not add explanatory labels such as “original,” “translation,” or “comparison.” Let the two images connect on their own.

Exhibition theme: {{exhibition_theme}}
Caption: {{description}}
Memory core: {{memory_core}}
Translation mode: {{translation_mode}}
Translation focus: {{translation_focus}}
Serial code: {{serial_code}}
Output ratio: {{aspect_ratio}}

The upper band occupies about 40%–45%. Keep photographic texture, but crop boldly: enlarge a fragment, cut the edge, reduce background, and let the most tense object, action, or spatial relation become the subject. Do not change figure or object relationships, invent content absent from the photo, or redraw it as illustration.

The lower band occupies about 40%–45% and must be newly made—not a repeat of the photo, a tracing, or a filter. Extract contour, proportion, direction, material, color, and spatial rhythm; recompose them through silhouette, geometric slices, spot-color fields, hatching, halftone, negative space, scale jumps, local omission, and print misregistration. Stay highly abstract, yet still readable as coming from the photograph above through structure and color. Lead with {{translation_mode}}.

Keep a warm-white paper interval between the two zones. The whole ticket uses restrained dashed tear-offs, edge perforations, a serial area, hairlines, and a faint ground derived from the photo’s texture. Leave at least 30% quiet white space.

Type is letterpress: a narrow high-contrast Song for the Chinese title; old thin Song or print Hei for the caption; condensed industrial sans or typewriter for the number. Allow slight ink bleed, uneven density, worn type, paper impression, and tiny misregistration—but keep every word sharp and accurate. Place type in the outer white margin; never cover the photograph or the translation.

Color: {{color_strategy}}. Do not invent places, dates, institutions, identities, or ticket prices. Avoid random English, glowing type, calligraphy, commercial event-ticket templates, and heavy vintage stains. The result should feel like a collectible contemporary art exhibition ticket.`
};

export const TEMPLATE_MEMORY_VINYL_ALBUM = {
  "zh-tw": `將參考照片轉譯為一張 1:2 豎版編輯作品，由上下兩個等大的正方形組成。上部保留原始攝影，下部將同一段記憶轉化為黑膠專輯，並放置在真實的 70 年代唱片店場景中。

專輯名稱：{{album_title}}
註釋文字：{{album_note}}
目錄編號：{{catalog_code}}
文字語言：{{text_language}}
封面風格：{{cover_style}}
輸出比例：1:2 直式構圖。

上半部分必須是正方形原始照片。由 AI 根據人物、動作、視線、空間結構和色彩錨點選擇最佳裁切，可以大幅捨棄邊緣和無關背景，但必須保留最有記憶價值的瞬間。保持攝影真實性，不重繪、不濾鏡化、不改變人物身份、動作和物件關係。若原圖帶有邊緣水印，優先通過合理裁切避開。

下半部分為真實唱片店中的微距攝影。將原圖轉譯為一張正方形黑膠專輯封面，不能只是把照片直接貼在封套上。提取原圖的主體輪廓、動作方向、空間分區、標誌性色彩和光線關係，通過幾何重組、專色色塊、絲網網點、局部剪影、光學折射或攝影拼貼重新設計。封面應與上圖明顯相關，但具備獨立的唱片視覺語言。封面風格為 {{cover_style}}。

專輯封套直立或微微傾斜，成為下部最清晰的焦點。封套具有真實紙張纖維、輕微環形磨損、細小劃痕、褪色油墨、軟化邊角和局部擦痕，但保持被妥善收藏的狀態。旁邊一張黑色唱片正在老式唱機上旋轉，可見溝槽、中心標記、轉軸和唱臂。

唱片店使用暖色鎢絲燈、深色木架、成排唱片、透明保護袋和少量金屬部件。採用微距鏡頭和淺景深，專輯封面清晰，其餘環境形成濃郁柔和的虛化，呈現 70 年代模擬膠片顆粒與溫暖色彩。

標題使用 70 年代窄體無襯線、幾何黑體或與圖像文化背景相符的經典字體；小字字號剋制、字距疏朗。所有文字必須拼寫準確，只出現指定的專輯名、註釋和編號。避免隨機文字、虛構歌手姓名、現代電子設備、霓虹燈、乾淨的當代零售空間、廉價復古濾鏡和過度破損。`,

  en: `Translate the reference photograph into a 1:2 vertical editorial piece made of two equal squares. Keep the original photography on top. Below, turn the same memory into a vinyl album placed in a real 1970s record shop.

Album title: {{album_title}}
Note: {{album_note}}
Catalog code: {{catalog_code}}
Type language: {{text_language}}
Cover style: {{cover_style}}
Output ratio: 1:2 vertical.

The upper square must be the original photograph. The AI chooses the best crop from figure, action, gaze, spatial structure, and color anchors. Edges and unused background may be cut away aggressively, but the most memorable instant must remain. Keep photographic truth: no redraw, no filter look, no change to identity, action, or object relationships. If the source has an edge watermark, crop it out when possible.

The lower square is a macro photograph inside a real record shop. Translate the source into a square vinyl sleeve—do not paste the photo onto the jacket. Extract silhouette, action direction, spatial partitions, signature colors, and light, then redesign through geometric recombination, spot-color fields, screen-print dots, partial silhouettes, optical refraction, or photographic collage. The cover must clearly relate to the photo above while speaking its own album-cover language. Style: {{cover_style}}.

The sleeve stands upright or slightly tilted as the sharpest focus below. Paper fiber, light ring wear, fine scratches, faded ink, softened corners, and local scuffs are allowed, but it should look well kept. Beside it, a black record turns on a vintage player: grooves, center label, spindle, and tonearm visible.

The shop uses warm tungsten light, dark wood racks, rows of records, clear inner sleeves, and a few metal parts. Shoot with a macro lens and shallow depth of field: the album cover sharp, the rest a dense soft blur, with 1970s analog grain and warm color.

Titles use 1970s condensed sans, geometric gothic, or a classic face matching the image’s culture. Small type stays restrained, with open tracking. Spell every word correctly; only the given title, note, and catalog code may appear. Avoid random type, invented artist names, modern electronics, neon, clean contemporary retail, cheap vintage filters, and heavy damage.`
};

export const DEFAULT_TEMPLATE_CONTENT = {
  "zh-tw": `### Role (角色設定)
你是一位頂尖的 {{role}}，擅長製作詳盡的角色設定圖（Character Sheet）。你具備“像素級拆解”的能力，能夠透視角色的穿著層級、捕捉微表情變化，並將與其相關的物品進行具象化還原。你特別擅長通過 {{subject}} 的品質生活好物、隨身物件和生活細節來側面豐滿人物性格與背景故事。

### Task (任務目標)
根據使用者上傳或描述的主體形象，生成一張**“全景式角色深度概念分解圖”**。該圖片必須包含 {{layout_focus}}，並在其周圍環繞展示該人物的服裝分層、不同表情、核心道具、材質特寫，以及極具生活氣息的品質生活好物與隨身物品展示。

### Visual Guidelines (視覺規範)
**1. 構圖佈局 (Layout):**
- **中心位 (Center):** 放置角色的 {{layout_focus}}，作為視覺錨點。
- **環繞位 (Surroundings):** 在中心人物四周空白處，有序排列拆解後的元素。
- **視覺引導 (Connectors):** 使用{{connectors}}，將周邊的拆解物品與中心人物的對應部位或所屬區域連線起來。

**2. 拆解內容 (Deconstruction Details):**
- **服裝分層 (Clothing Layers):** 將角色的服裝拆分為單品展示
- **時尚內著設計:** 獨立展示角色的內層衣物，重點突出設計感與材質。例如： {{underwear_style}} （展示細節與剪裁）。
- **表情集 (Expression Sheet):** 在角落繪製 3-4 個不同的頭部特寫，展示不同的情緒，如： {{expressions}} 。
- **材質特寫 (Texture & Zoom):** 選取關鍵部位進行放大特寫. 例如： {{texture_zoom}} ，增加對小物件材質的描繪。
- **動作:** 繪製特殊的動作和表情，例如：{{action_detail}}，增加動作的深度刻畫。
- **特殊視角:** 繪製從某種特殊場景下拍攝的特殊視角，例如：{{special_view}}

- **關聯物品 (Related Items):**
 - **隨身包袋與內容物:** 繪製 {{bag_content}}，並將其“打開”，展示散落在旁的物品。
 - **美妝與護理:** 展示 {{cosmetics}}。
 - **品質生活好物:** 具象化角色隱藏面的物品。根據角色性格可能包括： {{private_items}}，需以一種設計圖的客觀視角呈現。

**3.風格與註釋 (Style & Annotations):**
- **畫風:** {{art_style}}，線條幹淨利落。
- **背景:** {{background_style}}，營造設計手稿的氛圍。
- **文字說明:** 在每個拆解元素旁模擬手寫註釋，簡要說明材質或品牌/型號暗示。

### Workflow (執行邏輯)
1. 分析主體的核心特徵、穿著風格及潛在性格。
2. 提取可拆解的一級元素（外套、鞋子、大表情）。
3. 腦補並設計二級深度元素（她內衣穿什麼風格？包裡裝什麼？獨處時用什麼？）。
4. 生成一張包含所有這些元素的組合圖，確保透視準確，光影統一，註釋清晰。
5. 使用中文，高清輸出。`,
  en: `### Role
You are a top-tier {{role}}, specializing in creating detailed Character Sheets. You possess the ability of "pixel-level deconstruction," capable of seeing through the layering of characters' outfits, capturing subtle facial expressions, and restoring related items into concrete visuals. You particularly excel at enriching character personalities and background stories through {{subject}}'s quality life items, personal belongings, and daily life details.

### Task
Based on the subject image uploaded or described by the user, generate a **"Panoramic Deep Concept Deconstruction Map"**. This image must include the character's {{layout_focus}}, surrounded by displays of their clothing layers, different expressions, core props, material close-ups, and quality and everyday items that evoke a sense of life.

### Visual Guidelines
**1. Layout:**
- **Center:** Place the character's {{layout_focus}} as the visual anchor.
- **Surroundings:** Arrange the deconstructed elements in an orderly manner in the empty spaces around the central character.
- **Connectors:** Use {{connectors}} to link the peripheral items to the corresponding body parts or areas of the central character.

**2. Deconstruction Details:**
- **Clothing Layers:** Break down the character's clothing into individual items for display.
- **Innerwear Style Design:** Independently display the character's inner layers, highlighting design sense and materials. For example: {{underwear_style}} (showcasing details and tailoring).
- **Expression Sheet:** Draw 3-4 different head close-ups in the corner, showing different emotions like: {{expressions}}.
- **Texture & Zoom:** Select key parts for enlarged close-ups. For example: {{texture_zoom}}, adding more depiction of the materials of small items.
- **Action:** Draw special movements and expressions, such as: {{action_detail}}, increasing depth in action portrayal.
- **Special View:** Draw from unique scene perspectives, for example: {{special_view}}.

- **Related Items:**
 - **Bag Content:** Draw {{bag_content}} and "open" it to show the items scattered beside it.
 - **Cosmetics & Care:** Show {{cosmetics}}.
 - **Quality Life Items:** Concretize the character's hidden-side items. Depending on the personality, these could include: {{private_items}}, presented from an objective design-sheet perspective.

**3. Style & Annotations:**
- **Art Style:** {{art_style}}, with clean and crisp lines.
- **Background:** {{background_style}}, creating a design manuscript atmosphere.
- **Annotations:** Simulate handwritten notes next to each deconstructed element, briefly explaining the material or suggesting brands/models.

### Workflow
1. Analyze the subject's core features, dressing style, and potential personality.
2. Extract deconstructable primary elements (coat, shoes, main expression).
3. Imagine and design secondary deep elements (What style of underwear does she wear? What's in her bag? What does she use when alone?).
4. Generate a composite image containing all these elements, ensuring accurate perspective, uniform lighting, and clear annotations.
5. Use English, high-definition output.`
};

export const TEMPLATE_PHOTO_GRID = {
  "zh-tw": `### Photo Grid Composition (九宮格攝影)

**編輯場景:** 3x3網格佈局，採用冷灰色無縫背景。人物（面部特徵與上傳圖片完全一致）身穿 {{clothing}}，確保每張照片中人物形象保持一致。

**燈光設定:** {{lighting}}，營造統一而富有層次的光影效果。

**照片細節包括 (Grid Details)：**
1. {{grid_pose}}，畫面風格統一，鏡頭參數為 {{lens_param}}；
2. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現不同的拍攝角度和表情；
3. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉細膩的情感表達；
4. {{grid_pose}}，鏡頭參數為 {{lens_param}}，利用景深營造層次感；
5. {{grid_pose}}，鏡頭參數為 {{lens_param}}，突出動態瞬間的生動性；
6. {{grid_pose}}，鏡頭參數為 {{lens_param}}，通過前景虛化增強視覺焦點；
7. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現優雅的姿態和放鬆的狀態；
8. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉自然光線下的表情變化；
9. {{grid_pose}}，鏡頭參數為 {{lens_param}}，微距特寫展現面部細節和質感。

**後期處理:** 保持原始素材的真實感，平滑對比度，適度應用柔化效果，確保整體色調統一且富有質感。`,
  en: `### Photo Grid Composition

**Scene:** 3x3 grid layout, using a seamless cool grey background. The character (facial features exactly as in the uploaded image) is wearing {{clothing}}, ensuring character consistency across all photos.

**Lighting:** {{lighting}}, creating a unified and layered lighting effect.

**Grid Details:**
1. {{grid_pose}}, unified style, lens parameter: {{lens_param}};
2. {{grid_pose}}, lens parameter: {{lens_param}}, showing different angles and expressions;
3. {{grid_pose}}, lens parameter: {{lens_param}}, capturing subtle emotional expressions;
4. {{grid_pose}}, lens parameter: {{lens_param}}, using depth of field to create layers;
5. {{grid_pose}}, lens parameter: {{lens_param}}, highlighting the vividness of dynamic moments;
6. {{grid_pose}}, lens parameter: {{lens_param}}, enhancing visual focus through foreground blur;
7. {{grid_pose}}, lens parameter: {{lens_param}}, showing elegant posture and relaxed state;
8. {{grid_pose}}, lens parameter: {{lens_param}}, capturing facial changes under natural light;
9. {{grid_pose}}, lens parameter: {{lens_param}}, macro close-up showing facial details and texture.

**Post-processing:** Maintain the realism of the original material, smooth contrast, apply moderate softening effects, ensuring uniform overall tone and high-quality texture.`
};

export const TEMPLATE_PHOTO_GRID_V2 = {
  "zh-tw": `### Photo Grid Composition (九宮格攝影出格版)

**編輯場景:** 3x3網格佈局，採用冷灰色無縫背景。人物（面部特徵與上傳圖片完全一致）身穿 {{clothing}}，確保每張照片中人物形象保持一致。

**燈光設定:** {{lighting}}，營造統一而富有層次的光影效果。

**照片細節包括 (Grid Details)：**
1. {{grid_pose}}，畫面風格統一，鏡頭參數為 {{lens_param}}；
2. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現不同的拍攝角度和表情；
3. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉細膩的情感表達；
4. {{grid_pose}}，鏡頭參數為 {{lens_param}}，利用景深營造層次感；
5. {{grid_pose}}，鏡頭參數為 {{lens_param}}，突出動態瞬間的生動性；
6. {{grid_pose}}，鏡頭參數為 {{lens_param}}，通過前景虛化增強視覺焦點；
7. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現優雅的姿態和放鬆的狀態；
8. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉自然光線下的表情變化；
9. {{grid_pose}}，鏡頭參數為 {{lens_param}}，微距特寫展現面部細節和質感。

**後期處理:** 保持原始素材的真實感，平滑對比度，適度應用柔化效果，確保整體色調統一且富有質感。

**需要單獨處理:**中央宮格的圖片不侷限在自己的宮格內，形成一種從中央宮格躍出畫面的3D立體視覺，中央宮格人物佔據圖片較大面積且全身出鏡，會覆蓋到其他宮格，並對其他宮格形成陰影效果，營造一種裸眼3D的視覺張力`,
  en: `### Photo Grid Composition (Out-of-Box Version)

**Scene:** 3x3 grid layout, using a seamless cool grey background. The character (facial features exactly as in the uploaded image) is wearing {{clothing}}, ensuring character consistency across all photos.

**Lighting:** {{lighting}}, creating a unified and layered lighting effect.

**Grid Details:**
1. {{grid_pose}}, unified style, lens parameter: {{lens_param}};
2. {{grid_pose}}, lens parameter: {{lens_param}}, showing different angles and expressions;
3. {{grid_pose}}, lens parameter: {{lens_param}}, capturing subtle emotional expressions;
4. {{grid_pose}}, lens parameter: {{lens_param}}, using depth of field to create layers;
5. {{grid_pose}}, lens parameter: {{lens_param}}, highlighting the vividness of dynamic moments;
6. {{grid_pose}}, lens parameter: {{lens_param}}, enhancing visual focus through foreground blur;
7. {{grid_pose}}, lens parameter: {{lens_param}}, showing elegant posture and relaxed state;
8. {{grid_pose}}, lens parameter: {{lens_param}}, capturing facial changes under natural light;
9. {{grid_pose}}, lens parameter: {{lens_param}}, macro close-up showing facial details and texture.

**Post-processing:** Maintain the realism of the original material, smooth contrast, apply moderate softening effects, ensuring uniform overall tone and high-quality texture.

**Special Instructions:** The central grid image is not confined to its own square, creating a 3D visual effect as if jumping out of the frame. The central character occupies a larger area and is shown in full-body, overlapping other squares and casting shadows on them, creating a naked-eye 3D visual tension.`
};

export const TEMPLATE_FASHION_MOODBOARD = {
  "zh-tw": `### Fashion Illustration Moodboard (時尚插畫情緒板)
一張9:16豎屏的進階時尚插畫情緒板，模擬平板掃描效果。

**背景:** 純手繪的奶油色水彩暈染紙張，帶有淡淡的粉色網格。
**視覺核心:** 數張具有明顯白色模切寬邊和柔和投影的亮面乙烯基貼紙。

**貼紙內容:**
- **中央:** {{sticker_core}}，光線明亮。
- **左側:** {{fashion_deconstruct}}。
- **右下角:** 關鍵的隱藏層貼紙：一套折疊整齊的內衣，展現細膩紋理。
- **互動元素:** 一隻穿著粉色系、與使用者服裝呼應的 {{toy_companion}} 正趴在一個手繪對話框上。

**裝飾細節:** 周圍裝飾著蠟筆質感的 {{sticker_decor}} 和潦草的中文書法標註OOTD。
**注意:** 畫面中絕無任何人手、筆或物理桌面背景，純粹的平面藝術插畫。`,
  en: `### Fashion Illustration Moodboard
A high-end 9:16 vertical fashion illustration moodboard, simulating a tablet scan effect.

**Background:** Hand-painted cream-colored watercolor stained paper with a faint pink grid.
**Visual Core:** Several glossy vinyl stickers with distinct white die-cut borders and soft shadows.

**Sticker Contents:**
- **Center:** {{sticker_core}}, with bright lighting.
- **Left Side:** {{fashion_deconstruct}}.
- **Bottom Right:** Key hidden layer sticker: a set of neatly folded underwear, showing fine texture.
- **Interactive Element:** A {{toy_companion}} wearing pink tones that match the user's outfit is leaning on a hand-drawn speech bubble.

**Decorative Details:** Surrounded by crayon-textured {{sticker_decor}} and scribbled calligraphy OOTD annotations.
**Note:** Absolutely no hands, pens, or physical desk backgrounds in the frame; pure flat art illustration.`
};

export const TEMPLATE_CHARACTER_SELFIE = {
  "zh-tw": `### Character Selfie (人物趣味合影)
讓 {{character_companion}} 站在男人旁邊，{{action_pose}}，同時對著鏡頭露出調皮的表情。

**背景:** 以 {{background_scene}} 為背景。

**要求:** 保持自拍構圖不變，讓兩個角色自然地融入畫面，光影統一，互動自然。`,
  en: `### Character Selfie
Have {{character_companion}} stand next to the man, {{action_pose}}, while making a playful expression at the camera.

**Background:** Set against the backdrop of {{background_scene}}.

**Requirements:** Maintain the selfie composition, integrating both characters naturally into the frame with unified lighting and natural interaction.`
};

export const TEMPLATE_CLASSIC_SCENE = {
  "zh-tw": `### 經典場景微縮復刻

展示一個精緻的、微縮 3D 卡通風格的{{classic_scene}}場景，採用清晰的 45° 俯視等軸側視角（Isometric view）。

**核心構圖：** 將主體最經典的形象突出地置於中心。自動搭配比例適宜的關鍵元素圖標、象徵性物品、迷人的小角色以及能詮釋主體故事的道具。整體佈局應當充滿趣味且緊湊聚集，宛如一套高端的玩具盲盒套裝。

**渲染與材質：** 採用{{render_style}}風格進行渲染。建模必須精細、圓潤流暢且質感豐富。使用逼真的 PBR 材質：混合用於有機形態的柔和啞光黏土、用於水體/玻璃元素的光澤樹脂，以及用於結構元件的光滑 PVC 材質。著重表現具有觸感、“看起來手感很好”的紋理細節。

**燈光與氛圍：** 採用柔和、逼真的攝影棚布光配合全域光照（Global Illumination）。利用柔和的陰影營造出溫暖、舒適且充滿魔力的氛圍。

**佈局：** 保持乾淨、極簡的佈局，使用與主體配色相協調的純色背景。

**文字：** 在{{position}}，使用巨大的、圓潤的 3D 字體醒目地展示主體名稱，使其輕微懸浮於場景上方。`,
  en: `### Classic Scene Miniature Restoration
Showcase an exquisite, miniature 3D cartoon-style {{classic_scene}} scene, using a clear 45° isometric view.

**Core Composition:** Place the most classic image of the subject prominently in the center. Automatically pair it with appropriately scaled key element icons, symbolic items, charming little characters, and props that interpret the subject's story. The overall layout should be playful and tightly clustered, like a high-end toy blind box set.

**Rendering & Materials:** Render in {{render_style}} style. Modeling must be fine, rounded, smooth, and rich in texture. Use realistic PBR materials: a mix of soft matte clay for organic forms, glossy resin for water/glass elements, and smooth PVC for structural components. Focus on tactile, "looks good to touch" texture details.

**Lighting & Atmosphere:** Use soft, realistic studio lighting with Global Illumination. Utilize soft shadows to create a warm, cozy, and magical atmosphere.

**Layout:** Maintain a clean, minimalist layout with a solid color background that coordinates with the subject's color scheme.

**Text:** At {{position}}, prominently display the subject's name in giant, rounded 3D font, making it slightly float above the scene.`
};

export const TEMPLATE_CORPORATE_GROWTH = {
  "zh-tw": `### 視覺化企業成長之路

**角色定義**  
你是一位企業演變建築師 (Corporate Evolution Architect)。你的目標是建立一個超高密度、垂直堆疊的等距軸測（Isometric）3D 渲染視覺化圖像，展示 {{company}} 公司的技術和產品歷史。通過圖像展示一個企業的時間線：底部是簡陋的創業故事，通過產品迭代垂直向上升起，直到現代或未來的巔峰。

**核心能力 | 關鍵視覺策略（rameless Tech-Lapse）：**
- **根除容器：** 嚴禁使用底板、邊框或橫截面檢視。底部邊緣是創業基地（車庫/實驗室/小辦公室），無限延伸。
- **垂直時間線：** “之字形上升（Zig-Zag Ascent）”穿越創新曆程。  
  - 底部（前景）：創業階段歲月 + 第一個原型機  
  - 中部（上升中）：快速增長 / 全球擴張 / 標誌性的中期產品  
  - 頂部（背景）：當前總部 / 生態系統 / 未來研發
- **整合 3D 標題：** 企業 Logo 必須渲染為巨大的、電影般的 3D 字體，矗立在前景，使用公司標誌性字體/材質。

**檢索與梳理：**
- 提取企業歷史的幾個階段。
- 列出定義每個時代的“經典產品”。
- 勞動力演變：視覺化員工與設備的變化。

**構圖與光影：**  
無框架、無邊界、無橫截面。垂直之字形時間線，將產品代際從底部的創業階段堆疊到未來的頂部。燈光從近現代的暖光（創業初期）過渡到乾淨的白/藍 LED 光（現代科技）。環境與公司經典產品隨高度演變。公司的多款經典產品以“巨物化”呈現。  
移軸攝影（Tilt-shift）與 {{render_style}}，畫幅 {{ratio}}。`,
  en: `### Visualized Corporate Growth Path
**Role Definition**
You are a Corporate Evolution Architect. Your goal is to create an ultra-high-density, vertically stacked isometric 3D rendered visualization showing the technological and product history of {{company}}. Showcase a corporate timeline: the base is the humble startup story, rising vertically through product iterations to the modern or future peak.

**Core Competency | Key Visual Strategy (Frameless Tech-Lapse):**
- **Eradicate Containers:** Strictly forbid base plates, borders, or cross-section views. The bottom edge is the startup base (garage/lab/small office), extending infinitely.
- **Vertical Timeline:** A "Zig-Zag Ascent" through the innovation journey.
  - Bottom (Foreground): Startup years + the first prototype.
  - Middle (Ascending): Rapid growth / global expansion / iconic mid-term products.
  - Top (Background): Current headquarters / ecosystem / future R&D.
- **Integrated 3D Title:** The corporate logo must be rendered as a giant, cinematic 3D font, standing in the foreground, using the company's signature font/material.

**Retrieval & Organization:**
- Extract several stages of corporate history.
- List "classic products" defining each era.
- Workforce Evolution: Visualize changes in employees and equipment.

**Composition & Lighting:**
Frameless, borderless, no cross-sections. A vertical zig-zag timeline stacking product generations from the startup phase at the bottom to the future at the top. Lighting transitions from warm near-modern light (early startup) to clean white/blue LED light (modern tech). The environment and company's classic products evolve with height. Multiple classic products are presented as "megaliths."
Tilt-shift photography with {{render_style}}, aspect ratio {{ratio}}.`
};

export const TEMPLATE_DETECTIVE_SOCIAL = {
  "zh-tw": `發揮你的創意幫我一起腦洞，假設{{character_groups}}使用{{social_media}}，包括回覆評論點贊，設計一些有趣、有反差的人物使用社交媒體互動朋友圈的場景，結合一些符合人物的大事件，有趣有梗有反差，製作一張{{social_media}}的截圖，使用中文，{{ratio}}。`,
  en: `Use your creativity to brainstorm with me. Imagine {{character_groups}} using {{social_media}}, including replying, commenting, and liking. Design some fun, high-contrast scenarios of characters interacting on social media feeds, combining big events that fit the characters with humor, memes, and contrast. Create a screenshot of {{social_media}}, in English, with aspect ratio {{ratio}}.`
};

export const TEMPLATE_MAGAZINE_COVER = {
  "zh-tw": `### PROJECT GOAL | 專案目標
生成一張 9:16 旅遊雜誌封面級照片，以我上傳的真人照片為基準，實現 100% 五官還原，呈現專業、精緻、具有真實雜誌質感的封面畫面。

### SUBJECT | 人物設定
根據我上傳人物的五官特徵進行完整還原；人物置身於 {{travel_location}}，請根據這個地理位置給人物穿著符合當地此刻的實時天氣、溫度與季節服裝邏輯；整體風格自然、優雅、有現場氛圍。

### POSE & EXPRESSION | 姿態與表情
人物以雜誌封面標準姿態入鏡，略帶從容質感；面部表情自然放鬆但具吸引力；
身體姿勢根據場景與天氣自由適配，呈現"在當地旅行中的真實狀態"。

### ENVIRONMENT | 場景要求
背景呈現使用者輸入的地名代表性視覺線索，請根據使用者輸入的地理位置呈現符合當地此刻的實時天氣、溫度與季節場景邏輯；保持進階寫實風格，不誇張、不超現實；
光線以真實自然光為主，具有現場環境的時間感。

### CAMERA & AESTHETICS | 拍攝規格
畫幅比例: {{ratio}}
構圖: 充分利用豎幅空間，打造"封面級"視覺中心；鏡頭語言: 專業攝影棚級別的清晰度與景深；膚質感可見毛孔與自然紋理（非磨皮）；整體氛圍具有進階旅行雜誌的真實感與美感。

### MAGAZINE DESIGN | 封面設計
版面風格現代、乾淨、具有國際旅行雜誌氛圍；
主標題、副標題、雜誌圖形元素可自動生成但需與人物與地點匹配；
色彩搭配進階、協調；
最終呈現接近《Vogue》《National Geographic Traveler》級別的封面氣質。`,
  en: `### PROJECT GOAL
Generate a 9:16 travel magazine cover-quality photo based on the uploaded real-life photo, achieving 100% facial feature restoration, presenting a professional, exquisite, and authentic magazine-textured cover.

### SUBJECT
Fully restore based on the uploaded person's facial features; the person is located in {{travel_location}}. Please dress the character according to the real-time weather, temperature, and seasonal clothing logic of that location; the overall style should be natural, elegant, and atmospheric.

### POSE & EXPRESSION
The person enters the frame in a standard magazine cover pose, with a touch of composed quality; natural and relaxed facial expressions but with attractiveness.
Body posture adapts freely according to the scene and weather, presenting a "real state of traveling locally."

### ENVIRONMENT
The background shows representative visual cues of the location input by the user. Please present scene logic consistent with the local real-time weather, temperature, and season; maintain a high-end realistic style, not exaggerated or surreal.
Lighting is mainly natural, with a sense of time of the site environment.

### CAMERA & AESTHETICS
Aspect Ratio: {{ratio}}
Composition: Make full use of vertical space to create a "cover-level" visual center. Lens language: Professional studio-level clarity and depth of field; skin texture shows pores and natural grain (no smoothing); overall atmosphere has the realism and beauty of a high-end travel magazine.

### MAGAZINE DESIGN
Modern, clean layout with an international travel magazine vibe.
Main title, subtitle, and magazine graphic elements can be automatically generated but must match the person and location.
High-end, coordinated color palette.
The final result should approach the cover temperament of "Vogue" or "National Geographic Traveler."`
};

export const TEMPLATE_MANGA_TO_REALITY = {
  "zh-tw": `### SUBJECT | 人物主體
{{character_originality}}，從漫畫分鏡邊框中跨步走出並打破界限。真實版本與漫畫版本之間充滿動態且無縫的互動。

### SETTING | 場景設定
地點：{{comic_scene}}
地板上攤開一本巨大的漫畫書。

### MANGA DETAILS | 漫畫細節
- **風格：** 超現實風格的黑白四格漫畫
- **技法：** 正宗日式排版，網點紙效果，粗黑墨線，線條清晰利落
- **內容：** 同一個人的漫畫版本被困在漫畫書裡面
- **對比：** 單色漫畫世界與鮮豔現實世界的強烈視覺對比

### REAL LIFE VERSION | 真實版本
- **視覺質感：** 生動、色彩豐富、照片級真實感、超逼真 8K 畫質
- **互動方式：** 動態地浮現於漫畫表面，直接與漫畫版本互動
- **情緒氛圍：** 元風格 (Meta)，幽默的相遇

### TECHNICAL SPECS | 技術規格
- **畫質：** 超逼真，8K 分辨率，高度細節化
- **融合效果：** 漫畫線條藝術與現實攝影的無縫融合
- **畫幅比例：** {{ratio}}`,
  en: `### SUBJECT
{{character_originality}}, stepping out from the manga panel borders and breaking boundaries. A dynamic and seamless interaction between the real-life version and the manga version.

### SETTING
Location: {{comic_scene}}
A giant manga book is spread open on the floor.

### MANGA DETAILS
- **Style:** Surreal black and white four-panel manga.
- **Technique:** Authentic Japanese layout, screentone effects, thick black ink lines, clean and sharp linework.
- **Content:** The manga version of the same person is trapped inside the manga book.
- **Contrast:** Strong visual contrast between the monochromatic manga world and the vibrant real world.

### REAL LIFE VERSION
- **Visual Texture:** Vivid, colorful, photo-realistic, ultra-realistic 8K quality.
- **Interaction:** Dynamically emerging from the manga surface, interacting directly with the manga version.
- **Atmosphere:** Meta-style, a humorous encounter.

### TECHNICAL SPECS
- **Image Quality:** Ultra-realistic, 8K resolution, highly detailed.
- **Blending:** Seamless fusion of manga line art and real-life photography.
- **Aspect Ratio:** {{ratio}}`
};

export const TEMPLATE_FISHEYE_URBAN = {
  "zh-tw": `### 極端魚眼都市奇觀

{{character_originality}}，用{{lens_type}}拍攝的照片，主體是一位穿著{{school_uniform}}的{{subject}}，在{{urban_location}}興奮地跳起，{{dynamic_action}}。

**視覺焦點：**
- **前景細節：** {{fingernail_detail}}
- **背景景觀：** {{building_cluster}}，街道上擠滿行人和車輛
- **超現實元素：** {{monster_element}}漂浮在城市上空，{{monster_feature}}環繞著扭曲的城市景觀

**整體基調：**
創造一個融合現實與奇幻的都市奇觀，魚眼鏡頭的畸變效果與卡通怪獸的出現形成強烈對比，營造出夢幻而充滿活力的視覺衝擊。`,
  en: `### Extreme Fisheye Urban Spectacle
{{character_originality}}, a photo taken with {{lens_type}}, the subject is a {{subject}} wearing {{school_uniform}}, jumping excitedly in {{urban_location}}, {{dynamic_action}}.

**Visual Focus:**
- **Foreground Detail:** {{fingernail_detail}}.
- **Background Landscape:** {{building_cluster}}, streets packed with pedestrians and vehicles.
- **Surreal Elements:** {{monster_element}} floating above the city, with {{monster_feature}} surrounding the distorted urban landscape.

**Overall Tone:**
Create an urban spectacle blending reality and fantasy. The distortion of the fisheye lens contrasted with the appearance of cartoon monsters creates a dreamy and vibrant visual impact.`
};

export const TEMPLATE_INDUSTRIAL_DESIGN = {
  "zh-tw": `### 目標
設計一個頂級的工業設計產品介紹頁，使用極簡的宣傳頁風格；需要深刻理解該設計師的設計理念、設計風格，並將這種設計理解完全融入到設計產品的工業設計與展示頁面中

### 內容
- **設計師：** {{designer}}
- **產品：** {{design_item}}

### 畫面
- **設計師介紹：**
約佔整個畫面非常少的部分，包括設計師的介紹（極具氛圍感的頭像）與設計師對於這個產品的設計思路與設計理解，以及設計師的簽名。
- **畫面核心內容：**
佔整個畫面的80%或更多用於呈現產品本身，一個完全符合設計師自己設計風格與設計方法的頂級產品設計圖（一個完整的單張產品效果的呈現），基於工業成品設計成果使用不同的構圖。整體配色需要與設計師的風格與產品內容完全相符
- **構圖：**
最終構圖：{{ratio}} 
整體排版主次分明，規整，極具格調與設計特色`,
  en: `### Goal
Design a top-tier industrial design product introduction page using a minimalist promotional layout. Deeply understand the designer's philosophy and style, and fully integrate this design understanding into the product's industrial design and presentation page.

### Content
- **Designer:** {{designer}}
- **Product:** {{design_item}}

### Visuals
- **Designer Intro:**
Occupies a very small part of the frame, including a bio (with an atmospheric portrait), the designer's thoughts and design philosophy for this product, and their signature.
- **Core Content:**
80% or more of the frame is used to present the product itself—a top-tier product design illustration fully consistent with the designer's own style and methods (a complete single product effect presentation). Use different compositions based on the industrial design results. The overall color scheme must match the designer's style and product content.
- **Composition:**
Final Composition: {{ratio}}.
The overall layout is clear in hierarchy, organized, and highly stylish and characteristic.`
};

export const TEMPLATE_RAINDROP_ART = {
  "zh-tw": `### Raindrop Art (雨滴定格藝術)

**核心表現:**
捕捉了雨滴落入水面的瞬間，雨滴打落在水面上，飛濺的水珠在空中形成一個抽象的 {{rain_shape}}。

**藝術視覺:**
水滴構成的結果相對比較概念化，更遵從水滴濺落形成的動態感，但能從動作或神態中感受到其表達的藝術視覺。畫面將雨水與自然交互的微妙之美的定格藝術作品，動感與優雅交融，呈現出詩意的視覺表達。

**環境背景:**
背景是朦朧的雨景。

**規格:**
{{ratio}}`,
  en: `### Raindrop Art
**Core Performance:**
Capture the moment a raindrop falls into the water surface, with the splashing droplets forming an abstract {{rain_shape}} in the air.

**Artistic Vision:**
The resulting water droplet form is relatively conceptual, following the dynamic feel of the splash, yet the artistic vision can be felt through the movement or pose. The image is a frozen-in-time artwork of the subtle beauty of rain interacting with nature, blending dynamism and elegance to present a poetic visual expression.

**Environment/Background:**
The background is a hazy rainy scene.

**Specifications:**
{{ratio}}`
};

export const TEMPLATE_ART_GROWTH = {
  "zh-tw": `### 視覺化藝術成長之路

**角色定義**  
你是一位歷史演變建築師 (History Evolution Architect)。你的目標是建立一個超高密度、垂直堆疊的等距軸測（Isometric）3D 展廳渲染視覺化圖像，展示 {{art_type}} 的發展歷史。通過展廳來展示一個里程發展的時間線：底部是簡陋的發展初期，通過歷史更迭迭代垂直向上升起，直到現代或未來的巔峰。

**核心能力 | 關鍵視覺策略（rameless Tech-Lapse）：**
- **展廳模擬：** 使用一個多層的藝術展廳承載所要表達的事物發展，層級代表時間維度的發展，每層可能存在不同的“房間”用於展示同一時代不同風格的作品
- **根除容器：** 嚴禁使用底板、邊框或橫截面檢視。底部邊緣是歷史起源（原始社會或古代社會）
- **垂直時間線：** “之字形上升（Zig-Zag Ascent）”穿越創新曆程。  
  - 底部（前景）：起源與原型  
  - 中部（上升中）：古代到現代的輝煌發展  
  - 頂部（背景）：當前的發展狀態與未來的可能性
- **整合 3D 標題：** 明確的與主題相符合的標題

**檢索與梳理：**
- 提取重要發展歷史中的的幾個階段。
- 列出定義每個時代的“經典”。
- 工具與媒介的變化

**構圖與光影：**  
等距視角的展廳視角。垂直之字形時間線，將事物發展從底部的創業階段堆疊到未來的頂部，環境與劃時代的經典作品隨高度演變。多款經典產品以“巨物化”呈現。  
移軸攝影（Tilt-shift）與 {{render_style}}，畫幅 {{ratio}}。`,
  en: `### Visualized Artistic Growth Path
**Role Definition**
You are a History Evolution Architect. Your goal is to create an ultra-high-density, vertically stacked isometric 3D gallery render showing the development history of {{art_type}}. Use a gallery to showcase a milestone timeline: the base is the humble early stages, rising vertically through historical changes to the modern or future peak.

**Core Competency | Key Visual Strategy (Frameless Tech-Lapse):**
- **Gallery Simulation:** Use a multi-level art gallery to host the development. Levels represent temporal progression, with different "rooms" potentially showing different styles from the same era.
- **Eradicate Containers:** Strictly forbid base plates, borders, or cross-section views. The bottom edge is the historical origin (primitive or ancient society).
- **Vertical Timeline:** A "Zig-Zag Ascent" through the innovation journey.
  - Bottom (Foreground): Origins and prototypes.
  - Middle (Ascending): Brilliant development from ancient to modern times.
  - Top (Background): Current development status and future possibilities.
- **Integrated 3D Title:** A clear title consistent with the theme.

**Retrieval & Organization:**
- Extract several important historical development stages.
- List "classics" defining each era.
- Changes in tools and media.

**Composition & Lighting:**
Isometric gallery view. A vertical zig-zag timeline stacking development from the base to the future at the top. The environment and era-defining classics evolve with height. Multiple classic products are presented as "megaliths."
Tilt-shift photography with {{render_style}}, aspect ratio {{ratio}}.`
};

export const TEMPLATE_MINIATURE_DESK = {
  "zh-tw": `### 窗邊書桌微縮場景

展示一個在窗邊書桌上的場景。

**核心內容：**
《{{show_name}}》的經典鏡頭微縮場景展示，採用了{{render_style}}風格，充分體現了微縮攝影的藝術表達。

**環境背景：**
背景是真實的書桌，有一些製作工具，散亂的書本，營造一種剛剛加工完這個場景的凌亂感。書桌上還有編制的圖紙和原型手稿。

**窗外互動：**
窗外，真實的{{character_name}}正好奇地向內觀察這個桌上的作品。

**畫面規格：**
{{ratio}}`,
  en: `### Window-side Desk Miniature Scene
Displays a scene on a desk by a window.

**Core Content:**
A miniature restoration of a classic scene from "{{show_name}}", using the {{render_style}} style, fully embodying the artistic expression of miniature photography.

**Environment/Background:**
The background is a real desk, with some crafting tools and scattered books, creating a sense of messiness as if the scene was just finished. There are also woven plans and prototype manuscripts on the desk.

**Window Interaction:**
Outside the window, a real {{character_name}} is curiously looking inside at the work on the desk.

**Image Specs:**
{{ratio}}`
};

export const TEMPLATE_CHINESE_NEW_YEAR_POSTER = {
  "zh-tw": `### 中國新年時尚海報

一張現代時尚感的中國新年海報，融合高端時尚攝影與傳統節日元素，極具視覺衝擊力和藝術美感。

**核心主體：**
{{character_originality}}，面部和頸部極致特寫，{{character_heroic}}騎著白馬優雅而富有力量地衝向螢幕，呈現出即將躍出取景框的瞬間動態。這是一位普通的中國人，穿著精心設計的{{clothing_style_chinese}}，色彩為{{clothing_color_traditional}}，面部表情自然親切而富有生活氣息，妝容精緻淡雅，髮型柔美自然，頸部線條優美修長。人物嘴裡輕輕叼著一個精緻的中國紅包，增添節日趣味和喜慶氛圍。

**構圖與攝影：**
- 超近距離的面部和頸部特寫，人物幾乎填滿整個畫面
- 極淺景深讓背景柔化模糊，形成美麗的光斑效果
- 精準控制的動態模糊，馬尾和髮絲輕柔飄動，展現優雅動感
- 人物和馬彷彿要躍出取景框，突破畫面邊界，帶來強烈的視覺衝擊
- 高端時尚攝影的布光技巧，完美輪廓光勾勒人物輪廓和頸部線條
- 時尚雜誌級別的精修質感，皮膚光滑細膩，五官立體精緻，頸部優美
- 荷蘭角構圖，增強現代時尚感和動態張力

**細節刻畫：**
- 面部細節：完美妝容，皮膚細膩光滑，眼神明亮有神，嘴角的紅包增添俏皮感
- 紅包細節：精緻的中國紅包，金色吉祥圖案，輕微反光質感
- 服裝質感：進階面料質感，精緻工藝細節，剪裁合身
- 馬匹細節：乾淨整潔，皮毛健康光澤，鬃毛柔順飄逸
- 光影效果：進階時尚布光，層次豐富，色彩精緻飽滿，紅包上的金色圖案閃爍

**背景與氛圍：**
- 真實感的廣袤草原背景，極具縱深感和空間感
- 天空呈現壯麗的紅色夕陽，晚霞染紅整個天際，營造浪漫氛圍
- 夕陽的暖色調光輝灑在人物和馬匹身上，形成金色輪廓光
- 背景虛化處理，草原與紅色天空的交界線柔和自然
- 整體色調為溫暖優雅的橙紅色調，營造時尚而喜慶的視覺衝擊力

**攝影風格：**
- 極具藝術吸引力的頂級時尚攝影，富士膠片魅力
- Fujicolor Velvia風格，色彩濃郁飽滿，對比度適中偏柔
- 輕微的膠片顆粒質感，增添高端復古藝術氣息
- 時尚雜誌級景深控制，主體清晰突出，背景柔美虛化
- 光線層次豐富，暗部和亮部細節保留完整
- 具有強烈的時尚美感和視覺吸引力

**攝影規格：**
{{ratio}}
高分辨率，時尚海報級品質，Fuji膠片攝影風格`,
  en: `### Chinese New Year Fashion Poster

A modern fashionable Chinese New Year poster blending high-end fashion photography with traditional festive elements, featuring strong visual impact and artistic beauty.

**Core Subject:**
{{character_originality}}, extreme face and neck close-up. {{character_heroic}} rides a white horse elegantly yet powerfully charging towards the screen, capturing the moment of about to leap out of frame. This is an ordinary Chinese person wearing exquisitely designed {{clothing_style_chinese}} in {{clothing_color_traditional}}, with natural friendly expression full of life, delicate light makeup, soft natural grooming, and elegant slender neck. The character gently holds a refined Chinese red envelope in their mouth, adding festive fun and celebratory atmosphere.

**Composition & Photography:**
- Ultra-close face and neck shot, the character nearly fills the entire frame
- Extremely shallow depth of field makes background soft and blurred, forming beautiful bokeh effects
- Precisely controlled motion blur, mane and hair gently flowing, showing elegant dynamic
- Character and horse appear about to leap out of the frame, breaking the visual boundary with strong impact
- High-end fashion lighting techniques, perfect rim light outlining character silhouette and neck lines
- Fashion magazine grade retouched quality, smooth refined skin, sculpted facial features, elegant neck
- Dutch angle composition enhancing modern fashion sense and dynamic tension

**Detail Rendering:**
- Facial details: perfect makeup, smooth refined skin, bright expressive eyes, red envelope at corner of mouth adding playfulness
- Red envelope details: exquisite Chinese red envelope, golden auspicious patterns, subtle reflective texture
- Clothing texture: premium fabric quality, exquisite craftsmanship, tailored fit
- Horse details: clean and tidy, healthy coat sheen, smooth flowing mane
- Lighting effects: high-end fashion lighting, rich layers, exquisite vibrant colors, golden patterns on red envelope shimmering

**Background & Atmosphere:**
- Realistic vast grassland background with immense depth and spatial sense
- Magnificent red sunset sky, the afterglow dyes the entire horizon creating romantic atmosphere
- Warm sunset glow showers on the character and horse, forming golden rim light
- Background bokeh treatment, the horizon line of grassland and red sky is soft and natural
- Overall color tone is warm elegant orange-red, creating fashionable yet festive visual impact

**Photography Style:**
- Top-tier artistic fashion photography with Fuji film charm
- Fujicolor Velvia style, rich and vibrant colors, moderate soft contrast
- Subtle film grain texture adding high-end vintage artistic atmosphere
- Fashion magazine grade depth of field control, main subject sharp and prominent, background beautifully blurred
- Rich lighting layers, complete detail retention in shadows and highlights
- Strong fashion aesthetic and visual appeal

**Photography Specs:**
{{ratio}}
High resolution, fashion poster grade quality, Fuji film photography style`
};

export const TEMPLATE_JAPANESE_PRODUCT_POSTER = {
  "zh-tw": `### 日式產品海報（16:9橫式構圖）

進階日式產品海報，16:9橫式構圖格式，編輯級設計展示{{fruit_1}}汁皮膚包裝概念，具有精緻的視覺敘事：

**左側（畫布40%）：**
- **主角產品：** 一個大型{{fruit_1}}汁皮膚包裝垂直展示，採用戲劇性柔和燈光，展現超寫實的{{fruit_1}}果皮紋理包裹矩形容器，符合{{fruit_1}}特徵質感的皮膚紋理，覆蓋整個表面，具有該水果特有的自然質感、顏色和細節變化，看起來完全像真正的{{fruit_1}}果皮拉伸覆蓋在包裝上
- **下方：** 一個橫切的新鮮{{fruit_1}}，展示符合{{fruit_1}}特徵的果肉質感，展現其獨特的內部結構和顏色
- **日式排版垂直對齊：** "{{fruit_1}}スキン"（{{fruit_1}}皮膚）採用優雅的細體哥特字體
- **副標題：** "果汁皮膚 / {{fruit_1}}"採用精緻風格
- **小字設計理念文本（日文）**

**中央（畫布30%）：**
- **大量白色負空間（間 - Ma）**
- **極簡幾何元素：** 精緻的細線
- **浮動文字：** "天然な素材"（天然材料）
- **極簡品牌標識**
- **背景中非常微妙的{{fruit_1}}特徵紋理圖案（低不透明度）**

**右側（畫布30%）：**
- **兩個{{fruit_1}}汁皮膚包裝以不同角度和高度藝術性排列**
- **一個完整的新鮮{{fruit_1}}，帶有符合該水果特徵的自然皮膚質感**
- **排版：** "Natural Packaging / 自然な包裝"
- **標語：** "The skin is the package / 皮膚が包裝である"
- **細節標註指向符合水果特徵的皮膚紋理細節**

**設計原則：** 充足的留白，不對稱平衡，侘寂美學，無印良品/則武編輯級極簡主義
**色彩調色板：** 符合{{fruit_1}}特徵的色調，純白背景，果肉的特徵顏色作為點綴
**攝影：** 柔和擴散的影棚燈光，超清晰的微距細節展現符合水果特徵的紋理，照片級真實渲染
**關鍵：** {{fruit_1}}皮膚包裝必須看起來極其真實——實際的有機紋理，完全符合該水果的自然特徵，包括其特有的質感、顏色和細節，絕非塑料

16:9寬屏，高端日式產品海報，畫廊級品質`,
  en: `### Premium Japanese-style Product Poster (16:9 Landscape)

Premium Japanese-style product poster in 16:9 landscape format, editorial design showcasing {{fruit_1}} juice skin packaging concept with sophisticated visual storytelling:

**LEFT SIDE (40% of canvas):**
- **Hero product:** One large {{fruit_1}} juice skin package displayed vertically with dramatic soft lighting, showing ultra-realistic {{fruit_1}} peel texture wrapped around rectangular container, skin texture that matches the characteristic features of {{fruit_1}}, covering entire surface, with natural texture, color and detail variations specific to this fruit, looks exactly like real {{fruit_1}} skin stretched over package
- **Below:** One cross-sectioned fresh {{fruit_1}} showing flesh texture that matches the characteristic features of {{fruit_1}}, displaying its unique internal structure and color
- **Japanese typography vertically aligned:** "{{fruit_1}}スキン" ({{fruit_1}} Skin) in elegant thin gothic font
- **Subtitle:** "果汁皮膚 / {{fruit_1}}" in refined style
- **Small design philosophy text in Japanese**

**CENTER (30% of canvas):**
- **Generous white negative space (Ma - 間)**
- **Minimal geometric elements:** delicate thin lines
- **Floating text:** "自然な素材" (natural materials)
- **Subtle minimalist brand mark**
- **Very subtle {{fruit_1}} characteristic texture pattern in background (low opacity)**

**RIGHT SIDE (30% of canvas):**
- **Two {{fruit_1}} juice skin packages arranged artistically at different angles and heights**
- **One whole fresh {{fruit_1}} with natural skin texture that matches the characteristic features of this fruit**
- **Typography:** "Natural Packaging / 自然な包裝"
- **Tagline:** "The skin is the package / 皮膚が包裝である"
- **Detail callouts pointing to skin texture details that match the fruit's characteristics**

**DESIGN PRINCIPLES:** Abundant white space, asymmetrical balance, Wabi-sabi aesthetic, Muji/Noritake editorial minimalism
**COLOR PALETTE:** tones that match {{fruit_1}} characteristics, pure white background, characteristic flesh color as accent
**PHOTOGRAPHY:** Soft diffused studio lighting, ultra-sharp macro details showing texture that matches the fruit's characteristics, photorealistic rendering
**CRITICAL:** The {{fruit_1}} skin packaging must look incredibly realistic - actual organic texture that fully matches the natural characteristics of this fruit, including its unique texture, color and details, NOT plastic

16:9 widescreen, high-end Japanese product poster, gallery quality`
};

export const TEMPLATE_LUXURY_EDITORIAL = {
  "zh-tw": `### 進階時裝編輯部人像

使用上傳的參考圖作為同一位{{subject}}。嚴格保持身份：相同的面部結構、膚色、髮型。無性別轉換。

**姿態與構圖：**
四分之三背影。背部部分朝向鏡頭，軀幹稍微向左傾斜。頭部輕輕向右轉動，露出乾淨的側臉。眼睛輕輕向下看或閉上。肩膀放鬆。露背是主要的視覺焦點。

**服裝：**
{{clothing}}。深V露背，帶有優雅的垂墜感。啞光面料，無光澤，無閃粉，無婚禮元素。

**配飾：**
精美小巧的耳環。{{jewelry_style}}，帶有微妙的寶石細節，沿著脊柱垂下。

**花卉：**
{{flower_type}}，拿在右肩上方。花朵部分重疊肩膀，營造出層次感的時尚遮擋效果。

**攝影：**
平視或略高於肩膀高度。85mm人像鏡頭質感。淺景深，壓縮透視。無廣角畸變。

**燈光：**
{{lighting}}。主光來自左上方，照亮側臉和上背部。微妙的補光展現皮膚紋理。非常柔和的輪廓光勾勒出裙子和花朵。低對比度，平滑的色調過渡。

**背景：**
{{background_style}}。無環境，無道具，無紋理。

**風格：**
奢侈時尚雜誌美學。優雅、剋制、永恆。自然精緻的皮膚紋理，不過度磨皮。`,
  en: `### High-Fashion Luxury Editorial Portrait

Use the uploaded reference image as the same {{subject}}. Preserve identity strictly: same face structure, skin tone, hairstyle. No gender swap.

**POSE & COMPOSITION:**
Three-quarter back view. Back partially facing camera, torso angled slightly left. Head gently turned to the right, revealing a clean side profile. Eyes softly lowered or closed. Shoulders relaxed. The open back is the main visual focus.

**WARDROBE:**
{{clothing}}. Deep V open back with elegant drape. Matte fabric, no shine, no glitter, no bridal elements.

**ACCESSORIES:**
Small delicate earrings. {{jewelry_style}} with subtle gemstone details resting along the spine.

**FLOWERS:**
{{flower_type}} held over the right shoulder. The flowers partially overlap the shoulder, creating layered fashion blocking.

**CAMERA:**
Eye-level to slightly above shoulder height. 85mm portrait lens look. Shallow depth of field, compressed perspective. No wide-angle distortion.

**LIGHTING:**
{{lighting}}. Key light from upper-left, illuminating side face and upper back. Subtle fill light for skin texture. Very soft rim light outlining dress and flowers. Low contrast, smooth tonal transitions.

**BACKGROUND:**
{{background_style}}. No environment, no props, no texture.

**STYLE:**
Luxury fashion magazine aesthetic. Elegant, restrained, timeless. Natural refined skin texture, not over-smoothed.`
};

export const TEMPLATE_PIXAR_DECONSTRUCTION = {
  "zh-tw": `### 角色本質·藝術拆解升級版

**核心任務：** 創作一張電影級 3D {{render_style}} 風格的角色拆解海報。將 {{subject}} 轉換為風格化寫實的動畫角色。

**📷 角色與模式：**
- **角色模式：** {{character_type_pixar}}。根據參考圖高度一致還原身份、面部結構與氣質。

**📷 物品佈局 (Item Layout)：**
採用 {{item_layout_pixar}}，總物品數 30-36 件，圍繞角色有序排列。
- **分類1：時尚穿搭 (Fashion Atelier)** - {{fashion_parts}}。要求全部分離懸浮，展現精細材質。
- **分類2：美妝個護 (Beauty Collection)** - {{beauty_items}}。展現玻璃通透感與液體折射。
- **分類3：數碼生活 (Modern Essentials)** - {{digital_items}}。展現金屬與玻璃的 PBR 材質。
- **分類4：個人愛好 (Luxury & Hobbies)** - {{luxury_hobby_items}}。寶石需有色散效果。

**📷 技術規格 (Technical Specs)：**
- **爆炸檢視：** 使用優雅的虛線/實線連線懸浮部件，帶有 01-36 的圓形編號標記。
- **設計元素：** 包含材質樣本微距特寫、測量標尺、屬性雷達圖。
- **標題設計：** 主標題 "📷 角色拆解藝術 · THE ART OF DECONSTRUCTION 📷"，副標題 "角色本質·藝術拆解 / Character Essence Unveiled"。
- **色調方案：** {{theme_pixar}}。
- **畫質渲染：** 4K 分辨率，路徑追蹤渲染，PBR 材質流程，極致的毛髮與皮膚細節。

{{ratio}}`,
  en: `### Character Essence Unveiled Upgrade Version

**CORE TASK:** Create a cinematic 3D {{render_style}} style character deconstruction poster. Transform {{subject}} into a stylized realistic animated character.

**📷 CHARACTER & MODE:**
- **Character Mode:** {{character_type_pixar}}. Strictly maintain identity, facial structure, and aura based on the reference image.

**📷 ITEM LAYOUT:**
Using {{item_layout_pixar}}, a total of 30-36 items arranged orderly around the character.
- **Category 1: Fashion Atelier** - {{fashion_parts}}. All parts suspended and separated, showing fine material textures.
- **Category 2: Beauty Collection** - {{beauty_items}}. Showing glass transparency and liquid refraction.
- **Category 3: Modern Essentials** - {{digital_items}}. Showing PBR materials of metal and glass.
- **Category 4: Luxury & Hobbies** - {{luxury_hobby_items}}. Gemstones must have dispersion effects.

**📷 TECHNICAL SPECIFICATIONS:**
- **Exploded View:** Use elegant dashed/solid lines to connect floating parts, with circular numbered tags 01-36.
- **Design Elements:** Includes macro material samples, measurement rulers, and attribute radar charts.
- **Typography:** Main title "📷 THE ART OF DECONSTRUCTION 📷", subtitle "Character Essence Unveiled".
- **Color Scheme:** {{theme_pixar}}.
- **Rendering:** 4K resolution, path-traced rendering, PBR material workflow, extreme hair and skin details.

{{ratio}}`
};

export const TEMPLATE_STREET_DIALOGUE = {
  "zh-tw": `### 街頭的自我“對話”

1. **核心主題與風格：** 一張具有深刻故事性和極佳攝影質感的街頭攝影人像作品，捕捉“自我對話”的哲學瞬間。採用自然光影，呈現電影級敘事感和動態模糊藝術效果。
2. **場景與背景地點：** {{building_cluster}}。時間與光影：{{lighting_atmosphere}}。光線聚焦於中心人物。氛圍：忙碌、疏離，充滿動態與靜謐的對比。
3. **核心人物描述位置與狀態：** 位於畫面正中央，靜止站立，神態若有所思或平靜凝視鏡頭，與周圍環境的匆忙形成鮮明對比。著裝：{{clothing}}，面部與上傳圖片高度一致
4. **周邊人群描述（關鍵敘事元素）身份與著裝：** 所有路過行人都是核心人物的“不同自我”，身著代表其社會角色的服裝：周圍人物面部需要保持與上傳圖片的高度一致，眾多不同著裝的“我”在核心人物周圍穿梭，周邊人物快速行動，產生了較大的動態模糊，周邊人物全部有行動產生的殘影，極大的動態模糊和視覺殘留，與核心人物的靜態形成了鮮明對比，周邊人物與核心人物都是一樣的面孔和人物，不要新增其他無關人物，周邊人物需要與核心人物有準確的前後關係。
5. **攝影技術與構圖鏡頭與景深：** {{lens_param}}，偏向與人物特寫，較大的景深。核心人物面部和上身清晰銳利，前景和背景（包括動態模糊的人群和街頭環境）適度虛化。半身像為主構圖：中心構圖，核心人物類似半身像，處畫面中心較大位置。相機視角稍稍高出人物並微微向下俯視，只有核心人物抬頭看向鏡頭，{{ratio}}。
6. **畫質與色調：** 高分辨率，細膩的膠片質感，輕微顆粒感。色調以暖橙色和深藍色陰影為主，色彩鮮明但有層次。
7. **情緒與故事：** 傳遞出孤獨、內省、身份多元性與內心對話的複雜情感。畫面在動態中凝結了一個安靜的哲學瞬間`,
  en: `### Street Self-Dialogue

1. **CORE THEME & STYLE:** A deeply storytelling street photography portrait capturing a philosophical moment of "self-dialogue." Uses natural lighting, cinematic narrative feel, and motion blur artistic effects.
2. **SCENE & BACKGROUND:** {{building_cluster}}. Time & Lighting: {{lighting_atmosphere}}. Light focused on the central character. Atmosphere: Busy, alienated, filled with contrast between dynamics and tranquility.
3. **CENTRAL CHARACTER:** Located in the center, standing still, with a pensive expression or calmly staring at the camera, forming a sharp contrast with the rush of the surrounding environment. Wardrobe: {{clothing}}, facial features highly consistent with the uploaded image.
4. **SURROUNDING CROWD (KEY NARRATIVE ELEMENT):** All passing pedestrians are "different selves" of the central character, wearing clothes representing their social roles: surrounding characters' faces must remain highly consistent with the uploaded image. Numerous "selves" in different outfits weave around the central character. Surrounding characters move rapidly, creating significant motion blur and visual trailing, contrasting with the static nature of the central character. Surrounding characters and the central character share the same face and identity—do not add irrelevant people. Surrounding characters need accurate spatial relationships (front/back) with the central character.
5. **PHOTOGRAPHY & COMPOSITION:** {{lens_param}}, leaning towards character close-up with larger depth of field. Central character's face and upper body are sharp and clear, while foreground and background (including motion-blurred crowd and street environment) are moderately blurred. Composition: Central composition, half-body style, occupying a large portion of the center. Camera angle slightly above the character looking slightly downward, only the central character looks up at the camera, {{ratio}}.
6. **QUALITY & TONE:** High resolution, delicate film texture, slight grain. Tones dominated by warm oranges and deep blue shadows, vivid but layered colors.
7. **EMOTION & STORY:** Conveys feelings of loneliness, introspection, identity multiplicity, and the complexity of inner dialogue. The image freezes a quiet philosophical moment within dynamics.`
};

export const TEMPLATE_FASHION_FOCUS = {
  "zh-tw": `### 高端時尚雜誌封面 (Fashion Magazine Cover)
一張高端時尚雜誌封面。人物為{{character_originality}}，氣質自信前衛，身體張力強，動態姿態，直視鏡頭。

**視覺核心:**
- **服飾:** {{clothing}}，現代編輯感穿搭。
- **動作:** 模特雙手比起“取景框”手勢，彷彿與一個矩形選中框有互動，選中框覆蓋臉部和肩部。
- **規則:** 只有選中框內部清晰且為自然彩色；選中框外完全灰度且強像素化（Pixelated），無任何顏色或清晰區域。

**攝影與光影:**
- **視角:** 略低機位仰拍（Low-angle shot）。
- **燈光:** 柔和漫射棚拍光。

**版式設計 (Typography):**
- **頂部:** 居中粗體大寫扁寬型無襯線標題“FOCUS”，上方小字“DECEMBER 2025”；標題左下“VOL + 隨機兩位數”。
- **左下角:** 文字塊（簡短時尚自信標題、短段落、條形碼）。
- **右側:** “FASHION INTERVIEW”；右下角襯線體小號“THE EDIT”及大號“01-09的隨機數位”。
- **層級:** 模特對標題有遮擋疊加，前後景關係分明，乾淨現代。
- **顏色:** 字體均為白色，蒙太奇風格，文字與圖像形成強烈對比。

**規格:**
- **畫幅:** {{ratio}}`,
  en: `### High-end Fashion Magazine Cover - FOCUS
A high-end fashion magazine cover. The character is {{character_originality}}, with a confident and avant-garde aura, strong body tension, dynamic pose, staring straight at the camera.

**Visual Core:**
- **Wardrobe:** {{clothing}}, modern editorial styling.
- **Action:** The model's hands form a "viewfinder" gesture, as if interacting with a rectangular selection box that covers the face and shoulders.
- **Rule:** Only the area inside the selection box is sharp and in natural color; the area outside the box is entirely grayscale and heavily pixelated, with no color or clear regions.

**Photography & Lighting:**
- **Angle:** Low-angle shot looking up.
- **Lighting:** Soft diffused studio lighting.

**Layout & Typography:**
- **Top:** Centered bold uppercase wide sans-serif title "FOCUS", with "DECEMBER 2025" in small text above it; "VOL + random 2 digits" at the bottom left of the title.
- **Bottom Left:** Text block (short confident fashion title, short paragraph, barcode).
- **Right:** "FASHION INTERVIEW"; "THE EDIT" in small serif font and a "random 01-09 digit" in large font at the bottom right.
- **Layering:** The model overlaps/occludes the title, creating clear depth and a clean, modern look.
- **Color:** All fonts are white, in a montage style, creating a strong contrast between text and image.

**Specifications:**
- **Aspect Ratio:** {{ratio}}`
};

export const TEMPLATE_CITY_GLIMPSE = {
  "zh-tw": `### 都市一瞥 (City Glimpse)
一種合適的藝術工具（例如：{{art_tool}}），彷彿正處於創作之中，從左下角向右上角勾勒出一條精緻、優雅的曲線。

**視覺核心:**
- **筆觸景觀:** 筆觸之中包含著名的 {{city_name_1}} 地標的微縮景觀：精選的一組標誌性地點，融合當地特有的歷史與現代建築、自然元素以及城市生活氣息。
- **藝術風格:** 整體風格結合了 {{art_style_1}} 與學院派海報設計：多樣化的筆觸與痕跡營造出三維空間感，呈現出立體的微縮景觀與淺浮雕質感。
- **色彩:** {{dominant_colors}} 為主色調，其間點綴傳統的 {{city_name_1}} 美學元素，並與現代城市天際線相互交織。

**構圖與背景:**
- **視角:** 畫面為極簡的俯視視角，主體筆觸之外保留大面積留白。
- **背景:** 具有紋理的紙張（高品質纖維質感），色調明亮、乾淨、清新（例如：{{background_color_clean}}），與畫面主體形成清晰對比，營造純淨感。
- **構圖要求:** 繪畫工具的筆尖應在筆觸末端（右上角）停住，筆觸之外保留乾淨的留白；微縮景觀僅存在於筆觸內部，細節密集但不顯雜亂。

**大師級排版 (Typography):**
- **主標題:** “{{city_name_1}}”（與繪畫風格美學相匹配的藝術字體，極具吸引力，高對比度，作為核心視覺層級）。
- **副標題:** “{{city_glimpse_subtitle}}”（在風格上與主標題及繪畫肌理相互呼應的進階排版）。
- **裝飾文案:** 全部採用與 {{art_style_1}} 融合的字體風格，通過分段形成節奏與層級，與主標題呼應。

**規格:**
- **畫質:** 高細節度、超寫實效果、HDR，以及 8K 分辨率。
- **畫幅比例:** {{ratio}}`,
  en: `### City Glimpse - Urban Miniature
A suitable artistic tool (e.g., {{art_tool}}), as if in the middle of creation, sketching a delicate, elegant curve from the bottom left to the top right.

**Visual Core:**
- **Stroke Landscape:** Within the brushstroke lies a miniature landscape of famous {{city_name}} landmarks: a curated set of iconic locations, blending local history, modern architecture, natural elements, and urban life.
- **Art Style:** The overall style combines {{art_style}} with academic poster design: diverse brushstrokes and marks create a 3D sense of space, presenting a three-dimensional miniature landscape and low-relief texture.
- **Color:** {{dominant_colors}} as the dominant tones, interspersed with traditional {{city_name}} aesthetic elements and intertwined with the modern city skyline.

**Composition & Background:**
- **Perspective:** Minimalist top-down view, with large areas of negative space outside the main stroke.
- **Background:** Textured high-quality fiber paper, bright and clean tones (e.g., {{background_color_clean}}), creating a clear contrast with the main subject and fostering a sense of purity.
- **Details:** The tip of the art tool pauses at the end of the stroke (top right), with clean negative space beyond the stroke; the miniature landscape exists only inside the stroke, densely detailed but not cluttered.

**Master-level Typography:**
- **Main Title:** "{{city_name}}" in an artistic font matching the painting style aesthetics, highly attractive with high contrast as the core visual hierarchy.
- **Subtitle:** "{{city_glimpse_subtitle}}" in sophisticated typography that echoes the main title and painting texture.
- **Decorative Text:** All using font styles integrated with {{art_style}}, creating rhythm and hierarchy through segmentation, echoing the main title.

**Specifications:**
- **Quality:** High detail, hyper-realistic effect, HDR, 8K resolution.
- **Aspect Ratio:** {{ratio}}`
};

export const TEMPLATE_MULTIPLE_SELVES_INDOOR = {
  "zh-tw": `### 多個自我“對話” (室內聚會版)

**1. 核心主題與風格:** 一張具有深刻故事性和極佳攝影質感的攝影人像作品，捕捉“自我對話”的哲學瞬間。呈現電影級敘事感。

**2. 場景與背景地點:** 現代風格的住宅室內。呈現一群樣貌完全一樣的人在室內的不同行為，如同在一場奇幻的節日聚會。

**3. 核心人物 (視覺中心):** 位於客廳畫面正中央，靜止站立，神態若有所思，眼神平靜地凝視鏡頭。這種絕對的靜止與周圍環境的匆忙形成鮮明對比。著裝：{{clothing}}，面部特徵與上傳圖片高度一致。

**4. 周邊人群 (不同維度的自我):** 房間內還有 5 個面貌與核心人物完全一致的“自我”，他們身著不同的服裝（與其當前動作匹配），正在進行以下活動：
- 人物 A 正在 {{action_status}}；
- 人物 B 正在 {{action_status}}；
- 人物 C 正在 {{action_status}}；
- 人物 D 正在 {{action_status}}；
- 人物 E 正在 {{action_status}}。
所有的人都在客廳中各司其職又互不干擾，氛圍呈現出一種節日聚會般的荒誕與歡愉。

**5. 細節與構圖:**
- **攝影規格:** 使用 {{lens_param}} 拍攝。核心人物面部和上身清晰銳利，前景和背景人物及物體適度虛化，營造出極佳的景深感。
- **環境細節:** 客廳牆上掛著一個精美的裝飾性木雕藝術品，雕刻著“2025”字樣，其中數位“5”呈現出搖搖欲墜、即將掉落的狀態。

**6. 畫質與色調:** 高分辨率，細膩的膠片質感，帶有輕微的顆粒感。色調以溫暖的橙色調（暖色光）和深藍色陰影（對比色）為主，色彩鮮明且富有層次。

**7. 情緒與故事:** 傳遞出一種孤獨中帶著豐盈、內省中伴隨身份多元性的複雜情感。畫面在動態的忙碌中凝結了一個安靜的哲學思考瞬間。`,
  en: `### Multiple Self-Dialogue (Indoor Party Edition)

**1. Core Theme & Style:** A storytelling photography portrait with exceptional quality, capturing a philosophical moment of "self-dialogue." It presents a cinematic narrative feel.

**2. Scene & Location:** A modern residential interior. It features a group of identical-looking people engaging in various activities within the room, resembling a fantastical holiday party.

**3. Central Character (Visual Anchor):** Located in the exact center of the living room, standing perfectly still with a pensive expression, eyes calmly staring at the camera. This absolute stillness forms a sharp contrast with the surrounding hustle. Wardrobe: {{clothing}}, facial features strictly consistent with the uploaded image.

**4. Surrounding Figures (Multiple Selves):** There are 5 other "selves" in the room, identical in appearance to the central character, wearing different outfits (matching their actions) and engaging in the following:
- Person A is {{action_status}};
- Person B is {{action_status}};
- Person C is {{action_status}};
- Person D is {{action_status}};
- Person E is {{action_status}}.
Everyone is busy with their own task in the living room without interfering with each other, creating an atmosphere of absurd holiday-like joy.

**5. Details & Composition:**
- **Photography Specs:** Shot with {{lens_param}}. The central character's face and upper body are sharp and clear, while foreground/background figures and objects are moderately blurred to create excellent depth of field.
- **Environmental Detail:** A decorative wooden carving hangs on the wall, reading "2025," where the digit "5" appears wobbly and on the verge of falling off.

**6. Quality & Tone:** High resolution, fine film texture with slight grain. The color palette is dominated by warm oranges (warm lighting) and deep blue shadows (complementary colors), providing vivid and layered colors.

**7. Emotion & Story:** Conveys a complex sense of identity multiplicity and introspection within solitude. The image freezes a quiet philosophical moment amidst dynamic activity.`
};

export const TEMPLATE_CHARACTER_SHEET_ART = {
  "zh-tw": `### 角色設定稿 (Character Sheet)
**核心內容:** 角色設定稿，基於 {{character_originality}}。

**構圖:** 多角度視角 (Multiple angles)，豐富的表情變化 (Expressive facial variations)。

**媒介:** {{art_tool}}。

**背景:** {{background_style}}。

**風格:** {{draw_style}}，線條利落 (Sharp linework)。

**色彩:** 柔和淡彩色 (Soft pastel color palette)，高對比度 (High contrast)。`,
  en: `### Character Sheet
  **Core Content:** Character Sheet, based on {{character_originality}}.
  
  **Composition:** Multiple angles, expressive facial variations.
  
  **Medium:** {{art_tool}}.
  
  **Background:** {{background_style}}.
  
  **Style:** {{draw_style}}, sharp linework.
  
  **Color:** Soft pastel color palette, high contrast.`
};

export const TEMPLATE_UNDERWATER_CAUSTICS = {
  "zh-tw": `### 創意水下攝影：焦散之美 (Underwater Caustics)

**主體設定:**
使用上傳圖片中的人物作為{{subject}}，嚴格保持面部特徵的一致性。
人物穿著一件{{clothing}}，由於在水下浸溼，衣物呈現出若隱若現的半透明質感。

**動作與場景:**
人物沉浸在{{underwater_color}}的透明水下，姿態舒展，微微抬頭仰望上方。
身體周圍環繞著許多{{creatures}}，營造出自然的生態律動感。

**光影藝術 (Caustics):**
核心視覺效果為強烈的**焦散光影（Caustics）**：陽光穿過起伏的水面，在人物的面部和衣服上投射出波動的金色光紋。
光線在水中形成明顯的**丁達爾效應 (Tyndall Effect)**，光柱從水面直插水底，增強空間深度。

**氛圍與畫質:**
- **氛圍:** 夢幻、超現實、靜謐、電影質感。
- **畫質:** 照片級真實，8K分辨率，極高細節，捕捉每一處水花和氣泡。

**規格:**
- **畫幅:** {{ratio}}`,
  en: `### Creative Underwater Photography: Beauty of Caustics

**Subject:**
Use the character from the uploaded image as {{subject}}, strictly maintaining facial consistency.
The character is wearing a {{clothing}}, which appears semi-transparent due to being wet underwater.

**Action & Scene:**
The character is immersed in {{underwater_color}}, relaxed, and looking up slightly towards the surface.
Surrounded by many {{creatures}}, creating a natural ecological flow.

**Lighting (Caustics):**
The core visual effect is strong **Caustics**: sunlight passing through the wavy water surface, casting undulating light patterns onto the character's face and clothes.
Beams of light create a distinct **Tyndall Effect**, piercing through the water to enhance spatial depth.

**Atmosphere & Quality:**
- **Aura:** Dreamy, surreal, quiet, cinematic.
- **Quality:** Photorealistic, 8K resolution, high detail, capturing every droplet and bubble.

**Specifications:**
- **Ratio:** {{ratio}}`
};

export const TEMPLATE_DAILY_SNAPSHOT = {
  "zh-tw": `### 日常生活快照 (Daily Snapshot)

**場景設定:**
{{background_scene}}。

**攝影風格:**
{{lighting}}。畫面沒有經過精心的構圖或布光，呈現出最真實的記錄感。

**人物特徵:**
主體為{{subject}}，採用{{clothing}}。{{accessory_glasses}}。

**動態與構圖:**
{{action_status}}。採用{{camera_angle}}。

**服飾風味:**
{{underwear_style}}。

**畫幅:**
{{ratio}}`,
  en: `### Daily Snapshot

**Scene Setting:**
{{background_scene}}.

**Photography Style:**
{{lighting}}. Not carefully composed or lit, presenting an authentic sense of recording.

**Character Features:**
The subject is {{subject}}, with a {{clothing}}. {{accessory_glasses}}.

**Action & Composition:**
{{action_status}}. Using an {{camera_angle}}.

**Outfit Style:**
{{underwear_style}}.

**Aspect Ratio:**
{{ratio}}`
};

export const TEMPLATE_FINE_ART_GARDEN = {
  "zh-tw": `### 唯美藝術花園人像 (Fine-art Garden Portrait)

**核心目標:**
創作一張充滿浪漫、空靈氛圍的花園藝術人像。

**人物設定:**
主體為{{subject}}。她留著{{hair_style}}，神情平靜內斂，帶著淡淡的憂鬱。{{action_status}}。她穿著{{clothing}}。

**環境與氛圍:**
{{background_scene}}。畫面中充滿了繁茂的開花植物和柔和的綠植。{{flower_type}}，被微風捕捉到半空中的動態。

**構圖與攝影:**
採用{{camera_angle}}。優雅的中心構圖，極淺的景深，背景是奶油般細膩的虛化效果。使用{{lens_param}}拍攝。

**光影與色彩:**
{{lighting}}。色調以柔和的綠色、青色、淡桃色和白色為主。呈現出一種繪畫般的、低飽和度的浪漫色調。

**藝術風格:**
{{role}}。追求極高的織物紋理和皮膚質感。

**畫幅:**
{{ratio}}`,
  en: `### Dreamy Fine-art Garden Portrait

**Objective:**
Create a dreamy fine-art portrait with a romantic, ethereal garden atmosphere.

**Subject Details:**
The subject is {{subject}}. She has {{hair_style}}, with a calm, introspective, slightly melancholic expression. {{action_status}}. She is wearing {{clothing}}.

**Scene & Atmosphere:**
{{background_scene}}. The frame is filled with abundant flowering plants and soft greenery. {{flower_type}}, caught mid-motion by a gentle breeze.

**Composition & Photography:**
A {{camera_angle}}. Elegant, centered composition with a shallow depth of field and creamy bokeh. Shot with a {{lens_param}}.

**Lighting & Color:**
{{lighting}}. The color palette includes muted greens, soft teals, and pale peach/white accents. Painterly, desaturated, romantic tones.

**Art Direction:**
{{role}}. Ultra-detailed fabric and natural skin texture.

**Aspect Ratio:**
{{ratio}}`
};

export const TEMPLATE_SURVEILLANCE_STILL = {
  "zh-tw": `### 隱藏攝像機 / 監控畫面 (Surveillance Still)

**相機設定:**
{{camera_angle}}。隱藏拍攝視角，具有{{lighting}}。

**人物主體:**
主體為{{character_originality}}。留著{{hair_style}}。{{action_status}}。她身穿{{clothing}}。

**環境背景:**
{{background_scene}}。氛圍安靜、私密且親密。

**智慧識別 (Overlay):**
- **臉部鎖定:** 紅色半透明矩形框精準鎖定面部，帶有交叉瞄準線。
- **局部特寫:** 右上角浮動放大窗口，4倍變焦特寫眼睛細節，顯示抓拍的高光。
- **狀態指示:** 螢幕邊緣顯示紅點 REC 指示器及警告文本：“ALERT: SUBJECT AWARE / EYE CONTACT DETECTED”。
- **時間戳記:** 角落帶有復古膠片時間戳記 “[REC] 23:47:32 | CAM 04 - DRESSING RM”。

**構圖與氛圍:**
主體位於畫面中心，目光直視鏡頭。呈現出一種脆弱、緊張且極具臨場感的瞬間。

**畫幅:**
{{ratio}}`,
  en: `### Surveillance Still / Hidden Camera Footage

**Camera Settings:**
{{camera_angle}}. Hidden perspective with {{lighting}}.

**Subject:**
The subject is {{character_originality}}, with {{hair_style}}. {{action_status}}. She is wearing {{clothing}}.

**Environment:**
{{background_scene}}. The atmosphere is quiet, private, and intimate.

**Face Detection & Overlay:**
- **Face Lock:** A faint red rectangular bounding box with crosshair locked intensely on her face.
- **Zoom Inset:** Floating top-right zoom-in inset (4.0x ratio), focusing on her eyes with clear catchlight.
- **Alert Text:** "ALERT: SUBJECT AWARE / EYE CONTACT DETECTED" displayed on screen.
- **Rec Indicator:** Red 'REC' indicator and vintage timestamp "[REC] 23:47:32 | CAM 04 - DRESSING RM" in the corner.

**Composition:**
Subject centered, direct gaze into the lens. The tone is vulnerable, tense, and surprising.

**Aspect Ratio:**
{{ratio}}`
};

export const TEMPLATE_CUTE_DYNAMIC_PORTRAIT = {
  "zh-tw": `### 可愛動態人像

**房間環境**:
{{room_style_cute}}

**角色**:
20歲前半的日本女大學生。

**攝影參數**:
- 極端的地板級別低角度蟲視視角
- {{lens_type}}的畸變讓她看起來很巨大的構圖
- {{cute_pose_dynamic}}

**服裝**:
{{cute_outfit}}，隨著動作自然搖擺。

**道具**:
右手拿著和房間裡一樣的可愛動物絨毛玩具（粉色或白色的熊或兔子），自然地輕輕遮擋裙子後面的姿勢。完全看不到內衣。

**光影**:
溫暖的室內照明和窗戶射入的自然光，妖精燈的柔和光輝，對肌膚友好的高光。

**氛圍**:
充滿自信、滿童心、可愛又有點性感、動態的室內肖像照。`,

  en: `### Cute Dynamic Portrait

**Room Environment**:
{{room_style_cute}}

**Character**:
Japanese female college student, early 20s.

**Photography Parameters**:
- Extreme floor-level low-angle worm's-eye view
- Composition with {{lens_type}} distortion making her appear massive
- {{cute_pose_dynamic}}

**Outfit**:
{{cute_outfit}}, swaying naturally with movement.

**Prop**:
Holding a small cute animal plushie (pink or white bear/rabbit) in right hand, naturally posing to lightly hide the back of skirt. Underwear absolutely not visible.

**Lighting**:
Warm indoor lighting and natural light from window, soft glow of fairy lights, gentle highlights on skin.

**Atmosphere**:
Confident, full of playfulness, cute yet slightly sexy, dynamic indoor portrait.

**Note**:
Copyright characters and existing anime styles are strictly prohibited.`
};

export const TEMPLATE_FITNESS_SELFIE = {
  "zh-tw": `### 健身自拍場景 (Fitness Selfie)

**核心氛圍:**
一張原始真實的鏡子自拍快照，在繁忙的健身房用機頂閃光燈直閃拍攝。

**主體人物:**
一位年輕漂亮的江南女子，擁有"網紅"臉龐和溫婉的東方魅力，呈現{{physical_state}}。她正在做{{fitness_pose}}，側身對著鏡子，手持智慧手機。

**服裝與外觀:**
穿著{{fitness_clothing}}。頭髮{{sweat_appearance}}，臉頰泛紅，顯示剛完成運動的明顯痕跡。

**面部表情:**
{{facial_expression}}

**場景細節:**
{{fitness_location}}

**拍照風格:**
{{selfie_style}}

**技術效果:**
照片具有明顯的{{photo_effect}}，營造出真實、不做擺拍的日常生活氛圍。

**規格:**
畫幅: {{ratio}} --niji 7`,
  en: `### Fitness Selfie Scene

**Core Atmosphere:**
A raw, candid mirror selfie snapshot taken in a busy gym with an on-camera flash firing.

**Subject:**
A young pretty Chinese Jiangnan woman with a "wanghong" face and gentle Eastern charm, with {{physical_state}}. She is in a {{fitness_pose}}, turned sideways to the mirror, holding a smartphone.

**Clothing & Appearance:**
Wearing {{fitness_clothing}}. Hair is {{sweat_appearance}}, and cheeks are flushed red, showing clear signs of a recent workout.

**Facial Expression:**
{{facial_expression}}

**Scene Details:**
{{fitness_location}}

**Selfie Style:**
{{selfie_style}}

**Technical Effects:**
The photo has noticeable {{photo_effect}}, creating an authentic, unposed daily life atmosphere.

**Specifications:**
Aspect Ratio: {{ratio}} --niji 7`
};

/**
 * 微縮場景模型
 */
export const TEMPLATE_MINIATURE_MODEL = {
  "zh-tw": `### 微縮場景模型

一個微縮場景模型，展現了渺小的 {{miniature_character}} 與一個超大的 {{giant_object}} 互動的場景。

誇張的比例對比、富有表現力的姿勢、電影級的光影效果。極其精細的道具、手工製作的逼真質感、微距鏡頭視角。

**畫幅比例**：{{ratio}}`,

  en: `### Miniature Scene Model

A miniature scene model showcasing a tiny {{miniature_character}} interacting with a giant {{giant_object}}.

Exaggerated scale contrast, expressive poses, cinematic lighting. Extremely detailed props, handmade realistic textures, macro lens perspective.

**Aspect Ratio**: {{ratio}}`
};

export const TEMPLATE_POP_MART_PLUSH = {
  "zh-tw": `### Pop Mart 盲盒風格絨毛玩具壁紙

一張垂直手機壁紙，展示一群可愛的擬人化馬絨毛玩具堆疊在 {{festive_archway}} 內。Pop Mart 盲盒風格，柔軟絨毛質感，C4D 渲染。

高度多樣化和有趣表情：{{plush_expression}}。

豐富多樣的獨特配飾和裝飾：{{cute_accessory}}。

色彩豐富、溫暖照明、超精細細節，可愛有趣的氛圍。`,

  en: `### Pop Mart Blind Box Style Plush Toys Wallpaper

A vertical phone wallpaper featuring a crowded group of cute anthropomorphic horse plush toys stacked inside a {{festive_archway}}. Pop Mart blind box style, soft fuzzy fur texture, C4D render.

Highly diverse and funny expressions: {{plush_expression}}.

Wide variety of unique accessories and decorations: {{cute_accessory}}.

Colorful, warm lighting, ultra-detailed, cute and playful vibe.`
};

export const TEMPLATE_3D_ISOMETRIC_DIORAMA = {
  "zh-tw": `### 3D等距透視模型展臺

一個乾淨、極簡的3D等距透視模型展臺，展示{{exhibition_type}}，特色是{{display_objects}}佈置在{{pod_structure}}內，微妙的光照點綴，光滑的地板表面，柔和的攝影棚燈光，逼真的材質，圓潤的邊緣，微型建築模型風格，高細節，中性背景。`,

  en: `### 3D Isometric Diorama

A clean, minimal 3D isometric diorama of a {{exhibition_type}}, featuring {{display_objects}} arranged within a {{pod_structure}}, subtle lighting accents, smooth floor surfaces, soft studio lighting, realistic materials, rounded edges, miniature architectural model style, high detail, neutral background.`
};

export const TEMPLATE_CHINESE_BRIDAL_PORTRAIT = {
  "zh-tw": `### 中國傳統新娘肖像攝影

一張傳統中式新娘肖像攝影作品。女性主體盤著髮髻，裝飾著{{bridal_hair_decoration}}，身穿{{traditional_bridal_attire}}，佩戴{{bridal_jewelry}}。

寫實的人體比例，平視視角，帶有紙剪裝飾前景的近距離肖像。

**核心材質**：光滑緞面質感、精緻紙剪紋理、光澤珍珠表面。

**光影氛圍**：柔和側光、柔和陰影、溫暖優雅的傳統中式喜慶氛圍。

**技術參數**：50mm鏡頭`,

  en: `### Chinese Traditional Bridal Portrait Photography

A traditional Chinese bridal portrait photograph. A woman with an updo hairstyle adorned with {{bridal_hair_decoration}}, wearing {{traditional_bridal_attire}} and {{bridal_jewelry}}.

Realistic human proportion, eye-level perspective, close-up portrait with paper-cut decorative foreground.

**Key Materials**: Smooth satin texture, delicate paper-cut texture, glossy pearl surface.

**Lighting & Atmosphere**: Soft side lighting, soft shadows, warm and elegant traditional Chinese festive atmosphere.

**Technical Parameters**: 50mm lens`
};

export const TEMPLATE_PREMIUM_FOOD_ADVERTISING = {
  "zh-tw": `### 高端食品廣告攝影

{{premium_food_subject}}，高端食品廣告，白色無縫背景，高調攝影棚燈光，懸浮堆疊構圖，飄浮的食品塊，散落著{{ingredient_bits}}，乾淨極簡佈局，表面清晰柔和陰影，超寫實，微距產品攝影，100mm鏡頭觀感，f/8清晰焦點，微妙紋理細節，編輯商業風格，8k分辨率。`,

  en: `{{premium_food_subject}}, premium food advertising, white seamless background, high key studio lighting, floating stacked composition, levitating pieces, {{ingredient_bits}} scattered, clean minimal layout, crisp soft shadow on surface, ultra realistic, macro product photography, 100mm lens look, f/8 sharp focus, subtle texture detail, editorial commercial, 8k`
};

export const TEMPLATE_FORBIDDEN_CITY_PHOENIX = {
  "zh-tw": `### 紫禁城雪夜人形鳳凰

在{{imperial_palace_scene}}中，一位"人形鳳凰"化身宮殿的靈魂。她頭戴{{phoenix_crown}}，身披{{flowing_garment}}，{{festive_props}}。

構圖上將華麗繁複的頭飾與流動的絲綢華服與身後輝煌的建築相呼應，形成強烈的視覺共鳴。背光在漫天飛雪中極大地增強了神話般的氛圍，營造出穿越時空、華美而莊嚴的夢幻意境。`,

  en: `### Forbidden City Snow Night Phoenix

In {{imperial_palace_scene}}, a "human phoenix" embodies the soul of the palace. She wears {{phoenix_crown}} and {{flowing_garment}}, {{festive_props}}.

The composition creates a strong visual resonance between the ornate headdress and flowing robes with the magnificent architecture behind. The backlight amidst falling snow greatly enhances the mythical atmosphere, creating a dreamlike artistic conception that transcends time and space with magnificence and solemnity.`
};

export const TEMPLATE_INTERIOR_RENDERING = {
  "zh-tw": `### 室內設計真實渲染

保持原圖視角和牆體結構，生成室內 {{room_type}} 真實渲染圖。進行合理的室內傢俱佈置與材質搭配，為室內天花板、牆面、地板分別賦予材質，整體呈現 {{interior_design_style}}。房間內外均進行真實感渲染。

包括 {{furniture_set}}，材質質感逼真，{{interior_lighting}}。整體畫面呈現出專業建築攝影的光線效果，具備 {{render_quality}} 的圖像細節。

**材質細節**:
- 天花板：{{ceiling_material}}
- 牆面：{{wall_material}}
- 地板：{{floor_material}}`,

  en: `### Interior Design Photorealistic Rendering

Maintaining the original perspective and wall structure, generate a realistic interior rendering of {{room_type}}. Perform reasonable interior furniture layout and material matching, assigning materials to the ceiling, walls, and floor respectively, presenting an overall {{interior_design_style}}. Both interior and exterior are rendered with realism.

Including {{furniture_set}}, with realistic material textures and {{interior_lighting}}. The overall image presents professional architectural photography lighting effects, with {{render_quality}} image details.

**Material Details**:
- Ceiling: {{ceiling_material}}
- Walls: {{wall_material}}
- Floor: {{floor_material}}`
};

export const TEMPLATE_ISOMETRIC_INTERIOR_SCENE = {
  "zh-tw": `### 等距視角室內場景

基於設計需求，創作一張isometric視角（等距軸測視角）的{{room_type}}室內場景圖像，無任何透視效果，保持視角和相機位置的一致性。包括建築的主體部分保持一致。

**房間狀態**: {{room_condition}}

**設計風格**: {{interior_design_style}}

**材質細節**:
- 地面：{{floor_material}}
- 牆面：{{wall_material}}

**技術要求**: 使用3D建模的材質質感和建模軟體常用的渲染效果，包括材質紋理效果、AO效果以及描邊效果（根據房間狀態選擇是否使用）。白色背景，Blender渲染質感。`,

  en: `### Isometric Interior Scene

Based on design requirements, create an isometric perspective (orthographic axonometric view) {{room_type}} interior scene image with no perspective effects, maintaining consistency in viewing angle and camera position. The main architectural elements remain consistent.

**Room Condition**: {{room_condition}}

**Design Style**: {{interior_design_style}}

**Material Details**:
- Floor: {{floor_material}}
- Walls: {{wall_material}}

**Technical Requirements**: Use 3D modeling material textures and common rendering software effects, including material texture effects, AO effects, and outline effects (selected based on room condition). White background, Blender rendering quality.`
};

export const TEMPLATE_PRODUCT_DESIGN_SPEC = {
  "zh-tw": `### 產品設計規範圖

**佈局**: 垂直 3:4 畫布，暖色調中性紙張背景

**上半部分 - 生活方式產品圖**:

一個 {{product_category}}，放置在 {{environment_style}} 中。

**環境細節**:
- {{lighting}}，柔和但高對比度的陰影
- 微妙的混凝土或石材地面
- 有紋理的石膏牆背景
- 周圍留有大量留白

**渲染風格**:
- 編輯式生活方式攝影
- 高真實感
- 暖色、柔和、高端的色調分級

**下半部分 - 技術規格面板**:

**技術繪圖** (左側和中部):
- {{drawing_style}}
- 正檢視、側檢視、四分之三剖面圖
- 正交投影
- 柔和的紅色或深棕色細技術線
- 最小的編輯式測量標註

**材料面板** (右側):
- 3-4 個符合產品調性的材質樣本
- 方形或矩形樣品
- 小型編輯式說明標記
- 技術但精緻的語調

**排版風格**:
- 最小編輯式
- 微妙的說明文字，無大標題
- 柔和黑色或深棕色

**整體美學**:
- 設計目錄 / 產品設計期刊氛圍
- 建築感、高端、寧靜
- 避免雜亂、鮮豔顏色、重度品牌化、過度裝飾的圖形

**約束**:
- 不改變產品設計
- 不發明新材料
- 除非參考圖中有，否則不新增徽標
- 繪圖中不使用透視扭曲`,

  en: `### Product Design Specification

**Layout**: Vertical 3:4 canvas, warm neutral paper background

**Top Section - Lifestyle Product Image**:

A {{product_category}} placed in {{environment_style}}.

**Environment Details**:
- {{lighting}}, soft but high-contrast shadows
- Subtle concrete or stone flooring
- Textured plaster wall background
- Generous whitespace around product

**Rendering Style**:
- Editorial lifestyle photography
- High realism
- Warm, muted, premium color grading

**Bottom Section - Technical Specification Panel**:

**Technical Drawings** (bottom left and center):
- {{drawing_style}}
- Front view, side view, three-quarter cutaway view
- Orthographic projection
- Muted red or sepia fine technical lines
- Minimal, editorial measurement callouts

**Materials Panel** (bottom right):
- 3-4 material swatches that match the product's aesthetic
- Square or rectangular samples
- Small editorial caption labels
- Technical but refined tone

**Typography**:
- Minimal editorial
- Subtle captions, no large headlines
- Soft black or dark brown

**Overall Aesthetic**:
- Design catalog / product design journal mood
- Architectural, premium, calm
- Avoid clutter, bold colors, heavy branding, overly decorative graphics

**Constraints**:
- Do not change product design
- Do not invent new materials
- No logos unless present in reference
- No perspective distortion in drawings`
};

export const TEMPLATE_CHARACTER_LINE_ART = {
  "zh-tw": `### 人物轉手繪插畫

將照片轉換為黑白線稿插畫，鋼筆墨水繪製風格。

**人物主體**: {{character_subject}}

**畫面視角**: {{portrait_view}}

**藝術風格**:
- {{line_art_style}}
- 粗輪廓線，高對比度
- 乾淨的線條，手繪外觀
- 圖形小說美學

**陰影技法**: {{shading_technique}}

**背景處理**: {{background_treatment}}

**整體效果**:
- 單色素描
- 黑白線稿插圖
- 漫畫書風格肖像
- 極簡主義，強調輪廓`,

  en: `### Convert to Character Line Art

Convert to black and white line art illustration, pen and ink drawing style.

**Character Subject**: {{character_subject}}

**Portrait View**: {{portrait_view}}

**Art Style**:
- {{line_art_style}}
- Bold outlines, high contrast
- Clean linework, hand-drawn appearance
- Graphic novel aesthetic

**Shading Technique**: {{shading_technique}}

**Background Treatment**: {{background_treatment}}

**Overall Effect**:
- Monochrome sketch
- Black and white line art illustration
- Comic book style portrait
- Minimalist, emphasizing outlines`
};

export const TEMPLATE_CLASSIC_GAME_REALISM = {
  "zh-tw": `### 經典遊戲真實化

以照片級真實感重新想象經典遊戲世界。

在一個圖像中，以攝影方式視覺化 {{classic_game}} 的角色、敵人和周圍世界的真實模樣。使圖像儘可能保持與遊戲的可識別性。

**視覺要求**:
- 照片級真實渲染
- 8位/16位遊戲美學的現實詮釋
- 標誌性遊戲元素的真實化呈現
- 保持原始遊戲色彩和氛圍的參考

**質量標準**:
- 高細節，電影級照明
- 真實材質和紋理
- 遊戲場景的精確重建`,

  en: `### Classic Game Realism

Photorealistic reimagining of classic game worlds.

In one image, photographically visualize what the characters, enemies, and surrounding world of {{classic_game}} would look like if it was real. Make this image as recognisable to the game as possible.

**Visual Requirements**:
- Photorealistic rendering
- Realistic interpretation of 8-bit/16-bit game aesthetics
- Realistic presentation of iconic game elements
- Reference to original game colors and atmosphere

**Quality Standards**:
- High detail, cinematic lighting
- Realistic materials and textures
- Accurate reconstruction of game scenes`
};

export const TEMPLATE_SCIENCE_PAPER_MODEL = {
  "zh-tw": `### 科學發現紙雕模型

將重大科學發現解構為立體紙雕裝置。

**輸入**: {{scientific_discovery}}

**解構科學為3個敘事要素**:

**模型（核心裝置）**:
- 識別代表理論的物理形狀
- 例如：DNA → 雙螺旋結構 | 相對論 → 彎曲重力網格/球體 | 微生物 → 顯微細胞 | 日心說 → 太陽系

**研究者（角色）**:
- 識別關鍵科學家
- 例如：沃森、克里克 & 富蘭克林 | 愛因斯坦 | 巴斯德 | 哥白尼

**資料（圖解）**:
- 識別筆記的視覺語言
- 例如：化學鍵、數學公式、生物草圖、軌道路徑

**容器（實驗記錄）**:
- 目標："科學立體"模型攝影
- 物體：一本巨大的古董皮革裝訂記錄
- 姿勢：書本直立，以嚴格的90度角打開（L形）
- 垂直頁面：作為黑板/圖解牆
- 水平頁面：作為實驗室地板

**雕塑（紙藝理論）**:
- 建構："模型"從書本中心裝訂處垂直升起
- 材質：模型完全由書本自有的紙張條構成
- 細節：紙條扭曲、折疊並連線形成結構（例如DNA的扭轉梯形）
- 高光：紙模型上微妙使用彩色墨水或鉛筆（紅、藍、黃）以區分部分（例如鹼基對或原子）

**敘事比例（科學家）**:
- 人物："研究者"的1:35比例微型人物站在水平頁面上
- 服裝：時代準確的服裝（例如1950年代實驗服、維多利亞西裝、文藝復興長袍）
- 動作：他們正在與巨大的紙模型互動——指向、用微小工具測量或持有微型剪貼板

**視覺效果**:
- 背景：模型後方的垂直頁面覆蓋著手繪墨水插圖和與發現相關的圖表
- 標題：頁面頂部手寫文本："[輸入] 的發現"
- 前景：地面頁面散佈著塗寫筆記、公式和簽名

**輸出**:
- 單張圖像，1:1縱橫比
- 微距攝影，"學術歷史"美學
- 高紋理保真度`,

  en: `### Scientific Discovery Paper Model

Deconstruct major scientific discoveries into 3D paper sculpture installations.

**Input**: {{scientific_discovery}}

**Deconstruct the science into 3 Narrative Assets**:

**Model (The Centerpiece)**:
- Identify the physical shape that represents the theory
- Examples: DNA → A Double Helix | Relativity → A Curved Gravity Grid/Sphere | Germs → A Microscopic Cell | Heliocentrism → The Solar System

**Researchers (The Cast)**:
- Identify the key scientists involved
- Examples: Watson, Crick & Franklin | Einstein | Pasteur | Copernicus

**Data (The Diagrams)**:
- Identify the visual language of the notes
- Examples: Chemical bonds, Mathematical formulas, Biological sketches, Orbital paths

**Container (The Lab Journal)**:
- Goal: "Scientific Pop-Up" Diorama Photography
- Object: A massive, antique Leather-Bound Journal
- Pose: The book stands upright, opened at a strict 90-degree angle (L-Shape)
- Vertical Page: Acts as the blackboard/diagram wall
- Horizontal Page: Acts as the laboratory floor

**Sculpture (The Paper Theory)**:
- Construction: The "Model" rises vertically from the center gutter of the book
- Material: The model is constructed entirely from Strips of the Book's Own Paper
- Detail: The paper strips are twisted, folded, and connected to form the structure (e.g., the twisting ladder of the DNA)
- Highlight: Subtle use of Colored Ink or Pencil (Red, Blue, Yellow) on the paper model to distinguish parts (e.g., base pairs or atoms)

**Narrative Scale (The Scientists)**:
- Figures: 1:35 Scale Miniature Figures of the "Researchers" stand on the horizontal page
- Attire: Period-accurate clothing (e.g., 1950s Lab Coats, Victorian Suits, Renaissance Robes)
- The Action: They are interacting with the giant Paper Model—pointing, measuring with tiny tools, or holding miniature clipboards

**Visual**:
- Background: The vertical page behind the model is covered in Hand-Drawn Ink Illustrations and diagrams relevant to the discovery
- Title: Handwritten text at the top of the page: "The Discovery of [Input]"
- Foreground: The floor page is scattered with scribbled notes, formulas, and signatures

**Output**:
- ONE image, 1:1 Aspect Ratio
- Macro Photography, "Academic History" aesthetic
- High Texture Fidelity`
};

/**
 * 可用的樣板標記
 */
export const TEMPLATE_TAGS = [
  "建築",
  "人物",
  "攝影",
  "產品",
  "圖表",
  "卡通",
  "寵物",
  "遊戲",
  "創意",
  "節日",
  "動作",
  "影視",
  "紀實",
  "幻想",
  "動畫",
  "武俠",
  "現代",
  "修仙"
];

export const TEMPLATE_TAVERN_FIGHT_VIDEO = {
  "zh-tw": `### 酒館武打戲影片生成

這是一段酒館武打戲的開頭和結尾的畫面，請基於這兩個場景，生成一段流暢的黑衣女子與幾個刺客打鬥的畫面。

**打鬥風格：**
{{fight_style}}

**分鏡與運鏡要求：**
- 運用到分鏡和不同視角切換，讓整個畫面更有節奏感和電影感
- {{camera_rhythm}}
- 開場鏡頭從酒館全景推進到人物特寫
- 打鬥過程中穿插環境互動（桌椅翻飛、酒罈碎裂）
- 結尾鏡頭從近景拉遠，展現戰鬥後的酒館全貌

**畫面氛圍：**
- 昏暗的酒館內部，燭光搖曳，光影交錯
- 黑衣女子身手矯健，動作行雲流水
- 刺客從暗處突襲，營造緊張壓迫感
- 整體色調偏暗，關鍵動作瞬間用高光強調`,

  en: `### Tavern Fight Scene Video Generation

This depicts the opening and ending frames of a tavern fight scene. Based on these two scenes, generate a fluid sequence of a woman in black fighting several assassins.

**Fight Style:**
{{fight_style}}

**Storyboard & Camera Requirements:**
- Utilize storyboarding and different angle transitions to create rhythm and cinematic feel
- {{camera_rhythm}}
- Opening shot pushes from wide tavern establishing shot to character close-up
- Intersperse environmental interactions during combat (tables flipping, wine jars shattering)
- Ending shot pulls from close-up to wide, revealing the aftermath of the tavern battle

**Visual Atmosphere:**
- Dimly lit tavern interior, flickering candlelight, interplay of light and shadow
- Woman in black moves with agility, fluid and seamless combat movements
- Assassins strike from the shadows, creating tense and oppressive mood
- Overall dark tonal palette, key action moments emphasized with highlights`
};

export const TEMPLATE_ANATOMY_FIGURE_STUDY = {
  "zh-tw": `### 解剖學人物畫研究 (Anatomical Figure Drawing Study)

幾何人體模型分解，將人體姿態參考照片放置在左上角（小縮略圖），主區域展示結構解剖素描。

**幾何構造 (GEOMETRIC CONSTRUCTION):**
- 四肢（手臂、腿部、頸部）使用圓柱體形式
- 軀幹、骨盆、腳部使用盒子/楔形形狀
- 肩部、肘部、膝蓋、手腕處使用球形關節
- 頭部使用倒角立方體，並標示面部平面
- {{anatomy_teaching_style}}

**風格規格 (STYLE SPECIFICATIONS):**
- {{construction_line_color}}
- 鬆弛的手勢線條，可見構造筆觸
- 半透明的重疊形式展示深度
- 地平線標記在人物地面平面上
- 如果姿勢複雜，展示同一姿勢的多個觀察角度

**藝術方法 (ARTISTIC APPROACH):**
- 人物畫研究美學
- 教育插圖質量
- 白色/米白色背景
- 手繪鉛筆素描外觀

**構圖 (COMPOSITION):**
- 參考照片：左上角，小比例
- 幾何分解：填充畫布剩餘的 80%
- 乾淨的專業佈局，類似解剖學教科書`,
  en: `### Anatomical Figure Drawing Study

Geometric mannequin breakdown of human pose reference photo placed in top-left corner (small thumbnail), main area shows structural anatomy sketch.

**GEOMETRIC CONSTRUCTION:**
- Cylindrical forms for limbs (arms, legs, neck)
- Box/wedge shapes for torso, pelvis, feet
- Spherical joints at shoulders, elbows, knees, wrists
- Beveled cube for head with facial plane indication
- {{anatomy_teaching_style}}

**STYLE SPECIFICATIONS:**
- {{construction_line_color}}
- Loose gestural linework with visible construction strokes
- Semi-transparent overlapping forms showing depth
- Horizon line marked at figure's ground plane
- Multiple viewing angles of same pose if complex

**ARTISTIC APPROACH:**
- Figure drawing study aesthetic
- Educational illustration quality
- White/off-white background
- Hand-drawn pencil sketch appearance

**COMPOSITION:**
- Reference photo: top-left corner, small scale
- Geometric breakdown: fills remaining 80% of canvas
- Clean professional layout like anatomy textbook`
};

export const TEMPLATE_3X3_STORYBOARD_VIDEO = {
  "zh-tw": `使用故事板圖片建立影片。

將3x3故事板圖片轉換為影片。`,

  en: `Create a video using storyboard images.

Convert 3x3 storyboard images into video.`
};

export const TEMPLATE_CYBERPUNK_VEHICLE_CHASE = {
  "zh-tw": `### 賽博龐克飛行器追逐影片

**電影風格**：{{sci_fi_movie_style}}，高對比度霓虹光影，IMAX電影質感，史詩級配樂感。

**影片時長**：10秒

**分鏡指令碼**：

[00:00-00:04] 鏡頭1：{{tracking_camera_shot}}
畫面：{{cyberpunk_city_scene}}，夜幕降臨，還在下雨。
動作：一輛{{futuristic_vehicle}}以極高速度在摩天大樓之間穿梭。
環境細節（核心測試點）：數不清的巨大全息廣告牌在閃爍，霓虹燈光極其複雜地反射在溼滑的玻璃幕牆和飛行器表面。飛行器尾部拉出長長的藍色光流軌跡。

[00:04-00:07] 鏡頭2：{{action_camera_shot}}
動作：飛行器為了躲避障礙物，做了一個急轉彎側滑動作。
細節：鏡頭非常貼近飛行器，捕捉每一個細節。

[00:07-00:10] 鏡頭3：拉遠鏡頭，展現飛行器消失在霓虹閃爍的城市深處。`,

  en: `### Cyberpunk Vehicle Chase Video

**Movie Style**: {{sci_fi_movie_style}}, high contrast neon lighting, IMAX movie quality, epic soundtrack feel.

**Video Duration**: 10 seconds

**Storyboard Script**:

[00:00-00:04] Shot 1: {{tracking_camera_shot}}
Scene: {{cyberpunk_city_scene}}, night has fallen, it's raining.
Action: A {{futuristic_vehicle}} weaves through skyscrapers at extreme speed.
Environmental Details (Core Test Point): Countless giant holographic ads flickering, neon lights reflecting complexly off wet glass curtain walls and the vehicle surface. The vehicle's tail creates long blue light trails.

[00:04-00:07] Shot 2: {{action_camera_shot}}
Action: The vehicle makes a sharp banked turn to dodge obstacles.
Details: The camera is extremely close to the vehicle, capturing every detail.

[00:07-00:10] Shot 3: Pull back to reveal the vehicle disappearing into the neon-lit depths of the city.`
};

export const TEMPLATE_RAINFOREST_WATERFALL_JET = {
  "zh-tw": `### 雨林瀑布戰機穿越影片

一個電影感的影片序列，開場是 {{aerial_opening_shot}} 展示延伸至地平線的廣闊 {{natural_environment}}，霧氣在樹冠中滾動，巨大的咆哮瀑布主導著中心景觀，墜入陰影深處。

鏡頭平滑過渡到 {{dynamic_tracking_shot}}，位置剛好在 {{military_aircraft}} 後方並略高於其上方，鎖定其運動，因為它以極快的速度從高空向瀑布加速。

速度感通過湍流空氣扭曲、蒸汽軌跡、引擎熱浪閃爍和微妙的相機震動來強調，飛機穿過雲層。

飛機快速下降，剛好掠過樹梢上方，相機從後面緊密跟隨，當飛機在參天大樹和陡峭懸崖之間穿梭時，完美同步地傾斜和翻滾，動作精確而敏捷。

陽光在飛機機身上閃過，葉子在下方模糊，霧氣和噴霧向相機湧來，彷彿被飛機的尾流拉走。

隨著瀑布越來越近，咆哮聲加劇，水向四面八方爆炸，水滴掠過追蹤相機。

在最後時刻，飛機急劇向上拉起，完成完美的90度垂直爬升，相機直接留在後面，因為它穿過濃霧和輻射光。

序列在飛機衝出瀑布上方時達到高潮，展現出另一側寧靜、發光的河流在原始、茂密的森林中蜿蜒的壯麗全景，平靜而宏偉，與猛烈的爬升形成鮮明對比。`,

  en: `A cinematic video sequence that opens with an {{aerial_opening_shot}} of a vast {{natural_environment}} stretching to the horizon, mist rolling through the canopy as a colossal roaring waterfall dominates the center of the landscape, plunging into shadowed depths.

The camera then transitions smoothly into a {{dynamic_tracking_shot}} positioned just behind and slightly above a {{military_aircraft}}, locked onto its movement as it accelerates at extreme speed from high altitude toward the waterfall.

The sense of velocity is emphasized by turbulent air distortion, vapor trails, engine heat shimmer, and subtle camera vibration as the jet cuts through clouds.

The jet descends rapidly, skimming just above the treetops while the camera follows tightly from behind, banking and rolling in perfect sync as the aircraft weaves between towering trees and steep cliffs with precise, agile movements.

Sunlight flashes across the jet's fuselage, leaves blur past beneath it, and mist and spray rush toward the camera as if being pulled along in the jet's wake.

As the waterfall looms closer, the roar intensifies, water exploding outward on all sides while droplets streak past the tracking camera.

In the final moment, the jet pulls sharply upward into a flawless 90 degree vertical climb, the camera staying directly behind as it rockets through dense mist and radiant light.

The sequence culminates as the jet bursts above the waterfall, revealing a breathtaking wide vista of a serene, glowing river winding through untouched, lush forest on the other side, calm and majestic in striking contrast to the violent ascent.`
};

/**
 * 系統內建樣板列表
 * 
 * 如何新增新樣板：
 * 1. 在上方定義樣板內容常量 (可選，但推薦)
 * 2. 在陣列中新增一個新的組態物件
 * 3. 確保 id 唯一
 * 4. imageUrl 可以是外部連結，也可以是專案內的 import 資源
 * 5. tags 可以從 TEMPLATE_TAGS 中選擇
 */
export const TEMPLATE_IMPORTED_MMQC6OK1 = {
  "zh-tw": `一張照片，展示極度擁擠的{{location}}車廂內部，人們站著排成一排的全身照。一隻巨大的、可愛的{{subway_costume}}，穿著{{costume_material}}材質的服裝，正看著鏡頭，乘坐著穿過{{city_name}}城市交通的地鐵。頭上戴著{{accessory}}。`,
  en: `A photo showing an extremely crowded {{location}} carriage interior with people standing in a row for a full-body shot. A huge, cute {{subway_costume}} wearing {{costume_material}} material costume is looking at the camera, riding the subway through {{city_name}} city traffic. Wearing {{accessory}} on head.`
};

export const TEMPLATE_IMPORTED_MMRP53JL = {
  "zh-tw": `建立一張3D {{art_style}} 風格的插畫。畫面中是一個全身 {{character_type}} 從 Instagram 帖子的邊框中探出頭來，彷彿她是一個社交媒體角色。背景是 {{social_bg_color}}，採用神經線條畫風格。女孩快樂、甜美，大眼睛，帶著微笑。邊框中顯示使用者名：{{social_profile_name}}。新增 Instagram 風格的"點贊"、"評論"和"發送"圖標。一隻手託著邊框。3:4 格式`,
  en: `Create a 3D {{art_style}} illustration. Picture a full-length {{character_type}} peeking out of the frame of an Instagram post, as if she were a social media character. The background is {{social_bg_color}} in the style of neurography. The girl is joyful, sweet, with wide eyes and a smile. The profile name is indicated in the frame: {{social_profile_name}}. Add Instagram-style "like", "comment" and "send" icons. A hand holds the frame. 3:4 format`
};

export const TEMPLATE_IMPORTED_MMRQ1ZN6 = {
  "zh-tw": `一幅電影感插畫，採用清晰的 {{art_style}} 風格。一位身材高挑的年輕女子，長髮飄逸，正騎著 {{design_item}} 沿著沿海山頂狹窄的混凝土小徑筆直衝下。她修長、雙腿修長的輪廓增強了優雅的垂直構圖。她的身體姿態自然地與道路的坡度對齊，雙肩水平且平行於小徑，臀部居中，沒有過度扭轉。她面向前方，朝運動方向看去。一隻腳穩穩地踩在滑板的前部，後腳自然地靠近尾部，雙腳與滑板對齊。她的雙腿筆直放鬆，膝蓋沒有彎曲。滑板筆直且完全平行於下坡小徑，沒有側傾，表現出受控且自信的運動。她穿著輕盈的 {{clothing}}，在海風中向後飄動。布料輕輕拖在身後，突顯她高挑優雅的身姿。由於向前運動，她的長髮直接向後飄動。沒有背包。相機位於她正後方，角度略高，以小徑為中心。地平線筆直穩定，沒有傾斜或荷蘭角。透視強調深度和陡峭的下坡。山頂小徑被鬱鬱蔥蔥的綠草環繞，向下延伸至遠處全景般的綠松石海岸。一座海濱小鎮沿著彎曲的海岸線分佈。巨大的積雲塔聳立在蔚藍的天空中，陽光照亮海面。垂直構圖，9:16 寬高比，超高分辨率，動態而穩定的構圖，優雅的比例，動漫電影劇照，傑作品質。`,
  en: `A cinematic, hand-painted anime illustration in a clear {{art_style}} style. A tall young woman with long flowing brown hair is riding a {{design_item}} straight downhill along a narrow concrete path on top of a coastal hill. She has a slender, long-legged silhouette that enhances the elegant vertical composition. Her body posture is aligned naturally with the slope of the road shoulders level and parallel to the path, hips centered, no excessive twisting. She is facing forward in the direction of motion. One foot is placed firmly at the front of the skateboard, the back foot positioned naturally near the tail, both feet aligned with the board. Her legs are straight and relaxed, not bent at the knees. The skateboard is straight and perfectly parallel to the downhill path, not tilted sideways, expressing controlled and confident movement. She wears a lightweight {{clothing}} flowing backward in the ocean wind. The fabric gently trails behind her, emphasizing her tall and graceful figure. Her long hair streams directly behind her due to forward motion. No backpack. The camera is positioned directly behind her at a slightly elevated angle, centered on the path. The horizon line is straight and stable no tilted or dutch angle. The perspective emphasizes depth and the steep downhill slope. The hilltop path is surrounded by lush green grass, descending toward a panoramic turquoise coastline far below. A seaside town spreads along the curved shore. Massive cumulus clouds tower in a rich blue sky, sunlight illuminating the ocean surface. Vertical composition, 9:16 aspect ratio, ultra high resolution, dynamic yet stable composition, elegant proportions, anime movie still, masterpiece quality.`
};

export const TEMPLATE_IMPORTED_MMSZANDO = {
  "zh-tw": `{{drink_product: 芬達軟飲料罐}}的專業照片。在{{drink_background: 橙色背景}}上。{{drink_product: 芬達軟飲料罐}}{{drink_action: 爆炸，橙子從罐中湧出}}。橙汁在罐周圍旋轉。罐體上的高光和橙子在背景上的陰影。{{drink_camera_angle: 高角度俯拍橙汁旋轉形成的圓弧}}，使用DSLR 35mm 2.8拍攝`,
  en: `Professional photo of a {{drink_product: Fanta softdrink can}}. On a {{drink_background: orange background}}. The {{drink_product: Fanta softdrink can}} is {{drink_action: exploding with oranges bursting from the can}}. The orange juice is swirling around the can. Highlights on the can and oranges shadow on the backdrop. {{drink_camera_angle: high angle overhead shot capturing the swirling arc of orange juice}} taken with a DSLR 35mm 2.8`
};

// 護膚品奇幻廣告樣板
export const TEMPLATE_SKINCARE_FANTASY_AD = {
  "zh-tw": `超現實奢華護膚品廣告照片，傾斜的巨大{{skincare_product: 精華滴管瓶}}漂浮在柔軟白雲上方，瓶身為{{skincare_color: 粉桃色}}的玻璃材質，瓶內產品呈新鮮凝結水珠狀，瓶身在空中微微傾斜。一位時尚年輕女性面容平靜自然，{{fantasy_character_pose: 坐在瓶蓋上}}，身穿{{fantasy_dress_style: 優雅飄逸的連衣裙}}，裙襬隨風輕柔飄動。{{fantasy_floating_elements: 成熟桃子和桃子切片}}在空中漂浮。夢幻奇妙的護膚品廣告美學，{{fantasy_sky_background: 明亮清澈的藍天}}背景，玻璃瓶身呈現光澤反射，超寫實商業產品攝影，柔和電影級陽光帶來清晰高光，使用佳能EOS R5拍攝，50mm f/1.8鏡頭，{{pastel_color_palette: 粉桃色和天藍色}}調色板`,
  en: `A surreal luxury skincare advertising photo of a tilted giant {{skincare_product: serum dropper bottle}} floating above soft white clouds, bottle is {{skincare_color: pink-peach colored}} glass material with fresh condensation droplets inside, the bottle slightly inclined in the air. A fashionable young woman with a calm natural facial expression {{fantasy_character_pose: sitting on the bottle cap}}, wearing a {{fantasy_dress_style: elegant flowing dress}} that moves gently in the breeze. {{fantasy_floating_elements: ripe peaches and peach slices}} floating around in the sky. Dreamy whimsical skincare campaign aesthetic, {{fantasy_sky_background: bright clear blue sky}} background, glossy reflections on the glass bottle, ultra realistic commercial product photography, soft cinematic sunlight with crisp highlights, shot with a Canon EOS R5, 50mm f/1.8 lens, {{pastel_color_palette: pastel peach and sky blue}} color palette`
};


// Community adaptations: original authors and links are retained in attribution.
export const TEMPLATE_AWESOME_GPT_IMAGE_2_544 = {
  "zh-tw": "製作一張幼兒水果認知卡。左側放大展示{{fruit}}的完整外觀，右側展示同一種水果的{{fruit_cut}}，用彎曲虛線箭頭連線，並加一個小小的簡筆人物指向右側。根據實際水果和切法，在上方與右側下方分別標註準確的英文大寫名稱，不要把切片誤標成另一種水果。白色與極淺藍背景、圓角圖片區、簡潔藍色字體、真實水果攝影與少量童趣線條結合。保持大留白、柔光和清晰層級，不新增無關裝飾。豎版4:5。",
  "en": "Create a preschool vocabulary card featuring a whole {{fruit}} enlarged on the left and {{fruit_cut}} of that same fruit on the right. Connect them with a curved dotted arrow and a tiny stick figure pointing right. Label the whole fruit at the top and its pictured part beneath the right image using accurate uppercase English nouns derived from the selected fruit and cut. Do not mislabel the part as a different fruit. Combine realistic fruit photography, rounded image panels, simple blue type and minimal playful linework on white and very pale blue. Generous whitespace, soft light, clear hierarchy, no unrelated decoration. Vertical 4:5."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_543 = {
  "zh-tw": "請上傳一張旅行照片，將其中的完整場景轉為琺琅徽章。保留地形、地標與人物的相對位置和比例，景觀佔主導，人物僅作小比例點綴。用平塗琺琅色塊表現衣服與頭髮，臉部保持自然膚色的空白色塊，不畫五官或黑色剪影。輪廓和內部分隔線使用{{enamel_metal}}，填色具有光澤，徽章外形沿景觀自然輪廓裁切。正面平視，居中佔畫面約60%，襯底為{{badge_backdrop}}。柔和均勻光線、輕微投影；不加文字、水印、強烈反光，不將景觀裁成人像特寫。",
  "en": "Upload a travel photograph and translate its complete scene into an enamel pin. Preserve the relative positions and scale of terrain, landmarks and people. The landscape dominates; people remain small accents. Render clothing and hair as flat enamel fills, with natural light skin-tone face areas and no facial marks or black silhouettes. Use {{enamel_metal}} for the outline and internal dividers, glossy enamel fills and a contour following the landscape. Front view, centered at roughly 60% of the frame, on {{badge_backdrop}}. Gentle even light and a faint cast shadow. No text, watermark, harsh glare or portrait cropping."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_540 = {
  "zh-tw": "創作一張夢幻未來城市編輯藝術海報，以{{future_city_motif}}作為標誌性主景。加入少量巨大植物、微小行人與懸浮元素，用道路引導視線，形成一個清晰的視覺中心。融合復古旅行海報與現代藝術雜誌氣質，採用{{poster_muted_palette}}，柔和自然光、乾淨幾何形、紙張纖維與細微膠片顆粒。具有戲劇透視和空間層次，但保持簡潔、安靜、富有想象力。畫面應像可收藏的藝術印刷品，不追求照片真實，不堆砌建築，不加社交平臺界面或無關文字。豎版4:5。",
  "en": "Create an editorial art poster of a dreamlike future city with {{future_city_motif}} as its iconic focal point. Add a few oversized plants, tiny pedestrians and floating elements; let roads guide the eye toward one clear center. Combine vintage travel-poster composition and modern art-magazine sensibility using {{poster_muted_palette}}. Soft daylight, clean geometry, tactile paper fibers and fine film grain. Dramatic perspective and layered depth, yet quiet, spare and imaginative. A collectible art print rather than a photograph. Avoid architectural clutter, social interfaces and unrelated text. Vertical 4:5."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_538 = {
  "zh-tw": "上傳一張旅行照片，製作4:3橫版田野筆記頁。左側約58%保留原照片的主體、透視、空間和自然光，只做輕微色調平衡；右側約42%為暖白舊紙，兩側自然銜接，無明顯分隔線。提煉照片中最有辨識度的地標輪廓或地形關係，刻成小型多色橡皮章，放在右側中下部，約佔右側高度三分之一。色彩策略：{{color_strategy}}。保留微小漏墨、壓力不均、刻痕與輕微套色錯位，不做精細照片複製。旁邊用小號打字機字體標註地點{{city_name}}、編號{{serial_code}}及年份{{year_number}}，加三個根據照片生成的簡短英文關鍵詞。地點訊息以使用者填寫為準，不擅自猜測；大量空白，避免郵票齒孔、圓形印章、HDR和重繪原照片。",
  "en": "Upload one travel photo to create a 4:3 landscape field-note page. Preserve the original subject, perspective, space and natural light in the left 58%, applying only gentle tonal balancing. The right 42% is warm aged ivory paper with a natural transition and no divider. Distill the most recognizable landmark or terrain relationships into a small multicolor rubber-stamp print in the lower middle of the paper, about one third of that section’s height. Color approach: {{color_strategy}}. Include tiny ink gaps, uneven pressure, carved edges and slight registration shifts; do not reproduce every photographic detail. Add small typewriter text for location {{city_name}}, serial {{serial_code}}, year {{year_number}}, and three short English keywords grounded in the photo. Use the supplied location rather than guessing. Generous whitespace; no perforated borders, round seals, HDR or redrawing of the original photograph."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_532 = {
  "zh-tw": "為虛構飲料品牌{{fictional_drink_brand}}製作兩列三行、嚴格對齊的六宮格夏日廣告。唯一水果主角為{{citrus_campaign_fruit}}，所有果皮、果肉、汁液和飲料顏色都隨之協調變化。同一位寫實微縮成年女性穿綠色碎花裙與白涼鞋，出現在統一的陽光沙灘海景中。六格依次呈現：擁抱巨大完整水果；躺在半個果實中休息；巨大成人手從上方擠出果汁；乘坐載滿水果的小木車；擁抱標有品牌名的冰爽氣泡飲料杯；坐在半個果實中等待勺子送來冰沙。第五格產品杯是視覺高潮。統一海平線、左上光源、人物造型和尺寸關係，細白分隔線，果肉溼潤、玻璃通透、凝水與冰塊折射真實。僅保留杯身品牌名，避免卡通人體、錯誤手指、擁擠道具及不同水果混雜。",
  "en": "Create a precisely aligned two-column, three-row summer campaign for fictional drink brand {{fictional_drink_brand}}. The sole fruit hero is {{citrus_campaign_fruit}}; coordinate rind, pulp, juice and beverage colors accordingly. One recurring photoreal miniature adult woman in a green floral dress and white sandals appears on the same sunny beach. Sequence: embrace a huge whole fruit; recline inside a fruit half; react beneath juice squeezed by a giant adult hand; ride a small wooden fruit cart; embrace a branded iced sparkling-drink glass; sit inside a fruit half awaiting a spoonful of sorbet. Panel five is the product climax. Consistent horizon, upper-left lighting, character styling and scale, with thin white dividers. Wet pulp, clear glass, condensation and believable ice refraction. Only the brand name on the hero glass; no cartoon anatomy, malformed fingers, clutter or mixed fruit species."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_531 = {
  "zh-tw": "製作{{travel_country}}的進階旅行海報。中央一座{{glass_frame_shape}}立於光潔反射面，內部將該國代表建築、地貌、交通、花卉與文化元素組織成連貫的詩意全景，不要堆成互不相關的貼圖。暖金色黃昏光、柔和薄霧、奶油白與香檳色，輔以灰藍和鼠尾草綠。玻璃邊緣有可信折射與細微稜鏡色，底部完整鏡像逐漸柔化。頂部使用該國準確英文名，副標題為“THE SOUL OF”加英文國名，下面小字“A JOURNEY THROUGH TIME • {{year_number}}”。對稱平衡、電影空間層次、細膩建築與淡膠片顆粒，豎版4:5，不加現代UI或額外文案。",
  "en": "Create a premium travel poster for {{travel_country}}. Center an {{glass_frame_shape}} on a polished reflective surface. Inside, compose characteristic landmarks, terrain, transport, flowers and cultural details into one coherent poetic panorama rather than disconnected cutouts. Golden-hour light, atmospheric haze, cream and champagne with dusty blue and sage. Believable glass refraction and subtle prismatic edges; a complete mirror reflection softens downward. Set the accurate English country name above, followed by “THE SOUL OF” plus that name, then “A JOURNEY THROUGH TIME • {{year_number}}”. Balanced symmetry, cinematic depth, fine architectural detail and light film grain. Vertical 4:5; no modern UI or additional copy."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_527 = {
  "zh-tw": "以{{city_name}}為目的地，製作豎版4:5紙雕微縮旅行海報。前景左側一隻真實手掌豎持復古旅行票據，票面有該城市名稱與剋制的虛構行程訊息，不復制真實證件。從票據後方升起實體紙雕城市，以當地代表地標為中心，周圍組織與目的地一致的地形、街道、交通和微小行人。不要混入其他城市地標。紙、木、石膏材質層層疊合，有真實投影與輕微四分之三視角。暖象牙白紙面四周點綴該城市建築速寫、地圖線與少量手寫旅行註記。柔和暖棚光、細紙纖維、淺墨滲化；主立體景清晰，外圍速寫稍柔。進階旅行雜誌產品攝影質感，保持留白和可信手指結構。",
  "en": "Create a vertical 4:5 miniature pop-up travel poster for {{city_name}}. A realistic hand at the lower left holds a vintage travel ticket vertically, bearing the city name and restrained fictional itinerary details, not a copy of an actual credential. A physical paper city rises behind the ticket, centered on a characteristic local landmark, surrounded by destination-consistent terrain, streets, transport and tiny pedestrians. Do not mix landmarks from other cities. Layer paper, wood and plaster with believable shadows and a slight three-quarter view. On warm ivory paper around the diorama, add delicate local architectural sketches, map lines and sparse handwritten travel notes. Warm soft studio light, fine paper fibers and faint ink bleed. Sharp central miniature, softer surrounding drawings, premium travel-editorial product photography, ample whitespace and anatomically credible fingers."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_520 = {
  "zh-tw": "設計一件T恤正面的中心絲印圖案：側面視角，一位穿厚重航天服與頭盔的宇航員坐在月面小岩石旁，{{astronaut_break}}。遠處一顆巨大地球正對人物，雲帶清晰，營造安靜、孤獨而沉思的太空時刻。月面隕坑與細塵用簡潔的印刷紋理表達，地球與深色天空形成明確對比。配色嚴格使用{{apparel_ink_palette}}，控制為適合絲網印刷的少量平塗色和細膩網點，輪廓乾淨、圖案完整居中。展示布料與圖形結合，不畫多餘人物、標語或品牌，不做複雜漸變攝影貼片。",
  "en": "Design a centered screen-print graphic on the front of a T-shirt. In profile, an astronaut in a bulky suit and helmet rests beside a small lunar rock, {{astronaut_break}}. A majestic Earth with clear swirling cloud bands faces the astronaut in the distance, creating a quiet, solitary and contemplative moment. Render lunar craters and dust with restrained print texture; contrast Earth against the dark sky. Strict palette: {{apparel_ink_palette}}. Use a few flat ink colors and subtle halftones suitable for screen printing, clean contours and a complete centered graphic. Show the artwork integrated with fabric. No extra characters, slogans, brands or photographic gradient patches."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_519 = {
  "zh-tw": "請上傳香水瓶原圖。完整保留原瓶形狀、玻璃顏色、瓶蓋材質、比例和標記文字，不重新設計包裝、不改字。只改造周圍佈景：瓶身旁環繞米色織帶，搭配{{perfume_floral_set}}；花材不能遮擋標記或改變瓶身輪廓。淺色冷調漸變背景與充足留白，冷調逆光、柔焦高光、淺景深突出產品，低飽和輕奢電商攝影。玻璃折射和接觸陰影可信，花瓣質感細膩。豎版{{aspect_ratio}}，適合作為電商詳情頁主視覺，不額外新增標語、水印或第二隻瓶子。",
  "en": "Upload the original perfume-bottle image. Preserve the exact bottle shape, glass color, cap material, proportions and label text. Do not redesign the packaging or rewrite lettering. Change only the surroundings: beige woven ribbon beside the bottle, with {{perfume_floral_set}} arranged around it. Keep the label and bottle outline unobstructed. A pale cool gradient background with generous whitespace, cool backlighting, softly blooming highlights and shallow depth of field emphasize the product. Low-saturation luxury e-commerce photography, credible glass refraction and contact shadows, detailed petals. Vertical {{aspect_ratio}}, suitable for a product-detail hero image. No extra slogan, watermark or second bottle."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_517 = {
  "zh-tw": "拍攝一張2:3豎版夏日冰飲廣告。相機彷彿位於透明塑料杯底、碎冰上方，以超廣角魚眼朝上看。下方約45%由{{summer_cup_fruit}}與晶瑩碎冰形成淺景深前景，粗綠色吸管從中央伸向杯口外成年女性的嘴邊。她扎深棕高丸子頭、穿白色蕾絲上衣，睜大眼睛自然地含住吸管，目光朝向鏡頭。杯口呈誇張弧線，外側日本夏日老商店街輕度畸變，招牌全部虛化不可讀。左上強日光照亮水滴、杯緣和果肉，右下投影一致。焦點在眼睛和嘴部，膚質自然；水果色與藍天、綠吸管、白衣形成清爽對比，不出現其他水果、實有品牌、可讀招牌、吸管穿模或懸浮冰塊。",
  "en": "Photograph a vertical 2:3 summer iced-drink advertisement from an imagined camera just above crushed ice at the bottom of a transparent plastic cup, looking upward through an ultra-wide fisheye lens. {{summer_cup_fruit}} and sparkling crushed ice fill the lower 45% as a shallow-focus foreground. A thick green straw leads through the center to an adult woman naturally sipping outside the rim. She has a dark brown high bun, a white lace blouse and wide eyes directed toward the lens. The circular rim curves dramatically; an old Japanese summer shopping street bends gently behind her, with all signs blurred and unreadable. Strong upper-left sunlight highlights droplets, the rim and juicy fruit; shadows fall consistently lower right. Focus on eyes and mouth, preserve natural skin. Fresh contrast between fruit color, blue sky, green straw and white clothing. No other fruit, real brands, readable signage, straw clipping or floating ice."
};


// Community batch 2: fifty curated bilingual adaptations.
export const TEMPLATE_AWESOME_GPT_IMAGE_2_329 = {
  "zh-tw": "請先上傳所需參考圖片。\n\n一幅充滿奇幻色彩的電影場景：一位英姿颯爽的女戰士兼獵鷹師（保留參考圖面部特徵），身著飽經戰火洗禮、飾以閃耀餘燼紋理的皮甲，漫步於幽暗迷霧籠罩的森林之中。她高舉手臂，指揮著一頭巨大的鳳凰與雄鷹的混合體，這頭猛禽雙翼燃燒，羽毛燃焰，尖端噴吐著火焰。它周身散發著橙紅色的熔岩光芒，火星和餘燼飛濺。女戰士梳著{{hair_style}}，皮膚上沾滿了灰燼，{{expressions}}，手中拿著繩索和工具袋。畫面細節豐富，羽毛紋理逼真，火焰物理效果自然，光照效果極具戲劇性，運用了體積霧、淺景深等技術，營造出史詩般的奇幻氛圍，色彩調校極具電影質感，背景陰鬱深沉，分辨率高達8K，呈現出概念藝術的精髓，並採用了虛幻引擎的渲染效果。",
  "en": "Upload the required reference image before generating.\n\nA cinematic fantasy scene of a fierce female warrior falconer, preserving the reference face, walking through a dark misty forest, wearing battle-worn leather armor infused with glowing ember textures. Her arm is raised, commanding a massive phoenix-eagle hybrid with blazing wings and flaming feathers, fire trailing from its tips. The bird radiates molten orange and red light, casting sparks and embers into the air.The warrior has {{hair_style}}, ash-streaked skin, and {{expressions}}, carrying a rope and utility pouch. Ultra-detailed feathers, realistic fire physics, dramatic lighting, volumetric fog, shallow depth of field, epic fantasy atmosphere, hyper-realistic, cinematic color grading, dark moody background, 8k, concept art, unreal engine quality."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_325 = {
  "zh-tw": "一個風格化的3D卡通肖像，一位年輕男子，擁有{{hair_style}}和富有表現力的{{eye_color}}眼睛，溫暖地微笑。他穿著{{clothing_male}}，現代休閒時尚。類似皮克斯/迪士尼風格角色設計，皮膚光滑，柔和光照，略微誇張的面部特徵。高細節、精美的3D渲染，友好且平易近人的表情。漸變背景為柔和的藍{{eye_color}}和粉色，工作室燈光，淺景深，高分辨率。",
  "en": "A stylized 3D cartoon portrait of a young man with {{hair_style}} and expressive {{eye_color}} eyes, smiling warmly. He is wearing {{clothing_male}}, modern casual fashion. Pixar-like / Disney-style character design with smooth skin, soft lighting, and slightly exaggerated facial features. High detail, polished 3D render, friendly and approachable expression. Gradient background with soft teal and pink colors, studio lighting, shallow depth of field, high resolution."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_324 = {
  "zh-tw": "一位時尚年輕女子坐在老式復古巴士的前緣，身穿{{clothing_female}}、羊毛無簷小便帽、{{accessory_glasses}}、疊層項鍊和粗獷的棕色皮靴。她有著{{hair_style}}，帶著自信而夢幻的表情，仰望天空。巴士漆面剝落，呈青綠色與鐵鏽紅色調。明亮清澈的藍天，城市背景建築極少，柔和日光，電影級色彩分級，淺景深，高端時尚旅行氛圍，編輯攝影，超寫實，4K分辨率，銳利對焦，自然肌膚質感，戲劇性構圖，電影靜幀美學。",
  "en": "A stylish young woman sitting on the front edge of an old vintage bus, wearing {{clothing_female}}, woolen beanie cap, {{accessory_glasses}}, layered necklaces, and rugged brown leather boots. She has {{hair_style}} and a confident, dreamy expression, looking upward toward the sky. The bus is weathered with peeling paint in turquoise and rust red tones.Bright clear blue sky, urban background with minimal buildings, soft daylight, cinematic color grading, shallow depth of field, high fashion travel vibe, editorial photography, ultra-realistic, 4K resolution, sharp focus, natural skin texture, dramatic composition, film still aesthetic."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_322 = {
  "zh-tw": "請先上傳所需參考圖片。\n\n專業照片，一位男士，30歲的俄羅斯模特（參考圖像），正對著鏡頭，向相機傾斜，從下往上拍攝，使用廣角鏡頭。男士傾斜著身體，近距離將{{drink_product}}展示給鏡頭，一隻手拿著瓶子，緊貼在鏡頭前。瓶子的標記和方向保持筆直，以便標記清晰可讀。他穿著白色運動鞋，一隻腳在鏡頭前方。男士站在街道上，溼漉漉的瀝青和飛濺的水花從下方拍出。鮮豔的色彩，電影級燈光，光線從後方打在模特的臉上。 {{aspect_ratio}} ",
  "en": "Upload the required reference image before generating.\n\nProfessional photo, a guy, a 30-year-old Russian model (reference image), is facing the lens, tilted towards the camera, angle from below, shot with a wide-angle lens. The guy is tilted and shows {{drink_product}} close-up to the camera, a hand with {{drink_product}} close-up right in front of the lens. The label and direction of the bottle are straight so the label is readable. He's wearing white sneakers, one foot in front of the camera. The guy is standing on the street, wet asphalt and splashes from below. Bright colors, cinematic lighting, the light is behind and on the model’s face.  {{aspect_ratio}} "
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_321 = {
  "zh-tw": "一張超現實電影感時尚照片，一位二十出頭驚豔的年輕女性，全身可見，站在現代城市中心，黃金時段。\n她隨意地單肩靠在交通信號燈杆上，沒有意識到相機的存在，彷彿這一刻是自然捕捉的。\n她穿著緊身藍色牛仔褲、棕色皮靴，以及一件{{clothing_female}}，帶有柔軟羊皮翻領。夾克下，一件極簡深色露臍上衣，隱約露出精緻的乳溝和緊緻的腹部。\n\n她的體型天生女性化，平衡而優雅，姿態自信。\n一隻手穿過她{{hair_style}}，將其向後撩起，頭部微微轉向那一側，眼睛自然地看向別處，沒有擺拍。\n\n膚色為輕微日曬後的奶油般柔和光澤，真實肌膚紋理，細膩毛孔與高光——毫無塑料感。\n妝容醒目卻精緻：清晰的眼部、濃密睫毛、立體腮紅、柔和修容，以及自然光澤唇——具備高端美妝廣告質感。\n光線為溫暖金色時段陽光，包裹她的輪廓與髮絲，營造柔和高光與電影感對比。\n背景為城市街道，汽車與都市燈光以強烈散景呈現，淺景深——焦點鎖定在女性身上。\n\n使用全畫幅電影攝影機拍攝，85mm鏡頭，f/1.8，超現實細節，高動態範圍，電影級調色，膠片質感，頂級時尚大片美學，高預算電影劇照氛圍。",
  "en": "A hyper-realistic cinematic fashion photograph of a stunning young woman in her early 20s, full body visible, standing in a modern city center during golden hour.\nShe leans casually with one shoulder against a traffic light pole, unaware of the camera, as if the moment was captured naturally.\nShe wears skinny blue jeans, brown leather boots, and a {{clothing_female}} with a soft shearling collar. Under the jacket, a minimal dark crop top reveals a subtle cleavage and toned midriff.\n\nHer physique is naturally feminine, balanced and elegant, with confident posture.\nOne hand runs through her {{hair_style}}, lifting it back in motion. Her head is turned slightly toward that side, eyes looking away naturally, not posing.\n\nSkin tone is lightly sun-kissed with a soft creamy glow, realistic skin texture, subtle pores and highlights — no plastic look.\nMakeup is striking but refined: defined eyes, bold lashes, sculpted cheeks, soft contour, and natural glossy lips — editorial beauty campaign quality.\nLighting is warm golden hour sunlight, wrapping around her silhouette and hair, creating soft highlights and cinematic contrast.\nBackground is an urban street with cars and city lights rendered in strong bokeh, shallow depth of field — focus locked on the woman.\n\nShot on a full-frame cinema camera, 85mm lens, f/1.8, ultra-realistic detail, high dynamic range, cinematic color grading, film-like tones, premium fashion editorial aesthetic, high-budget movie still feeling."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_320 = {
  "zh-tw": "一幅戲劇性的電影海報風格肖像，描繪了兩位史詩奇幻戰士在冰凍風暴中背靠背站立。左側是一位身經百戰的男性戰士，留著{{hair_style}}，低頭以此表達堅定的決心，緊握著一把插在冰裡的{{fantasy_weapon}}。霜雪附著在他毛皮鑲邊的斗篷和肩膀上。右側是一位強有力的女性戰士側影，蒼白的皮膚在熾熱的橙色光芒下閃耀，她的身體部分被火焰吞沒，與冰冷的藍色氛圍形成對比。雪花粒子在空中盤旋，在象徵性的衝突中融合了火與冰。超精細的面部細節，情感強度，體積霧，電影級布光，冷藍色調混合溫暖的火焰高光，淺景深，史詩奇幻電影海報，超寫實，8K分辨率，戲劇性構圖，清晰聚焦，高對比度，逼真紋理。",
  "en": "A dramatic cinematic poster-style portrait of two epic fantasy warriors standing back-to-back in a frozen storm. On the left, a battle-worn male warrior with {{hair_style}}, head bowed in quiet resolve, gripping a {{fantasy_weapon}} planted into the ice. Frost and snow cling to his fur-lined cloak and shoulders. On the right, a powerful female warrior in profile, pale skin glowing with fiery orange light, her body partially engulfed in flames thatcontrast against the icy blue atmosphere. Snow particles swirl through the air, blending fire and ice in a symbolic clash. Ultra-detailed faces, emotional intensity, volumetric fog, cinematic lighting, cold blue tones mixed with warm fire highlights, shallow depth of field, epic fantasy movie poster, hyper-realistic, 8K resolution, dramatic composition, sharp focus, high contrast, photorealistic textures."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_319 = {
  "zh-tw": "一個充滿趣味的進階時裝T臺場景，主角是一位自信的女性，正走在奢華時裝秀的T臺上，身穿一件完全由鳥類製成的非凡進階客製化禮服。數百隻優雅、色彩鮮豔的鳥類構成了飄逸的雕塑感禮服形狀，像活著的羽毛一樣層疊，翅膀微微張開，營造出布料和運動的錯覺。一些鳥兒在她周圍輕輕升入空中，捕捉于飛行瞬間，增添了神奇、超現實的運動感。鳥兒們展現出豐富多樣的色彩——{{dominant_colors}}——擁有錯綜複雜的羽毛細節和自然紋理。她在邁步間擺出姿勢，帶著{{expressions}}，富有表現力的眼睛，以及精緻的T臺妝容。戲劇性的舞臺燈光配以發光的高光，黑暗模糊的觀眾背景，電影級的景深，奇幻現實主義，超精細紋理，高對比度，清晰聚焦，奇思妙想的奢華時裝秀，超現實主義進階客製化，4K分辨率，專業調色。",
  "en": "A playful high-fashion runway scene featuring a confident woman walking a luxury fashion show catwalk, wearing an extraordinary couture dress made entirely of birds. Hundreds of elegant, vividly colored birds form the shape of a flowing, sculptural gown, layered like living feathers, with wings partially spread to create the illusion of fabric and motion. Some birds lift gently into the air around her, captured mid-flight, adding a magical, surreal sense of movement. The birds display a rich variety of colors — {{dominant_colors}} — with intricate feather details and natural textures. She poses mid-stride with {{expressions}}, expressive eyes, and refined runway makeup. Dramatic stage lighting with glowing highlights, dark blurred audience background, cinematic depth of field, fantasy realism, ultra-detailed textures, high contrast, sharp focus, whimsical luxury fashion show, surreal couture, 4K resolution, professional color grading."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_316 = {
  "zh-tw": "超寫實，一位留著深色短捲髮、修剪整齊的鬍鬚和{{accessory_glasses}}的年輕男子的鮮豔逼真渲染，身穿{{clothing_male}}。他奔跑到一半被捕捉下來，姿態充滿動感，向前突破，充滿戲劇性地從一個破碎的漫畫分鏡框中顯現——一條腿和一隻手臂衝入現實世界，而身體的其餘部分仍留在漫畫框內。他的表情充滿活力和喜悅，擁有銳利的面部細節，自然的皮膚紋理，以及具有高對比度和深度的戲劇性電影燈光。\n\n背景：一個非常詳細的黑白漫畫布局，充滿了幽默、誇張的且與他直接互動的反應場景。周圍的漫畫人物表現出震驚和喜劇的表情，配有粗體的對話氣泡和速度線。漫畫分鏡採用經典的高對比度水墨風格繪製，線條清晰，網點陰影。撕裂的紙張邊緣和碎片增強了他衝破漫畫世界的幻覺。全綵色的寫實人物與單色的漫畫環境形成強烈對比，創造出寫實與漫畫藝術之間的動態混合體。超精細，8k分辨率，清晰聚焦，戲劇性的陰影，電影級景深。",
  "en": "Ultra-realistic, vibrant photorealistic rendering of a young man with short curly dark hair, neatly trimmed beard, and {{accessory_glasses}}, wearing {{clothing_male}}. He is captured mid-run in a dynamic, forward-breaking pose, dramatically emerging from a torn manga panel — one leg and one arm bursting into the real world while the rest of his body remains inside the comic frame. His expression is energetic and joyful, with sharp facial details, natural skin texture, and dramatic cinematic lighting with high contrast and depth. \n\nBackground: a highly detailed black-and-white manga layout filled with humorous, exaggerated reaction scenes that directly interact with him. The surrounding manga characters display shocked and comedic expressions, with bold speech bubbles and motion lines. The manga panels are illustrated in a classic high-contrast ink style with crisp linework and halftone shading. Torn paper edges and debris enhance the illusion of him breaking through the comic world. The fully colored, photorealistic figure contrasts strongly against the monochrome manga environment, creating a dynamic hybrid between reality and comic art. Ultra-detailed, 8k resolution, sharp focus, dramatic shadows, cinematic depth of field."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_315 = {
  "zh-tw": "超寫實電影級奇幻場景，設定在鬱鬱蔥蔥的史前叢林山谷中。一隻巨大的棘龍站在淺河邊，它那長而類似鱷魚的巨顎張得很大。一位年輕女子平靜地坐在恐龍張開的嘴裡，完美居中，雙腿微微向前懸掛。她有一頭{{hair_style}}，表情鎮定無畏，皮膚紋理逼真。她身穿{{clothing_female}}，藍色牛仔短褲和黑色及膝戰術靴。衣服和腿上可見微小的血跡和輕微劃痕，增加了戲劇性的緊張感但並不血腥。她懷裡溫柔地抱著一隻小恐龍幼崽，充滿保護欲地抱著它。\n\n在他們身後，一道高聳而充滿戲劇性的瀑布順著覆蓋著茂密綠色植被和薄霧的陡峭叢林懸崖傾瀉而下。場景中棲息著多隻恐龍：幾隻迅猛龍在河岸邊潛行，小型食草動物在背景中奔跑，飛翔的翼龍在頭頂盤旋。環境豐富，有長滿苔蘚的岩石、流動的河水、熱帶植物和柔和的大氣霧。\n\n燈光具有電影感和自然感，漫射的日光照亮場景，陰影細節豐富，焦點清晰地聚在女子和棘龍身上，背景元素採用淺景深。恐龍鱗片、牙齒、水珠、樹葉和織物上的超寫實紋理。史詩奇幻寫實主義，戲劇性構圖，垂直構圖，超精細，照片級真實感，4K，電影級調色，無文字，無水印。",
  "en": "Ultra-realistic cinematic fantasy scene set in a lush prehistoric jungle valley. A colossal Spinosaurus stands beside a shallow river, its long crocodile-like jaws stretched wide open. Seated calmly inside the dinosaur’s open mouth is a young woman, perfectly centered, legs hanging slightly forward. She has {{hair_style}}, a composed fearless expression, and realistic skin texture. She is wearing {{clothing_female}}, blue denim shorts, and black knee-high combat boots. Small blood smears and light scratches are visible on her clothes and legs, adding dramatic tension without gore. She gently cradles a small baby dinosaur in her arms, holding it protectively.\n\nBehind them, a tall dramatic waterfall cascades down steep jungle cliffs covered in dense green foliage and mist. Multiple dinosaurs populate the scene: several Velociraptors stalking the riverbank, small herbivores running through the background, and flying pterosaurs circling overhead. The environment is rich with mossy rocks, flowing water, tropical plants, and soft atmospheric fog.\n\nLighting is cinematic and natural, with diffused daylight illuminating the scene, detailed shadows, sharp focus on the woman and the Spinosaurus, and shallow depth of field for background elements. Hyper-real textures on dinosaur scales, teeth, water droplets, foliage, and fabric. Epic fantasy realism, dramatic composition, vertical framing, ultra-detailed, photorealistic, 4K, cinematic color grading, no text, no watermark."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_314 = {
  "zh-tw": "一位{{subject}}的超寫實電影級雙重曝光側臉肖像，表情專注強烈，皮膚紋理細節豐富，眼神銳利。他的面部與從剪影中浮現的未來主義城市天際線無縫融合，摩天大樓和城市建築構成了他的頸部和下頜線。深藍色和鮮豔紅色的強烈對比，象徵著衝突與力量。抽象的數位劃痕、碎裂的玻璃紋理和漏光效果覆蓋在面部，營造出戲劇性的效果。{{background_color_clean}}，超精細的燈光，專業電影海報風格，高對比度，清晰聚焦，8K分辨率，逼真的髮絲，社論海報構圖，現代平面設計美學，戲劇性的氛圍，超高清，照片級真實。\n避免：模糊，低分辨率，扭曲的面部，多餘的肢體，過飽和的顏色，嘈雜的背景，平淡的燈光，卡通化，低細節",
  "en": "A hyper-realistic cinematic double exposure portrait of a {{subject}} in side profile, intense focused expression, detailed skin texture and sharp eyes. His face seamlessly blended with a futuristic city skyline emerging from his silhouette, skyscrapers and urban buildings forming his neck and jawline. Strong contrast of deep blue and vibrant red tones symbolizing conflict and power. Abstract digital scratches, fractured glass textures, and light leaks overlaying the face for a dramatic effect. {{background_color_clean}}, ultra-detailed lighting, professional movie poster style, high contrast, sharp focus, 8K resolution, realistic hair strands, editorial poster composition, modern graphic design aesthetics, dramatic mood, ultra-HD, photorealistic.\nAvoid: blurry, low resolution, distorted face, extra limbs, oversaturated colors, noisy background, flat lighting, cartoonish, low detail"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_313 = {
  "zh-tw": "製作品牌{{company}}的高端護膚品廣告：緞面長春花藍軟管豎直居中，反光鉻色瓶蓋與銀色文字清晰。薰衣草色、靛藍和冰藍的柔軟雲霧環繞產品，周圍為黃色花心的紫色與丁香色花朵，少量紫羅蘭增加層次。冷調藍紫背景，左上柔光突出軟管曲面、金屬反射與花瓣細節，產品標記保持無遮擋。超寫實奢華產品攝影，{{aspect_ratio}}豎版。",
  "en": "Create a premium skincare campaign for brand {{company}}: a satin periwinkle-blue squeeze tube stands upright at the center, with a reflective chrome cap and legible silver lettering. Soft lavender, indigo and ice-blue vapor curls around the product. Purple and lilac flowers with yellow centers frame it, with small violet blossoms adding depth. Cool blue-violet background; soft upper-left light defines the tube’s curvature, metal reflections and petals. Keep the label unobstructed. Hyperreal luxury product photography, vertical {{aspect_ratio}}."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_312 = {
  "zh-tw": "為虛構品牌{{fictional_drink_brand}}製作兩罐汽水的動感商業廣告。左罐為{{fruit}}口味，果肉與水花呈爆發式弧線，橙粉背景光；右罐固定為檸檬口味，冷水飛濺與霓虹綠燈光呼應。嚴格只有兩罐，罐身清晰顯示同一品牌名及各自口味，冷凝水與運動中的水滴真實。50mm商業攝影、清晰金屬質感、電影級飛濺，高亮而剋制的色彩。畫幅{{aspect_ratio}}，不新增第三個產品或無關水果。",
  "en": "Create a dynamic two-can soda campaign for fictional brand {{fictional_drink_brand}}. The left can is {{fruit}} flavored, framed by an explosive arc of fruit pieces and water under orange-pink light. The right can is lemon flavored, with cold-water splashes and neon-green light. Exactly two cans, each clearly displaying the same brand and its own flavor; realistic condensation and moving droplets. 50mm commercial photography, crisp metal texture, cinematic splashes and bright controlled color. Aspect ratio {{aspect_ratio}}. No third product or unrelated fruit."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_311 = {
  "zh-tw": "日出時分{{flower_field_species}}田中女子的上中下縱向排列的三聯畫。\n上部：半身像，閉著眼睛，{{clothing_female}}，一隻手放在頭髮裡，模糊的{{flower_field_species}}前景。\n中部：特寫鏡頭，看著鏡頭，蓬亂的頭髮，薄紗圍巾，臉上的陽光。\n下部：四分之三鏡頭，手持{{flower_field_species}}花束，飄逸的裙子，柔和的粉彩天空，溫暖的夢幻色調。",
  "en": "A vertically stacked three-panel triptych of a woman in a {{flower_field_species}} field at sunrise.\nTop: Waist-up, eyes closed, {{clothing_female}}, one hand in hair, blurred {{flower_field_species}} foreground.\nMiddle: Close-up, looking at camera, tousled hair, sheer scarf, sunlight on face.\nBottom: Three-quarter shot, holding {{flower_field_species}} bouquet, flowing skirt, soft pastel sky, warm dreamy tones."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_310 = {
  "zh-tw": "建立一個 {{snack_subject}} 的品牌技術訊息圖，結合產品的真實照片或照片級真實渲染，並將技術註釋覆蓋層直接置於其上。在純白攝影棚背景上使用帶有策略性 {{dominant_colors}} 點綴的黑色墨水風格線條畫（建築草圖外觀），包括：\n• 關鍵元件標記\n• 顯示結構、分層或內部設計的內部截面圖\n• 測量資料、尺寸和規格\n• 帶有成分和數量的材料標註\n• 指示主要功能和結構完整性的箭頭\n• 顯示關鍵機械或設計元素的簡單示意圖或剖面圖\n• 可持續性標註\n標題位置：位於手繪技術註釋框內，帶有強調色邊框，粗體字顯示產品名稱，置於上角。\n風格與佈局規則：\n• 真實產品保持清晰可見\n• 註釋具有素描感、技術感和建築感\n• 強調色用於高光（佔線條工作的 20-30%），黑色用於主要技術線條（70-80%）\n• 構圖整潔，負空間平衡\n• 具有教育意義、食品工程氛圍和高端品牌感\n• 在角落包含微妙的品牌標誌\n視覺風格：極簡技術插畫美學，黑色線條在真實圖像上帶有點綴，精確但略帶手繪感。\n調色板：白色背景，黑色註釋線/文本，{{dominant_colors}} 僅用於點綴和關鍵標註。\n輸出：1080×1080，超清晰，社交媒體動態優化，無水印。\n僅採用使用者提供的尺寸、配料與可持續性資料；缺失資料省略，不編造認證或數值。",
  "en": "Create a branded technical infographic of a {{snack_subject}}, combining a realistic photograph or photoreal render of the product with technical annotation overlays placed directly on top. Use black ink–style line drawings with strategic {{dominant_colors}} accents (architectural sketch look) on a pure white studio background, including:\n• Key component labels\n• Internal cross-section showing structure, layering, or internal design\n• Measurements, dimensions, and specifications\n• Material callouts with composition and quantities\n• Arrows indicating function for primary features and structural integrity\n• Simple schematic or sectional diagram showing key mechanical or design elements\n• Sustainability callouts\nTitle placement: Inside a hand-drawn technical annotation box with accent border reading the product name in bold font, positioned in upper corner.\nStyle & layout rules:\n• The realistic product remains clearly visible\n• Annotations feel sketched, technical, and architectural\n• Accents used for highlight (20-30% of linework), black for primary technical lines (70-80%)\n• Clean composition with balanced negative space\n• Educational, food-engineering vibe with premium branding\n• Include subtle brand logo mark in corner\nVisual style: Minimal technical illustration aesthetic, black linework with accents over realistic imagery, precise but slightly hand-drawn feel.\nColor palette: White background, black annotation lines/text, {{dominant_colors}} for accents and key callouts only.\nOutput: 1080×1080, ultra-crisp, social-feed optimized, no watermark.\nUse only supplied dimensions, ingredients and sustainability information. Omit missing data; do not invent certification or numeric claims."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_309 = {
  "zh-tw": "{{character_name}} 完全由天然樹葉製成，創意樹葉拼貼藝術，分層綠葉和幹葉構成身體、面部和衣服，可見葉脈和紋理，手工植物藝術風格，{{background_color_clean}}，俯視平鋪構圖，高度細節，柔和自然光，逼真樹葉紋理，8k",
  "en": "{{character_name}} made entirely from natural leaves,\ncreative leaf collage art,\nlayered green and dry leaves forming body,\nface and clothes,\nvisible leaf veins and textures,\nhandcrafted botanical art style,\n{{background_color_clean}},\ntop-down flat lay composition,\nhighly detailed,\nsoft natural lighting,\nrealistic leaf textures,\n8k"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_304 = {
  "zh-tw": "極簡主義，新中式風格立體圖形設計，圖像下端有楷體中國文字：“{{main_text}}”，“2026/04/18”，署名 “CHINA”，和“\n{{artwork_signature}}\n\"；\n平整純白色的亞光質感厚藝術紙上繪充滿東方詩意氛圍的山水創意畫，不規則的撕紙效果；\n中國的神獸：{{monster_element}}，身形圖案完整，美輪美奐，，線條柔美靈動,眼睛炯炯有神，威嚴的神態，優雅的姿勢，奢華裝飾藝術，中國傳統紋飾；\n熒光藍色線條，0.5mm極細金色金屬質感勾邊，潑白墨大筆觸，色彩渲染，紅底，藍色的浪漫詩意視覺；\n冷暖光交織的夢幻唯美場景，強烈的光影對比氛圍，花輕舞的時光敘事，東風禪意，畫面有大面積留白，框架構圖，底部留白，細節清晰。",
  "en": "Minimalism, Neo-Chinese style three-dimensional graphic design, at the bottom of the image there are Chinese characters in regular script: \"{{main_text}}\", \"2026/04/18\", signature \"CHINA\", and \"\n{{artwork_signature}}\n\";\nDrawn on flat, pure white matte textured thick art paper, a creative landscape painting full of oriental poetic atmosphere, irregular torn paper effect;\nChinese mythical beast: {{monster_element}}, complete body pattern, magnificent,, soft and agile lines, bright piercing eyes, majestic demeanor, elegant posture, luxury decorative art, Chinese traditional patterns;\nFluorescent blue lines, 0.5mm ultra-fine gold metallic texture outlining, large strokes of splashed white ink, color rendering, red background, romantic and poetic blue vision;\nDreamy and aesthetic scene where cold and warm lights intertwine, strong light and shadow contrast atmosphere, time narrative of flowers dancing lightly, Oriental Zen, the picture has a large area of blank space, framework composition, blank space at the bottom, clear details."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_299 = {
  "zh-tw": "以塗鴉速寫風表現{{illustration_subject}}，整體呈現快速勾勒、自由變形、即興手繪與草稿式的視覺效果。線條隨手、誇張、可粗細不一，略顯凌亂但具有節奏和表現力，強調概括、誇張、趣味和隨性，而不是嚴謹寫實或精細刻畫。\n\n顏色採用粗糙、幹刷感明顯的塊面表現，可保留不均勻的塗抹痕跡、刷痕、飛白與覆蓋感，色彩根據{{illustration_subject}}自動適配，但整體保持塗鴉式、速寫式、概括式的表達。不要透明水彩暈染效果，不要細膩水彩過渡，不要紙紋理，不要柔和霧化，不要夢幻質感。\n\n背景以留白為主，保持簡潔、輕鬆、未完成感和設計感，可加入少量輔助性符號、箭頭、記號、圈畫、重複線、隨手寫的文字或其他塗鴉元素，以增強速寫本或隨筆式視覺語言，但不可過於擁擠，不可破壞主體和留白氣質。\n\n畫面內容不需要預先寫清楚，由{{illustration_subject}}自動推演並生成最適合的主體形象、動作、相關元素、符號或簡化場景，整體保持統一的塗鴉速寫風和誇張概括的表現方式，避免複雜寫實背景和過度鋪陳。\n畫面中需自然加入專屬簽名“{{artwork_signature}}”，作為畫面的一部分，位置低調但清晰，可放在左下角、右下角或標題附近，風格需與整體版式統一，像作品署名或設計落款；簽名字體精緻、剋制、進階，不可過大，不可破壞主體構圖，不可顯得突兀或廉價。",
  "en": "Express {{illustration_subject}} in a graffiti sketch style, presenting an overall visual effect of quick outlining, free deformation, impromptu hand-drawing, and draft-like appearance. The lines are casual, exaggerated, and can vary in thickness, slightly messy but rhythmic and expressive, emphasizing generalization, exaggeration, playfulness, and spontaneity, rather than rigorous realism or detailed rendering. Colors are expressed in rough blocks with a distinct dry-brush feel, retaining uneven smearing traces, brush strokes, dry-brush effects, and a sense of coverage. Colors automatically adapt to {{illustration_subject}}, but the overall expression remains graffiti-style, sketch-style, and generalized. Do not use transparent watercolor blooming effects, do not use delicate watercolor transitions, do not use paper textures, do not use soft atomization, and do not use dreamy textures. The background is mainly left blank, maintaining a sense of simplicity, relaxation, incompleteness, and design. A small number of auxiliary symbols, arrows, marks, circled areas, repeated lines, casually written text, or other graffiti elements can be added to enhance the visual language of a sketchbook or jotting style, but it must not be too crowded, and must not destroy the subject and the blank space temperament. The image content does not need to be written out in advance; the most suitable subject image, actions, related elements, symbols, or simplified scenes are automatically deduced and generated by {{illustration_subject}}, keeping the overall unified graffiti sketch style and exaggerated generalized expression, avoiding complex realistic backgrounds and over-elaboration. The exclusive signature \"{{artwork_signature}}\" needs to be naturally added to the image as a part of the picture. The position should be low-key but clear, and can be placed in the bottom left corner, bottom right corner, or near the title. The style must be consistent with the overall layout, like an artwork signature or a design sign-off; the signature font should be exquisite, restrained, and high-end, must not be too large, must not destroy the subject composition, and must not appear abrupt or cheap."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_298 = {
  "zh-tw": "一張引人注目的{{year_number}}年春季波士頓城市海報，具有優雅的慶典氛圍和大膽的當代設計。在乾淨的米白色紋理背景上，帶有大面積的留白，一個微型的單人賽艇手在圖像右下角一條狹窄的反光水帶上划行。船槳劃出的尾波以動態的書法曲線向上掃過，逐漸變成查爾斯河，然後再變成一幅夢幻般的手繪波士頓全景。在這個流動的河流形狀的構圖中包含著標誌性的波士頓元素：後灣天際線、燈塔山紅磚聯排別墅、橡樹街、波士頓公共花園、天鵝船、扎基姆橋、芬威球場啟發的細節、歷史悠久的磚砌建築、港口渡輪，以及這座城市的水濱氛圍。柔和的晨霧，金色的春季光線，深紅和金色的微妙節日點綴，豐富的細節，層次分明的深度，精緻的城市海報美學，清新而優雅，視覺上強有力但不擁擠。左下角的優雅排版寫著“SPRING {{year_number}}”，並附有垂直標語“{{advert_campaign_tagline}}”，文字清晰且構圖優美，高端平面設計，9:16",
  "en": "A striking Spring {{year_number}} city poster for Boston with an elegant celebratory mood and a bold contemporary design. On a clean off-white textured background with large areas of negative space, a miniature single sculler rows across the lower right corner of the image on a narrow ribbon of reflective water. The wake from the oar sweeps upward in a dynamic calligraphic curve, gradually transforming into the Charles River and then into a dreamlike hand-painted panorama of Boston. Inside this flowing river-shaped composition are iconic Boston elements: the Back Bay skyline, Beacon Hill brownstones, Acorn Street, Boston Public Garden, Swan Boats, Zakim Bridge, Fenway-inspired details, historic brick architecture, harbor ferries, and the city’s waterfront atmosphere. Soft morning fog, golden spring light, subtle festive accents in crimson and gold, rich detail, layered depth, sophisticated city-poster aesthetics, fresh and refined, visually powerful but not overcrowded. Elegant typography in the lower left reads “SPRING {{year_number}}” with a vertical slogan “{{advert_campaign_tagline}}”, text clear and beautifully composed, premium graphic design, 9:16"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_297 = {
  "zh-tw": "請先上傳所需參考圖片。\n\n根據上傳的手寫食譜，製作{{recipe_page_layout}}，標題為“{{main_text}}”。先準確辨認食材、用量和步驟，保留原食譜邏輯；看不清的內容標註待確認，不自行猜測。使用溫暖自然光的食材俯拍圖、清晰步驟編號、整潔標記和剋制的編輯字體。保留適量留白，圖文建立明確對應。僅展示原稿中已提供的營養或熱量資料，不聲稱已搜尋或核驗額外資料。",
  "en": "Upload the required reference image before generating.\n\nTurn the uploaded handwritten recipe into {{recipe_page_layout}} titled “{{main_text}}”. Accurately transcribe ingredients, quantities and steps, preserving the recipe’s logic. Mark illegible details for confirmation rather than guessing. Use warm naturally lit ingredient flat lays, clear step numbers, tidy labels and restrained editorial typography. Maintain whitespace and explicit image-to-step relationships. Include nutrition or calorie data only when provided in the source; do not claim additional research or verification."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_286 = {
  "zh-tw": "以珠江新城現代都市景觀為靈感的剪紙藝術，通過精巧的鏤空手法在一整幅紙上，立體刻畫廣州塔、東西雙塔等地標建築與繁華城景。\n所有建築與元素均以流暢的線條與結構相連，無孤立部分，構成一幅完整的都市畫卷。\n畫面採用{{paper_cut_finish}}材質，表面帶有細膩的明暗光澤，在光照下呈現柔和的高光與陰影，彷彿被城市燈光輕輕照亮。\n背景以虛化的珠江新城天際線為襯，點綴隱約可見的花城廣場與樹木輪廓，整體透出現代浪漫的氛圍。\n作品中巧妙融入輕盈的蒲公英絨毛或星光般的動態光點，象徵夢想與活力在這座新城中飄散飛揚。整體呈現8K超高清視覺，{{detail_level}}，真實而富有藝術感染力。",
  "en": "Paper-cut art inspired by the modern urban landscape of Zhujiang New Town, through exquisite hollow-carving techniques on a single sheet of paper, three-dimensionally depicting landmark buildings such as Canton Tower, East and West Twin Towers, and the bustling cityscape. All buildings and elements are connected by smooth lines and structures, with no isolated parts, forming a complete urban scroll. The picture uses {{paper_cut_finish}} material, with delicate light and dark gloss on the surface, presenting soft highlights and shadows under illumination, as if gently illuminated by city lights. The background is set against a blurred Zhujiang New Town skyline, dotted with faintly visible outlines of Huacheng Square and trees, overall revealing a modern romantic atmosphere. The work cleverly integrates light dandelion fluff or starlight-like dynamic light points, symbolizing dreams and vitality fluttering and flying in this new city. The overall presents 8K ultra-high-definition vision, {{detail_level}}, realistic and full of artistic appeal."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_284 = {
  "zh-tw": "一個驚豔的18歲中國女孩，擁有年輕純真的臉龐和逼真的皮膚紋理，坐在她臥室裡一張舒適且略顯凌亂的床上。她正用智慧手機拍鏡子自拍，捕捉一個自然且親密的瞬間。穿著{{casual_mirror_outfit}}和整潔的白色船襪。柔和的自然光（黃金時刻）從側面窗戶照進來，營造出一種溫暖、富有情緒感和電影般的氛圍。35毫米鏡頭，對鏡子中的主體保持銳利對焦，帶有美麗模糊背景（散景）的景深。照片寫實，8K，高分辨率，影棚級質量，傑作。反向提示詞：沒有多餘的肢體，沒有變形的手，沒有模糊，沒有噪點，沒有水印，沒有文字，沒有卡通/動漫風格。長寬比：{{aspect_ratio}}。",
  "en": "A stunning 18-year-old Chinese girl with a youthful, pure face and realistic skin texture, sitting on a cozy, slightly messy bed in her bedroom. She is taking a mirror selfie with a smartphone, capturing a natural and intimate moment. Wearing {{casual_mirror_outfit}} and neat white crew socks. Soft natural light (golden hour) streams in from a side window, creating a warm, moody, and cinematic atmosphere. 35mm lens, sharp focus on the subject in the mirror, depth of field with a beautifully blurred background (bokeh). Photorealistic, 8K, high resolution, studio quality, masterpiece.\nNegative Prompts: no extra limbs, no deformed hands, no blur, no noise, no watermark, no text, no cartoon/anime style. Aspect Ratio: {{aspect_ratio}}."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_180 = {
  "zh-tw": "設計四張同系列虛構喜劇電影海報，以{{character_subject}}為主角。人物真實、表演認真，情境卻輕微荒誕，讓觀眾產生“這竟然是一部電影”的幽默感，不貶損人物。四張保持同一身份與專業電影美術標準，分別用不同場景、構圖和色彩展開同一故事。日文主標題固定為“{{main_text}}”，排版清晰，其他簡介與虛構上映訊息用簡短日文。將四張海報整齊排為2×2，每張留出獨立邊界。",
  "en": "Design four coordinated posters for a fictional surreal comedy starring {{character_subject}}. Keep the character realistic and the performance earnest, while the situation is subtly absurd and affectionate rather than demeaning. Preserve the same identity and professional film art direction across four different scenes, compositions and color treatments. Use the exact Japanese title “{{main_text}}”, with short Japanese synopsis and fictional release information. Present the posters in a neat 2×2 layout with distinct boundaries."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_279 = {
  "zh-tw": "極簡新中式美學風格，畫面以淡雅的灰白色為底，呈現出一種紙藝剪影般的立體感。\n一條S形蜿蜒的裂痕狀邊緣將畫面分割，彷彿撕開了一層紙面，露出內部色彩斑斕的東方山水景象。\n裂口內，一條蜿蜒的河流自上而下貫穿整個構圖，河水以深淺不一的藍色渲染，層次分明，彷彿流動的絲帶。\n河岸兩側點綴著青翠的山丘與梯田，色彩柔和，綠紅交織，展現出田園的寧靜之美。\n沿河而建的古風建築錯落有致，飛簷翹角，白牆黛瓦，在光影的映襯下更顯古樸典雅。\n岸邊樹木蔥蘢，枝葉輕盈，一艘小船靜泊於水中央，增添了幾分悠然意境。\n整體構圖呈S形曲線，富有韻律感，彷彿自然與人文的和諧共生。\n畫作邊緣採用撕紙效果，營造出立體浮雕般的視覺體驗。\n下方題字\"{{main_text}}\"以黑色楷體書寫，日期\"2026/04/18\"與紅色印章相呼應，底部\"CHINA\"字樣莊重醒目，署名\"{{artwork_signature}}\"低調收尾，整體氛圍靜謐深遠，充滿詩意與哲思。",
  "en": "Minimalist neo-Chinese aesthetic style, the picture uses an elegant grayish-white as the background, presenting a three-dimensional sense like paper art silhouettes. A winding S-shaped crack-like edge divides the picture, as if tearing open a layer of paper, revealing the colorful oriental landscape scene inside. Inside the crack, a winding river runs through the entire composition from top to bottom, the river water is rendered in different shades of blue, with clear layers, like a flowing ribbon. Both sides of the riverbank are dotted with verdant hills and terraced fields, the colors are soft, green and red interwoven, showing the tranquil beauty of the pastoral. Ancient-style buildings built along the river are well-proportioned, with flying eaves and upturned corners, white walls and black tiles, appearing more quaint and elegant against the light and shadow. The trees on the bank are lush, the branches and leaves are light and graceful, a small boat is quietly moored in the middle of the water, adding a bit of leisurely artistic conception. The overall composition presents an S-shaped curve, full of rhythm, as if the harmonious coexistence of nature and humanity. The edges of the painting adopt a torn paper effect, creating a visual experience like a three-dimensional relief. The inscription \"{{main_text}}\" at the bottom is written in black regular script, the date \"2026/04/18\" echoes with the red seal, the word \"CHINA\" at the bottom is solemn and eye-catching, and the signature \"{{artwork_signature}}\" ends in a low-key way. The overall atmosphere is quiet and profound, full of poetry and philosophical thinking."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_278 = {
  "zh-tw": "現代鉛筆插畫，意大利阿馬爾菲海岸復古旅行海報插畫，全景海岸懸崖公路場景，{{vintage_car}}沿著彎曲的海濱公路行駛，帶有小帆船的深藍色地中海，色彩繽紛的粉彩山腰村莊，帶有柔軟雲朵的明亮藍天，帶有鮮豔黃色檸檬的檸檬樹枝框定前景，溫暖的夏日陽光，大膽鮮豔的色彩，復古1950年代旅行海報風格，電影級構圖，高細節，{{render_style}}，圖形插畫。手繪風格，帶有鬆散筆觸和清晰輪廓的插畫。高對比度調色板，保持背景與元素之間的色彩和諧。現代與裝飾性美學。",
  "en": "Modern pencil illustration of Vintage travel poster illustration of the Amalfi Coast, Italy, panoramic coastal cliff road scene, {{vintage_car}} driving along a curved seaside road, deep blue Mediterranean sea with small sailboats, colorful pastel hillside village, bright blue sky with soft clouds, lemon tree branches with vibrant yellow lemons framing the foreground, warm summer sunlight, bold vibrant colors, retro 1950s travel poster style, cinematic composition, high detail, {{render_style}}, graphic illustration. Hand-drawn style, illustration with loose strokes and defined contours. High-contrast color palette, maintaining chromatic harmony between background and elements. Contemporary and decorative aesthetic."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_277 = {
  "zh-tw": "奢華魅力美容肖像：, 美麗的黑人女性, 青春活力, 奶油香草色, {{hair_style}}, 紅木色, 微妙的自信, 有質感的面料, 藍寶石色, {{jewelry_style}}, 海濱微風, 鏡頭光暈效果, 懷舊的, 電影鏡頭, 對稱構圖, 柔焦, 進階時尚攝影, 單色的, 水光質感, 神秘張力, 分層元素",
  "en": "Luxury Glam Beauty Portrait:, Beautiful Black woman, youthful spirit, creamy vanilla, {{hair_style}}, mahogany red, subtle confidence, textured fabric, sapphire blue, {{jewelry_style}}, beachside breeze, lens flare effect, nostalgic, cinematic lens, symmetrical composition, soft focus, high fashion photography, monochromatic, dewy finish, mysterious tension, layered elements"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_274 = {
  "zh-tw": "一張手繪風格的城市美食地圖，以成都為主題。畫面以鳥瞰視角的手繪簡化城市地圖為底，標註主要道路和地標但不追求精確比例而是追求可愛的手繪感。地圖上分佈著 12 個美食地點的精緻手繪小插畫：春熙路的串串香（一把竹籤插著各種食材冒著熱氣）、寬窄巷子的三大炮（三個糯米糰子飛向銅盤）、建設路的蛋烘糕（金黃酥脆正在翻面）、玉林路的火鍋（九宮格鍋翻滾冒泡）等，每個插畫約佔地圖的 5% 面積，旁邊用手寫體標註店名和一句推薦語\"{{advert_campaign_tagline}}\"。地圖邊緣用手繪藤蔓和辣椒裝飾形成邊框。右下角有一個手繪指南針和圖例說明。左上角標題\"成都·吃貨暴走地圖\"使用胖圓的手繪美術字配辣椒裝飾。整體畫風為水彩+彩鉛混合的手繪質感，顏色以暖色系（辣椒紅、薑黃、翠綠）為主，圖片比例 {{aspect_ratio}}。\n店名與評價僅使用使用者提供的訊息，未提供時標註為範例地點，不編造真實店鋪推薦。",
  "en": "A hand-drawn style city food map themed around Chengdu. The background is a bird's-eye view hand-drawn simplified city map, marking main roads and landmarks, not pursuing precise proportions but pursuing a cute hand-drawn feel. Distributed on the map are exquisite hand-drawn small illustrations of 12 food locations: Chuandu Chuanxiang skewers at Chunxi Road (a bunch of bamboo skewers with various ingredients emitting steam), Sandapao at Kuanzhai Alley (three glutinous rice balls flying towards a copper plate), Danhonggao at Jianshe Road (golden and crispy, being flipped), hotpot at Yulin Road (nine-grid pot rolling and bubbling), etc. Each illustration accounts for about 5% of the map area, with handwritten store names and a recommendation phrase \"{{advert_campaign_tagline}}\" next to it. The edge of the map is decorated with hand-drawn vines and chili peppers to form a border. There is a hand-drawn compass and legend description in the bottom right corner. The title \"Chengdu · Foodie Walking Map\" in the top left corner uses chubby round hand-drawn artistic fonts decorated with chili peppers. The overall art style is a mixed hand-drawn texture of watercolor and colored pencils, with colors mainly in warm tones (chili red, ginger yellow, emerald green), image ratio {{aspect_ratio}}.\nUse user-supplied shop names and reviews only. Otherwise label locations as examples rather than inventing real recommendations."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_507 = {
  "zh-tw": "製作手工鉤織{{character_animal}}玩偶，穿{{cute_outfit}}，手持{{accessory}}。柔軟毛線、清晰針目與精細縫合，頭身圓潤可愛，具有真實的填充體積和手作細微不規則。置於溫暖木質手工桌上，背景柔焦、光線暖而低飽和，懷舊日式鉤織玩偶審美。只展示一個完整玩偶，不加入文字、包裝或多餘肢體。",
  "en": "Create a handcrafted crochet doll of {{character_animal}}, dressed in {{cute_outfit}} and holding {{accessory}}. Soft yarn, visible stitches, fine seams, rounded proportions, believable stuffing and tiny handmade irregularities. Place one complete doll on a warm wooden craft table with a softly blurred background, muted warm light and nostalgic amigurumi charm. No text, packaging or extra limbs."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_266 = {
  "zh-tw": "一張平放著的打開的筆記本的業餘照片，裡面填滿了用{{note_pen}}寫的手寫筆記。筆跡隨意且略顯凌亂，就像個人筆記，自然的瑕疵，劃掉的單詞，劃線的標題。從略高角度拍攝，來自窗戶的自然日光，未使用閃光燈。隨意的桌面設定，用 iPhone 拍攝。\n筆記內容圍繞“{{main_text}}”，用清晰自然的簡短文字書寫。",
  "en": "Amateur photo of an open notebook lying flat, filled with handwritten notes in {{note_pen}}. The handwriting is casual and slightly messy, like personnal notes, natural imperfections, crossed out words, underlined headings. Shot from slightly above, natural daylight from a window, no flash. Casual desk setting, shot on iPhone\nThe handwritten notes concern “{{main_text}}”, using short, legible and natural wording."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_510 = {
  "zh-tw": "為名為{{show_name}}的寵物商店設計一個macOS風格應用圖標，以{{character_animal}}和小店招牌為視覺主題。只輸出單個連續圓角方形圖標，居中佔白色畫布約80%，四周均勻留白。淺色現代擬物質感、柔和立體層次、清晰輪廓與細膩陰影，小尺寸仍容易識別。招牌上的店名短小清晰，不畫系統桌面、設備樣機或多個圖標。",
  "en": "Design one macOS-style app icon for a pet shop named {{show_name}}, featuring {{character_animal}} and a miniature shop sign. A single continuous-corner squircle is centered on white, occupying roughly 80% of the canvas with even padding. Modern light skeuomorphism, gentle depth, clear silhouettes and delicate shadows, readable at small sizes. Keep the shop name small and legible on the sign. No desktop UI, device mockup or multiple icons."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_522 = {
  "zh-tw": "請先上傳所需參考圖片。\n\n將上傳照片中的人物轉為溫暖的二維兒童繪本角色，保留可識別的臉型、膚色、真實發型、服裝顏色、花紋和全部可見配飾，不擅自新增帽子、辮子或首飾。大圓頭、小身體、短手臂與窄肩，點狀眼睛、小微笑嘴與柔和腮紅。使用{{draw_style}}，深棕不規則描邊、紙紋和不均勻顏料，避免寫實五官、3D、動漫眼睛或光滑向量。胸部至腰部以上正面肖像，1:1居中構圖，{{background_color_clean}}紙面背景，保留平衡留白，不加場景、邊框或文字。",
  "en": "Upload the required reference image before generating.\n\nRedraw the person in the uploaded photo as a warm 2D children’s storybook character. Preserve recognizable facial shape, skin tone, real hair, clothing colors, patterns and all visible accessories; do not invent hats, braids or jewelry. Oversized rounded head, compact body, short arms and narrow shoulders, dot eyes, a tiny smile and soft blush. Use {{draw_style}}, irregular dark-brown outlines, paper grain and uneven pigment. Avoid realistic facial anatomy, 3D, anime eyes or smooth vector edges. A centered front-facing chest-to-waist-up portrait in square 1:1 format, on a {{background_color_clean}} paper background with balanced whitespace. No scenery, border or text."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_238 = {
  "zh-tw": "一幅超現實主義數位插畫風格，採用低角度仰拍視角。畫面描繪了一條巨型彩色{{cosmic_creature}}遨遊在夢幻般的星雲中，四周環繞著色彩鮮豔的星雲與氣泡。\n畫面中央還站著一個小人，背對觀眾，神情平靜地仰望空中這條巨大的{{cosmic_creature}}，{{cosmic_creature}}頭向下看著小人。\n整體畫面呈現出強烈的大小對比，氛圍空靈又夢幻。比例{{aspect_ratio}}",
  "en": "A surrealist digital illustration style, adopting a low-angle upward perspective. The picture depicts a giant colorful {{cosmic_creature}} swimming in a dreamy nebula, surrounded by colorful nebulae and bubbles. In the center of the picture stands a small figure, with their back to the audience, calmly looking up at this huge {{cosmic_creature}} in the air, and the {{cosmic_creature}} is looking down at the small figure. The overall picture presents a strong size contrast, and the atmosphere is ethereal and dreamy. Aspect ratio {{aspect_ratio}}"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_237 = {
  "zh-tw": "製作虛構夏季碳酸飲料“{{fictional_drink_brand}}”的高端產品廣告，主體為500ml透明PET瓶。標記名稱清晰，鮮切柑橘、凝水與冰塊強調清爽，產品居中突出，背景留出簡潔文案空間。採用明亮自然光、真實瓶身折射和剋制的夏日配色，畫幅{{aspect_ratio}}。僅呈現明確的產品名稱，不編造銷量、認證、折扣或健康功效。",
  "en": "Create a premium product advertisement for fictional summer carbonated beverage “{{fictional_drink_brand}}” in a clear 500ml PET bottle. Legible label, freshly cut citrus, condensation and ice communicate refreshment. Keep the bottle dominant with clean copy space in the background. Bright natural light, realistic bottle refraction and a restrained summer palette, aspect ratio {{aspect_ratio}}. Show the product name without invented sales, certifications, discounts or health claims."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_231 = {
  "zh-tw": "創意藝術字體“{{hero_typography_word}}”，秀麗筆手寫風格，整體文字橫版排列，具有強烈視覺衝擊力；\n深度融合手寫書法筆意，筆觸帶毛筆書寫的粗獷灑脫，如揮毫潑墨的肆意勁道；\n起收筆的飛白，頓挫，盡顯促銷的火爆張力，文字的形態打破規整，筆畫的粗細變化；\ndutch angle，營造出動感衝刺的氣勢，字形呈奔放之勢；\n重心上揚如蓄勢待發，筆畫的伸展，穿插毫無拘束，似全力衝刺的勁道；\n整體架構疏密交織，緊密處如促銷熱潮的洶湧，留白處似優惠間隙的呼吸感；\n{{background_color_clean}}打底，完美契合熱烈氛圍，藝術字的形態與色彩酣暢傳遞。",
  "en": "Creative artistic typography \"{{hero_typography_word}}\", hand-written style with a fine brush, overall text arranged horizontally, with strong visual impact;\nDeeply integrated with the essence of handwritten calligraphy, the brushstrokes carry the rugged and free-spirited nature of brush writing, like the unrestrained vigor of splashing ink;\nThe flying white and pauses at the start and end of the strokes fully display the explosive tension of a promotion, the form of the text breaks away from neatness, with variations in the thickness of the strokes;\ndutch angle, creating a dynamic sprinting momentum, the font shape shows a bold and unrestrained trend;\nThe center of gravity rises like being ready to launch, the stretching and interlacing of the strokes are completely unconstrained, like the vigor of a full-force sprint;\nThe overall structure is intertwined with density and sparseness, the tight parts are like the surging of a promotional craze, and the blank spaces are like the breathing sense during promotional gaps;\n{{background_color_clean}} as the base, perfectly fitting the passionate atmosphere, the form and color of the artistic typography are conveyed with full expressiveness."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_230 = {
  "zh-tw": "新中式極簡風格高端城市海報，{{aspect_ratio}}豎版構圖，以廣州為核心主題，畫面中心為抽象幾何化的廣州塔，造型簡潔但具有辨識度，\n\n整體採用S型流動構圖，從下方向上延展，珠江水系被設計為流動的水波紋與傳統祥雲紋樣融合，環繞整個畫面形成視覺動線，\n\n廣州地標建築以“留白+線描+局部色塊”的方式點綴其中：珠江新城雙塔、獵德大橋、白雲山輪廓、嶺南騎樓，\n傳統與現代建築自然融合，層次遞進，遠近虛實分明，\n\n風格控制：極簡 + 進階 + 東方意境，不雜亂不過度寫實，\n\n色彩方案（重點）：\n高飽和但剋制 ，{{dominant_colors}}為主色，\n輔以少量暖金高光點綴，形成強烈視覺衝擊但不俗豔，\n\n背景：大面積純淨留白或淡宣紙肌理，增強呼吸感與進階感，\n\n細節：祥雲與水紋具有輕微浮雕/燙金質感，\n局部加入微光粒子或流動光線，增強現代感，\n\n光影：柔和漸變光+局部高光，突出恢弘大氣氛圍，\n\n整體風格：國潮進階插畫 / 品牌海報級質感 / 8K / 超清細節",
  "en": "Neo-Chinese minimalist style high-end city poster, {{aspect_ratio}} vertical composition, with Guangzhou as the core theme, the center of the image is an abstract geometric Canton Tower, simple in shape but highly recognizable,\n\nThe overall adopts an S-shaped flowing composition, extending from bottom to top, the Pearl River water system is designed as flowing water ripples fused with traditional auspicious cloud patterns, surrounding the entire image to form a visual dynamic line,\n\nGuangzhou landmark buildings are embellished in it in the way of \"blank space + line drawing + local color blocks\": Zhujiang New Town Twin Towers, Liede Bridge, Baiyun Mountain outline, Lingnan arcade houses,\nTraditional and modern architecture naturally blend, progressive layers, clear distinction between far and near, virtual and real,\n\nStyle control: minimalist + high-end + Eastern artistic conception, not cluttered and not overly realistic,\n\nColor scheme (key point):\nHigh saturation but restrained, {{dominant_colors}} as the main colors,\nSupplemented by a small amount of warm gold highlight embellishments, forming a strong visual impact but not tacky,\n\nBackground: large area of pure blank space or light Xuan paper texture, enhancing a sense of breathing and high-end feel,\n\nDetails: auspicious clouds and water ripples have a slight relief/gold stamping texture,\nLocally add faint light particles or flowing light lines to enhance modernity,\n\nLight and shadow: soft gradient light + local highlights, highlighting a magnificent and grand atmosphere,\n\nOverall style: Guochao high-end illustration / brand poster-level texture / 8K / ultra-clear details"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_229 = {
  "zh-tw": "【背景與骨架線條】\n純黑深邃底色，一條粗壯有力的墨色書法S型曲線自畫面一端蜿蜒貫穿至另一端，筆觸蒼勁，墨跡濃淡有致，如大寫意行筆，構成整幅畫面的視覺骨架與敘事動線。\n【主體：透明畫眉鳥】\n曲線上方，一隻展翅飛翔的畫眉鳥佔據視覺核心；身體呈玻璃透明質感，內部對應傳統建築群疊影，藍綠色光流在透明羽翼間流轉折射，彷彿時間長河與文明記憶凝縮其中；輪廓以{{enamel_metal}}細線勾邊，增強立體感與神聖感。\n【中景：古典建築序列】\n畫眉鳥下方，沿墨線曲線錯落分佈廣州的各種風景名勝：白雲山、陳家祠、雙子塔、廣州塔、獵德大橋、海珠塔依次浮現；主色調青綠與淡金，建築細節清晰，琉璃瓦、飛簷翹角、石階迴廊；木棉花簇擁點綴於建築周圍，花瓣隨風輕散，靜謐而悠遠；幾朵水墨雲朵輕盈飄浮其間，增添空靈層次。\n【前景：白鶴與水面】\n前景湖畔：數只白鶴或靜立水邊、或振翅騰飛，姿態各異，優雅從容；淺藍湖面如鏡，倒影盪漾，波光細碎，營造寧靜氛圍。\n【遠景：山巒】\n遠處山巒層疊起伏，青黛色暈染，墨色由濃至淡，朦朧氤氳，富有水墨層次；與前景形成近實遠虛的空間縱深。\n【構圖與光影】\n非線性透視構圖，墨線曲線為敘事主軸，古今元素沿線嵌入；光源自畫面中心向外輻射擴散，形成強烈明暗對比，中心亮、四周漸暗；冷色調主導（深藍、青綠、銀白），暖色點綴（櫻花粉、淡金），和諧而神秘；東方美學與現代意象交融，超現實詩意意境。\n【技術規格】\n8K超高清渲染，極致細節精度，最佳畫質，比例 {{aspect_ratio}}",
  "en": "[\n  Background and Skeleton Lines\n] Pure black deep background,\na thick and powerful ink calligraphy S-shaped curve meanders from one end of the picture to the other,\nwith vigorous brushstrokes and well-proportioned ink shades,\nlike freehand brushwork,\nforming the visual skeleton and narrative dynamic line of the entire picture. [\n  Subject: Transparent Thrush\n] Above the curve,\na flying thrush with spread wings occupies the visual core; the body has a glass transparent texture,\nwith overlapping shadows of traditional architectural complexes mapped inside,\nblue-green light flows circulate and refract between the transparent wings,\nas if the long river of time and civilized memories are condensed within it; the outline is bordered with extremely thin {{enamel_metal}} lines to enhance three-dimensionality and sacredness. [\n  Midground: Classical Architecture Sequence\n] Below the thrush,\nvarious scenic spots in Guangzhou are scattered along the ink curve: Baiyun Mountain,\nChen Clan Ancestral Hall,\nTwin Towers,\nCanton Tower,\nLiede Bridge,\nHaizhu Tower appear in sequence; the main tone is cyan-green and pale gold,\narchitectural details are clear,\nglazed tiles,\nflying eaves,\nstone steps and corridors; kapok flowers cluster and decorate around the buildings,\npetals scatter lightly with the wind,\nquiet and distant; a few ink clouds float lightly among them,\nadding ethereal layers. [\n  Foreground: White Cranes and Water Surface\n] Lakeside in the foreground: several white cranes either stand quietly by the water or flap their wings to soar,\nwith different postures,\nelegant and calm; the light blue lake surface is like a mirror,\nreflections rippling,\nshimmering light,\ncreating a tranquil atmosphere. [\n  Distance: Mountains\n] Distant mountains rise and fall in layers,\nsmudged in cyan-black,\nink shades from thick to light,\nhazy and misty,\nrich in ink wash layers; forming a spatial depth with solid foreground and empty distance with the foreground. [\n  Composition and Light and Shadow\n] Non-linear perspective composition,\nthe ink curve is the main narrative axis,\nancient and modern elements are embedded along the line; the light source radiates and diffuses outward from the center of the picture,\nforming a strong contrast between light and dark,\nbright in the center and gradually darkening around; cool tones dominate (dark blue,\ncyan-green,\nsilver white),\nwarm tones embellish (cherry blossom pink,\npale gold),\nharmonious and mysterious; Eastern aesthetics blend with modern imagery,\nsurreal poetic mood. [\n  Technical Specifications\n] 8K ultra-high definition rendering,\nextreme detail precision,\nbest image quality,\nratio {{aspect_ratio}}"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_224 = {
  "zh-tw": "一名十幾歲的機甲少女，蒼白的肌膚上沾著煙塵與海水飛沫，銳利的{{eye_color}}眼眸中映出發光的 HUD 瞄準標線；及腰的灰白色長髮紮成高馬尾，在海風中肆意飛揚。啞光槍灰色外骨骼裝甲覆蓋雙肩、前臂與小腿，關節處裸露著液壓活塞，胸掛布有發光的青藍色冷卻管線。一件沾著油汙的超大號機庫外套半滑落在一側肩頭，一門{{mecha_heavy_weapon}}架在右肩，衣領處掛著士兵牌與磨損的紅色絲帶。\n她站在向左略微偏移的位置，立於傾斜鋼鐵平臺的鏽蝕邊緣，平臺向外延伸至漆黑海面之上；重心落在單腿上，左手緊握炮帶，頭部微轉向鏡頭，投來沉靜而桀驁的目光。背部推進器不斷噴出蒸汽，馬尾與外套在鹹腥海風裡向一側狂亂飄動。\n背景是黃昏時分廣袤的廢棄海上都市，用途不明的巨型超級建築從海洋中拔地而起，形成錯落的剪影；骨白色的巨型塔樓與附著藤壺的鋼鐵結構融為一體，巨大的環形建築以破碎的角度傾斜矗立，鏽蝕的桁架骨架間纏繞著廢棄線纜，深色浪濤在支撐柱間翻湧，數艘沉船半淹在柱腳。厚重的海霧縈繞在建築底部，高聳的結構直刺入暗沉的天空，塔樓高處零星閃爍著微弱燈光，宛如遙遠的眼眸。\n畫面採用陰鬱低調的光影：陰沉天空透出冷調青藍環境光，畫面右側遠處建築漏出溫暖的{{eye_color}}鈉燈光暈，塔樓後方低垂的太陽形成強烈逆光，勾勒出她的輪廓；體積光穿透海霧，裝甲上呈現溼潤的鏡面高光。\n鏡頭使用 35mm 變形寬銀幕鏡頭，略微低角度仰拍，越過她的肩膀望向遠處建築群；中全景構圖，淺景深使前景的鏽蝕景物虛化，帶有橫向鏡頭眩光，細膩的大氣薄霧將遠處巨型建築壓縮為層次分明的剪影。\n整體為電影感動漫主視覺風格，繪畫感數位插畫搭配利落線稿，採用青藍、骨白與鐵鏽色為主的低飽和海洋色調，點綴少量暖色調高光；新增膠片顆粒，呈現高對比度的藝術海報質感，畫幅比例 16:9。",
  "en": "A mecha girl mid-teens, pale skin smudged with soot and salt spray, sharp {{eye_color}} eyes with glowing HUD reticles, waist-length ash-white hair tied in a high ponytail whipping in the sea wind, matte gunmetal exoskeleton armor plating her shoulders, forearms and shins, exposed hydraulic pistons at the joints, chest rig with glowing cyan coolant lines, oversized oil-stained hangar jacket half slipping off one shoulder, a {{mecha_heavy_weapon}} resting on her right shoulder, dog tags and frayed red ribbon at her collar , standing off-center to the left on the rusted edge of a tilted steel platform jutting out over dark water, weight shifted onto one leg, left hand gripping the cannon strap, head turned slightly toward camera with a quiet defiant stare, steam venting from her back thrusters, her ponytail and jacket streaming sideways in the salt wind , a vast derelict sea-city at dusk, colossal megastructures of unknown purpose rising from the ocean in staggered silhouettes, bone-white monolithic towers fused with barnacled steel, cyclopean ring-shaped constructs canted at broken angles, rusted skeletal gantries threaded with dead cables, dark swells rolling between the pylons, shipwrecks half-swallowed at their feet, thick sea fog clinging to the bases while the upper structures pierce into a bruised sky, scattered faint lights blinking high in the towers like distant eyes , moody low-key lighting, cold teal ambient from the overcast sky, warm {{eye_color}} sodium glow leaking from a distant structure camera-right, hard backlight from a low sun behind the towers carving her silhouette, volumetric god rays cutting through sea mist, wet specular highlights on her armor , 35mm anamorphic lens, slight low angle looking up past her shoulder toward the structures, medium-wide shot, shallow depth of field with foreground rust in soft focus, horizontal lens flares, fine atmospheric haze compressing the distant megastructures into layered silhouettes , cinematic anime key visual, painterly digital illustration with crisp line art, desaturated oceanic palette of teal, bone-white and rust punched by small warm accent lights, film grain, high-contrast editorial poster aesthetic . Format 16:9."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_221 = {
  "zh-tw": "模擬35毫米膠片攝影，柔和輕盈的日系美學，溫柔漫射的自然窗戶光，輕微過曝，柔和色調，低對比度，柔和的高光，靠近窗戶配有白色窗簾的極簡室內環境，乾淨的淺色牆壁，自然構圖，平視視角，略微緊湊的全身取景（大腿中部到頭部），年輕東亞女性，自然極簡妝容，柔和真實的皮膚紋理，{{hair_style}}，{{clothing_female}}，淺色休閒短褲，赤腳，簡單放鬆的造型，自然站立姿勢放鬆，雙臂自然下垂或略微放在身後，面朝鏡頭，溫柔柔和的微笑，微妙的靜止感，專注於光線、空氣和安靜的日常氛圍，柔和的膠片顆粒，夢幻而低調的氛圍 9:16",
  "en": "Analog 35mm film photography, soft airy Japanese-style aesthetic, gentle diffused natural window light, slight overexposure, pastel tones, low contrast, soft highlights,  minimal indoor setting near a window with white curtains, clean light-colored wall, natural composition, eye-level, slightly closer full-body framing (mid-thigh to head),  young East Asian woman, natural minimal makeup, soft realistic skin texture, {{hair_style}},  {{clothing_female}}, light casual shorts, barefoot, simple and relaxed styling,  standing naturally with relaxed posture, arms loosely at sides or slightly behind, facing camera, gentle soft smile, subtle stillness,  focus on light, air, and quiet everyday mood, soft film grain, dreamy and understated atmosphere 9:16"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_216 = {
  "zh-tw": "請先上傳所需參考圖片。\n\n使用上傳圖片中的圖案，為{{fashion_parts}}設計四款時尚單品。保持原圖案的識別特徵，分別探索不同的比例、配色和佈局，併為每款配一幅穿搭效果圖。四組展示整齊排列、留白充分，材質真實、圖案在布料褶皺和接縫處自然延續，採用專業設計提案的雅緻構圖。整體畫幅{{aspect_ratio}}，不新增無關品牌或模型指令。",
  "en": "Upload the required reference image before generating.\n\nUse the pattern in the uploaded image to design four fashion products: {{fashion_parts}}. Preserve the pattern’s identity while exploring different scales, colors and placements, with a styled outfit view for each product. Arrange four tidy groups with generous whitespace, realistic materials and natural pattern continuity across folds and seams. Elegant professional design-presentation composition, overall aspect ratio {{aspect_ratio}}. No unrelated branding or model instructions."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_208 = {
  "zh-tw": "生成一張高品質二次元美少女圖片。\n\n 角色設定：\n\n- 年齡：17歲\n- 髮型：{{hair_style}}，顏色：櫻花粉，髮梢帶點漸變紫色\n - 眼睛：大而明亮，{{eye_color}}瞳孔，有星星高光\n - 服裝：JK制服，白色襯衫，深藍色格子裙，紅色領結\n - 配飾：白色過膝襪，棕色小皮鞋，頭上戴一個粉色蝴蝶結\n\n風格要求：\n - 日系動畫風格，線條清晰 - 色彩鮮豔，對比度高 - 光影柔和，有層次感\n- 背景：櫻花樹下，花瓣飄落，遠處是學校教學樓  表情：微笑，有點害羞 姿勢：站姿，雙手放在身後，身體微微前傾\n\n比例：{{aspect_ratio}}（壁紙） 質量：8K，超精細，細節豐富",
  "en": "Generate a high-quality anime beautiful girl image.\n\n Character setting:\n\n- Age: 17 years old\n- Hairstyle: {{hair_style}}, color: cherry blossom pink, hair tips with a bit of gradient purple\n - Eyes: large and bright, {{eye_color}} pupils, with star highlights\n - Clothing: JK uniform, white shirt, dark blue plaid skirt, red bow tie\n - Accessories: white over-the-knee socks, brown leather shoes, wearing a pink bow on the head\n\n Style requirements:\n - Japanese animation style, clear lines - bright colors, high contrast - soft light and shadow, with a sense of layering\n- Background: under the cherry blossom tree, petals falling, school teaching building in the distance  Expression: smiling, a bit shy Pose: standing posture, hands placed behind the back, body slightly leaning forward\n\nProportion: {{aspect_ratio}} (wallpaper) Quality: 8K, ultra-fine, rich in details"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_206 = {
  "zh-tw": "（國風捲軸插畫師）你是一位頂尖的中國傳統工筆人物畫師，擅長將經典人物群像繪製成長卷式百科海報。根據使用者指定的{{classical_ensemble}}，生成一張 “中國傳統人物群像長卷海報”：畫面為橫向長卷式構圖，所有人物排成一條佇列，從左至右依次展開；每個人物都有鮮明的傳統服飾、標誌性道具和神態，下方配有豎排名牌標註姓名；卷軸頂部有醒目的書法標題；背景為符合主題的場景元素（如祥雲、海浪、山水、亭臺等）。整體為高品質國風工筆插畫：細膩線稿 + 雅緻上色，淺米色 / 宣紙質感背景；註釋為清晰的中文書法字體；橫向 4K 長卷海報，構圖平衡，人物分明，氛圍貼合主題（如仙氣、豪邁、溫婉等）。直接出圖，人物群像為{{classical_ensemble}}。\n卷軸標題為“{{main_text}}”，根據所選人物生成準確的中文姓名。",
  "en": "(Guofeng scroll illustrator) You are a top Chinese traditional Gongbi figure painter, skilled in painting classic character group portraits into long-scroll-style encyclopedia posters. According to the user-specified {{classical_ensemble}}, generate a \"Chinese traditional character group portrait long scroll poster\": The picture is a horizontal long-scroll composition, all characters are arranged in a queue, unfolding sequentially from left to right; each character has distinct traditional clothing, iconic props, and expressions, below is a vertical nameplate annotating the name; the top of the scroll has a striking calligraphy title; the background is scene elements fitting the theme (such as auspicious clouds, ocean waves, mountains and rivers, pavilions). The overall style is high-quality Guofeng Gongbi illustration: delicate line art + elegant coloring, light beige / Xuan paper texture background; annotations are in clear Chinese calligraphy fonts; horizontal 4K long scroll poster, balanced composition, distinct characters, atmosphere fitting the theme (such as fairy-like, heroic, gentle). Output the image directly, the character group portrait is {{classical_ensemble}}.\nUse “{{main_text}}” as the scroll title and accurate Chinese names for the chosen ensemble."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_196 = {
  "zh-tw": "一個巨大的{{monster_element}}，龐大的規模，高聳的存在感，\n一個遠超人類尺寸的巨大實體，壓倒性和壓迫性的，\n用極其密集的混亂塗鴉線條繪製，\n超密集的重疊筆觸，糾纏和混亂的線條畫，\n在真實的印刷英文/中文教科書或試卷頁面上，\n可見的文本、佈局和紙張紋理清晰透出，\n{{note_pen}}繪畫風格，精細的墨水線條，雜亂的分層筆觸，\n沒有乾淨的輪廓，一切由混亂的塗鴉構成，\n黑暗和柔和的底色（黑色，深靛藍，暗紫羅蘭色），\n帶有微妙的低飽和度霓虹點綴（藍色，青色，紫色），\n僅在關鍵區域（眼睛，核心，裂縫，靜脈）有選擇性的生物發光，\n不是整體的亮度，\n取決於主體的有機或機械紋理，\n錯綜複雜的細節，複雜的表面圖案，\n形態從混亂中浮現，\n高密度中心，邊緣消融為鬆散的塗鴉，\n主體附近微小的人類剪影強調了尺度感，\n半透明層，由線條密度產生的深度，\n原始的，不完美的，嘈雜的，充滿活力的手繪感，\n略帶詭異，超現實，神秘的氛圍，\n混合媒體插畫，塗鴉藝術，\n極其詳細，黑暗團塊和發光點綴之間的高對比度，\n傑作，極其詳細",
  "en": "A colossal {{monster_element}}, massive scale, towering presence,\na gigantic entity far beyond human size, overwhelming and oppressive,\n\ndrawn with extremely dense chaotic scribble lines,\nultra-dense overlapping pen strokes, tangled and chaotic linework,\n\non top of a real printed English/Chinese textbook or exam paper page,\nvisible text, layout, and paper texture clearly showing through,\n\n{{note_pen}} drawing style, fine ink lines, messy layered strokes,\nno clean outlines, everything constructed from chaotic scribbles,\n\ndark and muted base tones (black, deep indigo, dark violet),\nwith subtle low-saturation neon accents (blue, cyan, purple),\n\nselective bioluminescent glow only in key areas (eyes, core, cracks, veins),\nnot overall brightness,\n\norganic or mechanical textures depending on subject,\nintricate details, complex surface patterns,\n\nform emerging from chaos,\nhigh-density center, edges dissolving into loose scribbles,\n\nsense of scale emphasized by tiny human silhouette near the subject,\n\nsemi-transparent layers, depth created by line density,\nraw, imperfect, noisy, energetic hand-drawn feeling,\n\nslightly eerie, surreal, mysterious atmosphere,\nmixed media illustration, scribble art,\n\nextremely detailed, high contrast between dark mass and glowing accents,\nmasterpiece, ultra detailed\n"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_195 = {
  "zh-tw": "一張動態的混合媒體攝影作品，將超寫實肖像與傳統的中國水墨插畫相融合。\n\n中心人物是一位具有{{hair_style}}的照片般逼真的年輕亞洲女性。她的妝容自然且極簡，表情平靜而溫柔。她背對相機站立，姿態呈現出優雅的S型曲線，營造出優美流暢的剪影。她微微轉動上半身，越過肩膀回眸，帶著一種安靜、內省的情緒。\n\n她穿著一件{{clothing_female}}，線條幹淨，面料柔軟，傳達出純潔與極簡主義，不顯露細節。\n\n她被置於一個靠近陽光明媚窗戶的真實世界室內環境中。背景被嚴重模糊，具有強烈的散景和淺景深，營造出夢幻且充滿氛圍的環境。\n\n從這種柔和模糊的現實之中，爆發出豐富的傳統水墨插畫，並環繞著她的身形。構圖包括：\n\n- 帶有耀眼光環的莊嚴如來佛像\n- 在雲端漂浮的優雅觀音像\n- 在空間中盤旋的流動中國水墨龍\n- 在動態的水墨筆觸中游動的成群錦鯉\n\n這些元素以黑墨和硃紅色調渲染，形成一幅密集的、具有精神力量的視覺織錦。水墨在她周圍有機地流動，部分重疊並融入她的剪影之中，在現實與神話之間創造出無縫的融合。\n\n沒有輪廓線或貼紙效果。融合是自然、流暢且沉浸式的。\n\n風格：電影級攝影，超精細，8k，柔光，現實與水墨藝術之間的高對比度，美術構圖，博物館級美學\n寬高比：3:4",
  "en": "A dynamic mixed-media photograph blending hyper-realistic portraiture with traditional Chinese ink illustration.\n\nThe central figure is a photorealistic young Asian woman with a {{hair_style}}. Her makeup is natural and minimal, with a calm and gentle expression. She stands with her back to the camera in an elegant S-curve posture, creating a graceful and flowing silhouette. She slightly turns her upper body to glance over her shoulder with a quiet, introspective mood.\n\nShe wears a {{clothing_female}} with clean lines and soft fabric, conveying purity and minimalism without revealing details.\n\nShe is placed in a real-world indoor setting near a sunlit window. The background is heavily blurred with strong bokeh and shallow depth of field, creating a dreamy and atmospheric environment.\n\nFrom this soft blurred reality, a rich explosion of traditional ink illustrations emerges and surrounds her figure. The composition includes:\n\n- Majestic Tathagata Buddhas with radiant halos\n- Elegant Guanyin figures floating among clouds\n- Flowing Chinese ink dragons coiling through space\n- Schools of koi fish swimming in dynamic ink strokes\n\nThese elements are rendered in black ink and cinnabar red tones, forming a dense, spiritual visual tapestry. The ink flows organically around her, partially overlapping and blending into her silhouette, creating a seamless fusion between reality and myth.\n\nNo outlines or sticker effects. The integration is natural, fluid, and immersive.\n\nStyle: cinematic photography, ultra-detailed, 8k, soft lighting, high contrast between reality and ink art, fine art composition, museum-level aesthetic\nAspect ratio: 3:4"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_193 = {
  "zh-tw": "一幅高度詳細的千手觀音菩薩工筆畫。\n\n然而，千手並沒有拿著神聖的宗教法器，而是拿著現代辦公和家用物品：**筆記本電腦、智慧手機、成堆的文件、咖啡杯、印章、計算器、拖把和奶瓶**。它代表了終極的多任務處理現代工作者。\n\n腦後的金色光環由旋轉的時鐘齒輪組成。\n\n**在右下角，一個單一的紅色豎排藝術家印章寫著“{{artwork_signature}}”，風格化得像水印一樣。** {{aspect_ratio}}",
  "en": "A highly detailed Gongbi painting of the Bodhisattva \"Guanyin of a Thousand Hands\".\n\nHowever, instead of sacred religious artifacts, the thousand hands are holding modern office and household items: **laptops, smartphones, stacks of paperwork, coffee cups, stamps, calculators, mops, and baby bottles**. It represents the ultimate multi-tasking modern worker.\n\nThe golden aura behind the head is made of spinning clock gears.\n\n**In the bottom right corner, a single red vertical artist chop seal reads \"{{artwork_signature}}\" , stylized like a watermark.** {{aspect_ratio}}"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_187 = {
  "zh-tw": "{{aspect_ratio}} 豎版 — 雜誌人像，單一主體  柔和的黑色迷霧濾鏡，微妙的薄霧，柔和的高光泛光，柔和的色調  極簡的室內空間，乾淨的背景，輕微的紋理  年輕韓國女性，淡妝，自然的皮膚紋理  服裝：貼身的羅紋針織上衣或柔軟的吊帶背心疊穿在寬鬆襯衫下，搭配高腰短褲或裙子；面料輕微貼合身體曲線，柔軟自然，無暴露元素  頭髮：略顯凌亂，自然的蓬鬆度  姿勢：坐在地板上，一條腿彎曲，另一條腿放鬆，身體微微傾斜，肩膀不對稱，頭部傾斜  構圖：主體略微偏離中心，存在留白  表情：{{expressions}}，自然的嘴唇  光線：柔和的側光，溫和的陰影衰減  氛圍：低調，安靜，通過自然的身體線條展現微妙的性感，放鬆且非擺拍  畫質：細膩顆粒，輕微的柔和感，寫實外觀",
  "en": "{{aspect_ratio}} vertical — editorial portrait, single subject  soft black mist filter, subtle haze, gentle highlight bloom, muted tones  minimal indoor space, clean background, slight texture  young Korean woman, minimal makeup, natural skin texture  outfit: fitted ribbed knit top or soft camisole layered under a loose shirt, paired with high-waisted shorts or skirt; fabric slightly clings to body shape, soft and natural, no revealing elements  hair: slightly messy, natural volume  pose: sitting on floor with one leg bent and the other relaxed, body slightly leaning, shoulders not aligned, head tilted  composition: subject slightly off-center, negative space present  expression: {{expressions}}, natural lips  lighting: soft side light, gentle shadow falloff  mood: understated, quiet, subtly sensual through natural body lines, relaxed and unposed  quality: fine grain, slight softness, realistic look"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_186 = {
  "zh-tw": "建立一個包含100種不同奇幻RPG物品的10×10網格，以經典像素藝術風格渲染（16位或32位精靈圖美學，讓人聯想到SNES/GBA時代的日式RPG）。每個物品應出現在其獨立的方形瓷磚中，下方帶有簡短清晰的標記。在{{background_color_clean}}上保持網格整潔。使每個物品在視覺上都有所區分，並且每個標記拼寫正確。使用清晰的像素邊緣、每個精靈圖有限的調色板，以及用於陰影的微妙抖動。\n使用這些行主題：\n第1行：劍與刀刃\n第2行：盾牌與盔甲\n第3行：弓、弩與遠程武器\n第4行：法杖、魔杖與魔法焦點\n第5行：藥水、靈藥與燒瓶\n第6行：卷軸、典籍與法術書\n第7行：戒指、護身符與附魔小飾品\n第8行：頭盔、王冠與頭飾\n第9行：鑰匙、遺物與任務物品\n第10行：寶石、符文與製作材料\n將每個瓷磚顯示為乾淨背景方形上居中的物品精靈圖，渲染為經典的函式庫存圖標——你在奇幻RPG選單中會看到的那種。保持整體風格一致、連貫，並讓人聯想到備受喜愛的復古奇幻RPG——迷人、細節豐富，且在小尺寸下易於辨認。\n全部道具的裝飾、紋樣與材質主題統一為{{rpg_item_theme}}，保留十行道具分類別。",
  "en": "Create a 10 × 10 grid of 100 different fantasy RPG items rendered in classic pixel art style (16-bit or 32-bit sprite aesthetic, reminiscent of SNES/GBA-era JRPGs). Each item should appear in its own square tile with a short clear label underneath. Keep the grid neat on a {{background_color_clean}}. Make every item visually distinct and every label correctly spelled. Use crisp pixel edges, limited palette per sprite, and subtle dithering for shading.\nUse these row themes:\nRow 1: swords and blades\nRow 2: shields and armor\nRow 3: bows, crossbows, and ranged weapons\nRow 4: staves, wands, and magical foci\nRow 5: potions, elixirs, and flasks\nRow 6: scrolls, tomes, and spellbooks\nRow 7: rings, amulets, and enchanted trinkets\nRow 8: helmets, crowns, and headgear\nRow 9: keys, relics, and quest items\nRow 10: gems, runes, and crafting materials\nShow each tile as a centered item sprite on a clean background square, rendered as a classic inventory icon — the kind you'd see in a fantasy RPG menu. Keep the overall style consistent, cohesive, and reminiscent of beloved retro fantasy RPGs — charming, detailed, and instantly readable at small sizes.\nUnify decoration, motifs and materials around {{rpg_item_theme}}, preserving all ten row categories."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_179 = {
  "zh-tw": "（Steampunk Scientific Illustrator）你是一位專業復古蒸汽朋克解剖圖譜設計師，擅長星座機械結構科普海報。根據使用者指定的{{constellation_theme}}，生成一張復古蒸汽朋克風格星座解剖圖譜海報：頂部標題欄為“{{constellation_theme}}解剖圖譜”或“ANATOMIA {{constellation_theme}}”，採用復古絲帶橫幅設計；背景為做舊羊皮紙/泛黃舊紙張紋理，帶自然汙漬與摺痕，營造復古科學手稿質感；中心主體為該星座經典神話形象，內部結構替換為精密齒輪、管線、金屬骨骼等蒸汽朋克元素；所有圖標與插畫為手繪線稿風格，用箭頭或連線展示邏輯關係；主色調為暖棕、米黃、古銅色，點綴少量高對比色彩突出重點；畫面分左右兩欄，中心為主體形象，兩側分佈功能模組，底部為總結與表格。左側含3-5個功能模組（含圖標、標題、描述）及“五層性格結構”分層圖示；右側含3-5個特質模組（含圖標、標記）及“Relationship classification”“Ecological niche”板塊；底部設“Advantages/Risks comparison table”優勢風險對比表、“Survival guide”生存指南、底部人生哲學宣言橫幅。整體嚴謹精緻、復古機械美學，文字清晰可讀 4K高清，直接出圖，星座為{{constellation_theme}}。\n機械骨骼使用{{primary_material}}。星座性格欄目作為虛構藝術設定呈現。",
  "en": "(Steampunk Scientific Illustrator) You are a professional vintage steampunk anatomy atlas designer, specializing in constellation mechanical structure popular science posters. Based on the user-specified {{constellation_theme}}, generate a vintage steampunk style constellation anatomy atlas poster: The top title bar is \"{{constellation_theme}} anatomy atlas\" or \"ANATOMIA {{constellation_theme}}\", adopting a vintage ribbon banner design; The background is distressed parchment/yellowed old paper texture, with natural stains and creases, creating a vintage scientific manuscript texture; The central subject is the classic mythological image of this constellation, with the internal structure replaced by steampunk elements such as precision gears, pipelines, and metal skeletons; All icons and illustrations are in hand-drawn line art style, using arrows or connecting lines to show logical relationships; The main color tone is warm brown, beige, and bronze, dotted with a small amount of high-contrast colors to highlight key points; The picture is divided into left and right columns, the center is the main image, functional modules are distributed on both sides, and the bottom is a summary and table. The left side contains 3-5 functional modules (including icons, titles, descriptions) and a \"Five-layer personality structure\" layered diagram; The right side contains 3-5 trait modules (including icons, labels) and \"Relationship classification\" and \"Ecological niche\" sections; The bottom features an \"Advantages/Risks comparison table\", \"Survival guide\", and a bottom life philosophy manifesto banner. Overall rigorous and exquisite, vintage mechanical aesthetics, text is clear and readable 4K high definition, direct image output, the constellation is {{constellation_theme}}.\nUse {{primary_material}} for the mechanical skeleton. Present personality modules as fictional artistic worldbuilding."
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_175 = {
  "zh-tw": "建立一個進階的 4:3 示範文稿封面幻燈片，介紹虛構的 AI 原生示範平臺 {{show_name}}。\n\nStyle:\n優雅，極簡，現代，進階初創企業美學。類似於高端品牌指南封面（如 Apple / Linear / Notion 風格）。帶有微妙深度感的柔和漸變背景，乾淨的留白，精緻的排版，經過打磨的編輯式佈局。\n\nMain title:\n{{show_name}}\n\nSubtitle:\n{{advert_campaign_tagline}}\n\nBody copy (small elegant text):\n將原始想法轉化為經過打磨的、高影響力的示範文稿。\n從筆記、文件、連結或現有幻燈片開始。\n使用 AI 生成美觀的、符合品牌調性的幻燈片。\n在靈活的畫布上自由編輯。\n匯出為 PPT、PDF，或發佈為網站。\n\nFeature highlights (small premium labels):\nSTORY-FIRST\nON-BRAND DESIGN\nAI EDITING\nFREEFORM CANVAS\nPPT EXPORT\nTEAM COLLABORATION\n\nBottom-right elegant logo text:\n{{show_name}}\n\nVisual feeling:\n商務級進階感，戰略級幻燈片質量，諮詢級示範文稿，略帶未來感但高度專業。\n\nComposition:\n乾淨的編輯式平衡，不對稱佈局，強烈的留白，示範軟體主視覺感。\n\nAspect ratio:\n4:3\n\nLanguage:\n僅限英文",
  "en": "Create a premium 4:3 presentation cover slide introducing {{show_name}}, the AI-native presentation platform in this fictional product brief.\n\nStyle:\nelegant, minimal, modern, premium startup aesthetic. Similar to high-end brand guideline covers (like Apple / Linear / Notion style). Soft gradient background with subtle depth, clean whitespace, refined typography, polished editorial layout.\n\nMain title:\n{{show_name}}\n\nSubtitle:\n{{advert_campaign_tagline}}\n\nBody copy (small elegant text):\nTurn raw ideas into polished, high-impact presentations.\nStart from notes, docs, links, or existing decks.\nGenerate beautiful, on-brand slides with AI.\nEdit freely on a flexible canvas.\nExport to PPT, PDF, or publish as a website.\n\nFeature highlights (small premium labels):\nSTORY-FIRST\nON-BRAND DESIGN\nAI EDITING\nFREEFORM CANVAS\nPPT EXPORT\nTEAM COLLABORATION\n\nBottom-right elegant logo text:\n{{show_name}}\n\nVisual feeling:\nbusiness-class premium, strategy deck quality, consulting-grade presentation, slightly futuristic but highly professional.\n\nComposition:\nclean editorial balance, asymmetrical layout, strong whitespace, presentation software hero shot feeling.\n\nAspect ratio:\n4:3\n\nLanguage:\nEnglish only"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_174 = {
  "zh-tw": "一幅細節豐富的工筆畫，描繪了一位唐朝貴族女子在御花園中漫步。她看起來優雅而平靜。\n\n她手裡拿著一根金色的牽引繩。牽引繩的盡頭是一隻可怕的**異形怪物（出自電影《異形》）**。然而，這隻異形穿著一件**可愛的粉色絲綢馬甲**，並且表現得像一隻訓練有素的狗。\n\n背景有牡丹和蝴蝶。\n\n**在右下角，有一個紅色的豎排藝術家印章，寫著“{{artwork_signature}}”，風格像水印一樣。** {{aspect_ratio}}",
  "en": "A finely detailed Gongbi painting of a noble Tang Dynasty lady taking a stroll in the imperial garden. She looks elegant and calm.\n\nShe is holding a gold leash. At the end of the leash is a terrifying **Xenomorph monster (from the movie Alien)**. However, the Xenomorph is wearing a **cute pink silk vest** and is behaving like a well-trained dog.\n\nBackground features peonies and butterflies.\n\n**In the bottom right corner, a single red vertical artist chop seal reads \"{{artwork_signature}}\" , stylized like a watermark.** {{aspect_ratio}}"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_173 = {
  "zh-tw": "服裝細節： 模特兒身穿一套精緻的{{clothing_color_traditional}}齊胸襦裙，採用多層輕盈的薄紗和絲綢歐根紗材質製成。其寬大的、半透明的廣袖上點綴著如繁星般微小的銀色和淺藍色亮片刺繡，在光線下閃爍（具有銀河般的夢幻感）。抹胸位置有複雜的銀色蕾絲和編織紋理細節，腰帶自然垂落。\n\n材質與光影： 畫面呈現 8k 超高分辨率和對織物微距紋理的極致渲染。光線採用柔和的自然側光（丁達爾效應 Typndall Effect），精準地透射過輕薄的紗布，營造出面料的半透明感（Translucency）和流動感。\n\n構圖與鏡頭： 採用 {{lens_param}} 黃金人像鏡頭效果，f/1.8 大光圈，全身構圖，模特居中站立",
  "en": "Clothing details: The model wears an exquisite {{clothing_color_traditional}} chest-high ruqun, made of multiple layers of lightweight tulle and silk organza materials. Its wide, translucent broad sleeves are adorned with tiny silver and light blue sequin embroideries like stars, shimmering under the light (with a galaxy-like dreamy feel). The tube top position has complex silver lace and woven texture details, and the belt falls naturally.\nMaterial and light and shadow: The image presents 8k ultra-high resolution and extreme rendering of macro textures of the fabric. The lighting uses soft natural side light (Tyndall Effect Typndall Effect), accurately transmitting through the light gauze, creating a sense of translucency (Translucency) and fluidity of the fabric.\nComposition and lens: Uses {{lens_param}} golden portrait lens effect, f/1.8 large aperture, full-body composition, model standing in the center"
};

export const TEMPLATE_AWESOME_GPT_IMAGE_2_165 = {
  "zh-tw": "一個有著清冷孤傲氣質的絕美佳人，精緻的面部特徵，一張冷酷且精緻的進階時裝面容，{{hair_style}}，以及優雅苗條的身材；燒烤“三刀流”姿勢：嘴裡叼著一根燒烤串，每隻手各拿一根燒烤串交叉以模仿索隆的三刀流；街頭夜景氛圍，溫暖黃色的夜市燈光，模糊的背景，膠片般的質感，柔焦光暈，電影般的敘事感，時髦高端網紅風格的時尚拍攝，清晰發光的肌膚，清晰細緻的髮絲，生動的動態表情，{{lens_type}}，情緒化的暗調氛圍，淺景深，超高清8K，極致細節，電影級光照",
  "en": "a stunning beauty with a cool, aloof atmosphere, delicate facial features, a cold and sophisticated high-fashion face, {{hair_style}}, and a graceful slender figure; barbecue “three-sword style” pose: one barbecue skewer held in her mouth, one skewer in each hand crossed to mimic Zoro’s three-sword style; street night scene ambiance, warm yellow night market lighting, blurred background, film-like texture, soft-focus glow, cinematic storytelling feel, trendy high-end influencer-style fashion shoot, clear luminous skin, sharply detailed strands of hair, lively dynamic expression, {{lens_type}}, moody dark-toned atmosphere, shallow depth of field, ultra HD 8K, extreme detail, cinematic lighting"
};


// YouMind GPT Image 2.5: 100 curated bilingual fill-in adaptations.
export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34501 = {
  "zh-tw": "古典油畫風格的宮廷花園：左右以科林斯石柱和大理石雕像框景，{{botanical_accent}}攀附柱身。階梯、對稱噴泉和柏樹引導視線通向山坡別墅，中央保留開闊天空，遠方湖面與藍山融入空氣透視。採用{{lighting_time}}，以{{editorial_palette}}統領色彩，保留油彩筆觸與大理石細節。畫幅{{aspect_ratio}}，無文字。",
  "en": "Paint a classical palace garden framed by Corinthian columns and marble statues entwined with {{botanical_accent}}. Steps, paired fountains and cypresses lead toward a hillside villa. Leave open sky centrally; a distant lake and blue mountains dissolve into atmospheric perspective. Use {{lighting_time}} and a {{editorial_palette}} palette. Retain visible oil brushwork, carved marble detail and a grand, tranquil scale. Aspect ratio {{aspect_ratio}}; no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34381 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n依據上傳的成年人物照片製作3×3自拍表情參考卡，九格保持同一身份。髮型設為{{hair_style}}，穿{{clothing}}，背景為柔焦臥室。依次表現抬眼、害羞笑、鼓臉、驚訝、眨眼、思考、大笑、疲倦和自然微笑。每格下方用{{text_language}}寫簡短表情名，數位1–9清晰對齊。標題色條採用{{editorial_palette}}。方形畫布、柔和室內光、自然皮膚，表情變化不改變五官。",
  "en": "Upload the required reference image(s) first.\n\nUsing the uploaded adult portrait, create a square 3×3 selfie expression guide with consistent identity. Use {{hair_style}} and {{clothing}} against a softly blurred bedroom. Show looking up, a shy smile, puffed cheeks, surprise, a wink, thoughtfulness, laughter, tiredness and a natural smile. Label each expression briefly in {{text_language}} and number the cards 1–9. Use {{editorial_palette}} title strips, soft indoor light and natural skin texture; preserve facial proportions."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34371 = {
  "zh-tw": "超現實單體遺蹟：巨大的半透明冰柱封存{{botanical_accent}}，內部保留霜花、氣泡和裂紋，溫暖花色透出冷暗表面。冰柱矗立於鏡面淺水中，幾名微小旅人靠近底部，突出尺度懸殊。遠方採用{{natural_environment}}，整體{{editorial_palette}}，低機位廣角、低地平線、柔霧與真實反射。畫幅{{aspect_ratio}}，無文字與現代建築。",
  "en": "Create a surreal monolith containing {{botanical_accent}} inside translucent ice, with frost, bubbles and fractures obscuring its warm interior. Place it in shallow reflective water; tiny travelers at its base establish immense scale. Surround it with {{natural_environment}}, using {{editorial_palette}}. A low wide-angle view, low horizon, atmospheric mist and realistic reflections make the impossible structure convincing. Aspect ratio {{aspect_ratio}}; no text or modern buildings."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34493 = {
  "zh-tw": "設計16:9旅行網站首屏視覺稿，品牌{{studio_brand}}，主標題“{{poster_headline}}”。背景展示{{travel_location}}的日出熱氣球，前景一隻大氣球，遠方數只小氣球形成空間層次。採用{{editorial_palette}}並加少量金色細線。頂部導覽清晰，標題、預訂按鈕和日期選擇面板置於可讀留白，底部排列三條行程卡。氣球織物精細，霧氣柔和，保持真實可實現的網頁佈局。",
  "en": "Design a 16:9 travel landing-page mockup for {{studio_brand}} with the headline “{{poster_headline}}”. Show sunrise balloons over {{travel_location}}: one large foreground balloon and several distant ones. Use {{editorial_palette}} with restrained gold rules. Include a clear navigation bar, readable headline, booking button, date-selection panel and three itinerary cards along the bottom. Fine balloon fabric and soft mist support a luxurious atmosphere while the interface remains practical and legible."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34354 = {
  "zh-tw": "9:16東方極簡封面：一位成年人物穿{{clothing}}，在畫面下方一側整理白瓷瓶中的{{botanical_accent}}。保持大面積明亮留白，花枝作為視覺焦點。主標題“{{poster_headline}}”置於頂部，採用{{editorial_palette}}作為底色與輔助色，花色僅局部出現。輪廓簡潔，柔和日光，輕平面插畫質感，不增加繁雜傢俱。",
  "en": "Create a 9:16 minimalist Eastern cover. Place an adult wearing {{clothing}} low on one side, arranging {{botanical_accent}} in a white porcelain vase. Keep generous bright whitespace and let the stems form the focal point. Set “{{poster_headline}}” at the top. Use {{editorial_palette}} for the base and supporting colors, keeping floral accents localized. Clean silhouettes, soft daylight and a lightly flattened illustration finish; avoid cluttered furniture."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34486 = {
  "zh-tw": "未來混合現實頭顯生活方式特寫：成年模特採用{{hair_style}}，表情{{portrait_mood}}。鏡頭緊湊裁切上半臉，煙黑一體式弧形鏡片覆蓋雙眼，鏡腿薄而精緻，傳感器和螺絲符合製造邏輯。外殼主要材質{{primary_material}}，採用{{lighting}}，背景深暗虛化。16:9畫幅，皮膚毛孔、鏡片反射和髮絲邊緣細節清晰，無額外文字。",
  "en": "Shoot a futuristic slim mixed-reality headset on an adult model with {{hair_style}} and a {{portrait_mood}} expression. Crop tightly around the upper face. A continuous smoked curved visor covers both eyes, with slender temples and plausible sensors and screws. Use {{primary_material}} for the housing and {{lighting}} against a dark blurred background. In a 16:9 frame, retain skin pores, believable visor reflections and fine hair edges. No extra text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34476 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的成年人物照片改編為1980年代霓虹遊戲角色肖像，保留身份與面部比例。服裝換為{{clothing}}，表情{{portrait_mood}}。背景是棕櫚剪影、復古街道與虛化招牌，色彩採用{{editorial_palette}}。半身三分之四側面，雕塑感面部結構、精細頭髮體積、皮革與金屬反光，電影級輪廓光。畫幅{{aspect_ratio}}，保持明確的3D風格。",
  "en": "Upload the required reference image(s) first.\n\nAdapt the uploaded adult portrait into an eighties neon game character while preserving identity and facial proportions. Dress the character in {{clothing}} with a {{portrait_mood}} expression. Palm silhouettes, retro streets and blurred signs establish the setting in {{editorial_palette}}. Use a three-quarter half-body composition, sculpted facial planes, detailed hair volumes, leather and metal reflections and cinematic rim light. Aspect ratio {{aspect_ratio}}; keep the finish clearly stylized 3D."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34472 = {
  "zh-tw": "東方極簡海報中，一位成年人物穿{{clothing}}倚著白色長廊欄杆眺望。廊線位於畫面下側引導視線，遠處水面被簡化為色塊，圓形暖光斑點綴背景。採用{{editorial_palette}}，{{lighting_time}}營造清透感。上方留白放置“{{poster_headline}}”，9:16直式構圖，建築細節剋制、邊緣乾淨。",
  "en": "In a minimalist Eastern poster, an adult wearing {{clothing}} leans on a white corridor railing and looks outward. Corridor lines guide the lower composition toward water reduced to broad color fields, with a circular warm light accent. Use {{editorial_palette}} and {{lighting_time}} for an airy mood. Reserve upper whitespace for “{{poster_headline}}”. A 9:16 vertical layout, restrained architectural detail and clean edges keep the scene calm."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34475 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n以參考圖角色為統一主角製作2×2演出海報，四張保持身份和畫風一致，分別展示舞臺全景、演唱特寫、後臺側影和觀眾互動。演出名“{{poster_headline}}”，主辦品牌{{studio_brand}}，服裝主題{{anime_outfit}}，主色{{editorial_palette}}。每格獨立排版，加入清晰的虛構場館與日期，標題不遮擋臉部。整體4:3，保留齊整間距。",
  "en": "Upload the required reference image(s) first.\n\nUse the reference character across a 2×2 concert-flyer set with consistent identity and art style. Show a wide stage view, singing close-up, backstage profile and audience interaction. Title the event “{{poster_headline}}”, hosted by {{studio_brand}}. Use {{anime_outfit}} and a {{editorial_palette}} palette. Give each flyer independent typography and clearly fictional venue and date details without covering faces. Overall aspect ratio 4:3 with tidy gutters."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34487 = {
  "zh-tw": "製作同一漫畫角色的3×3半身表情設定集，髮型{{hair_style}}，服裝{{anime_outfit}}，用灰度準確轉譯顏色。九格分別表現驚嚇、苦笑、疲倦、懷疑、開心、警覺、憤怒、害羞和放鬆。紙面{{art_paper}}，以{{line_art_style}}配合漫畫網點，保持五官、髮飾和衣褶設定一致。2:3豎版，無對話氣泡與額外標題。",
  "en": "Create a 3×3 bust expression sheet for one manga character with {{hair_style}} and {{anime_outfit}}, translating colors into grayscale. Show shock, an uneasy smile, fatigue, suspicion, joy, alertness, anger, shyness and relaxation. Use {{art_paper}} with {{line_art_style}} and manga screentones. Preserve facial design, accessories and garment details across all nine poses. A 2:3 vertical page with no speech bubbles or extra titles."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34473 = {
  "zh-tw": "創作同一成年模特的三張春日影棚寫真，三格並排呈現，每格豎向構圖。髮型{{hair_style}}，穿{{clothing_female}}，身旁點綴{{botanical_accent}}。採用{{editorial_palette}}佈景，窗格和植物投下柔影。三格分別坐姿托腮、過肩回望、抱膝微笑；身份、服裝和道具保持一致。自然膚質、細膩布料、50–85mm人像鏡頭感，整體橫版三聯畫。",
  "en": "Create three side-by-side spring studio portraits of the same adult model, each vertically framed. Use {{hair_style}}, {{clothing_female}} and {{botanical_accent}} nearby. Set the studio in {{editorial_palette}} with soft window-grid and plant shadows. Show a seated chin-rest pose, an over-shoulder glance and a relaxed knee-hugging smile. Preserve identity, wardrobe and props throughout. Natural skin, fine fabric texture and a 50–85mm portrait look; deliver one horizontal triptych."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34484 = {
  "zh-tw": "方形像素遊戲素材表包含兩位Q版搭檔，第一位穿{{anime_outfit}}，第二位穿{{cute_outfit}}。準確排列4行8列共32個全身精靈，每兩格為同動作的雙人對應，涵蓋待機、行走、轉身、跳躍和慶祝。主色{{editorial_palette}}，背景{{background_color_clean}}。像素邊緣銳利、角色比例穩定、腳底基線統一，每格有足夠間隔，不繪製文字。",
  "en": "Build a square pixel-game sheet featuring a chibi duo: one in {{anime_outfit}}, the other in {{cute_outfit}}. Arrange exactly 32 full-body sprites in four rows and eight columns, pairing matching actions across adjacent cells. Include idle, walking, turning, jumping and celebration poses. Use {{editorial_palette}} over {{background_color_clean}}. Keep crisp pixel edges, stable character proportions, aligned foot baselines and generous cell spacing. No text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34492 = {
  "zh-tw": "讓{{city_name}}以微縮城市形式從古董地圖紙面升起。中心地標與所選城市對應，周圍用小街巷、樹木、橋樑與現代建築形成層次，地圖標記隨城市同步生成，不混用其他城市地名。紙張{{art_paper}}，{{lighting_time}}照亮建築側面。俯斜視角、移軸微距、淺景深，保留印刷紋理、比例尺與城市雙語名稱。畫幅{{aspect_ratio}}，城市細節真實而具有模型感。",
  "en": "Make {{city_name}} rise as a miniature city from an antique atlas. Match landmarks and nearby labels to the selected city, with lanes, trees, bridges and modern buildings forming layered depth. Print the map on {{art_paper}} and light the buildings with {{lighting_time}}. Use an oblique tilt-shift macro view, shallow depth of field, visible printed texture, a scale bar and the bilingual city name. Aspect ratio {{aspect_ratio}}; convincing architecture at model scale."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34496 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的雙人音樂人照片擴充為3×3專輯攝影聯繫表。保持兩人身份一致，服裝{{clothing}}，配飾{{accessory_glasses}}。採用{{editorial_palette}}，岩石戶外場景與陰鬱天空保持統一。九格包含俯拍雙人、兩張臉部極近特寫、四張低機位近景和兩張寬鬆半身照，{{photo_effect}}貫穿全組。白色格間距，方形畫布，無文字。",
  "en": "Upload the required reference image(s) first.\n\nExpand the uploaded musician duo into a square 3×3 album contact sheet, preserving both identities. Use {{clothing}}, {{accessory_glasses}} and a {{editorial_palette}} grade in a consistent rocky outdoor setting under a moody sky. Include one overhead duo shot, two extreme facial close-ups, four low-angle close-ups and two looser half-body views. Apply {{photo_effect}} throughout. Separate frames with white gutters and omit typography."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34481 = {
  "zh-tw": "製作方形像素工作室Logo，標題“{{studio_brand}}”以兩行8-bit粗體居中排列，下方是一隻{{character_animal}}吉祥物，保持圓潤輪廓和親切表情。點綴簡化星星與小工具，配色{{editorial_palette}}，背景{{background_color_clean}}。使用一致像素網格、清晰輪廓和有限色階，小尺寸仍容易識別，不新增多餘標識。",
  "en": "Create a square pixel-art studio logo. Center “{{studio_brand}}” in two lines of bold 8-bit lettering above a friendly {{character_animal}} mascot with a rounded silhouette. Add a few simple stars and tiny tools. Use {{editorial_palette}} over {{background_color_clean}}, a consistent pixel grid, crisp outlines and limited shading. Keep the logo readable at small sizes without unrelated marks."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34471 = {
  "zh-tw": "製作高端時尚雜誌封面，刊名“{{studio_brand}}”，主標題“{{poster_headline}}”。成年模特身穿{{clothing_female}}，表情{{portrait_mood}}，正面半身構圖，皮膚與織物質感真實。刊頭大字位於頂部，少量欄目標題沿兩側排列，不壓住眼睛，底部小號月份與條碼。3:4豎版、影棚柔光、精緻留白，呈現完整可讀的雜誌版式。",
  "en": "Create a premium fashion cover titled “{{studio_brand}}” with the feature headline “{{poster_headline}}”. An adult model wears {{clothing_female}} with a {{portrait_mood}} expression in a frontal half-body portrait. Retain natural skin and fabric texture. Place the large masthead at the top, a few cover lines along the sides without covering the eyes, and a small month line and barcode below. Use soft studio light and a readable 3:4 editorial layout."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34479 = {
  "zh-tw": "繪製貓耳動漫角色肖像，髮型{{hair_style}}，瞳色{{eye_color}}，身穿{{anime_outfit}}。貓耳與頭髮自然銜接，表情溫柔，肩部以上近景，背景採用{{editorial_palette}}的柔焦色塊。細線勾勒髮絲，眼睛有玻璃般高光，賽璐珞陰影乾淨，畫面明亮而不失輪廓，3:4豎版，無文字。",
  "en": "Draw a cat-eared anime portrait with {{hair_style}}, {{eye_color}} eyes and {{anime_outfit}}. Integrate the ears naturally into the hairstyle and use a gentle expression in a shoulder-up view. Build the softly blurred background from {{editorial_palette}}. Fine hair lines, glassy eye highlights and clean cel shading create a bright but well-defined image. Use a 3:4 vertical frame with no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34482 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n根據上傳的生物塗鴉建構完整3D奇幻怪獸，保留原始輪廓、肢體數量與醒目特徵。表面材質{{primary_material}}，主色{{editorial_palette}}，環境{{natural_environment}}，燈光{{lighting}}。怪獸全身以三分之四視角展示，加入合理關節、體積陰影和接地感；細節沿著塗鴉邏輯發展，不隨意增加肢體。",
  "en": "Upload the required reference image(s) first.\n\nTurn the uploaded creature doodle into a complete 3D fantasy monster, preserving its silhouette, limb count and distinctive features. Use {{primary_material}} surfaces, {{editorial_palette}}, {{natural_environment}} and {{lighting}}. Show the full creature in three-quarter view with plausible joints, volumetric shadows and convincing ground contact. Develop details from the doodle’s own structure without adding arbitrary limbs."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34344 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n把上傳的角色參考圖轉為真實成年人物肖像，保留可辨識的面部結構、髮型、服裝與配飾。取景{{portrait_view}}，燈光{{lighting}}，背景{{background_color_clean}}，表情{{portrait_mood}}。85mm人像鏡頭感、淺景深，強調皮膚毛孔、細微瑕疵、眼部反射和真實織物，不出現塑料皮膚或遊戲頭像質感。",
  "en": "Upload the required reference image(s) first.\n\nTranslate the uploaded character reference into a realistic adult portrait, preserving recognizable facial structure, hairstyle, clothing and accessories. Use {{portrait_view}}, {{lighting}}, {{background_color_clean}} and a {{portrait_mood}} expression. An 85mm portrait look and shallow depth of field emphasize pores, subtle imperfections, eye reflections and real fabric. Avoid plastic skin or a game-avatar finish."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34343 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n依據上傳的成年女性照片保持身份，拍攝戶外捧花肖像。髮型{{hair_style}}，身穿{{clothing_female}}，雙手捧著用舊報紙包裹的{{botanical_accent}}，神情{{portrait_mood}}。咖啡館露臺背景柔焦，黃金時刻逆光勾勒髮絲，85mm f/1.8鏡頭感，花瓣與皮膚自然鮮活。3:4豎版，不改變人物面部比例。",
  "en": "Upload the required reference image(s) first.\n\nPreserve the adult woman’s identity from the uploaded photo in an outdoor bouquet portrait. Use {{hair_style}} and {{clothing_female}}; she holds {{botanical_accent}} wrapped in old newspaper with {{portrait_mood}}. Blur a café terrace behind her. Golden-hour backlight outlines individual hairs, with an 85mm f/1.8 look and natural skin and petal textures. A 3:4 vertical composition preserves her facial proportions."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34352 = {
  "zh-tw": "1980年代寶萊塢風格成年模特坐在拋光木桌旁，手持奶油色有線電話聽筒，腰部以上構圖。髮型{{hair_style}}，穿{{clothing}}，神情{{portrait_mood}}。房間以{{editorial_palette}}配色，窗邊方向光強調蓬鬆袖口、舊黃銅配飾和膠片顆粒。姿態自然，復古傢俱細節剋制，3:4豎版。",
  "en": "Photograph an adult model at a polished wooden desk in an eighties Bollywood-inspired setting, holding a cream corded telephone. Use {{hair_style}}, {{clothing}} and a {{portrait_mood}} expression in a waist-up view. Style the room in {{editorial_palette}}. Directional window light reveals voluminous sleeves, aged brass accessories and subtle film grain. Keep the pose natural and the vintage furniture restrained in a 3:4 frame."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34499 = {
  "zh-tw": "為同一動漫角色製作3行4列共12格半身表情圖。髮型{{hair_style}}，瞳色{{eye_color}}，服裝{{anime_outfit}}，背景{{background_color_clean}}。表情依次為平靜、微笑、大笑、驚訝、憤怒、疑惑、害羞、睏倦、難過、期待、得意和專注。每格編號01–12，細灰線分隔，4:3橫版。臉部比例與服裝嚴格一致，表情依靠眉眼和嘴部變化呈現。",
  "en": "Create twelve bust expressions of one anime character in three rows and four columns. Use {{hair_style}}, {{eye_color}} eyes, {{anime_outfit}} and {{background_color_clean}}. Show calmness, smiling, laughter, surprise, anger, doubt, shyness, sleepiness, sadness, anticipation, pride and focus. Number panels 01–12 with thin gray dividers on a 4:3 page. Preserve facial proportions and costume; convey emotion through eyebrows, eyes and mouth."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34485 = {
  "zh-tw": "現代單格漫畫：{{comic_cast}}坐在咖啡館，左側人物從容說話，右側人物驚訝回應，形成表情反差。左側氣泡寫“{{main_text}}”，右側氣泡寫“{{supporting_text}}”。背景以{{editorial_palette}}表現木桌、玻璃杯和虛化燈光，腰部以上雙人構圖，清晰線稿與柔和賽璐珞陰影。文字可讀，氣泡尾部指向正確人物。",
  "en": "Draw a contemporary single-panel café comic featuring {{comic_cast}}. The person on the left speaks calmly while the person on the right reacts with surprise. The left balloon says “{{main_text}}”; the right says “{{supporting_text}}”. Use {{editorial_palette}} for wooden tables, glasses and blurred lights. Frame both figures from the waist up with clear linework and soft cel shading. Keep text readable and balloon tails correctly assigned."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34480 = {
  "zh-tw": "創作水彩漫畫設定海報，兩位原創{{character_animal}}吉祥物在末日般的遠景前悠閒分享{{snack_subject}}，用溫柔反差表達幽默。上方寫“{{poster_headline}}”，左右放人物小檔案和三種表情，下方是一格寬幅吃零食場景。紙面{{art_paper}}，墨線略帶手繪抖動，淡彩暈染，3:2橫版。角色外形統一，手寫註釋簡短，不堆滿文字。",
  "en": "Create a watercolor character poster about two original {{character_animal}} mascots calmly sharing {{snack_subject}} before an apocalyptic-looking distant landscape. Use gentle visual irony. Place “{{poster_headline}}” above small character profiles and three expressions; a wide snack-time comic occupies the bottom. Work on {{art_paper}} with loose ink lines and pale washes. A 3:2 layout keeps designs consistent and handwritten notes brief."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34341 = {
  "zh-tw": "以長焦建築攝影表現巨大的垂直山城，灰白住宅單元沿山體層層疊起，樓群延伸至畫外。連續承重牆、之字形坡道和陽臺形成可理解的交通網路，窗邊植物與微小行人體現生活尺度。牆面材質{{wall_material}}，遠景{{natural_environment}}，時間{{lighting_time}}。部分窗戶透出暖光，保持自然水漬與電線細節，畫幅{{aspect_ratio}}，避免微縮玩具感。",
  "en": "Photograph an immense terraced mountain city with a telephoto lens. Pale residential units climb beyond the frame; continuous load-bearing walls, zigzag ramps and balconies form plausible circulation. Plants and tiny pedestrians establish everyday scale. Use {{wall_material}}, distant {{natural_environment}} and {{lighting_time}}. A few warm windows punctuate weather stains and utility wires. Aspect ratio {{aspect_ratio}}; preserve architectural realism rather than a toy-like appearance."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34339 = {
  "zh-tw": "長焦城市景觀中，一條寬闊S形高架道路從右下前景彎向遠處，厚重擋土牆如人造懸崖，下面多層街道各自承託小住宅、停車場與電線。城市設定{{city_name}}，牆面{{wall_material}}，光照{{lighting_time}}，畫幅{{aspect_ratio}}。橋樑連線和坡度合理，細小車輛強化尺度，雨痕、護欄和結構縫清晰，遠景輕霧壓縮空間。",
  "en": "Create a telephoto megacity view inspired by {{city_name}}. A broad S-curve highway sweeps from the lower right into the distance above massive retaining walls resembling artificial cliffs. Lower roads support small homes, parking areas and utility poles. Use {{wall_material}}, {{lighting_time}} and a {{aspect_ratio}} frame. Plausible road grades, tiny vehicles, rain stains, guardrails and structural joints establish scale; distant haze compresses the layers."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34353 = {
  "zh-tw": "虛構的立體住宅城市充滿畫面，不顯示天空。超寬混凝土拱橋連線巨型塔樓，厚重樑柱下仍可看見細密陽臺和生活街區。主體材質{{wall_material}}，點綴{{editorial_palette}}，照明{{lighting_time}}。遠距離略俯拍，垂直線近乎平行，真實結構接縫、窗戶和維護道路豐富但有秩序。畫幅{{aspect_ratio}}，強調承重邏輯與宏大尺度。",
  "en": "Fill the frame with a fictional three-dimensional residential city, excluding the sky. Broad concrete arches connect immense towers; dense balconies and lived-in streets remain visible beneath deep beams. Use {{wall_material}} with restrained {{editorial_palette}} accents under {{lighting_time}}. Shoot slightly downward from a distant tower, keeping verticals almost parallel. Structural joints, windows and maintenance routes are detailed but orderly. Aspect ratio {{aspect_ratio}}; emphasize plausible support and immense scale."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34409 = {
  "zh-tw": "製作4:5豎向四格浪漫漫畫，四個等高橫格由一架連續金屬梯子貫穿，梯子畫在分格邊框前。人物是{{comic_cast}}，主角穿{{anime_outfit}}。第一格從屋頂探頭，第二格開始下梯，第三格接近地面，第四格與等待的人微笑相見。背景{{comic_location}}，時間{{lighting_time}}。梯級距離與人物位置連續，柔和賽璐珞風格，無多餘氣泡。",
  "en": "Draw a vertical four-panel romantic comic in 4:5. One continuous metal ladder overlaps all four horizontal panel borders. Feature {{comic_cast}}, with the descending protagonist in {{anime_outfit}}. Show looking down from the roof, starting the descent, nearing the ground and smiling at the waiting companion. Set the story in {{comic_location}} under {{lighting_time}}. Keep rung spacing and body positions continuous, with soft cel shading and no extra balloons."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34402 = {
  "zh-tw": "16:9超現實冬日杯麵廣告，品牌{{studio_brand}}，產品主題{{premium_food_subject}}。巨型杯麵居中，蒸汽與雪地交匯，成年人物身穿毛衣靠近杯沿，周圍微縮場景製造尺寸反差。採用{{editorial_palette}}，標題“{{poster_headline}}”清晰排在留白。食物紋理誘人、包裝透視真實、商業合成光影統一，無無關品牌。",
  "en": "Create a surreal 16:9 winter advertisement for {{studio_brand}} featuring {{premium_food_subject}}. Center an oversized noodle cup, its steam meeting a snowy setting. An adult in a sweater leans near the rim while miniature surroundings create playful scale. Use {{editorial_palette}} and place “{{poster_headline}}” in clear negative space. Preserve appetizing food texture, realistic packaging perspective and unified commercial-composite lighting, without unrelated brands."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34346 = {
  "zh-tw": "真實都市生活方式寫真，成年人物髮型{{hair_style}}，穿{{clothing_female}}，搭配{{bag_content}}，神情{{portrait_mood}}。人物站在街邊，針織內搭與靴子形成層次，背景是柔焦店面與石牆。自然光保留髮絲和布料質感，豎向全身構圖，街拍姿態鬆弛，不出現品牌特寫或誇張磨皮。",
  "en": "Create a realistic urban lifestyle portrait of an adult with {{hair_style}}, wearing {{clothing_female}} and carrying {{bag_content}} with a {{portrait_mood}} expression. Layer knitwear and boots in a relaxed street-side pose, with blurred storefronts and stone walls behind. Natural light preserves hair and fabric texture. Use a vertical full-body composition without prominent branding or excessive skin smoothing."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34410 = {
  "zh-tw": "9:16畫廊咖啡館抓拍，一位成年顧客穿{{clothing}}坐在木桌旁。背景深綠牆面整齊排列五幅金框藝術海報，中央標題“{{poster_headline}}”，其餘使用簡潔抽象圖形。室內風格{{interior_design_style}}，燈光{{interior_lighting}}。大理石地面和古典柱身構成空間層次，人物與海報均可辨識，桌面道具剋制。",
  "en": "Photograph an adult café guest wearing {{clothing}} at a wooden table in a 9:16 gallery interior. Arrange five gold-framed posters on a deep green wall; the central one reads “{{poster_headline}}”, while the others use simple abstract graphics. Use {{interior_design_style}} and {{interior_lighting}}. Marble flooring and classical columns create depth. Keep both the guest and posters recognizable with restrained tabletop props."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34369 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n使用上傳的三張成年人物參考照，製作橫向雙欄人物一致性展示。左欄排三張輸入照，右欄把同三人自然合成在{{travel_location}}，共同穿著{{clothing}}，但保留各自面貌。右欄採用{{lighting_time}}，標題“{{poster_headline}}”放在上方。白色背景、圓角面板、比例約2.6:1，統一光向和人物尺度，三人不融合、不重複。",
  "en": "Upload the required reference image(s) first.\n\nUse three uploaded adult reference photos to create a wide identity-consistency comparison. Place the three inputs in the left panel; on the right, bring the same people together in {{travel_location}} wearing {{clothing}} while preserving their individual faces. Use {{lighting_time}} for the group scene and “{{poster_headline}}” above it. White background, rounded panels and an approximately 2.6:1 layout. Match lighting and scale without merging or duplicating people."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34488 = {
  "zh-tw": "設計3:2橫版字體樣張海報，頂部標題“{{poster_headline}}”，主區嚴格5行6列共30張字體卡，所有卡片重複同一句“{{main_text}}”。樣本文字語言{{text_language}}，背景{{art_paper}}。探索襯線、無襯線、圓體、書法、等寬和展示字體等風格，每格編號與字體型別說明清晰，不改變樣本文字內容。細灰分隔線、統一基線、寬裕邊距。",
  "en": "Design a 3:2 type specimen poster headed “{{poster_headline}}”. Arrange exactly thirty cards in five rows and six columns, each repeating “{{main_text}}” in {{text_language}}. Use {{art_paper}} and explore serif, sans-serif, rounded, calligraphic, monospaced and display treatments. Clearly number and label each style without changing the sample phrase. Thin gray rules, aligned baselines and generous margins keep the dense page readable."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34394 = {
  "zh-tw": "豎向2:3科幻漫畫單頁，人物為{{comic_cast}}，背景{{comic_location}}。六格依次展示做飯特寫、沙發看電視、新聞螢幕、驚訝側臉、窗外例外天象和兩人對望。新聞標題“{{main_text}}”，配色{{editorial_palette}}。室內暖光與窗外冷光對比，黑色格間距和細白邊框，半寫實動漫、電影景深、角色服裝保持一致。",
  "en": "Create a 2:3 science-fiction comic page featuring {{comic_cast}} in {{comic_location}}. Six panels show cooking, watching television, a news screen, a surprised profile, an unusual sky outside and the pair exchanging looks. The news headline reads “{{main_text}}”. Use {{editorial_palette}}, contrasting warm interior light with a cool exterior. Black gutters, thin white panel borders, semi-realistic anime rendering and cinematic depth; preserve costumes throughout."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34388 = {
  "zh-tw": "製作1:1像素格鬥角色素材表，4×4共16格。角色髮型{{hair_style}}，穿{{anime_outfit}}，圍繞{{sprite_action}}設計連貫動作，由準備、蓄力、出招到恢復。背景{{background_color_clean}}，大頭小身體、清晰拳腳輪廓、固定比例與腳底基線。各格獨立留白，攻擊軌跡不能越過相鄰格子，無文字。",
  "en": "Create a square pixel fighting-game sheet with sixteen cells in a 4×4 grid. Give the chibi fighter {{hair_style}} and {{anime_outfit}}. Build a coherent {{sprite_action}} sequence through preparation, anticipation, action and recovery. Use {{background_color_clean}}, a large head, compact body and readable fists and feet. Keep proportions and foot baselines consistent, with independent spacing so motion trails never overlap adjacent cells. No text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34182 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n把上傳的六格分鏡草圖轉換為黑白奇幻漫畫，輸出3:2並排對照：左側保留粗略草圖，右側按相同格位精繪。主人公穿{{anime_outfit}}，持{{fantasy_weapon}}，場景{{comic_location}}，精繪採用{{line_art_style}}與網點。保持人物位置、視線、事件順序和原分鏡比例，完善透視與材質，不隨意新增劇情。",
  "en": "Upload the required reference image(s) first.\n\nTransform the uploaded six-panel storyboard into finished black-and-white fantasy manga. Deliver a 3:2 comparison with the rough sketch on the left and refined panels in matching positions on the right. The protagonist wears {{anime_outfit}} and carries {{fantasy_weapon}} in {{comic_location}}. Use {{line_art_style}} and screentones. Preserve figure placement, gaze, event order and panel proportions while improving perspective and materials, without inventing extra plot beats."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34181 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n3×3武士姿勢參考圖中，同一成年角色留{{hair_style}}，穿{{anime_outfit}}，持{{fantasy_weapon}}。背景{{comic_location}}統一，九格分別正立、側立、回望、坐姿、拔劍、舉劍、防禦、行走和收劍。人物臉部與配飾穩定，衣襬隨動作自然變化，細線稿、柔和動漫陰影、方形畫布，格間邊距一致。",
  "en": "Upload the required reference image(s) first.\n\nCreate a square 3×3 samurai pose reference featuring one adult character with {{hair_style}}, {{anime_outfit}} and {{fantasy_weapon}} in a consistent {{comic_location}}. Show frontal standing, profile, looking back, sitting, drawing the weapon, raising it, guarding, walking and sheathing. Preserve face and accessories while fabric responds naturally to movement. Fine linework, soft anime shading and consistent panel spacing keep every pose clear."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34384 = {
  "zh-tw": "可愛的{{fruit}}擬人吉祥物使用{{digital_items}}，製作4×4共16幀像素動畫圖集。動作主題{{sprite_action}}，加入眨眼、敲鍵盤和抬頭的小幅變化，首尾動作銜接自然。背景{{background_color_clean}}，粗黑像素輪廓、有限色階、高光簡潔。每格主體大小、電腦位置和基線保持一致，方形畫布，無品牌標誌和格線。",
  "en": "Create sixteen pixel-animation frames of an anthropomorphic {{fruit}} mascot using {{digital_items}}, arranged in a square 4×4 sheet. Center the sequence on {{sprite_action}}, adding small blinks, typing motions and upward glances with a smooth first-to-last transition. Use {{background_color_clean}}, bold pixel outlines, limited shades and simple highlights. Keep character size, laptop position and baseline stable. No brand logos or grid lines."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34389 = {
  "zh-tw": "電影感科幻車庫內，成年機械師留{{hair_style}}，穿{{clothing}}，蹲在大型裝甲物流車旁，從打開的工具箱中挑選零件。機位貼近溼混凝土地面，巨大輪胎與人物形成尺度反差，背景車庫編號清晰但低調。配色{{editorial_palette}}，燈光{{lighting}}。真實油汙、磨損金屬和衣服褶皺，16:9寬幅敘事構圖。",
  "en": "In a cinematic science-fiction garage, an adult mechanic with {{hair_style}} wears {{clothing}} and crouches beside an armored logistics truck, selecting parts from an open toolbox. Keep the camera near wet concrete so the huge tires dwarf the figure. A discreet bay number anchors the background. Use {{editorial_palette}} and {{lighting}}. Real oil stains, worn metal and fabric folds support a 16:9 narrative composition."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34390 = {
  "zh-tw": "成年情侶在{{travel_location}}合拍自然手機自拍，人物靠近鏡頭，輕微廣角畸變，背景店鋪與遊樂設施柔焦。共同服裝風格{{clothing}}，情緒{{portrait_mood}}，光照{{lighting_time}}。方形裁切，膚色自然，髮絲有柔和逆光，保留普通旅行照片的隨意感，避免過度精修。",
  "en": "Photograph an adult couple taking a casual smartphone selfie in {{travel_location}}. Keep both faces close to the camera with mild wide-angle distortion and softly blurred shops and attractions. Style them with {{clothing}}, {{portrait_mood}} and {{lighting_time}}. Use a square crop, natural skin tones and soft backlit hair. Preserve the spontaneity of a holiday snapshot without excessive retouching."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34136 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的三張旅行參考圖融合為一張連貫的目的地海報，保留各圖最有辨識度的地貌和建築。主目的地{{travel_location}}與雪山、湖泊自然銜接，前景佈置植物、纜車和小船建立尺度。標題“{{poster_headline}}”，配色{{editorial_palette}}，時間{{lighting_time}}。精緻動畫電影風格，整體光向一致，避免拼貼邊緣和重複地標。",
  "en": "Upload the required reference image(s) first.\n\nFuse three uploaded travel references into one coherent destination poster, retaining distinctive terrain and architecture from each. Let {{travel_location}} blend naturally into snowy peaks and lakes, with plants, a cable car and boats establishing scale. Title it “{{poster_headline}}”. Use {{editorial_palette}} and {{lighting_time}} in a polished animated-film style. Unify the light direction and avoid visible collage seams or repeated landmarks."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34179 = {
  "zh-tw": "16:9黏土動畫風格辦公室，一群擬人{{character_animal}}被紙張、資料夾與便籤包圍，主角抱著搖搖欲墜的文件堆穿過前景。頂部標題“{{poster_headline}}”，辦公室主色{{editorial_palette}}，照明{{interior_lighting}}。手工黏土壓痕、圓潤傢俱和誇張疲憊表情清晰，淺景深聚焦主角，混亂有層次而非隨機堆砌。",
  "en": "Create a 16:9 clay-animation office where anthropomorphic {{character_animal}} workers are surrounded by papers, folders and sticky notes. The protagonist carries a precarious file stack through the foreground. Place “{{poster_headline}}” at the top. Use {{editorial_palette}} and {{interior_lighting}}, visible handmade clay impressions, rounded furniture and exaggerated tired expressions. Shallow depth of field prioritizes the protagonist; organize the clutter into readable layers."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34204 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n基於上傳的角色圖製作卡通半身貼紙動畫分解圖，保持髮型與頭飾可辨識。4行4列共16幀，動作主題{{sprite_action}}，表情{{portrait_mood}}，服裝{{anime_outfit}}，背景{{background_color_clean}}。按準備、動作、收勢、迴歸初始姿態平滑推進，主體尺寸與視角固定，輪廓利落、留白充分。輸出一張靜態幀表，供後續切片製作循環動畫。",
  "en": "Upload the required reference image(s) first.\n\nUse the uploaded character to make a cartoon bust sticker animation sheet, preserving recognizable hair and headwear. Arrange sixteen frames in four rows and four columns around {{sprite_action}}, with {{portrait_mood}}, {{anime_outfit}} and {{background_color_clean}}. Progress smoothly through preparation, action, recovery and the initial pose. Keep size and viewpoint fixed with crisp outlines and generous spacing. Deliver one static frame sheet for later slicing into a loop."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34189 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的兩張風景圖融合為靜態電影感旅行景觀：一側為宏偉圓頂清真寺和濱水碼頭，另一側為雪山、城堡與{{landscape_location}}。前景花卉{{botanical_accent}}與復古燈籠框景，{{lighting_time}}在平靜水面映出長長反射。統一透視與光向，遠山有空氣透視，船隻和村莊尺度合理。畫幅{{aspect_ratio}}，無文字。",
  "en": "Upload the required reference image(s) first.\n\nBlend two uploaded landscapes into a still cinematic travel scene. Place a grand domed mosque and waterfront piers on one side, snowy mountains, a castle and {{landscape_location}} on the other. Frame the foreground with {{botanical_accent}} and vintage lanterns. Let {{lighting_time}} form long reflections on calm water. Unify perspective and lighting, with atmospheric distant peaks and plausible boats and villages. Aspect ratio {{aspect_ratio}}; no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34420 = {
  "zh-tw": "高端耳機廣告，{{studio_brand}}充電盒直立於後側，兩隻無線耳機錯落放置在前景，硅膠耳塞、聲學開孔和盒蓋縫隙真實精細。機身主材{{primary_material}}，陳列於{{product_stage}}，採用{{editorial_palette}}。柔光箱產生受控高光與乾淨投影，品牌文字在盒身與耳機保持一致，3:4豎版，避免多餘產品。",
  "en": "Create a premium earbud advertisement for {{studio_brand}}. Stand the charging case at the rear and arrange exactly two earbuds in front, with realistic silicone tips, acoustic ports and lid seams. Use {{primary_material}} bodies on {{product_stage}} with {{editorial_palette}}. Softboxes produce controlled highlights and clean shadows. Keep branding consistent on the case and earbuds in a 3:4 frame, without extra products."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34419 = {
  "zh-tw": "冷萃咖啡罐居中直立於{{product_stage}}，包裝用深咖啡棕與奶油白斜向波紋分區，表面冷凝水珠清晰。品牌“{{studio_brand}}”，廣告句“{{poster_headline}}”。側方少量咖啡豆與杯影輔助，光照{{lighting}}，3:4豎版。罐體圓柱透視準確、文字隨表面自然彎曲，產品輪廓與背景分離。",
  "en": "Center an upright cold-brew can on {{product_stage}}. Divide its packaging into espresso brown and cream with a diagonal wave, showing crisp condensation droplets. Brand it “{{studio_brand}}” with “{{poster_headline}}”. A few coffee beans and a cup shadow support the scene. Use {{lighting}} in a 3:4 composition, accurate cylindrical perspective and typography that follows the surface. Separate the product silhouette cleanly from the background."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34417 = {
  "zh-tw": "香水品牌{{studio_brand}}的單瓶豎版廣告，厚壁圓角玻璃瓶裝琥珀色香液，精細瓶蓋和標記置於{{product_stage}}。旁邊點綴{{perfume_floral_set}}，背景使用{{editorial_palette}}。柔和側光穿過液體產生折射與焦散，底座紋理自然，保留標記可讀性。3:4畫幅、充分留白、不新增多瓶重複產品。",
  "en": "Create a vertical single-bottle perfume advertisement for {{studio_brand}}. A thick rounded glass bottle holds amber liquid, with a detailed cap and label on {{product_stage}}. Add {{perfume_floral_set}} and a {{editorial_palette}} background. Soft side light passes through the liquid, forming refraction and caustics. Preserve natural stone texture and readable packaging. A 3:4 frame with generous whitespace and no duplicate bottles."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34416 = {
  "zh-tw": "真實天然食品店生活方式照片，成年顧客穿{{clothing}}，手提裝有{{fruit}}的環保購物袋，神情{{portrait_mood}}。背景有整齊蔬果架、玻璃罐和木質標牌，採用{{lighting_time}}。鏡頭與人物視線平齊，淺景深保留商店氛圍，自然皮膚和食材紋理，4:5豎版，避免新增健康功效宣傳。",
  "en": "Photograph an adult shopper in a natural-food store wearing {{clothing}} and carrying a reusable bag filled with {{fruit}}, with {{portrait_mood}}. Organized produce shelves, glass jars and wooden signs establish the setting under {{lighting_time}}. Shoot at eye level with shallow depth of field while retaining the store atmosphere. Natural skin and food textures, 4:5 vertical framing, without health-benefit advertising claims."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34360 = {
  "zh-tw": "極簡科技發佈海報，展示{{apple_style_product}}，品牌{{studio_brand}}，主標題“{{poster_headline}}”。中央產品大幅懸浮，下面三塊簡短功能卡與細線圖標，背景{{background_color_clean}}。柔和接觸陰影與細膩材質，字重層級清晰、邊距寬闊，3:4豎版。功能描述保持通用概念，不虛構真實品牌參數或認證。",
  "en": "Design a minimalist technology launch poster featuring {{apple_style_product}} for {{studio_brand}}, headed “{{poster_headline}}”. Float a large product hero centrally above three short feature cards with line icons. Use {{background_color_clean}}, soft contact shadows, refined materials, clear typographic hierarchy and broad margins in a 3:4 frame. Keep features conceptual instead of inventing specifications or certifications for a real brand."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34287 = {
  "zh-tw": "為{{subject_product}}製作3×3商業廣告靜態分鏡，品牌{{studio_brand}}，配色{{editorial_palette}}，核心陳列臺{{product_stage}}。九格依次表現環境建立、包裝輪廓、瓶蓋特寫、材質微距、中心英雄鏡頭、側面折射、道具互動、品牌標記和結束全景。產品結構、文字和光線連續，每格構圖有所變化，乾淨邊框與編號，整體方形。",
  "en": "Create a square 3×3 commercial storyboard for {{subject_product}} by {{studio_brand}}, using {{editorial_palette}} and {{product_stage}}. Show establishing environment, packaging silhouette, cap detail, material macro, central hero shot, side refraction, prop interaction, brand label and closing wide view. Keep product geometry, lettering and light continuity across all nine frames while varying composition. Use clean dividers and discreet frame numbers."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34135 = {
  "zh-tw": "製作橫向香水品牌提案板，品牌{{studio_brand}}，香氣視覺主題{{perfume_floral_set}}，材質{{primary_material}}，主色{{editorial_palette}}。左側大幅香水英雄圖，右側依次排列瓶身細節、外盒、色卡和版式應用，底部一條生活方式橫圖。統一瓶型、標記與字體，柔和商業攝影光線，16:9畫布，訊息疏密有節奏。",
  "en": "Build a horizontal perfume campaign board for {{studio_brand}}, using {{perfume_floral_set}} as the scent’s visual theme, {{primary_material}} and {{editorial_palette}}. Place a large bottle hero on the left, with packaging details, carton, swatches and typographic applications on the right. A lifestyle strip anchors the bottom. Keep bottle shape, label and type consistent under soft commercial light. Use a balanced 16:9 presentation layout."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34483 = {
  "zh-tw": "繪製哥特吸血鬼Q版精靈圖，角色留{{hair_style}}，穿{{anime_outfit}}，瞳色{{eye_color}}。兩行共13幀，上行8幀、下行5幀，依次展現輕微漂浮、轉頭、抬手和回到待機的動作。背景{{background_color_clean}}，角色大頭小身、裙襬層次清楚，比例和朝向連貫，不新增格線、文字或互相遮擋的特效。",
  "en": "Draw a chibi Gothic vampire sprite sequence with {{hair_style}}, {{anime_outfit}} and {{eye_color}} eyes. Arrange thirteen frames in two rows: eight above and five below. Progress through slight floating, head turning, raising a hand and returning to idle. Use {{background_color_clean}} with large-head proportions and clear skirt layers. Maintain coherent scale and facing direction; omit grid lines, text and overlapping effects."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34385 = {
  "zh-tw": "可愛的拼布{{character_animal}}吉祥物全身居中，大圓頭、短四肢，一條腿輕輕抬起呈行走姿態。主毛色{{fur_color}}，深色補丁錯落分佈，配飾{{cute_accessory}}，背景{{background_color_clean}}。啞光絨毛與軟膠混合質感、圓潤接縫、柔和環境遮蔽，保留大量留白，1:1畫布，像精緻遊戲吉祥物渲染。",
  "en": "Render a cute patchwork {{character_animal}} mascot centrally, with a round oversized head, short limbs and one leg raised in a gentle walking pose. Use {{fur_color}}, irregular dark patches and {{cute_accessory}} over {{background_color_clean}}. Blend matte plush and soft-vinyl textures with rounded seams and subtle ambient occlusion. Generous whitespace on a 1:1 canvas creates a polished game-mascot presentation."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34345 = {
  "zh-tw": "未來包裹分揀設備的工業廣告，金屬傳送帶斜向穿過畫面，整齊紙箱與U形鏡面管道形成秩序。箱體和背景採用{{editorial_palette}}，主體機械材質{{primary_material}}，少量品牌字“{{studio_brand}}”放在設備面板。法蘭、螺栓、卡箍與維護通道符合工程邏輯，硬邊色塊與精細反射對比，光照{{lighting}}，2:3豎版。",
  "en": "Create an industrial advertisement for a futuristic parcel sorter. A diagonal conveyor, orderly cartons and U-shaped mirror pipes form a disciplined composition. Use {{editorial_palette}}, {{primary_material}} machinery and a discreet “{{studio_brand}}” label on the control panel. Plausible flanges, bolts, clamps and maintenance access ground the design. Hard-edged color fields contrast with refined reflections under {{lighting}}. Vertical 2:3 framing."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34500 = {
  "zh-tw": "玩具感蘑菇吉祥物站在開花草地上，以史詩電影式低機位表現溫柔的和平主題。前景{{botanical_accent}}虛化，遠處山脈與藍天明亮，角色帽蓋採用{{editorial_palette}}。大號標題“{{poster_headline}}”佔據上方，{{lighting_time}}勾勒輪廓。3D玩具攝影質感、精細草葉、2:3豎版，角色友善，字體與主體錯落不遮擋。",
  "en": "Place a friendly toy-like mushroom mascot in a flowering meadow, using an epic low-angle film composition for a gentle peace theme. Blur {{botanical_accent}} in front of bright mountains and sky. Give the mushroom cap {{editorial_palette}}. Set a large “{{poster_headline}}” above the scene, with {{lighting_time}} outlining the figure. Detailed grass and 3D toy-photography textures fill a 2:3 poster without typography obscuring the mascot."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34347 = {
  "zh-tw": "成年乘客穿{{clothing}}和寬鬆外套，戴{{accessory_glasses}}，舒適坐在{{location}}內，低頭看手機，另一手拿{{drink_product}}。手機僅顯示普通日程界面，窗外模糊軌道光帶與車廂冷暖光交織。紀實抓拍、自然皮膚、細微顆粒、3:4豎版，姿態鬆弛，背景乘客不搶主角。",
  "en": "Photograph an adult commuter wearing {{clothing}} with a loose coat and {{accessory_glasses}}, sitting comfortably in {{location}}. They look at a phone displaying a simple calendar while holding {{drink_product}}. Blurred track lights mix with the carriage’s cool and warm illumination. Use documentary framing, natural skin, subtle grain and a 3:4 vertical crop. Keep the pose relaxed and background passengers unobtrusive."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34180 = {
  "zh-tw": "成年人物從極高俯視魚眼鏡頭下抬頭自拍，強烈桶形畸變使臉部靠近鏡頭、身體縮小。髮型{{hair_style}}，服裝{{anime_outfit}}，表情{{portrait_mood}}，主色{{editorial_palette}}。蝴蝶結與蕾絲細節清楚，真實皮膚與鏡頭畸變共存，背景為簡潔室內地面，方形畫布，無文字。",
  "en": "Create an overhead fisheye selfie of an adult looking up into the lens. Strong barrel distortion enlarges the near face and reduces the body below. Use {{hair_style}}, {{anime_outfit}}, {{portrait_mood}} and {{editorial_palette}}. Preserve bow and lace details alongside real skin texture and optical distortion. Keep the indoor floor background simple in a square composition with no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34406 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的選單草圖轉為日式咖啡館成品廣告，保留文字區和食物的大體位置。頂部店名“{{studio_brand}}”，中間菜名“{{main_text}}”，價格行“{{supporting_text}}”。金黃華夫餅、黃油、糖漿與白色咖啡杯放在木桌，邊緣點綴{{botanical_accent}}。晨間窗光、淺景深，復古深綠招牌與細金邊，文字清晰、食物誘人。",
  "en": "Upload the required reference image(s) first.\n\nTurn the uploaded menu sketch into a finished Japanese café advertisement, preserving the approximate text and food positions. Set the shop name to “{{studio_brand}}”, dish name to “{{main_text}}” and price line to “{{supporting_text}}”. Photograph golden waffles, butter, syrup and a white coffee cup on wood, with {{botanical_accent}} around the edges. Morning window light, shallow depth of field and a dark green vintage sign with fine gold trim keep food and text inviting."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34401 = {
  "zh-tw": "繪製熱鬧的{{comic_location}}尋物插畫，在人群和攤位間只隱藏一隻{{creatures}}，可辨認但不位於畫面正中。時間{{comic_time}}，主色{{editorial_palette}}。紅鳥居、石階、燈籠、食物攤與穿浴衣的人形成密集層次，略俯視全景、清晰動漫背景畫風、16:9橫版。保證路徑連貫，目標生物不重複，不加定位箭頭。",
  "en": "Illustrate a busy {{comic_location}} as a hidden-object scene. Conceal exactly one {{creatures}} among crowds and stalls, recognizable but away from the center. Set it at {{comic_time}} in {{editorial_palette}}. A red torii, stone steps, lanterns, food stalls and yukata-clad visitors create dense layers. Use a slightly elevated panoramic anime-background view in 16:9. Keep paths coherent without repeating the hidden creature or adding location arrows."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34166 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n把上傳的巢狀 (Nesting)立方體草圖轉為三欄風格探索海報，三欄均保留外框、斜面與中心小開口的相同幾何。第一欄材質{{primary_material}}，第二欄紙面{{art_paper}}繪製，第三欄採用{{editorial_palette}}的發光數位藝術。每欄上圖下文，總標題“{{poster_headline}}”。白色間距、等寬排版、清晰透視，風格不同但結構不變。",
  "en": "Upload the required reference image(s) first.\n\nTransform the uploaded nested-cube sketch into a three-column art-direction poster. Preserve the same outer frame, sloped interior and small central opening throughout. Render the first in {{primary_material}}, paint the second on {{art_paper}} and make the third luminous digital art in {{editorial_palette}}. Place images above concise captions beneath “{{poster_headline}}”. Equal columns, white gutters and accurate perspective distinguish styles without changing geometry."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34387 = {
  "zh-tw": "9:16手繪動漫情緒拼貼，3×3九格展示同一Q版人物在夕陽與雨天中的片段。髮型{{hair_style}}，服裝{{anime_outfit}}，地點{{comic_location}}，主色{{editorial_palette}}。安排正面、側面、背影、遠景與眼睛特寫，保留粗糙鉛筆線和未完全塗滿的色塊。情緒低調、角色比例統一，雨滴與落日光自然連貫。",
  "en": "Create a 9:16 hand-drawn anime mood collage with nine panels showing one chibi character in sunset and rain. Use {{hair_style}}, {{anime_outfit}}, {{comic_location}} and {{editorial_palette}}. Alternate frontal, profile, rear, distant and eye-detail views. Retain rough pencil lines and partially filled color blocks. Keep the emotion understated, character proportions consistent and rain and sunset lighting coherent."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34169 = {
  "zh-tw": "製作5×5共25格塗鴉表情貼紙，小主角為圓潤簡化的{{character_animal}}，配飾{{cute_accessory}}。每格用不同姿勢表達開心、無語、忙碌、睏倦等日常情緒，上方配一句{{text_language}}短句，背景{{background_color_clean}}。粗細略不均的黑線、極少顏色、穩定外形和大留白，細灰格線，文字不超過一行且不重複。",
  "en": "Create twenty-five doodle stickers in a 5×5 grid featuring a rounded, simplified {{character_animal}} with {{cute_accessory}}. Use varied poses for everyday moods such as joy, speechlessness, busyness and sleepiness, each with a short {{text_language}} caption above. Set them on {{background_color_clean}} with slightly irregular black lines, minimal color and consistent silhouettes. Keep ample whitespace, thin gray dividers and unique one-line captions."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34393 = {
  "zh-tw": "16:9朋克音樂漫畫拼貼，3×3九格由{{comic_cast}}貫穿。造型{{anime_outfit}}，配色{{editorial_palette}}，標題“{{poster_headline}}”在一格內出現。組合演唱、吉他手部、鞋子、雙人側影、舞臺遠景與眼部特寫，粗黑墨線、塗鴉筆刷與平塗陰影，白色格間距。人物與服飾細節連續，避免每格重複同一構圖。",
  "en": "Create a 16:9 punk-music manga collage in a 3×3 grid featuring {{comic_cast}}. Use {{anime_outfit}}, {{editorial_palette}} and place “{{poster_headline}}” inside one panel. Mix singing, guitar-hand detail, footwear, a duo silhouette, wide stage and eye close-ups. Bold black ink, graffiti brushes, flat shading and white gutters provide energy. Preserve cast and costume continuity while varying every composition."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34405 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的動漫角色近景擴充為明亮花園半身插畫，保持面貌與髮型。頭頂新增細光環，背後展開一對羽翼，服裝換為{{anime_outfit}}，瞳色{{eye_color}}，周圍植物{{botanical_accent}}，配色{{editorial_palette}}。水彩高調光、柔和散景與半透明發絲，16:9橫版，臉部清楚，翅膀連線位置合理。",
  "en": "Upload the required reference image(s) first.\n\nExpand the uploaded anime close-up into a bright garden bust illustration while preserving face and hairstyle. Add a fine halo and one pair of wings. Use {{anime_outfit}}, {{eye_color}} eyes, {{botanical_accent}} and {{editorial_palette}}. High-key watercolor light, soft bokeh and translucent hair create a luminous 16:9 scene. Keep the face clear and the wings plausibly attached."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34395 = {
  "zh-tw": "同一動漫角色的3×3電影感拼貼，髮型{{hair_style}}，瞳色{{eye_color}}，服裝{{anime_outfit}}，配色{{editorial_palette}}。九格以正臉、回望、眼睛、鞋履、奔跑、抬頭、手部、背影與環境遠景構成視覺節奏，戲劇性邊緣光貫穿。粗黑分隔線、細緻賽璐珞畫風，16:9總畫布，人物身份和環境時間保持統一。",
  "en": "Build a cinematic 3×3 anime character collage using {{hair_style}}, {{eye_color}} eyes, {{anime_outfit}} and {{editorial_palette}}. Sequence frontal portrait, backward glance, eyes, footwear, running, looking up, hands, rear view and environmental wide shot. Dramatic rim lighting connects the frames. Use bold black separators and detailed cel shading on a 16:9 canvas, maintaining identity and a consistent time of day."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34176 = {
  "zh-tw": "製作Q版和風角色4×4共16格動作圖集，角色髮型{{hair_style}}，瞳色{{eye_color}}，服裝{{anime_outfit}}，動作主題{{sprite_action}}。四行分別展現準備、蓄力、攻擊和恢復，清晰像素輪廓、長髮與衣襬跟隨慣性，淺灰接地陰影。白色畫布，每格左上角小圓數位1–16，保持比例、朝向和服裝花紋一致。",
  "en": "Create sixteen chibi kimono action sprites in a 4×4 sheet. Use {{hair_style}}, {{eye_color}} eyes, {{anime_outfit}} and a {{sprite_action}} sequence. Dedicate rows to preparation, anticipation, attack and recovery, with crisp pixel contours, hair and fabric following inertia and pale contact shadows. Place small circular numbers 1–16 at cell corners on a white canvas. Preserve scale, facing direction and costume patterns."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34400 = {
  "zh-tw": "9:16動漫電影海報，成年校園角色站在櫻花山坡上回眸，髮型{{hair_style}}，服裝{{anime_outfit}}。{{lighting_time}}勾勒髮絲與飄落花瓣，遠處城市化為柔和色塊。主標題“{{poster_headline}}”放在畫面下部留白，少量製作訊息整齊排列。細膩動漫背景、粉金色空氣層、人物輪廓清晰，避免文字遮擋眼睛。",
  "en": "Create a 9:16 anime film poster showing an adult campus character looking back on a cherry-blossom hillside. Use {{hair_style}}, {{anime_outfit}} and {{lighting_time}} outlining hair and falling petals. Reduce the distant city to soft color fields. Place “{{poster_headline}}” in lower negative space with a small, orderly credit line. Detailed anime backgrounds and pink-gold atmosphere frame a clear silhouette without text covering the eyes."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34423 = {
  "zh-tw": "橫向動漫天使特寫，臉部佔左半畫面，髮型{{hair_style}}，瞳色{{eye_color}}，服裝{{anime_outfit}}，表情{{portrait_mood}}。頭頂細金光環與右側白羽翼清楚可見，背景花園過曝成柔和圓形光斑。透明發絲、玻璃眼眸高光與輕盈水彩陰影，避免高光吞掉五官，16:9構圖，無文字。",
  "en": "Draw a horizontal anime angel close-up with the face occupying the left half. Use {{hair_style}}, {{eye_color}} eyes, {{anime_outfit}} and a {{portrait_mood}} expression. Keep a thin golden halo and white wing on the right clearly visible against a garden dissolved into bright circular bokeh. Translucent hair, glassy eye highlights and light watercolor shading create luminosity without losing facial features. 16:9, no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34494 = {
  "zh-tw": "製作方形焦距對比示意圖，8個面板分為上下兩組2×2。同一{{room_type}}擺放{{furniture_set}}，主材{{floor_material}}，光照{{interior_lighting}}。每組分別展示18mm、35mm、50mm和85mm視角，保持主體取景大小近似，通過相機距離變化表現透視差異。組標題為“概念A”和“概念B”，不冒充實際模型效能測評，標記清晰。",
  "en": "Create a square focal-length illustration with eight panels in two stacked 2×2 groups. Use the same {{room_type}} containing {{furniture_set}}, {{floor_material}} and {{interior_lighting}}. Show 18mm, 35mm, 50mm and 85mm views in each group, keeping the main subject similarly sized by changing camera distance to illustrate perspective. Label groups “Concept A” and “Concept B”, not as an actual model benchmark. Keep all labels clear."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34418 = {
  "zh-tw": "高端實驗室精華液廣告，品牌{{studio_brand}}的磨砂玻璃按壓瓶居中，鉻銀泵頭、透明蓋和乳白液體細節清楚。陳列臺{{product_stage}}，背景{{editorial_palette}}，旁邊少量玻璃器皿與水滴。標記短句“{{poster_headline}}”清晰可讀，柔和頂光、精細反射、3:4直式構圖，保持清爽專業，不增加虛構療效。",
  "en": "Photograph a premium laboratory serum by {{studio_brand}}. Center a frosted pump bottle with a chrome head, transparent cap and milky liquid on {{product_stage}}. Use {{editorial_palette}} with a few glass vessels and droplets. Keep “{{poster_headline}}” readable on the label. Soft top light, refined reflections and a 3:4 frame create a clean professional image without invented therapeutic claims."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_33943 = {
  "zh-tw": "創作自然日系審美的成年女性肖像，臉部結構真實、少量淡雀斑、妝容清透，髮型{{hair_style}}，服裝{{clothing_female}}，表情{{portrait_mood}}。使用{{lighting}}，背景簡單柔焦，保留自然眉形、皮膚毛孔和微小不對稱。肩部以上近景、3:4直式構圖、輕膠片色彩，不誇張放大眼睛或過度磨皮。",
  "en": "Create a natural Japanese-inspired beauty portrait of an adult woman with realistic facial structure, a few faint freckles and light makeup. Use {{hair_style}}, {{clothing_female}}, {{portrait_mood}} and {{lighting}}. Keep the background simple and blurred. Preserve natural brows, pores and small asymmetries in a shoulder-up 3:4 frame with subtle film color. Avoid enlarged eyes or excessive smoothing."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34489 = {
  "zh-tw": "4×4哥特Q版人偶動作表，角色髮型{{hair_style}}，瞳色{{eye_color}}，穿{{anime_outfit}}。圍繞{{sprite_action}}設計16幀循環，面紗與層疊裙襬輕微擺動，末幀自然返回首幀。米白背景、細深色格線、小號1–16編號，角色大頭小身但比例穩定，每格完整展示身體，靜態方形幀表。",
  "en": "Create a 4×4 action sheet for a Gothic chibi doll with {{hair_style}}, {{eye_color}} eyes and {{anime_outfit}}. Build sixteen frames around {{sprite_action}}, with subtle movement in the veil and layered skirt, returning smoothly to the initial pose. Use an ivory background, thin dark grid lines and small numbers 1–16. Keep oversized-head proportions stable and the full body visible in every cell. Deliver a square static frame sheet."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34415 = {
  "zh-tw": "製作方形4×4舞蹈姿勢參考表，角色佩戴誇張兔耳頭飾，髮型{{hair_style}}，服裝{{anime_outfit}}，瞳色{{eye_color}}，配色{{editorial_palette}}。16格涵蓋伸展、側步、抬膝、轉身、踢腿與收勢等不同全身動作，白底細格線、1–16編號。鞋底陰影與人物尺度統一，兔耳和髮束隨動作變化但形象不變。",
  "en": "Create a square 4×4 dance-pose guide for a street-style character with oversized rabbit-ear headwear, {{hair_style}}, {{anime_outfit}} and {{eye_color}} eyes in {{editorial_palette}}. Show sixteen distinct full-body poses including stretching, sidesteps, knee lifts, turns, kicks and finishing gestures. White background, thin grid lines and numbers 1–16. Match foot shadows and character scale while ears and hair respond naturally to movement."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34391 = {
  "zh-tw": "Q版獸騎士攻擊圖集，角色為{{character_animal}}，穿{{anime_outfit}}，持{{fantasy_weapon}}，背景{{background_color_clean}}。4×4共16幀，整體朝右，四行分別表現待機、蓄力、橫斬和恢復。武器長度與盔甲結構連續，重心變化清楚，揮擊特效限制在各格內，像素邊緣銳利，無文字、無漸變背景。",
  "en": "Create an attack sprite sheet for a chibi {{character_animal}} knight in {{anime_outfit}} wielding {{fantasy_weapon}} against {{background_color_clean}}. Use sixteen frames in a 4×4 grid facing mainly right, with rows for idle, anticipation, horizontal strike and recovery. Keep weapon length and armor geometry continuous, show convincing weight shifts and confine effects to each cell. Crisp pixel edges, no text or background gradients."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34158 = {
  "zh-tw": "仙俠Q版劍客4×4戰鬥精靈圖，髮型{{hair_style}}，穿{{anime_outfit}}，兵器{{fantasy_weapon}}，劍氣主色{{editorial_palette}}。16幀涵蓋握劍待機、下蹲蓄力、連續斬擊和收劍，衣袖與長髮跟隨運動，留出完整武器軌跡。白色背景、無格線、統一尺度和腳底基準，每幀清楚分離。",
  "en": "Create a 4×4 combat sprite atlas for a chibi fantasy swordsman with {{hair_style}}, {{anime_outfit}} and {{fantasy_weapon}}. Color the energy trails in {{editorial_palette}}. Sixteen frames cover ready stance, crouched anticipation, successive slashes and sheathing. Sleeves and hair follow the movement; leave enough room for the entire weapon arc. Use a white background without grid lines, stable scale and foot baseline, and clearly separated frames."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34334 = {
  "zh-tw": "復古未來主義物流車廣告，一輛方形電動貨車停在前景黑色瀝青上，車身材質{{primary_material}}，車身主色{{editorial_palette}}。背景研究站由白色立方體、鏡面玻璃塔和球形觀測艙組成，光照{{lighting_time}}。車頭朝右、三分之四側視，輪胎與雨刷細節真實，水平路面與乾淨天空構成幾何層次。畫幅{{aspect_ratio}}，無品牌文字。",
  "en": "Photograph a retro-futuristic electric delivery van on black asphalt. Use {{primary_material}} and {{editorial_palette}} for its boxy body. Behind it, arrange a research station of white cubes, mirrored towers and a spherical observation pod under {{lighting_time}}. Face the van right in three-quarter view, retaining realistic tires and wipers. Horizontal ground and clean sky form geometric layers. Aspect ratio {{aspect_ratio}}; no branding."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34338 = {
  "zh-tw": "低機位仰拍模組化機械塔，互鎖矩形艙體向畫面上方延伸，採用{{editorial_palette}}。主體材質{{primary_material}}，細密維護平臺、折返樓梯和鉻合金框架連線各艙，鈑金摺痕、門縫、通風口和鉸鏈可見。背景{{background_color_clean}}，光照{{lighting}}。2:3直式構圖，色塊邊界乾淨，反射受控，工業結構複雜但合理。",
  "en": "Shoot upward at a modular mechanical tower of interlocking rectangular pods extending beyond the frame. Use {{editorial_palette}} and {{primary_material}} with maintenance decks, switchback stairs and chrome framing between modules. Show sheet-metal folds, seams, vents and hinges. Set it against {{background_color_clean}} under {{lighting}}. A 2:3 vertical view keeps color boundaries clean and reflections controlled, with intricate but plausible industrial construction."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34351 = {
  "zh-tw": "實驗性時尚頭盔佔據大部分畫面，成年模特轉向右側，面部完全被不透明面罩遮住。頭盔主材{{primary_material}}，面板配色{{editorial_palette}}，肩部服裝{{clothing}}，背景{{background_color_clean}}。鏡面圓頂、穿孔面板、細螺栓和虹彩面罩形成精密層次，定向硬光、清晰產品邊緣，2:3豎版，上方留少量負空間。",
  "en": "Fill most of a 2:3 portrait with an experimental fashion helmet on an adult turned right, the face completely hidden by an opaque visor. Use {{primary_material}}, {{editorial_palette}} panels, {{clothing}} at the shoulders and {{background_color_clean}}. A mirrored dome, perforated plates, fine bolts and iridescent visor create precision layers. Directional hard light defines product edges; retain a little negative space above."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34478 = {
  "zh-tw": "超現實景觀中，一名獨行者站在{{natural_environment}}底部中央，穿{{clothing}}。天空像巨浪與織物隧道般折疊，雲帶從左上向地平線彎卷，遠方雪山仍保持真實尺度。採用{{editorial_palette}}，廣角低地平線，空氣層與雲體積清晰。畫幅{{aspect_ratio}}，人物微小，物理不可能的天空仍具有寫實光影，無文字。",
  "en": "Place one small traveler wearing {{clothing}} at the bottom center of {{natural_environment}}. Above, the sky folds like a vast wave or fabric tunnel, curling from the upper left toward the horizon while distant snowy mountains retain realistic scale. Use {{editorial_palette}}, a wide lens, low horizon and clear atmospheric cloud volumes. Aspect ratio {{aspect_ratio}}. The impossible sky should still obey convincing light and shadow; no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34375 = {
  "zh-tw": "2×2自然風景攝影拼貼，以{{landscape_location}}為共同主題，分別表現清晨薄霧、午後晴空、金色日落和藍調暮色。前景植物{{botanical_accent}}作為重複線索，統一{{editorial_palette}}，畫幅{{aspect_ratio}}。每格有獨立前中後景，水面反射與山脈形狀連貫，白色細間距，真實自然紋理，不加文字。",
  "en": "Create a 2×2 landscape photography collage centered on {{landscape_location}}. Show morning mist, clear afternoon, golden sunset and blue-hour twilight. Repeat {{botanical_accent}} as a foreground motif and unify the set with {{editorial_palette}}. Use a {{aspect_ratio}} canvas, distinct foreground, middle ground and distance in each panel, coherent mountain shapes and water reflections, fine white gutters and natural textures. No text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34178 = {
  "zh-tw": "電影感山路摩托追拍，成年騎手穿{{clothing}}與頭盔，駕駛黑色巡航三輪摩托經過{{natural_environment}}。車牌文字“{{serial_code}}”，光照{{lighting_time}}。從左後方低位跟拍，人物和車身銳利，路面、樹木與護欄形成方向一致的運動模糊，鍍鉻件與黑漆反射真實。4:3橫版，車輪接地、彎道透視與車輛結構合理。",
  "en": "Create a cinematic mountain-road tracking photo of an adult rider wearing {{clothing}} and a helmet on a black touring trike amid {{natural_environment}}. The plate reads “{{serial_code}}”. Use {{lighting_time}} and a low rear-left tracking viewpoint. Keep rider and vehicle sharp while asphalt, trees and guardrails blur coherently. Real chrome and black-paint reflections, believable wheel contact and road perspective complete a 4:3 composition."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34160 = {
  "zh-tw": "為{{city_name}}繪製手繪旅行地圖，主河流、主要城區和代表性地標按相對地理關係安排，不混入其他城市。用插畫小圖展示建築、美食和交通，紅色定位點連成一條建議遊覽路線。紙張{{art_paper}}，植物邊飾{{botanical_accent}}，註釋語言{{text_language}}。16:9橫版，柔和水彩、親切手寫字、清楚的城市標題與指北針，訊息豐富但標記不重疊。",
  "en": "Paint a travel map for {{city_name}}, arranging its river, districts and representative landmarks in plausible relative positions without importing another city’s geography. Illustrate architecture, food and transit, linking red pins into a suggested sightseeing route. Use {{art_paper}}, {{botanical_accent}} borders and {{text_language}} notes. A 16:9 watercolor layout includes a clear city title, compass and friendly handwriting with non-overlapping labels."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34396 = {
  "zh-tw": "浮世繪風格的16:9春日插畫，成年人物穿{{anime_outfit}}站在木質寺廊，三分之四背影回眸，髮型{{hair_style}}。河渠、橋樑、町屋和五重塔鋪陳遠景，{{botanical_accent}}環繞畫面，紙面{{art_paper}}。左側窄裝飾邊框結合扇形與波紋，細墨線、柔和水彩與金箔點綴，織錦與腰帶結精細，人物面貌清楚。",
  "en": "Create a 16:9 spring woodblock-inspired illustration of an adult in {{anime_outfit}}, with {{hair_style}}, looking back from a wooden temple corridor in three-quarter rear view. Canals, bridges, townhouses and a pagoda extend into the distance. Frame them with {{botanical_accent}} on {{art_paper}}. A narrow fan-and-wave border, fine ink, soft watercolor and gold accents complement detailed brocade and an obi bow while keeping the face clear."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34167 = {
  "zh-tw": "古代壁畫風格僧侶概念圖，左側一個全身站姿，右側一個較大的三分之四半身像，必須為同一位年邁僧人。長袍主材{{costume_material}}，配飾{{character_accessories}}，情緒{{portrait_mood}}。紙面{{art_paper}}帶褪色山水和壁畫痕跡，赭石灰褐配色、細膩皺紋、補丁與磨損衣邊。16:9橫版、無文字，兩個檢視服飾細節一致。",
  "en": "Create an ancient mural-inspired monk concept sheet with one full-body standing view on the left and a larger three-quarter bust on the right, both showing the same elderly monk. Use {{costume_material}} robes, {{character_accessories}} and a {{portrait_mood}} expression. Work on {{art_paper}} with faded landscapes and mural traces, ocher-gray colors, delicate wrinkles, patches and frayed hems. A 16:9 layout with no text; match costume details between views."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34382 = {
  "zh-tw": "製作{{creatures}}三檢視參考表，上方一張大側檢視，左下正視、右下後視，均為同一生物。背景{{background_color_clean}}，紙面表現{{art_paper}}，光照{{lighting}}。半寫實自然圖鑑風格，鱗片、鰭條、鰓蓋和身體比例準確，柔和陰影、邊緣清晰。只出現三個檢視，不加水草、魚鉤或文字。",
  "en": "Create a three-view study of {{creatures}}: a large side profile above, frontal view below left and rear view below right. Use {{background_color_clean}} with a {{art_paper}} finish and {{lighting}}. Render it as a semi-realistic natural-history reference with accurate scales, fin rays, gill covers and proportions, soft shadows and clear edges. Show exactly three views of the same creature, without plants, hooks or text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34380 = {
  "zh-tw": "3:4時尚封面，成年模特坐在鏡頭前撐著大傘，髮型{{hair_style}}，服裝{{clothing_female}}。傘面與海邊日落背景採用{{editorial_palette}}，傘骨形成放射狀框景，人物手指輕觸臉頰、自然抬眼。頂部大號刊名“{{studio_brand}}”局部被傘遮擋但可讀，真實膚質、細膠片顆粒、淺景深，底部僅少量編輯文字。",
  "en": "Create a 3:4 fashion cover of an adult seated close to the camera beneath a large umbrella. Use {{hair_style}}, {{clothing_female}} and {{editorial_palette}} for the umbrella and seaside sunset. Radiating ribs frame the figure as one finger touches the cheek and the gaze turns upward. Set “{{studio_brand}}” across the top, partly overlapped but readable. Natural skin, fine film grain, shallow depth and minimal bottom copy."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34379 = {
  "zh-tw": "暗黑奇幻競技場關鍵幀，從一位成年貴族背後望向觀眾席。人物髮型{{hair_style}}，斗篷服裝{{anime_outfit}}外加長披風，主色{{editorial_palette}}。兩側旗幟與石像對稱佈置，照明{{lighting_time}}和金色火光形成對比，背部刺繡、長髮和肩線細緻。2.39:1寬銀幕，人物鎮定、遠景人群柔焦，無字幕與標記箭頭。",
  "en": "Create a dark-fantasy arena keyframe viewed from behind an adult noble. Use {{hair_style}}, {{anime_outfit}} beneath a long ceremonial cloak and {{editorial_palette}}. Arrange banners and statues symmetrically around the crowd. Contrast {{lighting_time}} with golden firelight, detailing embroidered fabric, hair and shoulders. A 2.39:1 cinematic frame keeps the figure composed and the audience softly blurred, without captions or annotation arrows."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34491 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n把上傳的旅行照改編為兒童蠟筆風格海報，保留人物和姿勢的大體特徵，背景城市{{city_name}}，人物穿{{clothing}}，紙張{{art_paper}}，配色{{editorial_palette}}。主畫面用粗糙蠟筆、不均勻黑線和塗鴉雲朵表現港灣、橋樑與草坡；左下角放一張小型真實參考照片白框插圖，約佔寬度六分之一。4:5豎版，蠟筆畫佔主導，無標題。",
  "en": "Upload the required reference image(s) first.\n\nAdapt the uploaded travel photo into a childlike crayon poster, preserving the person’s broad identity and pose. Set it in {{city_name}} with {{clothing}} on {{art_paper}} in {{editorial_palette}}. Use rough crayons, uneven black outlines and scribbled clouds for a harbor, bridge and grassy slope. Add a small white-framed inset of the real reference photo at lower left, about one-sixth of the width. A 4:5 page dominated by crayon artwork, without a title."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34368 = {
  "zh-tw": "為{{studio_brand}}製作四件護膚品電商主圖，依次展示爽膚水高瓶、面霜矮罐、精華滴管瓶與潔面軟管，統一品牌字體。產品置於高低錯落的{{product_stage}}，配色{{editorial_palette}}，燈光{{lighting}}。瓶壁厚度、磨砂、金屬蓋和液體折射真實，標記簡潔可讀，1:1方形、柔和斜影，不新增多餘產品。",
  "en": "Create a four-product skincare hero for {{studio_brand}}: a tall toner bottle, low cream jar, serum dropper and cleanser tube. Unify brand typography and arrange them at varied heights on {{product_stage}}. Use {{editorial_palette}} and {{lighting}}. Realistic glass thickness, frosting, metal caps and liquid refraction support concise readable labels. Square composition with soft diagonal shadows and exactly four products."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34407 = {
  "zh-tw": "手工冰淇淋品牌{{studio_brand}}的16:9視覺識別提案，以{{travel_location}}為靈感。八塊拼貼區展示主標誌、兩種標誌反白、冰淇淋桶、購物袋、杯蓋、圖標集和重複紋樣。配色{{editorial_palette}}，植物圖標{{botanical_accent}}與山峰太陽線條統一。襯線字標帶輕微手寫感，實物樣機與向量素材清楚區分，杯桶透視和品牌拼寫一致。",
  "en": "Build a 16:9 identity board for artisan gelateria {{studio_brand}}, inspired by {{travel_location}}. Eight collage areas show the primary mark, two alternate logo treatments, an ice-cream tub, shopping bag, lids, icons and repeating pattern. Use {{editorial_palette}} with {{botanical_accent}}, mountain and sun line motifs. A lightly handwritten serif wordmark connects realistic mockups and vector assets. Keep packaging perspective and brand spelling consistent."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34376 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n根據上傳的檯燈參考圖製作2:1並排材質對照，左右各一格，中間細白分隔線。左邊保持原始形狀和材質，右邊只把燈罩與底座改為{{primary_material}}，保留燈杆、按鈕、位置和比例。背景{{background_color_clean}}，燈光{{lighting}}，上方短標題“{{poster_headline}}”。兩邊相機與陰影完全一致，通過表面高光和微紋理體現材質變化。",
  "en": "Upload the required reference image(s) first.\n\nUse the uploaded lamp reference for a 2:1 side-by-side material comparison with a thin white divider. Keep the original on the left; on the right change only the shade and base to {{primary_material}}, preserving stem, button, placement and proportions. Use {{background_color_clean}} and {{lighting}} with “{{poster_headline}}” above. Match camera and shadows exactly so surface highlights and microtexture communicate the material change."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34162 = {
  "zh-tw": "16:9流媒體電影陣容橫幅，品牌“{{studio_brand}}”，主標題“{{poster_headline}}”，副標題“{{supporting_text}}”。橫排六張豎版虛構電影卡，分別呈現科幻、懸疑、古裝、城市、奇幻和旅行題材，統一{{editorial_palette}}與細金邊。暗色背景、柔和聚光燈、簡潔導覽，卡片標題與縮略圖有清晰層級，避免冒用真實片名。",
  "en": "Design a 16:9 streaming-film hero banner for “{{studio_brand}}” headed “{{poster_headline}}”, with “{{supporting_text}}” below. Arrange six vertical fictional film cards for science fiction, mystery, historical drama, urban life, fantasy and travel. Unify them with {{editorial_palette}} and fine gold borders. Dark background, gentle spotlights and simple navigation support readable card titles and imagery without borrowing real film titles."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34411 = {
  "zh-tw": "溫暖日式咖啡館中，貓耳動漫角色坐在木桌前準備午餐，髮型{{hair_style}}，服裝{{anime_outfit}}，餐點主菜{{premium_food_subject}}，光照{{lighting_time}}。托盤上整齊擺米飯、湯、主菜、小菜和茶，人物右手持筷，左手放桌面，貓尾從側面露出。3:4豎版、細膩賽璐珞和食物高光，背景木櫃與檯燈柔焦。",
  "en": "In a warm Japanese café, a cat-eared anime character with {{hair_style}} and {{anime_outfit}} sits at a wooden table before {{premium_food_subject}} under {{lighting_time}}. Arrange rice, soup, main dish, pickles and tea neatly on a tray. The right hand holds chopsticks while the left rests on the table; a tail appears at the side. Use delicate cel shading, appetizing food highlights and blurred cabinets and lamps in a 3:4 frame."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34199 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n將上傳的成年角色參考圖改成真實人物直播肖像，保持臉型、髮型與服裝設計，所有材質轉為真實布料。佩戴貓耳遊戲耳機，背景{{room_style_cute}}，燈光主色{{editorial_palette}}，表情{{portrait_mood}}。9:16豎版、顯示器上方輕俯視鏡頭，加入少量“LIVE”與{{text_language}}虛構聊天文字，模型玩具、鍵盤和水杯柔焦，整體保持攝影真實感。",
  "en": "Upload the required reference image(s) first.\n\nTranslate the uploaded adult character into a photorealistic livestream portrait, preserving facial shape, hairstyle and clothing design with real fabric materials. Add cat-ear gaming headphones in {{room_style_cute}}, using {{editorial_palette}} light and a {{portrait_mood}} expression. A slightly elevated webcam viewpoint frames a 9:16 portrait. Include a restrained LIVE indicator and fictional {{text_language}} chat, with blurred figures, keyboard and water glass. Keep the entire image photographic."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34398 = {
  "zh-tw": "同一動漫角色享用{{premium_food_subject}}的六格表情連拍，2行3列，方形畫布。髮型{{hair_style}}，服裝{{anime_outfit}}，主色{{editorial_palette}}。依次表現舉起食物微笑、準備咬下、大口品嚐、滿足閉眼、意外驚喜和開心展示，食物隨進食合理減少。溫暖咖啡館日光、白色細間距、柔和賽璐珞，人物五官與道具結構不變。",
  "en": "Create six anime reaction panels of one character enjoying {{premium_food_subject}} in two rows and three columns on a square canvas. Use {{hair_style}}, {{anime_outfit}} and {{editorial_palette}}. Show smiling with the food, preparing a bite, taking a bite, savoring with closed eyes, pleasant surprise and proudly presenting it. Let the food diminish plausibly. Warm café daylight, fine white gutters and soft cel shading preserve facial and prop consistency."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_33968 = {
  "zh-tw": "請先上傳所需的參考圖片。\n\n根據上傳的角色圖製作4×4共16幀簡約像素戰鬥動作表，角色服裝{{anime_outfit}}，主色{{editorial_palette}}。四行分別4幀待機、4幀拳擊、4幀踢腿和4幀受擊，保留原角色身份與頭部特徵。每格約128像素角色尺度，背景{{background_color_clean}}，描邊採用{{line_art_style}}對應的像素輪廓。動作重心清楚、幀間距均勻，不新增文字。",
  "en": "Upload the required reference image(s) first.\n\nUse the uploaded character to make sixteen simple pixel combat frames in a 4×4 sheet. Use {{anime_outfit}} and {{editorial_palette}} while retaining identity and head features. Assign four frames each to idle, punching, kicking and receiving a hit. Keep character scale around 128 pixels per cell over {{background_color_clean}}, with pixel outlines corresponding to {{line_art_style}}. Clear weight shifts and even spacing; no text."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34490 = {
  "zh-tw": "繪製赤壁之戰題材的歷史敘事示意地圖，長江貫穿中央，山巒、城池、艦隊、火船與行軍箭頭形成清晰層次。紙面{{art_paper}}，配色{{editorial_palette}}，標題“{{main_text}}”，註釋語言{{text_language}}。左上標題區、中央戰場、右下圖例，水墨與舊地圖質感結合。標註為藝術示意，不杜撰精確兵力或測繪資料，4:3橫版，文字不遮擋路線。",
  "en": "Create an artistic narrative map of the Battle of Red Cliffs, with the Yangtze running through mountains, cities, fleets, fire ships and directional arrows. Use {{art_paper}}, {{editorial_palette}}, the title “{{main_text}}” and {{text_language}} annotations. Place the title upper left, battle centrally and legend lower right. Blend ink painting with aged-map texture in 4:3. Identify it as an artistic schematic without invented exact troop counts or survey data; keep routes readable."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34348 = {
  "zh-tw": "高對比黑白時尚寫真，成年模特留{{hair_style}}，穿{{clothing_male}}，靠在{{wall_material}}牆前，表情{{portrait_mood}}。雙手插袋、抬頭直視鏡頭，斜向陽光切過牆面和麵部，硬邊投影清晰。深黑與亮白保留層次，細膠片顆粒、真實皮膚、50mm鏡頭感，4:5直式構圖。",
  "en": "Photograph an adult fashion model with {{hair_style}} wearing {{clothing_male}} against a {{wall_material}} wall, with a {{portrait_mood}} expression. Hands in pockets, head slightly raised, eyes toward the camera. Diagonal sunlight cuts across face and wall, creating crisp shadows. Use high-contrast black and white while retaining tonal detail, fine grain, real skin and a 50mm look. Vertical 4:5 composition."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34362 = {
  "zh-tw": "成年旅行者坐在{{city_name}}街邊石欄杆上，髮型{{hair_style}}，服裝{{clothing_male}}，光照{{lighting_time}}。一隻手撐在身後，雙腿自然放鬆，遠方建築與代表性地標隨城市同步變化。真實手機旅行攝影、柔和天空、淺景深、自然陰影與織物細節，3:4豎版，保持抓拍般鬆弛感。",
  "en": "Photograph an adult traveler sitting on a stone railing in {{city_name}}, with {{hair_style}}, {{clothing_male}} and {{lighting_time}}. One hand supports the body behind while the legs relax naturally. Match distant architecture and a recognizable landmark to the selected city. Use a realistic smartphone travel style, soft sky, shallow depth, natural shadows and fabric detail. A relaxed candid 3:4 portrait."
};

export const TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34372 = {
  "zh-tw": "成年女性胸部以上近景，髮型{{hair_style}}，穿{{clothing_female}}，一隻手輕觸耳邊頭髮，表情{{portrait_mood}}。背景{{wall_material}}，機頂直閃在右側投下頭部和手部的柔邊陰影。低飽和色彩、真實T區反光、細膩毛孔、清晰羅紋領口，3:4直式構圖，不使用美顏磨皮。",
  "en": "Create a chest-up portrait of an adult woman with {{hair_style}} and {{clothing_female}}, touching the hair near one ear with a {{portrait_mood}} expression. Use {{wall_material}} behind her. Direct on-camera flash casts a softly edged head-and-hand shadow to the right. Muted color, realistic T-zone shine, pores and a detailed ribbed neckline preserve a candid feel. Vertical 3:4 frame without beauty smoothing."
};

export const INITIAL_TEMPLATES_CONFIG = [
  {
    id: "tpl_photo_grid",
    name: { "zh-tw": "3x3 攝影網格", en: "3x3 Photo Grid" },
    content: TEMPLATE_PHOTO_GRID,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/5302794e63fa130b.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "clothing": { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      "grid_pose-0": { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
      "grid_pose-1": { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      "grid_pose-2": { "zh-tw": "單色下巴託手", en: "Monochrome hand on chin" },
      "grid_pose-3": { "zh-tw": "正面特寫陰影", en: "Frontal close-up with shadows" },
      "grid_pose-4": { "zh-tw": "斜角拍攝", en: "Angled shot" },
      "grid_pose-5": { "zh-tw": "雙手置於鎖骨", en: "Hands on collarbones" },
      "grid_pose-6": { "zh-tw": "坐姿半身側面", en: "Seated half-body profile" },
      "grid_pose-7": { "zh-tw": "側面微距水滴", en: "Side macro with water drops" },
      "grid_pose-8": { "zh-tw": "回眸一笑", en: "Looking back with a smile" },
      "lens_param-0": { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      "lens_param-1": { "zh-tw": "85mm, f/2.0", en: "85mm, f/2.0" },
      "lens_param-2": { "zh-tw": "50mm, f/2.2", en: "50mm, f/2.2" },
      "lens_param-3": { "zh-tw": "50mm, f/2.5", en: "50mm, f/2.5" },
      "lens_param-4": { "zh-tw": "50mm, f/3.2", en: "50mm, f/3.2" },
      "lens_param-5": { "zh-tw": "35mm, f/4.5", en: "35mm, f/4.5" },
      "lens_param-6": { "zh-tw": "85mm, f/1.9", en: "85mm, f/1.9" },
      "lens_param-7": { "zh-tw": "50mm, f/1.8", en: "50mm, f/1.8" },
      "lens_param-8": { "zh-tw": "85mm, f/2.2", en: "85mm, f/2.2" }
    },
    tags: ["人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_fashion",
    name: { "zh-tw": "時尚情緒板插畫", en: "Fashion Moodboard" },
    content: TEMPLATE_FASHION_MOODBOARD,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/4d9f92ccb4113fdd.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {},
    tags: ["人物", "創意", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_character_selfie",
    name: { "zh-tw": "人物趣味合影", en: "Character Selfie" },
    content: TEMPLATE_CHARACTER_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/c2312d24d0f2c38e.jpeg",
    author: "@tanshilong（MarioTan）",
    selections: {},
    tags: ["人物", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_classic_scene",
    name: { "zh-tw": "經典場景微縮復刻", en: "Classic Scene Miniature" },
    content: TEMPLATE_CLASSIC_SCENE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/1eac697f5a438542.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "classic_scene": { "zh-tw": "千與千尋", en: "Spirited Away" },
      "render_style": { "zh-tw": "Octane Render 和 Cinema 4D", en: "Octane Render and Cinema 4D" },
      "position": { "zh-tw": "頂部中央", en: "Top Center" }
    },
    tags: ["卡通", "創意", "遊戲"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_corporate_growth",
    name: { "zh-tw": "視覺化企業成長之路", en: "Corporate Evolution Path" },
    content: TEMPLATE_CORPORATE_GROWTH,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/a7e87e49c6144fdc.jpg",
    author: "@langzihan（Keng哥）",
    selections: {
      "company": { "zh-tw": "任天堂（Nintendo）", en: "Nintendo" },
      "render_style": { "zh-tw": "3D像素風格", en: "3D Pixel Art Style" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["建築", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_fisheye_urban",
    name: { "zh-tw": "極端魚眼都市奇觀", en: "Fisheye Urban Wonder" },
    content: TEMPLATE_FISHEYE_URBAN,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/14/b21165a2afefaf4d.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "lens_type": { "zh-tw": "極端魚眼鏡頭", en: "Extreme Fisheye Lens" },
      "role": { "zh-tw": "年輕女性", en: "Young woman" },
      "character_originality": { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      "school_uniform": { "zh-tw": "灰色開襟和格子裙校服", en: "Grey cardigan and plaid skirt uniform" },
      "urban_location": { "zh-tw": "澀谷十字路口", en: "Shibuya Crossing" },
      "dynamic_action": { "zh-tw": "一隻手誇張地伸向鏡頭前景", en: "One hand exaggeratedly reaching towards the foreground" },
      "fingernail_detail": { "zh-tw": "手指甲清晰可見", en: "Fingernails clearly visible" },
      "building_cluster": { "zh-tw": "扭曲的澀谷109大樓和其他建築林立", en: "Distorted Shibuya 109 building and other forest of buildings" },
      "crowd_traffic": { "zh-tw": "擠滿行人和車輛", en: "Bustling traffic" },
      "monster_element": { "zh-tw": "巨大的粉色和藍色漸變卡通怪獸", en: "Giant pink and blue gradient cartoon monster" },
      "monster_feature": { "zh-tw": "巨大的觸手和角", en: "Giant tentacles and horns" },
      "distorted_city": { "zh-tw": "扭曲的城市景觀", en: "Distorted urban landscape" },
      "lighting_atmosphere": { "zh-tw": "陽光明媚", en: "Sunny" },
      "shadow_contrast": { "zh-tw": "光影對比強烈", en: "Strong light-shadow contrast" },
      "ratio": { "zh-tw": "圓形畫幅", en: "Circular Aspect Ratio" },
      "render_style": { "zh-tw": "高品質的 2D 插畫風格", en: "High-quality 2D illustration style" }
    },
    tags: ["攝影", "創意", "人物"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_detective_social",
    name: { "zh-tw": "歷史名人的朋友圈", en: "Historical Figure's Moments" },
    content: TEMPLATE_DETECTIVE_SOCIAL,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/14/6ff892060de55ea9.jpg",
    author: "@dotey(寶玉)",
    selections: {
      "character_groups": { "zh-tw": "中國古代開國皇帝", en: "Ancient Chinese Founding Emperors" },
      "social_media": { "zh-tw": "微信朋友圈", en: "WeChat Moments" },
      "ratio": { "zh-tw": "9:16直式構圖", en: "9:16 Vertical" }
    },
    tags: ["創意", "人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_magazine_cover",
    name: { "zh-tw": "雜誌大片", en: "Magazine Cover" },
    content: TEMPLATE_MAGAZINE_COVER,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/16/a6106f5cc6e92a74.jpg",
    imageUrls: [
      "https://s3.bmp.ovh/imgs/2025/12/16/a6106f5cc6e92a74.jpg",
      "https://s3.bmp.ovh/imgs/2025/12/16/cf8edb6f54db15bf.jpg"
    ],
    author: "@hx831126（虎小象）",
    selections: {
      "travel_location": { "zh-tw": "東北雪鄉", en: "Snow Village in Northeast China" },
      "ratio": { "zh-tw": "9:16直式構圖", en: "9:16 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_manga_reality",
    name: { "zh-tw": "漫畫人物成真", en: "Manga to Reality" },
    content: TEMPLATE_MANGA_TO_REALITY,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/16/f5291c56ece88cd9.jpg",
    author: "PlayForge AI(@94van.AI)",
    selections: {
      "character_originality": { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      "comic_scene": { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
      "ratio": { "zh-tw": "9:16直式構圖", en: "9:16 Vertical" }
    },
    tags: ["人物", "創意", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_industrial_design",
    name: { "zh-tw": "設計大師的產品設計", en: "Industrial Design Masterpiece" },
    content: TEMPLATE_INDUSTRIAL_DESIGN,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/17/7dbe43ae66b1a78c.jpg",
    imageUrls: [
      "https://s3.bmp.ovh/imgs/2025/12/17/7dbe43ae66b1a78c.jpg",
      "https://s3.bmp.ovh/imgs/2025/12/29/e6b0964f5a9a55bd.jpg",
      "https://s3.bmp.ovh/imgs/2025/12/29/fa5b709a4df577fd.jpg"
    ],
    author: "@tanshilong（MarioTan）",
    selections: {
      "designer": { "zh-tw": "Jonathan Ive (Jony Ive)", en: "Jonathan Ive" },
      "design_item": { "zh-tw": "無人機", en: "Drone" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["產品", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_photo_grid_v2",
    name: { "zh-tw": "3x3 攝影網格出格版", en: "3x3 Photo Grid (Out of Box)" },
    content: TEMPLATE_PHOTO_GRID_V2,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/17/77bfd2bf7abc3eac.png",
    author: "PlayForge AI(@94van.AI)",
    selections: {
      "clothing": { "zh-tw": "炭灰色無袖連衣裙", en: "Charcoal grey sleeveless dress" },
      "grid_pose-0": { "zh-tw": "前景手指虛化", en: "Out-of-focus fingers in foreground" },
      "grid_pose-1": { "zh-tw": "目光鎖定鏡頭", en: "Eyes locked on camera" },
      "grid_pose-2": { "zh-tw": "單色下巴託手", en: "Monochrome hand on chin" },
      "grid_pose-3": { "zh-tw": "正面特寫陰影", en: "Frontal close-up with shadows" },
      "grid_pose-4": { "zh-tw": "斜角拍攝", en: "Angled shot" },
      "grid_pose-5": { "zh-tw": "雙手置於鎖骨", en: "Hands on collarbones" },
      "grid_pose-6": { "zh-tw": "坐姿半身側面", en: "Seated half-body profile" },
      "grid_pose-7": { "zh-tw": "側面微距水滴", en: "Side macro with water drops" },
      "grid_pose-8": { "zh-tw": "回眸一笑", en: "Looking back with a smile" },
      "lens_param-0": { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      "lens_param-1": { "zh-tw": "85mm, f/2.0", en: "85mm, f/2.0" },
      "lens_param-2": { "zh-tw": "50mm, f/2.2", en: "50mm, f/2.2" },
      "lens_param-3": { "zh-tw": "50mm, f/2.5", en: "50mm, f/2.5" },
      "lens_param-4": { "zh-tw": "50mm, f/3.2", en: "50mm, f/3.2" },
      "lens_param-5": { "zh-tw": "35mm, f/4.5", en: "35mm, f/4.5" },
      "lens_param-6": { "zh-tw": "85mm, f/1.9", en: "85mm, f/1.9" },
      "lens_param-7": { "zh-tw": "50mm, f/1.8", en: "50mm, f/1.8" },
      "lens_param-8": { "zh-tw": "85mm, f/2.2", en: "85mm, f/2.2" }
    },
    tags: ["人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_raindrop_art",
    name: { "zh-tw": "雨滴定格藝術", en: "Raindrop Art" },
    content: TEMPLATE_RAINDROP_ART,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/19/6b6e14845635b168.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "rain_shape": { "zh-tw": "芭蕾舞者", en: "Ballerina" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_art_growth",
    name: { "zh-tw": "視覺化藝術成長之路", en: "Artistic Evolution Path" },
    content: TEMPLATE_ART_GROWTH,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/19/47a2cbfec635a29a.jpg",
    author: "@sundyme",
    selections: {
      "art_type": { "zh-tw": "美術學", en: "Fine Arts" },
      "render_style": { "zh-tw": "3D像素風格", en: "3D Pixel Art Style" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["建築", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_miniature_desk",
    name: { "zh-tw": "窗邊書桌微縮場景", en: "Window Desk Miniature" },
    content: TEMPLATE_MINIATURE_DESK,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/20/8e9c9c28b3d2cf1b.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "show_name": { "zh-tw": "龍貓", en: "My Neighbor Totoro" },
      "character_name": { "zh-tw": "龍貓", en: "Totoro" },
      "render_style": { "zh-tw": "毛氈與黏土", en: "Felt and Clay" },
      "ratio": { "zh-tw": "4:3橫式構圖", en: "4:3 Horizontal" }
    },
    tags: ["攝影", "創意", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_japanese_product_poster",
    name: { "zh-tw": "日式產品海報", en: "Japanese Product Poster" },
    content: TEMPLATE_JAPANESE_PRODUCT_POSTER,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/25/a574127d24ac34e3.png",
    author: "@berryxia（Berryxia.AI）",
    selections: {
      "fruit_1-0": { "zh-tw": "檸檬", en: "Lemon" },
      "ratio": { "zh-tw": "16:9橫式構圖", en: "16:9 Horizontal" }
    },
    tags: ["產品", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_luxury_editorial",
    name: { "zh-tw": "進階時裝露揹人像", en: "Luxury Editorial Portrait" },
    content: TEMPLATE_LUXURY_EDITORIAL,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/25/bb94a5f7b87af2ee.jpg",
    author: "@sidona",
    selections: {
      "subject": { "zh-tw": "女性", en: "Woman" },
      "clothing": { "zh-tw": "極簡黑色進階客製化禮服", en: "Minimalist black couture gown" },
      "background_style": { "zh-tw": "乾淨的純白影棚背景", en: "Clean pure white studio background" },
      "lighting": { "zh-tw": "柔和的編輯級影棚布光", en: "Soft editorial studio lighting" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_pixar_deconstruction",
    name: { "zh-tw": "角色藝術拆解升級版", en: "Role Deconstruction" },
    content: TEMPLATE_PIXAR_DECONSTRUCTION,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/26/1931582fcfb9d1e5.png",
    author: "@berryxia（Berryxia.AI）",
    selections: {
      "render_style": { "zh-tw": "Pixar 卡通渲染", en: "Pixar Cartoon Rendering" },
      "subject": { "zh-tw": "時尚女性角色", en: "Fashionable Female Character" },
      "character_type_pixar": { "zh-tw": "單人角色：聚焦於個人生活方式", en: "Single: Focus on personal lifestyle" },
      "ratio": { "zh-tw": "16:9橫式構圖", en: "16:9 Horizontal" }
    },
    tags: ["人物", "創意", "卡通", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_street_self_dialogue",
    name: { "zh-tw": "街頭的自我對話", en: "Street Self-Dialogue" },
    content: TEMPLATE_STREET_DIALOGUE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/25/fd3cbc98f5afa970.png",
    author: "@tanshilong（MarioTan）",
    selections: {
      "building_cluster": { "zh-tw": "紐約摩天大樓群", en: "New York skyscraper cluster" },
      "lighting_atmosphere": { "zh-tw": "夕陽餘暉", en: "Sunset afterglow" },
      "clothing": { "zh-tw": "黑色修身西裝", en: "Black slim-fit suit" },
      "lens_param": { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_wooden_art_xmas",
    name: { "zh-tw": "木質層疊藝術", en: "Layered Wood Art" },
    content: TEMPLATE_WOODEN_ART_XMAS,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/26/3170b82b79a7801e.jpeg",
    author: "@tanshilong(MarioTan)",
    selections: {
      "xmas_theme": { "zh-tw": "抽象聖誕樹", en: "an abstract Christmas Tree" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["產品", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_brand_concept_object",
    name: { "zh-tw": "品牌概念單品", en: "Brand Concept Object" },
    content: TEMPLATE_BRAND_CONCEPT_OBJECT,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/27/e893bd88e9ea324b.png",
    author: "@AmirMushich",
    selections: {
      "company": { "zh-tw": "Apple", en: "Apple" },
      "design_item": { "zh-tw": "無人機", en: "Drone" },
      "ratio": { "zh-tw": "1:1", en: "1:1 Square" }
    },
    tags: ["產品", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_fashion_focus",
    name: { "zh-tw": "高端時尚雜誌封面 - FOCUS", en: "Fashion Magazine - FOCUS" },
    content: TEMPLATE_FASHION_FOCUS,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/29/ebe3e34755c3ef2e.png",
    imageUrls: [
      "https://s3.bmp.ovh/imgs/2025/12/29/ebe3e34755c3ef2e.png",
      "https://s3.bmp.ovh/imgs/2026/01/09/c5b49962fae9dfa3.jpg "
    ],
    author: "Latte(@0xbisc)",
    selections: {
      "character_originality": { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      "clothing": { "zh-tw": "秋冬季頂級時尚服飾", en: "High-end autumn/winter fashion apparel" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_city_glimpse",
    name: { "zh-tw": "都市一瞥", en: "City Glimpse" },
    content: TEMPLATE_CITY_GLIMPSE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/29/d02fe64ad317ad60.jpg", // 暫無預覽圖，使用佔位或稍後由使用者補充
    author: "阿茲特克小羊駝(@AztecaAlpaca)",
    selections: {
      "city_name": { "zh-tw": "京都", en: "Kyoto" },
      "art_style": { "zh-tw": "浮世繪 (Ukiyo-e)", en: "Ukiyo-e" },
      "art_tool": { "zh-tw": "毛筆", en: "Ink Brush" },
      "dominant_colors": { "zh-tw": "傳統的京都紅與古樸的墨黑色", en: "Traditional Kyoto red and antique ink black" },
      "background_color_clean": { "zh-tw": "純白", en: "Pure White" },
      "city_glimpse_subtitle": { "zh-tw": "古韻悠長的千年古都", en: "The thousand-year-old ancient capital" },
      "ratio": { "zh-tw": "4:3橫式構圖", en: "4:3 Horizontal" }
    },
    tags: ["建築", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_multiple_selves_indoor",
    name: { "zh-tw": "多個自我“對話” (室內聚會版)", en: "Multiple Self-Dialogue (Indoor Party)" },
    content: TEMPLATE_MULTIPLE_SELVES_INDOOR,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/30/fe7893150e65cc54.jpg",
    author: "@tanshilong(MarioTan)",
    selections: {
      "clothing": { "zh-tw": "秋冬季休閒服飾", en: "autumn/winter casual wear" },
      "action_status-0": { "zh-tw": "玩PS5", en: "playing PS5" },
      "action_status-1": { "zh-tw": "彈吉他", en: "playing the guitar" },
      "action_status-2": { "zh-tw": "在電腦前寫程式碼", en: "coding in front of a computer" },
      "action_status-3": { "zh-tw": "拿著香蕉在畫畫", en: "painting with a banana" },
      "action_status-4": { "zh-tw": "穿潛水腳蹼", en: "putting on diving fins" },
      "lens_param": { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_character_sheet_art",
    name: { "zh-tw": "角色設定稿", en: "Character Sheet" },
    content: TEMPLATE_CHARACTER_SHEET_ART,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/04/d530d1e38098944e.png",
    author: "@tanshilong",
    selections: {
      "character_originality": { "zh-tw": "創作一個原創人物", en: "Create an original character" },
      "art_tool": { "zh-tw": "毛筆", en: "Ink Brush" },
      "background_style": { "zh-tw": "極簡純色背景", en: "Minimalist solid color background" },
      "draw_style": { "zh-tw": "手繪漫畫風格", en: "Hand-drawn Manga Style" }
    },
    tags: ["人物", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_underwater_caustics",
    name: { "zh-tw": "水下焦散人像攝影", en: "Underwater Caustics Portrait" },
    content: TEMPLATE_UNDERWATER_CAUSTICS,
    imageUrl: "https://s41.ax1x.com/2026/01/05/pZdAL9K.jpg",
    author: "@tanshilong",
    selections: {
      "subject": { "zh-tw": "女性", en: "Woman" },
      "clothing": { "zh-tw": "白色襯衫與內衣", en: "white shirt and lingerie" },
      "underwater_color": { "zh-tw": "深青色透明水下", en: "deep teal transparent underwater" },
      "creatures": { "zh-tw": "許多銀色小魚", en: "many small silver fish" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_daily_snapshot",
    name: { "zh-tw": "日常氛圍快照", en: "Daily Snapshot" },
    content: TEMPLATE_DAILY_SNAPSHOT,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/08/599f54de89ca6198.jpg",
    author: "underwood（@underwoodxie96）",
    selections: {
      "background_scene": { "zh-tw": "昏暗、平凡的房間，身後有一面素牆", en: "Dark, ordinary room with a plain wall behind the subject" },
      "lighting": { "zh-tw": "隨意的肖像攝影，帶有日常快照氛圍", en: "Casual portrait photography with a daily snapshot vibe" },
      "clothing": { "zh-tw": "略顯成熟的“大姐姐”時尚風格", en: "Slightly mature 'onee-san' fashion style" },
      "accessory_glasses": { "zh-tw": "戴著有輕微鏡面反射的眼鏡", en: "wearing glasses with mild lens reflections" },
      "action_status": { "zh-tw": "坐在沙發上，正隨意地玩著手機", en: "Sitting on a sofa, casually playing on her phone" },
      "camera_angle": { "zh-tw": "上半身特寫", en: "upper-body close-up" },
      "underwear_style": { "zh-tw": "“純欲風”服飾", en: "'pure-seductive' outfit style" },
      "subject": { "zh-tw": "女性，約20歲", en: "Female, around 20 years old" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_surveillance_still",
    name: { "zh-tw": "隱藏相機監控視角", en: "Surveillance Still" },
    content: TEMPLATE_SURVEILLANCE_STILL,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/08/ff4ac4b4171f41f5.jpg",
    author: "@YaseenK7212",
    selections: {
      "character_originality": { "zh-tw": "年輕韓國女團偶像", en: "Young Korean female K-pop idol" },
      "hair_style": { "zh-tw": "黑色直髮，垂在肩上", en: "Black straight hair, falling over shoulders" },
      "action_status": { "zh-tw": "換衣時驚訝地抬頭直視鏡頭", en: "frozen in surprise, looking directly into the lens while changing" },
      "clothing": { "zh-tw": "半脫的灰色大號連帽衫，露出白色吊帶", en: "half-removed oversized grey hoodie, revealing white camisole" },
      "background_scene": { "zh-tw": "昏暗舒適的後臺更衣室或私密宿舍", en: "dimly lit, cozy backstage dressing room or private dorm room" },
      "lighting": { "zh-tw": "隱藏相機拍攝風格，Portra 400 膠片質感", en: "Hidden camera style, Portra 400 film grain aesthetic" },
      "camera_angle": { "zh-tw": "平視、略微隱藏的中景鏡頭", en: "eye-level, slightly hidden intimate medium shot" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_fine_art_garden",
    name: { "zh-tw": "唯美花園藝術人像", en: "Fine-art Garden Portrait" },
    content: TEMPLATE_FINE_ART_GARDEN,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/08/d325cd6ce1727205.jpg",
    author: "Taaruk(@Taaruk_)",
    selections: {
      "subject": { "zh-tw": "女性角色", en: "Female Character" },
      "hair_style": { "zh-tw": "短髮，柔和凌亂的深色頭髮", en: "Short, softly tousled dark hair" },
      "action_status": { "zh-tw": "溫柔地凝視著鏡頭，帶著淡淡的憂鬱", en: "Looking gently toward the camera, with a touch of melancholy" },
      "clothing": { "zh-tw": "柔和青色復古碎花連衣裙", en: "Muted teal floral dress with subtle vintage patterns" },
      "background_scene": { "zh-tw": "盛開的鬱鬱蔥蔥的花園", en: "Lush garden in full bloom" },
      "flower_type": { "zh-tw": "白色和淡桃色花瓣在空中飄落", en: "White and pale peach flower petals drifting through the air" },
      "camera_angle": { "zh-tw": "腰部以上的美術肖像", en: "Waist-up fine-art portrait" },
      "lens_param": { "zh-tw": "85mm, f/1.8", en: "85mm, f/1.8" },
      "lighting": { "zh-tw": "陰天下的柔和自然光", en: "Soft natural light under overcast sky" },
      "role": { "zh-tw": "美術攝影與電影寫實風格", en: "Fine-art photography blended with cinematic realism" },
      "ratio": { "zh-tw": "2:3直式構圖", en: "2:3 Vertical" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_chinese_new_year_poster",
    name: { "zh-tw": "中國新年時尚海報", en: "Chinese New Year Fashion Poster" },
    content: TEMPLATE_CHINESE_NEW_YEAR_POSTER,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/09/83205df357ad8c1c.jpg",
    author: "@tanshilong",
    selections: {
      "character_originality": { "zh-tw": "創作一個原創人物", en: "Create an original character" },
      "character_heroic": { "zh-tw": "文藝青年", en: "Artistic Youth" },
      "clothing_style_chinese": { "zh-tw": "古典紅色漢服", en: "Classical red Hanfu" },
      "clothing_color_traditional": { "zh-tw": "暗紅色", en: "Dark Red" },
      "ratio": { "zh-tw": "2:3直式構圖", en: "2:3 Vertical" }
    },
    tags: ["創意", "人物", "時尚", "節日"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_cute_dynamic_portrait",
    name: { "zh-tw": "可愛動態人像", en: "Cute Dynamic Portrait" },
    content: TEMPLATE_CUTE_DYNAMIC_PORTRAIT,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/10/9e64b198ccc9663a.jpg",
    author: "M7(@mi7_crypto)",
    selections: {
      "room_style_cute": { "zh-tw": "可愛粉色房間，粉彩床和牆壁，原創動物玩偶，妖精燈光，可愛海報，絨毛地毯", en: "Cute pink room, pastel pink bed and walls, original cute animal plushies, fairy lights, cute posters, fluffy rug" },
      "lens_type": { "zh-tw": "20mm 廣角鏡頭", en: "20mm wide-angle lens" },
      "cute_pose_dynamic": { "zh-tw": "向前走時回望，從正上方自信俏皮地俯視，迷人微笑", en: "Walking forward while looking back, confidently and playfully looking down from directly above, charming smile" },
      "cute_outfit": { "zh-tw": "黑色緊身吊帶連衣裙，長度到臀部，無袖，細肩帶", en: "Black tight camisole dress, hip-length, sleeveless, thin straps" },
      "lighting": { "zh-tw": "溫暖的室內自然光，從窗射入，柔和的妖精燈在背景中", en: "Warm indoor natural light streaming through window, soft fairy lights in background" },
      "camera_angle": { "zh-tw": "極低角度蟲視，床高度", en: "Extreme low-angle worm's-eye view, bed height" }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_fitness_selfie",
    name: { "zh-tw": "健身自拍場景", en: "Fitness Selfie Scene" },
    content: TEMPLATE_FITNESS_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/13/9413347206a80484.png",
    author: "@tanshilong",
    selections: {
      "physical_state": { "zh-tw": "健康健美的身材", en: "Healthy athletic build" },
      "fitness_pose": { "zh-tw": "半蹲姿勢，側身對鏡子", en: "Half-squat pose, turned sideways to mirror" },
      "fitness_clothing": { "zh-tw": "運動裙，緊身貼身", en: "Sports skirt, tight and form-fitting" },
      "sweat_appearance": { "zh-tw": "頭髮凌亂溼透，汗水明顯", en: "Hair disheveled and damp with sweat" },
      "facial_expression": { "zh-tw": "臉頰泛紅，眼神迷離", en: "Cheeks flushed red, dreamy and slightly unfocused eyes" },
      "fitness_location": { "zh-tw": "繁忙的健身房，鏡子和器械隨處可見", en: "Busy gym with mirrors and equipment visible" },
      "selfie_style": { "zh-tw": "原始真實的鏡子自拍", en: "Raw, authentic mirror selfie" },
      "photo_effect": { "zh-tw": "慢快門導致的運動模糊", en: "Motion blur from slow shutter speed" },
      "ratio": { "zh-tw": "3:4直式構圖", en: "3:4 vertical portrait" }
    },
    tags: ["人物", "攝影", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_miniature_model",
    name: { "zh-tw": "微縮場景模型", en: "Miniature Scene Model" },
    content: TEMPLATE_MINIATURE_MODEL,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/16/9dae0828037cbf5d.jpg",
    author: "@aleenaamiir",
    selections: {
      "miniature_character": { "zh-tw": "消防員", en: "Firefighter" },
      "giant_object": { "zh-tw": "燃燒的火柴棍", en: "Burning Matchstick" },
      "ratio": { "zh-tw": "16:9橫式構圖", en: "16:9 horizontal landscape" }
    },
    tags: ["創意", "產品", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_pop_mart_plush",
    name: { "zh-tw": "馬年春節絨毛玩具", en: "Pop Mart Plush Toys" },
    content: TEMPLATE_POP_MART_PLUSH,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/17/1e75e6702b92266c.jpg",
    author: "兩斤 (@0x00_Krypt)",
    selections: {
      "plush_expression": { "zh-tw": "眨眼俏皮表情", en: "winking with playful expression" },
      "cute_accessory": { "zh-tw": "針織帽", en: "beanie hats" },
      "festive_archway": { "zh-tw": "中國傳統拱門", en: "traditional Chinese archway" }
    },
    tags: ["卡通", "創意", "節日"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_3d_isometric_diorama",
    name: { "zh-tw": "3D等距透視展臺", en: "3D Isometric Diorama" },
    content: TEMPLATE_3D_ISOMETRIC_DIORAMA,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/17/214fca0da3c13139.jpg",
    author: "Aleena Amir (@aleenaamiir)",
    selections: {
      "exhibition_type": { "zh-tw": "現代藝術展覽", en: "modern art exhibition" },
      "display_objects": { "zh-tw": "抽象雕塑和裝置藝術", en: "abstract sculptures and installation art" },
      "pod_structure": { "zh-tw": "玻璃立方體展臺", en: "glass cube pod" }
    },
    tags: ["產品", "創意","建築"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_chinese_bridal_portrait",
    name: { "zh-tw": "中式新娘肖像", en: "Chinese Bridal Portrait" },
    content: TEMPLATE_CHINESE_BRIDAL_PORTRAIT,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/17/fa745814a2980164.jpg",
    author: "ttmouse-豆爸 (@ttmouse)",
    selections: {
      "bridal_hair_decoration": { "zh-tw": "紅色紙剪花和蝴蝶裝飾", en: "red paper-cut flowers and butterflies" },
      "traditional_bridal_attire": { "zh-tw": "紅色緞面旗袍", en: "red satin cheongsam" },
      "bridal_jewelry": { "zh-tw": "白色珍珠首飾和小珍珠耳環", en: "white pearl jewelry and small pearl earrings" }
    },
    tags: ["人物", "攝影", "節日"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_premium_food_advertising",
    name: { "zh-tw": "高端食品廣告", en: "Premium Food Advertising" },
    content: TEMPLATE_PREMIUM_FOOD_ADVERTISING,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/17/416c81356ded66d4.jpg",
    author: "Amira Zairi (@azed_ai)",
    selections: {
      "premium_food_subject": { "zh-tw": "手工巧克力球", en: "handcrafted chocolate truffles" },
      "ingredient_bits": { "zh-tw": "可可粉和金箔碎屑", en: "cocoa powder and gold flakes" }
    },
    tags: ["產品", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_forbidden_city_phoenix",
    name: { "zh-tw": "紫禁城雪夜鳳凰", en: "Forbidden City Snow Night Phoenix" },
    content: TEMPLATE_FORBIDDEN_CITY_PHOENIX,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/17/3665163b0de1bf93.jpg",
    author: "Sidona (@sidona)",
    selections: {
      "imperial_palace_scene": { "zh-tw": "紫禁城雪夜，飛雪飄零", en: "Forbidden City snow night with falling snowflakes" },
      "phoenix_crown": { "zh-tw": "華麗繁複的金鳳冠", en: "ornate golden phoenix crown" },
      "flowing_garment": { "zh-tw": "流動的紅橙色絲綢華服", en: "flowing red-orange silk robes" },
      "festive_props": { "zh-tw": "口中叼著中式紅包，手中拿著展開的春節祝福", en: "holding red envelope in mouth and unfolded spring festival blessing in hand" }
    },
    tags: ["人物", "攝影", "節日", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_interior_rendering",
    name: { "zh-tw": "室內設計真實渲染", en: "Interior Design Rendering" },
    content: TEMPLATE_INTERIOR_RENDERING,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/18/df7ed03d64db5339.jpg",
    author: "tanshilong",
    selections: {
      "room_type": { "zh-tw": "客廳", en: "Living Room" },
      "interior_design_style": { "zh-tw": "現代輕奢風格", en: "Modern Light Luxury Style" },
      "furniture_set": { "zh-tw": "沙發、地毯、茶几、電視", en: "Sofa, rug, coffee table, TV" },
      "ceiling_material": { "zh-tw": "白色乳膠漆平頂", en: "White latex flat ceiling" },
      "wall_material": { "zh-tw": "白色乳膠漆牆面", en: "White latex paint wall" },
      "floor_material": { "zh-tw": "淺灰色大理石地磚", en: "Light gray marble tile" },
      "interior_lighting": { "zh-tw": "自然光線", en: "Natural lighting" },
      "render_quality": { "zh-tw": "4K超高清分辨率", en: "4K Ultra HD resolution" }
    },
    tags: ["建築", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_isometric_interior_scene",
    name: { "zh-tw": "等距視角室內場景", en: "Isometric Interior Scene" },
    content: TEMPLATE_ISOMETRIC_INTERIOR_SCENE,
    imageUrl: "https://s3.bmp.ovh/imgs/2026/01/19/b04fd355944cfb21.jpg",
    author: "@tanshilong",
    selections: {
      "room_type": { "zh-tw": "客廳", en: "Living Room" },
      "room_condition": { "zh-tw": "精緻裝修，高檔材料的質感與細節", en: "Exquisitely decorated, high-end materials with refined details" },
      "interior_design_style": { "zh-tw": "現代簡約風格", en: "Modern Minimalist Style" },
      "floor_material": { "zh-tw": "淺灰色巖板地面", en: "Light gray sintered stone floor" },
      "wall_material": { "zh-tw": "暖白色牆面與裝飾畫", en: "Warm white walls with decorative art" }
    },
    tags: ["建築", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_product_design_spec",
    name: { "zh-tw": "產品設計規範圖", en: "Product Design Specification" },
    content: TEMPLATE_PRODUCT_DESIGN_SPEC,
    imageUrl: "https://s3.bmp.ovh/2026/01/31/FNHtuBte.jpg",
    author: "Ege (@egeberkina)",
    selections: {
      "product_category": { "zh-tw": "現代椅子", en: "Modern Chair" },
      "environment_style": { "zh-tw": "極簡建築室內", en: "Minimal Architectural Interior" },
      "lighting": { "zh-tw": "自然窗光", en: "Natural window light" },
      "drawing_style": { "zh-tw": "建築線圖風格", en: "Architectural Line Drawing Style" }
    },
    tags: ["產品", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  },
  {
    id: "tpl_character_line_art",
    name: { "zh-tw": "人物轉手繪", en: "Character Line Art" },
    content: TEMPLATE_CHARACTER_LINE_ART,
    imageUrl: "https://s3.bmp.ovh/2026/01/31/GWQUDXpd.jpg",
    author: "Vigo Zhao (@VigoCreativeAI)",
    selections: {
      "character_subject": { "zh-tw": "年輕女性，長髮，微笑", en: "Young woman with long hair, smiling" },
      "portrait_view": { "zh-tw": "正面肖像", en: "Front portrait" },
      "line_art_style": { "zh-tw": "鋼筆墨水風格", en: "Pen and ink style" },
      "shading_technique": { "zh-tw": "極簡排線陰影", en: "Minimalist cross-hatching" },
      "background_treatment": { "zh-tw": "白色背景", en: "White background" }
    },
    tags: ["人物", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "recommend_base_image"
  },
  {
    id: "tpl_classic_game_realism",
    name: { "zh-tw": "經典遊戲真實化", en: "Classic Game Realism" },
    content: TEMPLATE_CLASSIC_GAME_REALISM,
    imageUrl: "https://s3.bmp.ovh/2026/01/31/sQzIztAD.jpg",
    author: "Michael Rabone (@michaelrabone)",
    selections: {
      "classic_game": { "zh-tw": "Donkey Kong (1981 街機遊戲)", en: "Donkey Kong (1981 vintage arcade game)" }
    },
    tags: ["遊戲", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_science_paper_model",
    name: { "zh-tw": "科學發現紙雕模型", en: "Scientific Discovery Paper Model" },
    content: TEMPLATE_SCIENCE_PAPER_MODEL,
    imageUrl: "https://s3.bmp.ovh/2026/01/31/gB4NpxYw.jpg",
    author: "Gadgetify (@Gdgtify)",
    selections: {
      "scientific_discovery": { "zh-tw": "DNA結構", en: "The Structure of DNA" }
    },
    tags: ["創意", "圖表", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_anatomy_figure_study",
    name: { "zh-tw": "解剖學人物畫研究", en: "Anatomical Figure Drawing Study" },
    content: TEMPLATE_ANATOMY_FIGURE_STUDY,
    imageUrl: "https://s3.bmp.ovh/2026/02/02/rcAAVlSX.jpg",
    author: "Vigo Zhao (@VigoCreativeAI)",
    selections: {
      "anatomy_teaching_style": { "zh-tw": "Proko 風格（簡化幾何、教學導向、清晰構造線）", en: "Proko style (simplified geometry, educational focus, clear construction lines)" },
      "construction_line_color": { "zh-tw": "紫色/紫羅蘭色（主構造線）", en: "Purple/violet sketch lines (primary construction)" }
    },
    tags: ["人物", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "recommend_base_image"
  },
  {
    id: "tpl_sketch_reality_comparison",
    name: { "zh-tw": "手繪速寫與實景對比", en: "Sketch to Reality Comparison" },
    content: TEMPLATE_SKETCH_REALITY_COMPARISON,
    imageUrl: "https://s3.bmp.ovh/2026/02/06/hbxQtfml.jpg",
    author: "tanshilong",
    selections: {
      "line_art_style": { "zh-tw": "鉛筆素描風格", en: "Pencil sketch style" }
    },
    tags: ["建築", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/02/08/QO5X6pga.png", label: { "zh-tw": "素材圖", en: "Source Image" } }
    ]
  },
  {
    id: "tpl_tavern_fight_video",
    name: { "zh-tw": "酒館武打戲", en: "Tavern Fight Scene" },
    type: "video",
    content: TEMPLATE_TAVERN_FIGHT_VIDEO,
    imageUrl: "https://s3.bmp.ovh/2026/02/08/5cHqPlDX.jpg",
    videoUrl: "https://img.wjwj.top/2026/02/08/936f82f68088943ba501e1929a7b861c.mp4",
    author: "YangGuang (@YangGuangAI)",
    selections: {
      "fight_style": { "zh-tw": "武俠飄逸風（輕功、劍氣、衣袂飄飄）", en: "Wuxia elegant style (light kung fu, sword aura, flowing robes)" },
      "camera_rhythm": { "zh-tw": "快速切換蒙太奇（多角度快速剪輯）", en: "Rapid montage cutting (multi-angle fast edits)" }
    },
    tags: ["動作", "影視", "人物", "武俠"],
    language: ["zh-tw", "en"],
    bestModel: "Seedance 2.0",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/02/08/5cHqPlDX.jpg", label: { "zh-tw": "開場素材", en: "Opening Frame" } },
      { type: "image", url: "https://s3.bmp.ovh/2026/02/08/E8NQxzMI.jpg", label: { "zh-tw": "結尾素材", en: "Ending Frame" } }
    ]
  },
  {
    id: "tpl_3x3_storyboard_video",
    name: { "zh-tw": "3x3故事板建立影片", en: "3x3 Storyboard Video Creation" },
    type: "video",
    content: TEMPLATE_3X3_STORYBOARD_VIDEO,
    videoUrl: "https://img.wjwj.top/2026/02/08/c35f4592aa1a3eb23eb3d4e72fdb02ae.mov",
    imageUrl: "https://s3.bmp.ovh/2026/02/08/mM0bxzAh.jpg",
    author: "Mr.Iancu @Iancu_ai",
    selections: {},
    tags: ["創意", "設計"],
    language: ["zh-tw", "en"],
    bestModel: "Seedance 2.0",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/02/08/mM0bxzAh.jpg", label: { "zh-tw": "底圖素材", en: "Base Image" } }
    ]
  },
  {
    id: "tpl_cyberpunk_vehicle_chase",
    name: { "zh-tw": "賽博龐克飛行器追逐", en: "Cyberpunk Vehicle Chase" },
    type: "video",
    content: TEMPLATE_CYBERPUNK_VEHICLE_CHASE,
    videoUrl: "https://img.wjwj.top/2026/02/08/85820eabd0f51ef1d215e5012cb2c8ff.mov",
    author: "John @johnAGI168",
    selections: {
      sci_fi_movie_style: { "zh-tw": "賽博龐克美學（Cyberpunk Aesthetics）", en: "Cyberpunk Aesthetics" },
      futuristic_vehicle: { "zh-tw": "流線型反重力飛行器（Anti-gravity Vehicle）", en: "Streamlined Anti-gravity Vehicle" },
      cyberpunk_city_scene: { "zh-tw": "未來主義超級城市峽谷（Megacity Canyon）", en: "Futuristic Megacity Canyon" },
      tracking_camera_shot: { "zh-tw": "極具縱深感的廣角跟拍（Wide Angle Tracking Shot）", en: "Wide Angle Tracking Shot with Deep Depth" },
      action_camera_shot: { "zh-tw": "緊張的駕駛艙視角（Cockpit View）", en: "Tense Cockpit View" }
    },
    tags: ["科幻", "動作", "影視", "遊戲"],
    language: ["zh-tw", "en"],
    bestModel: "Seedance 2.0",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_rainforest_waterfall_jet",
    name: { "zh-tw": "雨林瀑布戰機穿越", en: "Rainforest Waterfall Jet" },
    type: "video",
    content: TEMPLATE_RAINFOREST_WATERFALL_JET,
    videoUrl: "https://img.wjwj.top/2026/02/08/f60dcbb9a75748c8811de024ec2b5b12.mp4",
    author: "Umesh @umesh_ai",
    selections: {
      natural_environment: { "zh-tw": "古代雨林（Ancient Rainforest）", en: "Ancient Rainforest" },
      military_aircraft: { "zh-tw": "戰鬥機（Fighter Jet）", en: "Fighter Jet" },
      aerial_opening_shot: { "zh-tw": "史詩超廣角航拍（Epic Ultra Wide Aerial Shot）", en: "Epic Ultra Wide Aerial Shot" },
      dynamic_tracking_shot: { "zh-tw": "第三人稱緊密跟拍（Third-Person Tight Tracking）", en: "Third-Person Tight Tracking" }
    },
    tags: ["動作", "影視", "自然"],
    language: ["zh-tw", "en"],
    bestModel: "Seedance 2.0",
    baseImage: "no_base_image"
  }
,
  {
    id: "tpl_imported_mmqc6ok1_地鐵玩偶裝扮",
    name: { "zh-tw": "地鐵玩偶裝扮", en: "Subway Costume" },
    content: TEMPLATE_IMPORTED_MMQC6OK1,
    imageUrl: "https://s3.bmp.ovh/2026/03/14/8OzmfHGv.jpg",
    author: "@tanshilong",
    selections: {
      location: {
        "zh-tw": "日本地鐵",
        en: "Japanese subway"
      },
      subway_costume: {
        "zh-tw": "粉色羊毛兔子裝扮",
        en: "Pink wool rabbit costume"
      },
      costume_material: {
        "zh-tw": "羊毛",
        en: "wool"
      },
      accessory: {
        "zh-tw": "粉色花朵髮夾",
        en: "pink flower hair clip"
      },
      city_name: {
        "zh-tw": "東京",
        en: "Tokyo"
      },
      "subway_costume-0": {
        "zh-tw": "黃色小雞裝扮",
        en: "Yellow chick costume"
      },
      "city_name-0": {
        "zh-tw": "名古屋站前",
        en: "Nagoya Station"
      }
    },
    tags: ["人物","攝影","創意"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  }
,
  {
    id: "tpl_imported_mmrp53jl_社交卡片",
    name: { "zh-tw": "社交卡片", en: "Social Card" },
    content: TEMPLATE_IMPORTED_MMRP53JL,
    imageUrl: "https://s3.bmp.ovh/2026/03/15/Yc01hJ3Q.jpg",
    author: "@",
    selections: {
      art_style: {
        "zh-tw": "卡通風格",
        en: "cartoon-style"
      },
      character_type: {
        "zh-tw": "女性",
        en: "woman"
      },
      social_bg_color: {
        "zh-tw": "粉色和勃艮第紅",
        en: "pink and burgundy"
      },
      social_profile_name: {
        "zh-tw": "@RealMe+",
        en: "@RealMe+"
      },
      "character_type-0": {
        "zh-tw": "男員工",
        en: "male employee"
      },
      "social_bg_color-0": {
        "zh-tw": "薄荷綠和珊瑚色",
        en: "mint green and coral"
      },
      "social_profile_name-0": {
        "zh-tw": "@PromptFill",
        en: "@PromptFill"
      }
    },
    tags: ["創意","卡通"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  }
,
  {
    id: "tpl_imported_mmrq1zn6_滑板女孩",
    name: { "zh-tw": "滑板女孩", en: "Skateboard Girl" },
    content: TEMPLATE_IMPORTED_MMRQ1ZN6,
    imageUrl: "https://s3.bmp.ovh/2026/03/15/NeHsU0GX.jpg",
    author: "PromptFill User",
    selections: {
      art_style: {
        "zh-tw": "新海誠 × 吉卜力工作室",
        en: "Makoto Shinkai × Studio Ghibli"
      },
      design_item: {
        "zh-tw": "滑板",
        en: "skateboard"
      },
      clothing: {
        "zh-tw": "海沫綠連衣裙",
        en: "seafoam green dress"
      },
      "design_item-0": {
        "zh-tw": "滑板",
        en: "skateboard"
      },
      "clothing-0": {
        "zh-tw": "海沫綠連衣裙",
        en: "seafoam green dress"
      },
      "art_style-0": {
        "zh-tw": "新海誠 × 吉卜力工作室",
        en: "Makoto Shinkai × Studio Ghibli"
      }
    },
    tags: ["人物","攝影"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "optional_base_image"
  }
,
  {
    id: "tpl_imported_mmszando_芬達飲料罐",
    name: { "zh-tw": "芬達飲料罐", en: "Fanta Soda Can" },
    content: TEMPLATE_IMPORTED_MMSZANDO,
    imageUrl: "https://s3.bmp.ovh/2026/03/16/gOnlAk9I.jpg",
    author: "@tanshilong",
    selections: {
      drink_product: {
        "zh-tw": "芬達軟飲料罐",
        en: "Fanta softdrink can"
      },
      drink_background: {
        "zh-tw": "橙色背景",
        en: "orange background"
      },
      drink_action: {
        "zh-tw": "爆炸，橙子從罐中湧出",
        en: "exploding with oranges bursting from the can"
      },
      drink_camera_angle: {
        "zh-tw": "高角度俯拍橙汁旋轉形成的圓弧",
        en: "high angle overhead shot capturing the swirling arc of orange juice"
      }
    },
    localOptions: {
      drink_product: "芬達軟飲料罐",
      drink_background: "橙色背景",
      drink_action: "爆炸，橙子從罐中湧出",
      drink_camera_angle: "高角度俯拍橙汁旋轉形成的圓弧"
    },
    tags: ["產品","攝影"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_skincare_fantasy_ad",
    name: { "zh-tw": "護膚品奇幻廣告", en: "Skincare Fantasy Ad" },
    content: TEMPLATE_SKINCARE_FANTASY_AD,
    imageUrl: "https://s3.bmp.ovh/2026/03/17/IBad9qh6.jpg",
    author: "@tanshilong",
    selections: {
      skincare_product: {
        "zh-tw": "精華滴管瓶",
        en: "serum dropper bottle"
      },
      skincare_color: {
        "zh-tw": "粉桃色",
        en: "pink-peach colored"
      },
      fantasy_character_pose: {
        "zh-tw": "坐在瓶蓋上",
        en: "sitting on the bottle cap"
      },
      fantasy_dress_style: {
        "zh-tw": "優雅飄逸的連衣裙",
        en: "elegant flowing dress"
      },
      fantasy_floating_elements: {
        "zh-tw": "成熟桃子和桃子切片",
        en: "ripe peaches and peach slices"
      },
      fantasy_sky_background: {
        "zh-tw": "明亮清澈的藍天",
        en: "bright clear blue sky"
      },
      pastel_color_palette: {
        "zh-tw": "粉桃色和天藍色",
        en: "pastel peach and sky blue"
      }
    },
    localOptions: {
      skincare_product: "精華滴管瓶",
      skincare_color: "粉桃色",
      fantasy_character_pose: "坐在瓶蓋上",
      fantasy_dress_style: "優雅飄逸的連衣裙",
      fantasy_floating_elements: "成熟桃子和桃子切片",
      fantasy_sky_background: "明亮清澈的藍天",
      pastel_color_palette: "粉桃色和天藍色"
    },
    tags: ["產品","創意","奇幻"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_character_design_sheet",
    name: { "zh-tw": "角色設計表", en: "Character Design Sheet" },
    content: TEMPLATE_CHARACTER_DESIGN_SHEET,
    imageUrl: "https://s3.bmp.ovh/2026/03/20/L6uohhgC.jpg",
    author: "@j03_1",
    selections: {
      character_animal: {
        "zh-tw": "小兔子",
        en: "Little Bunny"
      },
      fur_color: {
        "zh-tw": "柔和溫暖的粉彩黃色",
        en: "Soft warm pastel yellow"
      },
      body_description: {
        "zh-tw": "大圓頭和小橢圓身體",
        en: "Large round head and small oval body"
      },
      character_accessories: {
        "zh-tw": "小紅橙色探險家圍巾和棕色小挎包",
        en: "Small red-orange adventurer scarf and tiny brown satchel"
      },
      character_persona: {
        "zh-tw": "可愛的奇幻探險家",
        en: "Cute fantasy explorer"
      },
      art_style: {
        "zh-tw": "高品質的 2D 插畫風格",
        en: "High-quality 2D illustration style"
      },
      line_art_style: {
        "zh-tw": "鋼筆墨水風格",
        en: "Pen and ink style"
      },
      shading_technique: {
        "zh-tw": "極簡排線陰影",
        en: "Minimalist cross-hatching"
      },
      design_sheet_type: {
        "zh-tw": "角色轉身表（character turnaround sheet）",
        en: "Character turnaround sheet"
      }
    },
    localOptions: {
      character_name: "June"
    },
    tags: ["卡通","創意"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_comic_page",
    name: { "zh-tw": "動態漫畫頁面", en: "Dynamic Comic Page" },
    content: TEMPLATE_COMIC_PAGE,
    imageUrl: "https://s3.bmp.ovh/2026/03/20/QS11NEIQ.jpg",
    author: "@tanshilong",
    selections: {
      comic_subject: {
        "zh-tw": "兩個潛行的忍者",
        en: "two stealthy ninjas"
      },
      comic_location: {
        "zh-tw": "古日本寺廟",
        en: "ancient Japanese temple"
      },
      comic_time: {
        "zh-tw": "夜晚",
        en: "night"
      },
      comic_art_style: {
        "zh-tw": "傳統黑白漫畫風格",
        en: "traditional black and white manga style"
      }
    },
    tags: ["創意","卡通"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_3d_furniture_pixar",
    name: { "zh-tw": "皮克斯風格3D傢俱", en: "Pixar-style 3D Furniture" },
    content: TEMPLATE_3D_FURNITURE_PIXAR,
    imageUrl: "https://s3.bmp.ovh/2026/03/29/6iocHrUY.jpg",
    author: "@tanshilong",
    selections: {
      background_color_clean: {
        "zh-tw": "純白",
        en: "Pure White"
      },
      render_style: {
        "zh-tw": "Pixar 卡通渲染",
        en: "Pixar Cartoon Rendering"
      },
      interior_design_style: {
        "zh-tw": "歐式古典風格",
        en: "European Classical Style"
      },
      furniture_set: {
        "zh-tw": "沙發、地毯、茶几、電視",
        en: "Sofa, rug, coffee table, TV"
      }
    },
    tags: ["創意","產品"],
    language: ["zh-tw","en"],
    bestModel: "Nano Banana Pro",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_creative_container",
    name: {
      "zh-tw": "創意容器·微觀世界",
      en: "Creative Container · Miniature World"
    },
    content: TEMPLATE_CREATIVE_CONTAINER,
    imageUrl: "https://s3.bmp.ovh/2026/04/07/YhFhh6t3.jpg",
    author: "@tanshilong",
    selections: {
      landscape_location: {
        "zh-tw": "特蘭西瓦尼亞葡萄園",
        en: "Transylvania vineyard"
      },
      lighting_time: {
        "zh-tw": "清晨陽光",
        en: "morning sunlight"
      }
    },
    tags: ["產品", "攝影", "創意", "容器"],
    language: ["zh-tw", "en"],
    bestModel: "Nano Banana Pro",
    baseImage: "recommend_base_image"
  },
  {
    id: "tpl_museum_infographic",
    name: {
      "zh-tw": "博物館圖鑑式訊息圖",
      en: "Museum Infographic"
    },
    content: TEMPLATE_MUSEUM_INFOGRAPHIC,
    imageUrl: "https://s3.bmp.ovh/2026/04/18/vBKchUMk.jpg",
    author: "@MrLarus（Larus Canus）",
    selections: {
      museum_theme: {
        "zh-tw": "明制漢服",
        en: "Ming Dynasty Hanfu"
      }
    },
    tags: ["圖表", "人物", "創意"],
    language: "zh-tw",
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_nine_grid_designers",
    name: {
      "zh-tw": "九宮格設計師圖鑑",
      en: "Nine Designers Grid"
    },
    content: TEMPLATE_NINE_GRID_DESIGNERS,
    imageUrl: "https://s3.bmp.ovh/2026/04/18/NHJv6A14.png",
    author: "@tanshilong",
    selections: {
      design_item: {
        "zh-tw": "機械鍵盤",
        en: "Mechanical keyboard"
      }
    },
    tags: ["圖表", "產品", "創意"],
    language: "zh-tw",
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_four_panel_ads",
    name: {
      "zh-tw": "四聯虛構商業廣告",
      en: "Four-Panel Fictional Ads"
    },
    content: TEMPLATE_FOUR_PANEL_ADS,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/fTR7DPMq.jpg",
    imageUrls: [
      "https://s3.bmp.ovh/2026/04/19/fTR7DPMq.jpg",
      "https://s3.bmp.ovh/2026/04/19/UL36qLoz.png"
    ],
    author: "@midori_tatsuta",
    selections: {
      ad_regional_style: {
        "zh-tw": "中式廣告",
        en: "Chinese advertisements"
      }
    },
    tags: ["創意", "產品", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_guochao_city_poster",
    name: {
      "zh-tw": "新中式國潮城市海報",
      en: "Neo-Chinese City Poster"
    },
    content: TEMPLATE_GUOCHAO_CITY_POSTER,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/SVh3Q8G6.jpg",
    author: "@liyue_ai",
    selections: {
      city_name: {
        "zh-tw": "廣州",
        en: "Guangzhou"
      },
      city_landmarks: {
        "zh-tw": "珠江新城雙塔、獵德大橋、白雲山輪廓、嶺南騎樓",
        en: "Zhujiang New Town twin towers, Liede Bridge, Baiyun Mountain silhouette, Lingnan arcade buildings"
      },
      poster_texture_style: {
        "zh-tw": "大面積留白 + 淡宣紙肌理",
        en: "Generous negative space with light rice-paper grain"
      }
    },
    tags: ["創意", "建築", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_textbook_poem_page",
    name: {
      "zh-tw": "語文課本·經典詩詞頁",
      en: "Textbook · Classical Poem Page"
    },
    content: TEMPLATE_TEXTBOOK_POEM_PAGE,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/3tYkO4th.jpg",
    author: "@tanshilong",
    selections: {
      classical_poem: {
        "zh-tw": "春夜喜雨",
        en: "A Welcome Rain on a Spring Night"
      }
    },
    tags: ["創意", "圖表", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_app_iconfont",
    name: {
      "zh-tw": "APP Iconfont 圖標集",
      en: "App Iconfont Set"
    },
    content: TEMPLATE_APP_ICONFONT,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/WLASD2yD.jpg",
    author: "@akokoi1",
    selections: {
      app_icon_category: {
        "zh-tw": "運動類APP",
        en: "Sports app"
      }
    },
    tags: ["創意", "產品", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_collab_postcard",
    name: {
      "zh-tw": "雙 IP 聯名明信片",
      en: "Dual-IP Collab Postcard"
    },
    content: TEMPLATE_COLLAB_POSTCARD,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/GtauyAVI.jpg",
    author: "@akokoi1",
    selections: {
      collab_theme_a: {
        "zh-tw": "小王子",
        en: "The Little Prince"
      },
      collab_theme_b: {
        "zh-tw": "SpaceX",
        en: "SpaceX"
      }
    },
    tags: ["創意", "卡通", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_gacha_card_set",
    name: {
      "zh-tw": "國風抽卡套卡設定",
      en: "Neo-Chinese Gacha Card Set"
    },
    content: TEMPLATE_GACHA_CARD_SET,
    imageUrl: "https://s3.bmp.ovh/2026/04/19/jZAGAbk8.jpg",
    author: "@tanshilong",
    selections: {
      card_game_collection: {
        "zh-tw": "中國古代詩人",
        en: "Ancient Chinese poets"
      }
    },
    tags: ["創意", "遊戲", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_ancient_celebrity_business_card",
    name: {
      "zh-tw": "古代名士名片",
      en: "Ancient Scholar Name Card"
    },
    content: TEMPLATE_ANCIENT_CELEBRITY_BUSINESS_CARD,
    imageUrl: "https://s3.bmp.ovh/2026/04/21/IkMDFWPz.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/04/21/IkMDFWPz.png",
      "https://s3.bmp.ovh/2026/04/21/mb59sHFP.jpg"
    ],
    author: "@tanshilong",
    selections: {
      ancient_celebrity: {
        "zh-tw": "蘇軾",
        en: "Su Shi"
      }
    },
    tags: ["創意", "人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_heritage_building_deconstruction",
    name: {
      "zh-tw": "中式地標建築拆解圖",
      en: "Heritage Building Deconstruction"
    },
    content: TEMPLATE_HERITAGE_BUILDING_DECONSTRUCTION,
    imageUrl: "https://s3.bmp.ovh/2026/04/21/JCPtpHEd.jpg",
    author: "@tanshilong",
    selections: {
      heritage_building: {
        "zh-tw": "天壇",
        en: "Temple of Heaven"
      }
    },
    tags: ["建築", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_retro_skeuomorphic_icons",
    name: {
      "zh-tw": "復古擬物化設備圖標",
      en: "Retro Skeuomorphic Device Icons"
    },
    content: TEMPLATE_RETRO_SKEUOMORPHIC_ICONS,
    imageUrl: "https://s3.bmp.ovh/2026/04/21/8H5POly2.jpg",
    author: "@tanshilong",
    selections: {
      retro_device_theme: {
        "zh-tw": "老式電子設備",
        en: "vintage electronic devices"
      }
    },
    tags: ["創意", "產品", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_lifestyle_app_ui",
    name: {
      "zh-tw": "生活類 App 界面 UI",
      en: "Lifestyle App UI"
    },
    content: TEMPLATE_LIFESTYLE_APP_UI,
    imageUrl: "https://s3.bmp.ovh/2026/04/21/2tys9tTD.png",
    author: "@tanshilong",
    selections: {
      utility_app_category: {
        "zh-tw": "植物照顧養護記錄",
        en: "plant care and maintenance tracker"
      }
    },
    tags: ["創意", "產品", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_minimalist_geometric_poster",
    name: {
      "zh-tw": "極簡幾何裝置風海報",
      en: "Minimalist Geometric Product Poster"
    },
    content: TEMPLATE_GEOMETRIC_PRODUCT_POSTER,
    imageUrl: "https://s3.bmp.ovh/2026/04/24/xWHKmpbh.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/04/24/xWHKmpbh.png",
      "https://s3.bmp.ovh/2026/04/24/rahDopFT.png"
    ],
    author: "@MrLarus",
    selections: {
      subject_product: {
        "zh-tw": "草莓蘇打水",
        en: "Strawberry Soda"
      }
    },
    tags: ["產品", "創意", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_apple_event_bento",
    name: {
      "zh-tw": "蘋果風格 BentoCard 發佈會單頁",
      en: "Apple Style BentoCard Event Slide"
    },
    content: TEMPLATE_APPLE_EVENT_BENTO,
    imageUrl: "https://s3.bmp.ovh/2026/04/24/loHTJhoH.png",
    author: "@tanshilong",
    selections: {
      apple_style_product: {
        "zh-tw": "3.5寸軟盤",
        en: "3.5-inch Floppy Disk"
      },
      layout_style_bento: {
        "zh-tw": "BentoCard",
        en: "BentoCard"
      }
    },
    tags: ["產品", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "Gpt-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_big_isometric_white_arch",
    name: {
      "zh-tw": "BIG 風等距建築白模分析圖",
      en: "BIG-Style Isometric White Architectural Diagram"
    },
    content: TEMPLATE_BIG_ISOMETRIC_WHITE_ARCH,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/kyB1kgmL.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/05/06/kyB1kgmL.png",
      "https://s3.bmp.ovh/2026/05/06/78jPIcx7.png"
    ],
    author: "@tanshilong",
    selections: {
      arch_building_name: {
        "zh-tw": "古根海姆博物館",
        en: "Solomon R. Guggenheim Museum"
      },
      ratio: {
        "zh-tw": "3:4直式構圖",
        en: "3:4 Vertical"
      }
    },
    tags: ["建築", "圖表", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_food_personification_realistic",
    name: {
      "zh-tw": "食物擬人·真人肖像",
      en: "Food Personification · Realistic Portrait"
    },
    content: TEMPLATE_FOOD_PERSONIFICATION_REALISTIC,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/bwDqm7SE.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/05/06/bwDqm7SE.png",
      "https://s3.bmp.ovh/2026/05/06/uEg0sYp7.png"
    ],
    author: "@tanshilong",
    selections: {},
    source: [
      {
        type: "image",
        url: "https://s3.bmp.ovh/2026/05/06/uEg0sYp7.png",
        label: { "zh-tw": "今日食物（參考）", en: "Today's food (reference)" }
      }
    ],
    tags: ["創意", "人物", "攝影"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "recommend_base_image"
  },
  {
    id: "tpl_lego_modular_typography_poster",
    name: {
      "zh-tw": "樂高積木字體概念海報",
      en: "Modular Brick Typography Concept Poster"
    },
    content: TEMPLATE_LEGO_MODULAR_TYPOGRAPHY_POSTER,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/BhXVFUvL.png",
    author: "@xiaoxiaodong01",
    selections: {
      lego_typography_theme: {
        "zh-tw": "AI時代的玩具",
        en: "Toys in the Age of AI"
      }
    },
    tags: ["創意", "圖表", "產品"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_futuristic_sport_editorial_poster",
    name: {
      "zh-tw": "未來感運動裝時尚社論海報",
      en: "Futuristic Sportswear Editorial Poster"
    },
    content: TEMPLATE_FUTURISTIC_SPORT_EDITORIAL_POSTER,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/G23TXYtK.png",
    author: "@iamsofiaijaz",
    selections: {
      sport_luxe_ensemble: {
        "zh-tw": "帶有龐大袖子的超大白色極簡連帽衫，光滑半透明的降落傘褲，厚重的白橙相間運動鞋",
        en: "oversized minimalist white hoodie with enormous voluminous sleeves, glossy semi-transparent parachute pants, chunky white-and-orange sneakers"
      },
      beauty_editorial_look: {
        "zh-tw": "時尚凌亂的盤發發型，金色搶眼耳環，柔和自然的妝容",
        en: "fashionably messy updo bun, bold statement gold earrings, soft natural makeup"
      },
      inflatable_studio_backdrop: {
        "zh-tw": "大型抽象光滑紅粉色有機3D充氣軟體形狀的平滑中性米色漸變背景",
        en: "large abstract smooth red-pink organic 3D inflatable soft shapes on a smooth neutral beige gradient backdrop"
      },
      hero_typography_word: {
        "zh-tw": "just",
        en: "just"
      }
    },
    tags: ["人物", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_giant_sneaker_fashion_ad",
    name: {
      "zh-tw": "巨型球鞋時尚廣告海報",
      en: "Giant Sneaker Fashion Campaign Poster"
    },
    content: TEMPLATE_GIANT_SNEAKER_FASHION_AD,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/PCBDPwng.png",
    author: "@Strength04_X",
    selections: {
      campaign_brand_word: {
        "zh-tw": "APEX",
        en: "APEX"
      },
      model_styling_outfit: {
        "zh-tw": "身穿薄荷綠短款防風外套與乳白色寬鬆慢跑褲",
        en: "in a mint cropped windbreaker with cream oversized joggers"
      },
      studio_set_floor: {
        "zh-tw": "暖沙色柔光環境與淺琥珀色打蠟地面",
        en: "warm sand-toned soft light with lightly amber-waxed glossy floorboards"
      },
      advert_campaign_tagline: {
        "zh-tw": "Where comfort meets ambition.",
        en: "Where comfort meets ambition."
      }
    },
    tags: ["人物", "攝影", "產品"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_iconic_architecture_art_poster",
    name: {
      "zh-tw": "建築哲學藝術海報",
      en: "Iconic Architecture Art Poster"
    },
    content: TEMPLATE_ICONIC_ARCHITECTURE_ART_POSTER,
    imageUrl: "https://s3.bmp.ovh/2026/05/06/DLtOVgSJ.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/05/06/DLtOVgSJ.png",
      "https://s3.bmp.ovh/2026/05/06/gXjFzCpe.png"
    ],
    author: "@tanshilong",
    selections: {
      iconic_architecture: {
        "zh-tw": "範斯沃斯住宅（密斯·凡·德羅）",
        en: "Farnsworth House (Mies van der Rohe)"
      },
      poster_art_style: {
        "zh-tw": "極簡主義",
        en: "minimalist"
      }
    },
    tags: ["建築", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_mirror_selfie_chibi_clones",
    name: {
      "zh-tw": "鏡子自拍·Q版迷你自己",
      en: "Mirror Selfie · Chibi Mini-Mes"
    },
    content: TEMPLATE_MIRROR_SELFIE_CHIBI_CLONES,
    imageUrl: "https://img.wjwj.top/2026/05/07/b84c26a465935281af35511c690f69ba.png",
    author: "@Sairah_0",
    selections: {
      casual_mirror_outfit: {
        "zh-tw": "穿著全套黑色的休閒裝，斜挎著一個包，頭上戴著太陽鏡",
        en: "wearing an all-black relaxed casual outfit with a crossbody bag and sunglasses perched on her head"
      },
      chibi_clone_manner: {
        "zh-tw": "擺出各種俏皮的姿勢（跳躍、坐著、比耶、喝珍珠奶茶），有著明亮閃亮的大眼睛和柔和的卡通風格",
        en: "striking playful poses (jumping, sitting, peace sign, sipping bubble tea) with bright sparkling eyes and a soft cartoon look"
      },
      cozy_mirror_room: {
        "zh-tw": "背景包括一盆盆栽、木桌、中性色調的裝飾和帶框藝術品",
        en: "The background includes a potted plant, a wooden table, neutral-toned décor, and framed artwork"
      },
      selfie_render_blend: {
        "zh-tw": "柔和的自然光線，舒適的氛圍美學，白色的塗鴉閃光和愛心，現實主義與可愛的3D卡通風格的混合，高細節",
        en: "Soft natural light, cozy lifestyle aesthetic, white doodled sparkles and hearts, hybrid of photorealism and cute 3D cartoon, highly detailed"
      }
    },
    tags: ["人物", "攝影", "卡通"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "recommend_base_image"
  },
  {
    id: "tpl_lego_landmark_street_film",
    name: {
      "zh-tw": "樂高巨磚地標街拍",
      en: "LEGO Landmark Street Snap"
    },
    content: TEMPLATE_LEGO_LANDMARK_STREET_FILM,
    imageUrl: "https://s3.bmp.ovh/2026/05/09/SShOX699.png",
    imageUrls: [
      "https://s3.bmp.ovh/2026/05/09/SShOX699.png",
      "https://s3.bmp.ovh/2026/05/09/65wYC55o.png",
      "https://s3.bmp.ovh/2026/05/09/WQcfpVIz.png"
    ],
    author: "@tanshilong",
    selections: {
      iconic_architecture: {
        "zh-tw": "倫敦勞埃德大廈（理查·羅傑斯）",
        en: "Lloyd's Building, London (Richard Rogers)"
      },
      street_film_photography: {
        "zh-tw": "90年代經典街拍質感，FujiFilm 膠片感：細膩顆粒、略褪色與柔和對比，陰天漫射自然光",
        en: "1990s classic street-snap feel with Fujifilm texture—fine grain, gentle fade, soft contrast, diffused overcast daylight"
      }
    },
    tags: ["建築", "攝影", "創意"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image"
  },
  {
    id: "tpl_midcentury_editorial_cover",
    name: {
      "zh-tw": "Mid-century 超現實編輯封面",
      en: "Mid-century Surreal Editorial Cover"
    },
    content: TEMPLATE_MIDCENTURY_EDITORIAL_COVER,
    imageUrl: "https://s3.bmp.ovh/2026/08/21/mHmh3t89.jpg",
    author: "Adrian Punk (@AdrianPunk115)",
    selections: {
      editorial_cover_theme: { "zh-tw": "前端部署工程師", en: "Front-end Deployment Engineer" },
      editorial_cover_subtitle: { "zh-tw": "從零開始，掌握核心技能", en: "From zero, master the core skills" },
      editorial_cover_ratio: { "zh-tw": "3:4", en: "3:4" },
      editorial_cover_cast: { "zh-tw": "男性", en: "Male" },
      editorial_cover_emotion: { "zh-tw": "理性", en: "Rational" }
    },
    tags: ["創意", "圖表", "人物"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "no_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/08/21/mHmh3t89.jpg", label: { "zh-tw": "範例封面", en: "Sample Cover" } }
    ]
  },
  {
    id: "tpl_visual_memory_page",
    name: {
      "zh-tw": "影像轉譯·編輯書頁",
      en: "Visual Memory · Editorial Page"
    },
    content: TEMPLATE_VISUAL_MEMORY_PAGE,
    imageUrl: "https://s3.bmp.ovh/2026/08/21/Ew9m3ybt.png",
    author: "@tanshilong",
    selections: {
      memory_core: { "zh-tw": "自動判斷", en: "Auto" },
      preserved_elements: { "zh-tw": "主要物件、空間結構與色彩關係", en: "Key objects, spatial structure, and color relationships" },
      abstraction_level: { "zh-tw": "高度抽象但關係可辨", en: "Highly abstract, relationships still readable" },
      block_language: { "zh-tw": "柔和大色域與少量銳利幾何切面", en: "Soft large color fields with a few sharp geometric cuts" },
      color_strategy: { "zh-tw": "從原圖提取2–4種低飽和主色，並保留一個鮮明強調色", en: "Pull 2–4 low-saturation primaries from the photo, keep one vivid accent" },
      aspect_ratio: { "zh-tw": "3:4", en: "3:4" },
      main_text: { "zh-tw": "根據原圖內容生成2–6字的簡約短語", en: "Generate a 2–6 character spare phrase from the photo" },
      supporting_text: { "zh-tw": "根據畫面生成一句剋制、具體的記憶描述，也可以省略", en: "A restrained, specific memory line from the picture, or omit" },
      text_language: { "zh-tw": "跟隨使用者使用的語言", en: "Follow the user's language" },
      display_mode: { "zh-tw": "原圖在上，抽象色塊轉譯在下", en: "Photo on top, abstract translation below" }
    },
    tags: ["攝影", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/08/21/Ew9m3ybt.png", label: { "zh-tw": "範例書頁", en: "Sample Page" } }
    ]
  },
  {
    id: "tpl_memory_exhibition_ticket",
    name: {
      "zh-tw": "影像轉譯·展覽票",
      en: "Visual Memory · Exhibition Ticket"
    },
    content: TEMPLATE_MEMORY_EXHIBITION_TICKET,
    imageUrl: "https://s3.bmp.ovh/2026/08/21/3LqHB8VJ.png",
    author: "@tanshilong",
    selections: {
      exhibition_theme: { "zh-tw": "根據照片生成2–8字的含蓄主題", en: "A 2–8 character understated theme from the photo" },
      description: { "zh-tw": "根據畫面真實內容生成一句簡短描述", en: "One short caption from what the picture actually shows" },
      memory_core: { "zh-tw": "自動提煉物件、人物關係、動作、空間或光線", en: "Auto-extract objects, relations, action, space, or light" },
      translation_mode: { "zh-tw": "抽象重製", en: "Abstract remake" },
      translation_focus: { "zh-tw": "自動選擇3–5個最具識別度的元素", en: "Auto-select 3–5 of the most recognizable elements" },
      serial_code: { "zh-tw": "NO. 02", en: "NO. 02" },
      aspect_ratio: { "zh-tw": "3:4", en: "3:4" },
      color_strategy: { "zh-tw": "從原圖提取2–4種低飽和專色", en: "Extract 2–4 low-saturation spot colors from the photo" }
    },
    tags: ["攝影", "創意", "圖表"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/08/21/3LqHB8VJ.png", label: { "zh-tw": "範例外票", en: "Sample Ticket" } }
    ]
  },
  {
    id: "tpl_memory_vinyl_album",
    name: {
      "zh-tw": "影像轉譯·黑膠專輯",
      en: "Visual Memory · Vinyl Album"
    },
    content: TEMPLATE_MEMORY_VINYL_ALBUM,
    imageUrl: "https://s3.bmp.ovh/2026/08/21/OoIam6Cd.png",
    author: "@tanshilong",
    selections: {
      album_title: { "zh-tw": "根據圖像核心生成2–5個英文單詞", en: "2–5 English words from the image’s core" },
      album_note: { "zh-tw": "根據畫面生成一句簡短英文描述", en: "One short English line from the picture" },
      catalog_code: { "zh-tw": "自動生成簡潔的虛構編號", en: "Auto-generate a short fictional catalog code" },
      text_language: { "zh-tw": "優先英文；若圖像具有明確地域語言，則使用對應語言", en: "English first; use a regional language if the image clearly belongs to one" },
      cover_style: { "zh-tw": "70年代現代主義專輯設計", en: "1970s modernist album design" }
    },
    tags: ["攝影", "創意", "產品"],
    language: ["zh-tw", "en"],
    bestModel: "GPT-image-2",
    baseImage: "recommend_base_image",
    source: [
      { type: "image", url: "https://s3.bmp.ovh/2026/08/21/OoIam6Cd.png", label: { "zh-tw": "範例專輯", en: "Sample Album" } }
    ]
  },
{
  "id": "tpl_awesome_gpt_image_2_544",
  "name": {
    "zh-tw": "幼兒水果詞彙拆解卡",
    "en": "Preschool Fruit Vocabulary Card"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case544.jpg",
  "author": "@Naiknelofar788",
  "selections": {
    "fruit": {
      "zh-tw": "橙子",
      "en": "Orange"
    },
    "fruit_cut": {
      "zh-tw": "一片橫切片",
      "en": "a cross-sectional slice"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 544,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-544",
    "author": "@Naiknelofar788",
    "originalUrl": "https://x.com/Naiknelofar788/status/2092993830220120231",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_544
},
{
  "id": "tpl_awesome_gpt_image_2_543",
  "name": {
    "zh-tw": "旅行照片·琺琅徽章",
    "en": "Travel Photo · Enamel Pin"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case543.jpg",
  "author": "@Emmma__0",
  "selections": {
    "enamel_metal": {
      "zh-tw": "拋光金色",
      "en": "polished gold"
    },
    "badge_backdrop": {
      "zh-tw": "深海軍藍粗亞麻布",
      "en": "dark navy coarse linen"
    }
  },
  "tags": [
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 543,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-543",
    "author": "@Emmma__0",
    "originalUrl": "https://x.com/Emmma__0/status/2093194689222705645",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_543
},
{
  "id": "tpl_awesome_gpt_image_2_540",
  "name": {
    "zh-tw": "夢幻未來城市藝術海報",
    "en": "Dreamlike Future City Art Poster"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case540.jpg",
  "author": "@Naiknelofar788",
  "selections": {
    "future_city_motif": {
      "zh-tw": "環形建築與蜿蜒高架步道",
      "en": "ring-shaped buildings and winding elevated paths"
    },
    "poster_muted_palette": {
      "zh-tw": "奶油白、鼠尾草綠與灰藍",
      "en": "cream, sage green and dusty blue"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 540,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-540",
    "author": "@Naiknelofar788",
    "originalUrl": "https://x.com/Naiknelofar788/status/2093230701986672924",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_540
},
{
  "id": "tpl_awesome_gpt_image_2_538",
  "name": {
    "zh-tw": "旅行照片·橡皮章田野筆記",
    "en": "Travel Photo · Rubber Stamp Field Notes"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case538.jpg",
  "author": "@MahnoorAi12",
  "selections": {
    "color_strategy": {
      "zh-tw": "從原圖提取2–4種低飽和專色",
      "en": "Extract 2–4 low-saturation spot colors from the photo"
    },
    "city_name": {
      "zh-tw": "京都",
      "en": "Kyoto"
    },
    "serial_code": {
      "zh-tw": "NO. 02",
      "en": "NO. 02"
    },
    "year_number": {
      "zh-tw": "2026",
      "en": "2026"
    }
  },
  "tags": [
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 538,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-538",
    "author": "@MahnoorAi12",
    "originalUrl": "https://x.com/MahnoorAi12/status/2092221482139349307",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_538
},
{
  "id": "tpl_awesome_gpt_image_2_532",
  "name": {
    "zh-tw": "六宮格柑橘微縮廣告",
    "en": "Six-Panel Miniature Citrus Campaign"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case532.jpg",
  "author": "@ou_zhen599",
  "selections": {
    "fictional_drink_brand": {
      "zh-tw": "LIMORA",
      "en": "LIMORA"
    },
    "citrus_campaign_fruit": {
      "zh-tw": "檸檬",
      "en": "lemon"
    }
  },
  "tags": [
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 532,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-532",
    "author": "@ou_zhen599",
    "originalUrl": "https://x.com/ou_zhen599/status/2091160215928574397",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_532
},
{
  "id": "tpl_awesome_gpt_image_2_531",
  "name": {
    "zh-tw": "水晶展框·國家旅行海報",
    "en": "Crystal Frame · Country Travel Poster"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case531.jpg",
  "author": "@Taaruk_",
  "selections": {
    "travel_country": {
      "zh-tw": "意大利",
      "en": "Italy"
    },
    "glass_frame_shape": {
      "zh-tw": "拱形玻璃展框",
      "en": "arched glass display"
    },
    "year_number": {
      "zh-tw": "2026",
      "en": "2026"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 531,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-531",
    "author": "@Taaruk_",
    "originalUrl": "https://x.com/Taaruk_/status/2091391283063361558",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_531
},
{
  "id": "tpl_awesome_gpt_image_2_527",
  "name": {
    "zh-tw": "旅行票據·紙雕城市立體景",
    "en": "Travel Ticket · Pop-Up City Diorama"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case527.jpg",
  "author": "@john_my07",
  "selections": {
    "city_name": {
      "zh-tw": "里約熱內盧",
      "en": "Rio de Janeiro"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 527,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-527",
    "author": "@john_my07",
    "originalUrl": "https://x.com/john_my07/status/2091408386466214031",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_527
},
{
  "id": "tpl_awesome_gpt_image_2_520",
  "name": {
    "zh-tw": "月面休息·絲印T恤圖案",
    "en": "Lunar Break · Screen-Printed T-Shirt"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case520.jpg",
  "author": "@lovimg_com",
  "selections": {
    "astronaut_break": {
      "zh-tw": "手捧冒著熱氣的小杯子",
      "en": "holding a small steaming mug"
    },
    "apparel_ink_palette": {
      "zh-tw": "深海軍藍底，淺藍與白色油墨",
      "en": "navy fabric with pale blue and white ink"
    }
  },
  "tags": [
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 520,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-520",
    "author": "@lovimg_com",
    "originalUrl": "https://x.com/lovimg_com/status/2077035644254363972",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_520
},
{
  "id": "tpl_awesome_gpt_image_2_519",
  "name": {
    "zh-tw": "香水原瓶·花材電商圖",
    "en": "Original Perfume Bottle · Floral Product Image"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case519.jpg",
  "author": "@lovimg_com",
  "selections": {
    "perfume_floral_set": {
      "zh-tw": "薄荷綠玫瑰與淺綠葉片",
      "en": "mint-green roses and pale green leaves"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 519,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-519",
    "author": "@lovimg_com",
    "originalUrl": "https://x.com/lovimg_com/status/2077036313832996893",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_519
},
{
  "id": "tpl_awesome_gpt_image_2_517",
  "name": {
    "zh-tw": "杯內魚眼·夏日冰飲廣告",
    "en": "Inside-the-Cup Fisheye · Summer Drink Ad"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case517.jpg",
  "author": "@lovimg_com",
  "selections": {
    "summer_cup_fruit": {
      "zh-tw": "紅色草莓果肉",
      "en": "red strawberry pieces"
    }
  },
  "tags": [
    "攝影",
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 517,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-517",
    "author": "@lovimg_com",
    "originalUrl": "https://x.com/lovimg_com/status/2077036659028484375",
    "adaptedBy": "Prompt Fill"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_517
},
{
  "id": "tpl_awesome_gpt_image_2_329",
  "name": {
    "zh-tw": "燼甲獵鷹者與燃翼神禽",
    "en": "Ember Falconer and Firebird"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case329.jpg",
  "author": "@iamsofiaijaz",
  "selections": {
    "hair_style": {
      "zh-tw": "辮子",
      "en": "braided hair"
    },
    "expressions": {
      "zh-tw": "神情堅定",
      "en": "a determined expression"
    }
  },
  "tags": [
    "人物",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 329,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-329",
    "author": "@iamsofiaijaz",
    "originalUrl": "https://x.com/iamsofiaijaz/status/2008896649901535342",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "463dfd30a36c47eb737d9e9aca181638e81207c30c233a842955840934c4836f"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_329
},
{
  "id": "tpl_awesome_gpt_image_2_325",
  "name": {
    "zh-tw": "柔光3D卡通肖像",
    "en": "Soft-Lit 3D Cartoon Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case325.jpg",
  "author": "@iamsofiaijaz",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "eye_color": {
      "zh-tw": "綠色",
      "en": "green"
    },
    "clothing_male": {
      "zh-tw": "黑色西裝外套內搭白色T恤",
      "en": "a black blazer over a white t-shirt"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 325,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-325",
    "author": "@iamsofiaijaz",
    "originalUrl": "https://x.com/iamsofiaijaz/status/2013473309485343120",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "63b5a8828bb186173836e4dc865cd8029ee089b0372eaf336a6a2f88ec7cff14"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_325
},
{
  "id": "tpl_awesome_gpt_image_2_324",
  "name": {
    "zh-tw": "復古巴士旅行時尚",
    "en": "Vintage Bus Fashion Editorial"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case324.jpg",
  "author": "@iamsofiaijaz",
  "selections": {
    "clothing_female": {
      "zh-tw": "紅色長風衣",
      "en": "a long red trench coat"
    },
    "hair_style": {
      "zh-tw": "波浪狀金髮",
      "en": "wavy blonde hair"
    },
    "accessory_glasses": {
      "zh-tw": "圓形藍色反光太陽鏡",
      "en": "round blue reflective sunglasses"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 324,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-324",
    "author": "@iamsofiaijaz",
    "originalUrl": "https://x.com/iamsofiaijaz/status/2015337737860403283",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "2e7042324938796e5a3da65b8e384e8377951b1512d2a75040c09352c313d301"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_324
},
{
  "id": "tpl_awesome_gpt_image_2_322",
  "name": {
    "zh-tw": "街頭廣角飲料展示",
    "en": "Wide-Angle Street Beverage Campaign"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case322.jpg",
  "author": "@ecommartinez",
  "selections": {
    "drink_product": {
      "zh-tw": "一瓶玻璃瓶裝汽水",
      "en": "a glass bottle of soda"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "人物",
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 322,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-322",
    "author": "@ecommartinez",
    "originalUrl": "https://x.com/ecommartinez/status/2017311074551533921",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "6ec5a432465aa783dbb91fbe67865ce0870af82f4bf045d14b32e758421cd374"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_322
},
{
  "id": "tpl_awesome_gpt_image_2_321",
  "name": {
    "zh-tw": "都市落日時尚瞬間",
    "en": "Golden-Hour Urban Fashion"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case321.jpg",
  "author": "OpenNana",
  "selections": {
    "clothing_female": {
      "zh-tw": "短款棕色麂皮夾克",
      "en": "cropped brown suede jacket"
    },
    "hair_style": {
      "zh-tw": "豐盈的淺棕色長髮",
      "en": "long, voluminous curly light-brown hair"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 321,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-321",
    "author": "OpenNana",
    "originalUrl": "https://opennana.com/awesome-prompt-gallery/urban-sunset-fashion-silhouette",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "6a9ff18dad706e5fa44722b99ae1b6ba36db571dd00a184b7f378b5e7948dffc"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_321
},
{
  "id": "tpl_awesome_gpt_image_2_320",
  "name": {
    "zh-tw": "冰火戰士雙人電影海報",
    "en": "Fire and Ice Warrior Duo"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case320.jpg",
  "author": "@Naiknelofar788",
  "selections": {
    "fantasy_weapon": {
      "zh-tw": "中世紀長劍",
      "en": "medieval sword"
    },
    "hair_style": {
      "zh-tw": "溼漉漉的深色捲髮",
      "en": "wet, curly dark hair"
    }
  },
  "tags": [
    "人物",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 320,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-320",
    "author": "@Naiknelofar788",
    "originalUrl": "https://x.com/Naiknelofar788/status/2025972876554510482",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "90ba4279bf8d6c9f40c1dc5d4b4b7b38dad2aa1a2e98dc24357f47f4f19d2108"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_320
},
{
  "id": "tpl_awesome_gpt_image_2_319",
  "name": {
    "zh-tw": "飛鳥高定時裝秀",
    "en": "Living Bird Couture Runway"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case319.jpg",
  "author": "@MrDasOnX",
  "selections": {
    "dominant_colors": {
      "zh-tw": "彩虹般的藍色、光芒四射的紅色、金黃色和柔和的白色",
      "en": "iridescent blues, radiant reds, golden yellows, and soft whites"
    },
    "expressions": {
      "zh-tw": "快樂、自信的表情",
      "en": "a joyful, confident expression"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 319,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-319",
    "author": "@MrDasOnX",
    "originalUrl": "https://x.com/MrDasOnX/status/2026284342549340190",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "25384357628ad43288bbe6f931294c8e6a2597af51e18a4e5e4d039a45826bdf"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_319
},
{
  "id": "tpl_awesome_gpt_image_2_316",
  "name": {
    "zh-tw": "衝破漫畫分鏡的跑者",
    "en": "Runner Breaking Through a Comic Panel"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case316.jpg",
  "author": "@Fujimoto_hina",
  "selections": {
    "clothing_male": {
      "zh-tw": "深色紋理高領毛衣和牛仔褲",
      "en": "a dark textured turtleneck sweater and jeans"
    },
    "accessory_glasses": {
      "zh-tw": "黑色方形眼鏡",
      "en": "black rectangular glasses"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 316,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-316",
    "author": "@Fujimoto_hina",
    "originalUrl": "https://x.com/Fujimoto_hina/status/2027748030825500722",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "951a142ba9ad6b72c8ccee8456c29f209909dc4dd87422e24acb46db44b7cdc2"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_316
},
{
  "id": "tpl_awesome_gpt_image_2_315",
  "name": {
    "zh-tw": "史前巨口中的守護者",
    "en": "Guardian in the Dinosaur’s Jaws"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case315.jpg",
  "author": "@MrDasOnX",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "合身的黑色長袖短款上衣",
      "en": "a fitted black long-sleeve crop top"
    }
  },
  "tags": [
    "人物",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 315,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-315",
    "author": "@MrDasOnX",
    "originalUrl": "https://x.com/MrDasOnX/status/2028087254757867560",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "b26d9160feebed4349e113b8e814b66b142c698b9c89a9347a03743d1f053977"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_315
},
{
  "id": "tpl_awesome_gpt_image_2_314",
  "name": {
    "zh-tw": "未來都市雙重曝光肖像",
    "en": "Future City Double-Exposure Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case314.jpg",
  "author": "@Fujimoto_hina",
  "selections": {
    "subject": {
      "zh-tw": "年輕男子",
      "en": "young man"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 314,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-314",
    "author": "@Fujimoto_hina",
    "originalUrl": "https://x.com/Fujimoto_hina/status/2028045894088630679",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "e0d56d28113e5ac8469d44284a2e44c62af3e00931d58a94b798d4b443418924"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_314
},
{
  "id": "tpl_awesome_gpt_image_2_313",
  "name": {
    "zh-tw": "藍紫花霧護膚品廣告",
    "en": "Blue-Violet Floral Skincare Campaign"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case313.jpg",
  "author": "@Fujimoto_hina",
  "selections": {
    "company": {
      "zh-tw": "NUBELLA",
      "en": "NUBELLA"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 313,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-313",
    "author": "@Fujimoto_hina",
    "originalUrl": "https://x.com/Fujimoto_hina/status/2027903683154088431",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "11699cead5292ea0daa0e0509a36d926daef3a75a56dac30b66994906dc2f8a8"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_313
},
{
  "id": "tpl_awesome_gpt_image_2_312",
  "name": {
    "zh-tw": "雙罐霓虹汽水飛濺廣告",
    "en": "Neon Twin-Can Soda Splash"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case312.jpg",
  "author": "@Fujimoto_hina",
  "selections": {
    "fictional_drink_brand": {
      "zh-tw": "ZESTIVA",
      "en": "ZESTIVA"
    },
    "fruit": {
      "zh-tw": "芒果",
      "en": "mango"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 312,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-312",
    "author": "@Fujimoto_hina",
    "originalUrl": "https://x.com/Fujimoto_hina/status/2028388808320819277",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "3a15a62e607971854f683f802471585c973a50b5c0569cbf81733b31839f8279"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_312
},
{
  "id": "tpl_awesome_gpt_image_2_311",
  "name": {
    "zh-tw": "晨曦花田三聯畫",
    "en": "Sunrise Flower-Field Triptych"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case311.jpg",
  "author": "@Naiknelofar788",
  "selections": {
    "flower_field_species": {
      "zh-tw": "薰衣草",
      "en": "lavender"
    },
    "clothing_female": {
      "zh-tw": "淡紫色連衣裙",
      "en": "pale lilac dress"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 311,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-311",
    "author": "@Naiknelofar788",
    "originalUrl": "https://x.com/Naiknelofar788/status/2028417667846341062",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "8a4d283bc19d4c5e3a928d787e9670af4d81b72e18d51d5ac80fbb134d62c8e5"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_311
},
{
  "id": "tpl_awesome_gpt_image_2_310",
  "name": {
    "zh-tw": "零食結構技術訊息圖",
    "en": "Snack Engineering Infographic"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case310.jpg",
  "author": "@TechieBySA",
  "selections": {
    "snack_subject": {
      "zh-tw": "夾心威化餅乾",
      "en": "a filled wafer biscuit"
    },
    "dominant_colors": {
      "zh-tw": "橙色",
      "en": "orange"
    }
  },
  "tags": [
    "產品",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 310,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-310",
    "author": "@TechieBySA",
    "originalUrl": "https://x.com/TechieBySA/status/2031795709243019280",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "5f6474c40ad3c384610e0a6f6648986b494fc5fdb3888a82fb9451a8840ef4d8"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_310
},
{
  "id": "tpl_awesome_gpt_image_2_309",
  "name": {
    "zh-tw": "天然樹葉角色拼貼",
    "en": "Natural Leaf Character Collage"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case309.jpg",
  "author": "@meng_dagg695",
  "selections": {
    "character_name": {
      "zh-tw": "孫悟空",
      "en": "Sun Wukong"
    },
    "background_color_clean": {
      "zh-tw": "乾淨的白色背景",
      "en": "clean white background"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 309,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-309",
    "author": "@meng_dagg695",
    "originalUrl": "https://x.com/meng_dagg695/status/2032019839070716170",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "36b955016ed6b515e8ad7329acb137a97ede7a659dd103b07b03f19317f22b35"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_309
},
{
  "id": "tpl_awesome_gpt_image_2_304",
  "name": {
    "zh-tw": "熒藍神獸撕紙山水",
    "en": "Fluorescent Mythical Beast Paper Art"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case304.jpg",
  "author": "@liyue_ai",
  "selections": {
    "monster_element": {
      "zh-tw": "窮奇",
      "en": "Qiongqi"
    },
    "main_text": {
      "zh-tw": "東方美學",
      "en": "東方美學"
    },
    "artwork_signature": {
      "zh-tw": "@LIYUE",
      "en": "@LIYUE"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 304,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-304",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045506567735558336",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "add07dfca276eb8d3529f65421661f9954d07451a5903be8a5b0331121568a40"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_304
},
{
  "id": "tpl_awesome_gpt_image_2_299",
  "name": {
    "zh-tw": "留白乾刷塗鴉插畫",
    "en": "Dry-Brush Graffiti Sketch"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case299.jpg",
  "author": "@VoxcatAI",
  "selections": {
    "illustration_subject": {
      "zh-tw": "散步的貓咪",
      "en": "a strolling cat"
    },
    "artwork_signature": {
      "zh-tw": "voxcat",
      "en": "voxcat"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 299,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-299",
    "author": "@VoxcatAI",
    "originalUrl": "https://x.com/VoxcatAI/status/2045131503001342302",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "bd25bd9748ca3f3ffb3232640d6ff141222e88157a10f895896119de6ea3df78"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_299
},
{
  "id": "tpl_awesome_gpt_image_2_298",
  "name": {
    "zh-tw": "波士頓春日河流海報",
    "en": "Boston Spring River Poster"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case298.jpg",
  "author": "@BubbleBrain",
  "selections": {
    "year_number": {
      "zh-tw": "2026",
      "en": "2026"
    },
    "advert_campaign_tagline": {
      "zh-tw": "BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION",
      "en": "BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 298,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-298",
    "author": "@BubbleBrain",
    "originalUrl": "https://x.com/BubbleBrain/status/2045358053831172358",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "8daa83039cd21d5ae2f1485b2c39362ef584b9c524716ff03f913a64e7fcb3ba"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_298
},
{
  "id": "tpl_awesome_gpt_image_2_297",
  "name": {
    "zh-tw": "手寫食譜·編輯排版",
    "en": "Handwritten Recipe Editorial"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case297.jpg",
  "author": "@maxescu",
  "selections": {
    "recipe_page_layout": {
      "zh-tw": "雜誌雙頁跨頁",
      "en": "a magazine double-page spread"
    },
    "main_text": {
      "zh-tw": "家庭廚房筆記",
      "en": "Family Kitchen Notes"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 297,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-297",
    "author": "@maxescu",
    "originalUrl": "https://x.com/maxescu/status/2045203839910056014",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "44e756df72e01e84c29861f1735691a725e5a1dd5702eb256fee7aee987340b9"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_297
},
{
  "id": "tpl_awesome_gpt_image_2_286",
  "name": {
    "zh-tw": "城市夜景連體剪紙",
    "en": "Connected Cityscape Paper-Cut"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case286.jpg",
  "author": "@liyue_ai",
  "selections": {
    "paper_cut_finish": {
      "zh-tw": "金屬箔或光澤紙",
      "en": "metallic foil or glossy paper"
    },
    "detail_level": {
      "zh-tw": "細節豐富",
      "en": "rich in details"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 286,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-286",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045527750606487877",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "e807eef7f04eb53ebb3e0577a36000ff02945a531c582ddc62b94d0439d05fae"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_286
},
{
  "id": "tpl_awesome_gpt_image_2_284",
  "name": {
    "zh-tw": "臥室鏡面生活自拍",
    "en": "Bedroom Mirror Lifestyle Selfie"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case284.jpg",
  "author": "@Shinning1010",
  "selections": {
    "casual_mirror_outfit": {
      "zh-tw": "隨意的灰色居家服",
      "en": "casual gray loungewear"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 284,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-284",
    "author": "@Shinning1010",
    "originalUrl": "https://x.com/Shinning1010/status/2045002808903020962",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "08280d4e194b4cade3d45f04639c9ecd35ddc3baf9d3cd5fee9c088285ff10e5"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_284
},
{
  "id": "tpl_awesome_gpt_image_2_180",
  "name": {
    "zh-tw": "荒誕喜劇電影四聯海報",
    "en": "Surreal Comedy Poster Quartet"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case180.jpg",
  "author": "@aiehon_aya",
  "selections": {
    "character_subject": {
      "zh-tw": "穿禮服的中年男士",
      "en": "a middle-aged man in an evening gown"
    },
    "main_text": {
      "zh-tw": "月曜日の奇跡",
      "en": "月曜日の奇跡"
    }
  },
  "tags": [
    "人物",
    "影視",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 180,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-180",
    "author": "@aiehon_aya",
    "originalUrl": "https://x.com/aiehon_aya/status/2046499177916682600",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "52fd5fc9eb019ca26ea545453080768d0cbe1a2d475655c1c9e13e27362cbab2"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_180
},
{
  "id": "tpl_awesome_gpt_image_2_279",
  "name": {
    "zh-tw": "紙裂中的東方山水",
    "en": "Eastern Landscape Through Torn Paper"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case279.jpg",
  "author": "@liyue_ai",
  "selections": {
    "main_text": {
      "zh-tw": "東方美學",
      "en": "東方美學"
    },
    "artwork_signature": {
      "zh-tw": "@LIYUE",
      "en": "@LIYUE"
    }
  },
  "tags": [
    "創意",
    "建築"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 279,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-279",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045368305079447853",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "9a8e702bbe40107956004b9fafce4247efa8fcefcd8ceffd53a54797e2c576fa"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_279
},
{
  "id": "tpl_awesome_gpt_image_2_278",
  "name": {
    "zh-tw": "阿馬爾菲復古海岸公路",
    "en": "Vintage Amalfi Coastal Road"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case278.jpg",
  "author": "@WolfRiccardo",
  "selections": {
    "vintage_car": {
      "zh-tw": "經典1960年代白色汽車",
      "en": "classic 1960s white car"
    },
    "render_style": {
      "zh-tw": "絲網印刷質感",
      "en": "screen print texture"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 278,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-278",
    "author": "@WolfRiccardo",
    "originalUrl": "https://x.com/WolfRiccardo/status/2044562722491121718",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "714016dd2ff3ed78ecbf9cd333964ccc1f679bd514651e45eefb272d193f82be"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_278
},
{
  "id": "tpl_awesome_gpt_image_2_277",
  "name": {
    "zh-tw": "海風柔焦美妝肖像",
    "en": "Seaside Soft-Focus Beauty Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case277.jpg",
  "author": "@patrickassale",
  "selections": {
    "jewelry_style": {
      "zh-tw": "極簡珠寶",
      "en": "minimal jewelry"
    },
    "hair_style": {
      "zh-tw": "絲綢柔順發",
      "en": "silk press"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 277,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-277",
    "author": "@patrickassale",
    "originalUrl": "https://x.com/patrickassale/status/2044581766309060765",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "7a97ee6cbe4908e27ba3b7e726f1bbde0edd859b23814ea88ac40d5b7eea99bd"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_277
},
{
  "id": "tpl_awesome_gpt_image_2_274",
  "name": {
    "zh-tw": "成都手繪美食地圖",
    "en": "Chengdu Illustrated Food Map"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case274.jpg",
  "author": "@Panda20230902",
  "selections": {
    "advert_campaign_tagline": {
      "zh-tw": "凌晨兩點還在排隊的那家",
      "en": "the one with a queue even at 2 AM"
    },
    "aspect_ratio": {
      "zh-tw": "1:1",
      "en": "1:1"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 274,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-274",
    "author": "@Panda20230902",
    "originalUrl": "https://x.com/Panda20230902/status/2045396918965285111",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "1e99914a2bb9bc8b86707ca5196ec70c1604dd79b80393b33d02b8f0b1103593"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_274
},
{
  "id": "tpl_awesome_gpt_image_2_507",
  "name": {
    "zh-tw": "暖調鉤織角色玩偶",
    "en": "Cozy Crochet Character Doll"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case507.jpg",
  "author": "@azed_ai",
  "selections": {
    "character_animal": {
      "zh-tw": "小熊",
      "en": "a little bear"
    },
    "cute_outfit": {
      "zh-tw": "黃色針織背心",
      "en": "a yellow knitted vest"
    },
    "accessory": {
      "zh-tw": "小花束",
      "en": "a small bouquet"
    }
  },
  "tags": [
    "卡通",
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 507,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-507",
    "author": "@azed_ai",
    "originalUrl": "https://x.com/azed_ai/status/2067925399947067728",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "5df7148ca02cd714960af576bbcd8ed6a73e0c87b183e514c2bee327c54d7e34"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_507
},
{
  "id": "tpl_awesome_gpt_image_2_266",
  "name": {
    "zh-tw": "隨手記錄·真實筆記本",
    "en": "Everyday Handwritten Notebook"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case266.jpg",
  "author": "@patrickassale",
  "selections": {
    "note_pen": {
      "zh-tw": "黑色圓珠筆",
      "en": "black ballpoint pen"
    },
    "main_text": {
      "zh-tw": "週末旅行計劃",
      "en": "Weekend travel plan"
    }
  },
  "tags": [
    "攝影",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 266,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-266",
    "author": "@patrickassale",
    "originalUrl": "https://x.com/patrickassale/status/2044569086013718958",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "89ad67e243999c0fd386fde3225bd50efa20d7e3b159d9088c0c9b400f34e9ac"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_266
},
{
  "id": "tpl_awesome_gpt_image_2_510",
  "name": {
    "zh-tw": "寵物商店擬物App圖標",
    "en": "Pet Shop Skeuomorphic App Icon"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case510.jpg",
  "author": "@iamaiistudio",
  "selections": {
    "show_name": {
      "zh-tw": "Bichon Shop",
      "en": "Bichon Shop"
    },
    "character_animal": {
      "zh-tw": "比熊犬",
      "en": "a Bichon Frise"
    }
  },
  "tags": [
    "產品",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 510,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-510",
    "author": "@iamaiistudio",
    "originalUrl": "https://x.com/iamaiistudio/status/2071923809788285125",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "6427e7f61957e58d42fbcca7bca757d65c99489587f471ce4bfe8f402f1008de"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_510
},
{
  "id": "tpl_awesome_gpt_image_2_522",
  "name": {
    "zh-tw": "照片轉兒童繪本角色",
    "en": "Photo to Children’s Storybook Character"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case522.jpg",
  "author": "@Sairah_0",
  "selections": {
    "background_color_clean": {
      "zh-tw": "暖芥末黃",
      "en": "warm mustard yellow"
    },
    "draw_style": {
      "zh-tw": "水粉與蠟筆混合筆觸",
      "en": "mixed gouache and wax-crayon strokes"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 522,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-522",
    "author": "@Sairah_0",
    "originalUrl": "https://x.com/Sairah_0/status/2090321208441262454",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "11949921e8436a8d16eb233c3221c483e07ef238c624ca49639c08c957f5d099"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_522
},
{
  "id": "tpl_awesome_gpt_image_2_238",
  "name": {
    "zh-tw": "星雲巨獸與仰望者",
    "en": "Cosmic Creature and Stargazer"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case238.jpg",
  "author": "@liyue_ai",
  "selections": {
    "cosmic_creature": {
      "zh-tw": "錦鯉",
      "en": "koi"
    },
    "aspect_ratio": {
      "zh-tw": "9:16",
      "en": "9:16"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 238,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-238",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045875219307655337",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "f7cff35e31a8317b2f764c6d71effb8e79ef87999094d9800c925642aa3a6d82"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_238
},
{
  "id": "tpl_awesome_gpt_image_2_237",
  "name": {
    "zh-tw": "夏日柑橘汽水產品海報",
    "en": "Summer Citrus Soda Product Poster"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case237.jpg",
  "author": "@old_pgmrs_will",
  "selections": {
    "fictional_drink_brand": {
      "zh-tw": "夏柑SODA",
      "en": "Summer Citrus SODA"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 237,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-237",
    "author": "@old_pgmrs_will",
    "originalUrl": "https://x.com/old_pgmrs_will/status/2045852114673635507",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "1b501e1e1d987438009fb9d9e680699e8bf9d32c7fd4a66f88647b7c313ef84a"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_237
},
{
  "id": "tpl_awesome_gpt_image_2_231",
  "name": {
    "zh-tw": "狂草動勢藝術字",
    "en": "Dynamic Expressive Calligraphy"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case231.jpg",
  "author": "OpenNana",
  "selections": {
    "hero_typography_word": {
      "zh-tw": "縱有疾風起",
      "en": "縱有疾風起"
    },
    "background_color_clean": {
      "zh-tw": "純淨黑色背景",
      "en": "Pure black background"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 231,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-231",
    "author": "OpenNana",
    "originalUrl": "https://opennana.com/awesome-prompt-gallery/rising-wind-calligraphy-art",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "1a7480edd7f7f3c3ee095fc3dcd8992d80aa57384142cad6f48b08f30079e4e2"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_231
},
{
  "id": "tpl_awesome_gpt_image_2_230",
  "name": {
    "zh-tw": "鎏金廣州幾何海報",
    "en": "Gilded Guangzhou Geometry Poster"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case230.jpg",
  "author": "@liyue_ai",
  "selections": {
    "dominant_colors": {
      "zh-tw": "中國紅、青藍、鎏金",
      "en": "Chinese red, cyan blue, and gilded gold"
    },
    "aspect_ratio": {
      "zh-tw": "9:16",
      "en": "9:16"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 230,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-230",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045744531686166878",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "561ac0b5377d3ac139ea65f5f8153a67d416e72ca370dc5b539bcd945c4e3fd4"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_230
},
{
  "id": "tpl_awesome_gpt_image_2_229",
  "name": {
    "zh-tw": "琉璃飛鳥·羊城墨卷",
    "en": "Glass Bird over Guangzhou Ink Scroll"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case229.jpg",
  "author": "@liyue_ai",
  "selections": {
    "aspect_ratio": {
      "zh-tw": "9:16",
      "en": "9:16"
    },
    "enamel_metal": {
      "zh-tw": "拋光金色",
      "en": "polished gold"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 229,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-229",
    "author": "@liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2045873940883808523",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "a946a7207f1cb4541d0402950fbb1496dba83b1e01747a95fcf50740904966b6"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_229
},
{
  "id": "tpl_awesome_gpt_image_2_224",
  "name": {
    "zh-tw": "廢棄海城機甲主視覺",
    "en": "Mecha Key Visual in a Derelict Sea City"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case224.jpg",
  "author": "@old_pgmrs_will",
  "selections": {
    "eye_color": {
      "zh-tw": "琥珀色",
      "en": "amber"
    },
    "mecha_heavy_weapon": {
      "zh-tw": "巨型軌道炮",
      "en": "massive rail cannon"
    }
  },
  "tags": [
    "人物",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 224,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-224",
    "author": "@old_pgmrs_will",
    "originalUrl": "https://x.com/old_pgmrs_will/status/2046144801071079612",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "d64731fc3b7853bb0104821b0672a175b926b43b813b4079859d4170a5c5a7dd"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_224
},
{
  "id": "tpl_awesome_gpt_image_2_221",
  "name": {
    "zh-tw": "窗邊日系輕膠片寫真",
    "en": "Airy Japanese Window-Light Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case221.jpg",
  "author": "@BubbleBrain",
  "selections": {
    "clothing_female": {
      "zh-tw": "超大號白色紐扣襯衫",
      "en": "oversized white button-up shirt"
    },
    "hair_style": {
      "zh-tw": "長長的微亂黑髮",
      "en": "long slightly messy dark hair"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 221,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-221",
    "author": "@BubbleBrain",
    "originalUrl": "https://x.com/BubbleBrain/status/2046115431144902732",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "8ac54c459f8543355eee5e6222a28745ee95f40da23d51417e5d0f4bc84075b5"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_221
},
{
  "id": "tpl_awesome_gpt_image_2_216",
  "name": {
    "zh-tw": "圖案延展·四款時尚單品",
    "en": "Pattern to Four Fashion Products"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case216.png",
  "author": "@aiehon_aya",
  "selections": {
    "fashion_parts": {
      "zh-tw": "圍巾、手袋、襯衫和半裙",
      "en": "a scarf, handbag, shirt and skirt"
    },
    "aspect_ratio": {
      "zh-tw": "2:3",
      "en": "2:3"
    }
  },
  "tags": [
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "recommend_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 216,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-216",
    "author": "@aiehon_aya",
    "originalUrl": "https://x.com/aiehon_aya/status/2046348182301683954",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "0a909020e6dc8a891881d12c115ba0ee81415f8b4770c25339c9d7574407f1a9"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_216
},
{
  "id": "tpl_awesome_gpt_image_2_208",
  "name": {
    "zh-tw": "櫻花校園動漫肖像",
    "en": "Cherry Blossom Campus Anime Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case208.jpg",
  "author": "@joshesye",
  "selections": {
    "hair_style": {
      "zh-tw": "雙馬尾",
      "en": "twin tails"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "purple"
    },
    "aspect_ratio": {
      "zh-tw": "16:9",
      "en": "16:9"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 208,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-208",
    "author": "@joshesye",
    "originalUrl": "https://x.com/joshesye/status/2046593124646928397",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "948c09179851fc47460a3a051715950b1f6ef5a2ee4aacba5fc87eb12bb3f5e6"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_208
},
{
  "id": "tpl_awesome_gpt_image_2_206",
  "name": {
    "zh-tw": "古典群像工筆長卷",
    "en": "Classical Ensemble Gongbi Scroll"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case206.jpg",
  "author": "@GeekCatX",
  "selections": {
    "classical_ensemble": {
      "zh-tw": "八仙",
      "en": "the Eight Immortals"
    },
    "main_text": {
      "zh-tw": "仙蹤長卷",
      "en": "仙蹤長卷"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 206,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-206",
    "author": "@GeekCatX",
    "originalUrl": "https://x.com/GeekCatX/status/2046559605074076112",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "ab46b2c03df65f7667d0ce3c8c1b0164316f2eb7b7b18d406cdb6167ac731d5a"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_206
},
{
  "id": "tpl_awesome_gpt_image_2_196",
  "name": {
    "zh-tw": "試卷上的塗鴉巨獸",
    "en": "Scribbled Colossus on Exam Paper"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case196.jpg",
  "author": "@GeekCatX",
  "selections": {
    "monster_element": {
      "zh-tw": "巨龍",
      "en": "dragon"
    },
    "note_pen": {
      "zh-tw": "黑色圓珠筆",
      "en": "black ballpoint pen"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 196,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-196",
    "author": "@GeekCatX",
    "originalUrl": "https://x.com/GeekCatX/status/2046539797578330152",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "ffcf398c854031fed6023b81fe1163832c64abe6c7e0df648da2495d0f282be5"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_196
},
{
  "id": "tpl_awesome_gpt_image_2_195",
  "name": {
    "zh-tw": "真實肖像與水墨神話",
    "en": "Portrait Blended with Ink Mythology"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case195.jpg",
  "author": "@johnAGI168",
  "selections": {
    "hair_style": {
      "zh-tw": "柔和短波波頭短髮造型",
      "en": "soft, short wavy bob haircut"
    },
    "clothing_female": {
      "zh-tw": "簡約、修身的白色長袖服裝",
      "en": "simple, form-fitting white long-sleeve outfit"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 195,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-195",
    "author": "@johnAGI168",
    "originalUrl": "https://x.com/johnAGI168/status/2046596103919767857",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "2f78797b4617aae0bd9f1ed1c858c7c145dc4dafd3c20c4d91dfe0f05bcd21f8"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_195
},
{
  "id": "tpl_awesome_gpt_image_2_193",
  "name": {
    "zh-tw": "千手打工人·工筆幻想",
    "en": "Thousand-Handed Modern Worker"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case193.jpg",
  "author": "@johnAGI168",
  "selections": {
    "artwork_signature": {
      "zh-tw": "STUDIO",
      "en": "STUDIO"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 193,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-193",
    "author": "@johnAGI168",
    "originalUrl": "https://x.com/johnAGI168/status/2046565555025367392",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "14482f3222286aa2c4a2d54ec73a88c080f7171beefd10e3cfb135df86e06955"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_193
},
{
  "id": "tpl_awesome_gpt_image_2_187",
  "name": {
    "zh-tw": "韓系極簡室內編輯寫真",
    "en": "Minimal Korean Indoor Editorial"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case187.jpg",
  "author": "@BubbleBrain",
  "selections": {
    "expressions": {
      "zh-tw": "平靜，略顯疏離",
      "en": "calm, slightly distant"
    },
    "aspect_ratio": {
      "zh-tw": "9:16",
      "en": "9:16"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 187,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-187",
    "author": "@BubbleBrain",
    "originalUrl": "https://x.com/BubbleBrain/status/2046434670724907395",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "36f51a43235dbee9b75c0807452ec36fb900eb28a08d2a8ade4f3d552b33a999"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_187
},
{
  "id": "tpl_awesome_gpt_image_2_186",
  "name": {
    "zh-tw": "百格奇幻RPG道具圖鑑",
    "en": "100-Item Fantasy RPG Sprite Atlas"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case186.jpg",
  "author": "@ProperPrompter",
  "selections": {
    "background_color_clean": {
      "zh-tw": "白色背景",
      "en": "white background"
    },
    "rpg_item_theme": {
      "zh-tw": "經典中世紀奇幻",
      "en": "classic medieval fantasy"
    }
  },
  "tags": [
    "遊戲",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 186,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-186",
    "author": "@ProperPrompter",
    "originalUrl": "https://x.com/ProperPrompter/status/2046534215311970694",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "fd3f7b6c139a0d09dfccd9fbe7dfb43a7f5b182d35f9339d2bc4570d62a1eddb"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_186
},
{
  "id": "tpl_awesome_gpt_image_2_179",
  "name": {
    "zh-tw": "蒸汽朋克星座機械圖譜",
    "en": "Steampunk Constellation Atlas"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case179.jpg",
  "author": "@GeekCatX",
  "selections": {
    "constellation_theme": {
      "zh-tw": "射手座",
      "en": "Sagittarius"
    },
    "primary_material": {
      "zh-tw": "古銅與黃銅",
      "en": "antique bronze and brass"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 179,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-179",
    "author": "@GeekCatX",
    "originalUrl": "https://x.com/GeekCatX/status/2046574334572212694",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "44e22f8629d4fb7cb30ffe0466094a99d115761ea078edc1ab988d6776a6dae1"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_179
},
{
  "id": "tpl_awesome_gpt_image_2_175",
  "name": {
    "zh-tw": "極簡AI示範平臺封面",
    "en": "Minimal AI Presentation Platform Cover"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case175.jpg",
  "author": "@cellier_",
  "selections": {
    "show_name": {
      "zh-tw": "Chronicle",
      "en": "Chronicle"
    },
    "advert_campaign_tagline": {
      "zh-tw": "AI PRESENTATION PLATFORM",
      "en": "AI PRESENTATION PLATFORM"
    }
  },
  "tags": [
    "圖表",
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 175,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-175",
    "author": "@cellier_",
    "originalUrl": "https://x.com/cellier_/status/2046615173411262959",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "4b75b109ec785f5648372c73018d077db2cf1507700bd45c26825880ce033a0e"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_175
},
{
  "id": "tpl_awesome_gpt_image_2_174",
  "name": {
    "zh-tw": "唐風異寵散步圖",
    "en": "Tang Lady Walking an Unusual Pet"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case174.jpg",
  "author": "@johnAGI168",
  "selections": {
    "artwork_signature": {
      "zh-tw": "STUDIO",
      "en": "STUDIO"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 174,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-174",
    "author": "@johnAGI168",
    "originalUrl": "https://x.com/johnAGI168/status/2046565555025367392",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "1a6b26eb634676c36c9b9919411c39c8c9ace10981d4c1b6892e90fe439f05d3"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_174
},
{
  "id": "tpl_awesome_gpt_image_2_173",
  "name": {
    "zh-tw": "銀河刺繡襦裙時尚肖像",
    "en": "Galaxy-Embroidered Ruqun Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case173.jpg",
  "author": "@fdtreesky",
  "selections": {
    "clothing_color_traditional": {
      "zh-tw": "淡冰藍色",
      "en": "pale ice blue"
    },
    "lens_param": {
      "zh-tw": "85mm",
      "en": "85mm"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 173,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-2.md#case-173",
    "author": "@fdtreesky",
    "originalUrl": "https://x.com/fdtreesky/status/2046508731090018331",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "db3d6dc28af628a719f1535ceeaded2c9c01aaa91c9a1a43cef5d1557253373f"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_173
},
{
  "id": "tpl_awesome_gpt_image_2_165",
  "name": {
    "zh-tw": "夜市燒烤三刀流",
    "en": "Night-Market Three-Skewer Portrait"
  },
  "imageUrl": "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case165.jpg",
  "author": "@BubbleBrain",
  "selections": {
    "hair_style": {
      "zh-tw": "長髮",
      "en": "long hair"
    },
    "lens_type": {
      "zh-tw": "低角度廣角鏡頭",
      "en": "low-angle wide-angle shot"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2",
  "baseImage": "no_base_image",
  "attribution": {
    "repository": "https://github.com/freestylefly/awesome-gpt-image-2",
    "caseId": 165,
    "caseUrl": "https://github.com/freestylefly/awesome-gpt-image-2/blob/main/docs/gallery-part-1.md#case-165",
    "author": "@BubbleBrain",
    "originalUrl": "https://x.com/BubbleBrain/status/2046564674112831920",
    "adaptedBy": "Prompt Fill",
    "sourcePromptHash": "5dd83ee14b1e61ce07bfc5e1ee04dd69237888fa8ee5722bf5ec900c44f077d8"
  },
  "content": TEMPLATE_AWESOME_GPT_IMAGE_2_165
},
{
  "id": "tpl_youmind_gpt_image_2_5_34501",
  "name": {
    "zh-tw": "古典地中海宮廷花園",
    "en": "Classical Mediterranean Palace Garden"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202288503_uuo4iq_HR7-39Ja4AEA46r.jpg",
  "author": "siddharth",
  "selections": {
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "aspect_ratio": {
      "zh-tw": "16:9",
      "en": "16:9"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34501,
    "caseUrl": "https://youmind.com/zh-CN/prompts/classical-palace-garden-34501",
    "author": "siddharth",
    "authorUrl": "https://x.com/buildwithsid",
    "originalUrl": "https://x.com/buildwithsid/status/2098394726148055318#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "2334fcb80f2e19023164bbb179552412b84c5ddd85c5c9e2c9eadef78324f18a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34501
},
{
  "id": "tpl_youmind_gpt_image_2_5_34381",
  "name": {
    "zh-tw": "九種日式自拍表情參考表",
    "en": "Nine Selfie Expression Cards"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117736895_x4nlao_HR4khsFbYAAawBZ.jpg",
  "author": "さわ|AI畫像生成で月3桁継続中",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing": {
      "zh-tw": "白色絲綢襯衫",
      "en": "White silk shirt"
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34381,
    "caseUrl": "https://youmind.com/zh-CN/prompts/japanese-selfie-expressions-34381",
    "author": "さわ|AI畫像生成で月3桁継続中",
    "authorUrl": "https://x.com/AI_swwww",
    "originalUrl": "https://x.com/AI_swwww/status/2098154640739274951#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8a2c2896a08b51ca4392112eac94be05521bed0d1dddc44533638eebebec3955"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34381
},
{
  "id": "tpl_youmind_gpt_image_2_5_34371",
  "name": {
    "zh-tw": "向日葵冰封單體",
    "en": "Flower Sealed in an Ice Monolith"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117727188_gkejaj_HR3fE7AaQAElI8n.jpg",
  "author": "向陽喬木",
  "selections": {
    "botanical_accent": {
      "zh-tw": "向日葵",
      "en": "sunflowers"
    },
    "natural_environment": {
      "zh-tw": "霧氣瀰漫的荒原",
      "en": "a misty wasteland"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "aspect_ratio": {
      "zh-tw": "1:1",
      "en": "1:1"
    }
  },
  "tags": [
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34371,
    "caseUrl": "https://youmind.com/zh-CN/prompts/sunflower-ice-monolith-34371",
    "author": "向陽喬木",
    "authorUrl": "https://x.com/vista8",
    "originalUrl": "https://x.com/vista8/status/2098079031791096310#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "0af5c293512e266b1f246bbda9c55d5d1a2b9a7a1d4af92e081fff53460abc4b"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34371
},
{
  "id": "tpl_youmind_gpt_image_2_5_34493",
  "name": {
    "zh-tw": "奢華熱氣球旅行網站",
    "en": "Dawn Balloon Travel Landing Page"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202282688_4sjch6_HR5OmhrbUAAL0r2.jpg",
  "author": "嵐叔",
  "selections": {
    "studio_brand": {
      "zh-tw": "LUMEN",
      "en": "LUMEN"
    },
    "poster_headline": {
      "zh-tw": "新的旅程",
      "en": "A NEW JOURNEY"
    },
    "travel_location": {
      "zh-tw": "卡帕多奇亞石谷",
      "en": "Cappadocia rock valleys"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "產品",
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34493,
    "caseUrl": "https://youmind.com/zh-CN/prompts/hot-air-balloon-travel-website-34493",
    "author": "嵐叔",
    "authorUrl": "https://x.com/LufzzLiz",
    "originalUrl": "https://x.com/LufzzLiz/status/2098201514611515395#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "1be7bdc1730d2eb046ed59963452ac905011d1919092ff61e2ffc10281381f19"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34493
},
{
  "id": "tpl_youmind_gpt_image_2_5_34354",
  "name": {
    "zh-tw": "東方極簡禪意封面海報",
    "en": "Minimal Floral Zen Cover"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202270695_vgbkq9_HR53tVsaYAAZepS.jpg",
  "author": "李嶽",
  "selections": {
    "clothing": {
      "zh-tw": "白色絲綢襯衫",
      "en": "White silk shirt"
    },
    "botanical_accent": {
      "zh-tw": "紫色蘭花",
      "en": "purple orchids"
    },
    "poster_headline": {
      "zh-tw": "微光時刻",
      "en": "MOMENTS OF LIGHT"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34354,
    "caseUrl": "https://youmind.com/zh-CN/prompts/oriental-minimalist-poster-34354",
    "author": "李嶽",
    "authorUrl": "https://x.com/liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2098246112159420546",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "6e638fd7126f7178d0bf0a90a30fa8504751bdc0803e9928fa6ce527a80b4cdd"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34354
},
{
  "id": "tpl_youmind_gpt_image_2_5_34486",
  "name": {
    "zh-tw": "輕薄混合現實頭顯特寫",
    "en": "Slim Mixed-Reality Headset Close-up"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202276056_7xll3s_HR_vs9fasAA32QS.jpg",
  "author": "ミスターVR / Mr.VR🕶",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "portrait_mood": {
      "zh-tw": "安靜從容",
      "en": "quiet and composed"
    },
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "lighting": {
      "zh-tw": "倫勃朗光",
      "en": "Rembrandt lighting"
    }
  },
  "tags": [
    "人物",
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34486,
    "caseUrl": "https://youmind.com/zh-CN/prompts/thin-mixed-reality-headset-34486",
    "author": "ミスターVR / Mr.VR🕶",
    "authorUrl": "https://x.com/3DVR3",
    "originalUrl": "https://x.com/3DVR3/status/2098659787659702536#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "65085ff5c07271af91e235d6779ba48da356c9c80b603abaeda2dfffa577a92b"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34486
},
{
  "id": "tpl_youmind_gpt_image_2_5_34476",
  "name": {
    "zh-tw": "80 年代邁阿密霓虹 3D 肖像",
    "en": "Neon Eighties 3D Identity Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202268785_7vtqug_HR_iSirbUAAmgUy.jpg",
  "author": "Saul Goodman",
  "selections": {
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "portrait_mood": {
      "zh-tw": "自信堅定",
      "en": "confident and determined"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34476,
    "caseUrl": "https://youmind.com/zh-CN/prompts/neon-vice-city-3d-character-34476",
    "author": "Saul Goodman",
    "authorUrl": "https://x.com/Goodmanprotocol",
    "originalUrl": "https://x.com/Goodmanprotocol/status/2098644809359728784",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "625a162f2a05b7d8318bb3303ced375fd90c8fe9fac0f93fcfd0d8623c7b7326"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34476
},
{
  "id": "tpl_youmind_gpt_image_2_5_34472",
  "name": {
    "zh-tw": "極簡東方禪意海報",
    "en": "Airy Corridor Zen Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202263500_ii5gwu_HR_Znyxa0AEidA0.jpg",
  "author": "李嶽",
  "selections": {
    "clothing": {
      "zh-tw": "復古碎花連衣裙",
      "en": "Vintage floral print dress"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    },
    "poster_headline": {
      "zh-tw": "日常奇蹟",
      "en": "EVERYDAY MAGIC"
    }
  },
  "tags": [
    "人物",
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34472,
    "caseUrl": "https://youmind.com/zh-CN/prompts/oriental-zen-minimalist-poster-34472",
    "author": "李嶽",
    "authorUrl": "https://x.com/liyue_ai",
    "originalUrl": "https://x.com/liyue_ai/status/2098635261341286721",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "03b8651ffda80868819786a1f604f07e3cb74ef836ca861f2c0960677cd5736a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34472
},
{
  "id": "tpl_youmind_gpt_image_2_5_34475",
  "name": {
    "zh-tw": "現場演出傳單變體生成器",
    "en": "Four Concert Flyer Variations"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202266788_t4g65z_HR_YzAobQAAV_p8.jpg",
  "author": "Maki@Sunwood AI Labs.",
  "selections": {
    "poster_headline": {
      "zh-tw": "微光時刻",
      "en": "MOMENTS OF LIGHT"
    },
    "studio_brand": {
      "zh-tw": "NOVA STUDIO",
      "en": "NOVA STUDIO"
    },
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    }
  },
  "tags": [
    "人物",
    "創意",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34475,
    "caseUrl": "https://youmind.com/zh-CN/prompts/live-concert-flyer-grid-generator-34475",
    "author": "Maki@Sunwood AI Labs.",
    "authorUrl": "https://x.com/hAru_mAki_ch",
    "originalUrl": "https://x.com/hAru_mAki_ch/status/2098634675057238254",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "72aa026f9a92ca44dd189069f52095d84c164ec8353c9dedf0ab1c59f110c641"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34475
},
{
  "id": "tpl_youmind_gpt_image_2_5_34487",
  "name": {
    "zh-tw": "黑白漫畫表情設定集",
    "en": "Black-and-White Manga Expression Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202277885_yvrpbr_HR_GQJSawAE9bUQ.jpg",
  "author": "賢木イオ🍀AIイラスト",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "art_paper": {
      "zh-tw": "暖白水彩紙",
      "en": "warm white watercolor paper"
    },
    "line_art_style": {
      "zh-tw": "清晰的黑色墨線",
      "en": "clean black ink lines"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34487,
    "caseUrl": "https://youmind.com/zh-CN/prompts/manga-expression-sheet-34487",
    "author": "賢木イオ🍀AIイラスト",
    "authorUrl": "https://x.com/studiomasakaki",
    "originalUrl": "https://x.com/studiomasakaki/status/2098614276093334008#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34487
},
{
  "id": "tpl_youmind_gpt_image_2_5_34473",
  "name": {
    "zh-tw": "保持一致的春季時尚大片",
    "en": "Consistent Spring Fashion Triptych"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202264788_gwvqyy_HR_FD21a0AAyh8j.jpg",
  "author": "Nexora",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "淡紫色連衣裙",
      "en": "pale lilac dress"
    },
    "botanical_accent": {
      "zh-tw": "粉色雛菊",
      "en": "pink daisies"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34473,
    "caseUrl": "https://youmind.com/zh-CN/prompts/spring-fashion-consistent-editorial-34473",
    "author": "Nexora",
    "authorUrl": "https://x.com/frametheory058",
    "originalUrl": "https://x.com/frametheory058/status/2098612653644214288",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "ad9caef702792f8f05525d550b145756fbe6adbca796f8cde041a0f806f048a0"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34473
},
{
  "id": "tpl_youmind_gpt_image_2_5_34484",
  "name": {
    "zh-tw": "Q 版遊戲角色精靈圖集雙人組",
    "en": "Chibi Idol Duo Sprite Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202274892_zsmhcl_HR-shx8bEAAicA8.jpg",
  "author": "だしのもと",
  "selections": {
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "cute_outfit": {
      "zh-tw": "粉色偶像裙",
      "en": "a pink idol dress"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    },
    "background_color_clean": {
      "zh-tw": "純淨黑色背景",
      "en": "Pure black background"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34484,
    "caseUrl": "https://youmind.com/zh-CN/prompts/chibi-sprite-sheet-duo-34484",
    "author": "だしのもと",
    "authorUrl": "https://x.com/dasi_ai_nomoto",
    "originalUrl": "https://x.com/dasi_ai_nomoto/status/2098607546005176554#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "2334fcb80f2e19023164bbb179552412b84c5ddd85c5c9e2c9eadef78324f18a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34484
},
{
  "id": "tpl_youmind_gpt_image_2_5_34492",
  "name": {
    "zh-tw": "地圖上升起的微縮城市",
    "en": "City Rising from an Antique Atlas"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202282188_4326t2_HR-p4R5aoAAuwVV.jpg",
  "author": "老範講故事🎙️",
  "selections": {
    "city_name": {
      "zh-tw": "北京",
      "en": "Beijing"
    },
    "art_paper": {
      "zh-tw": "象牙白棉紙",
      "en": "ivory cotton paper"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    },
    "aspect_ratio": {
      "zh-tw": "1:1",
      "en": "1:1"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34492,
    "caseUrl": "https://youmind.com/zh-CN/prompts/beijing-map-diorama-34492",
    "author": "老範講故事🎙️",
    "authorUrl": "https://x.com/lukfan",
    "originalUrl": "https://x.com/lukfan/status/2098582975567061183#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34492
},
{
  "id": "tpl_youmind_gpt_image_2_5_34496",
  "name": {
    "zh-tw": "搖滾雙人專輯聯繫表",
    "en": "Rock Duo Album Contact Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202284914_2vzpyy_HR-l1vlaAAA92HQ.jpg",
  "author": "INAZOZAIN",
  "selections": {
    "clothing": {
      "zh-tw": "黑色修身西裝",
      "en": "Black slim-fit suit"
    },
    "accessory_glasses": {
      "zh-tw": "復古圓框眼鏡",
      "en": "Vintage round glasses"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "photo_effect": {
      "zh-tw": "細膩膠片顆粒",
      "en": "fine film grain"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34496,
    "caseUrl": "https://youmind.com/zh-CN/prompts/blue-rock-contact-sheet-34496",
    "author": "INAZOZAIN",
    "authorUrl": "https://x.com/inazozain",
    "originalUrl": "https://x.com/inazozain/status/2098578299106803812#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "source": [
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789202283194_merwku_HR-l1vnbMAAafO6.jpg",
      "label": {
        "zh-tw": "參考圖 1",
        "en": "Reference 1"
      }
    }
  ],
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34496
},
{
  "id": "tpl_youmind_gpt_image_2_5_34481",
  "name": {
    "zh-tw": "像素風日式工作室吉祥物 Logo",
    "en": "Pixel Studio Mascot Logo"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202273861_oytqss_HR83IyHbEAAuA33.jpg",
  "author": "賢木イオ🍀AIイラスト",
  "selections": {
    "studio_brand": {
      "zh-tw": "NOVA STUDIO",
      "en": "NOVA STUDIO"
    },
    "character_animal": {
      "zh-tw": "小貓",
      "en": "Little Kitten"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "產品"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34481,
    "caseUrl": "https://youmind.com/zh-CN/prompts/pixel-art-studio-logo-34481",
    "author": "賢木イオ🍀AIイラスト",
    "authorUrl": "https://x.com/studiomasakaki",
    "originalUrl": "https://x.com/studiomasakaki/status/2098457207851631092#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "d503dcfdd44cb6216b22dba5a43ecacce36079e0f6445b5906ba9b0a4daaf2dc"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34481
},
{
  "id": "tpl_youmind_gpt_image_2_5_34471",
  "name": {
    "zh-tw": "時尚雜誌·九月封面",
    "en": "September Fashion Magazine Cover"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202265046_sqy2tv_HR8UcJGaQAAA8KH.jpg",
  "author": "Harboris",
  "selections": {
    "studio_brand": {
      "zh-tw": "ATELIER N",
      "en": "ATELIER N"
    },
    "poster_headline": {
      "zh-tw": "向陽而生",
      "en": "GROW TOWARD THE SUN"
    },
    "clothing_female": {
      "zh-tw": "淡紫色連衣裙",
      "en": "pale lilac dress"
    },
    "portrait_mood": {
      "zh-tw": "安靜從容",
      "en": "quiet and composed"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34471,
    "caseUrl": "https://youmind.com/zh-CN/prompts/vogue-magazine-cover-portrait-34471",
    "author": "Harboris",
    "authorUrl": "https://x.com/harboriis",
    "originalUrl": "https://x.com/harboriis/status/2098418433226612740",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "3e95f41da2edb43b246b6f76f405b37d66fa3c5ff33e0ab7561dd0576d4cbd1d"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34471
},
{
  "id": "tpl_youmind_gpt_image_2_5_34479",
  "name": {
    "zh-tw": "貓耳動漫肖像",
    "en": "Cat-Eared Anime Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202272146_hnin6f_HR8FIKWbAAAT2rA.jpg",
  "author": "kuzerikku",
  "selections": {
    "hair_style": {
      "zh-tw": "波浪狀金髮",
      "en": "wavy blonde hair"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34479,
    "caseUrl": "https://youmind.com/zh-CN/prompts/blonde-catgirl-portrait-34479",
    "author": "kuzerikku",
    "authorUrl": "https://x.com/kuzerikku",
    "originalUrl": "https://x.com/kuzerikku/status/2098401690118709736#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34479
},
{
  "id": "tpl_youmind_gpt_image_2_5_34482",
  "name": {
    "zh-tw": "從塗鴉生物到奇幻 3D 怪獸",
    "en": "Doodle Creature to Fantasy Monster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202274484_svbvdd_HR78HIvaMAAOgSR.jpg",
  "author": "徐導 - 土澳版",
  "selections": {
    "primary_material": {
      "zh-tw": "陶瓷",
      "en": "Ceramic"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "natural_environment": {
      "zh-tw": "霧氣瀰漫的荒原",
      "en": "a misty wasteland"
    },
    "lighting": {
      "zh-tw": "倫勃朗光",
      "en": "Rembrandt lighting"
    }
  },
  "tags": [
    "卡通",
    "遊戲",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34482,
    "caseUrl": "https://youmind.com/zh-CN/prompts/doodle-to-3d-creature-34482",
    "author": "徐導 - 土澳版",
    "authorUrl": "https://x.com/xudaoai",
    "originalUrl": "https://x.com/xudaoai/status/2098391683855708543#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "source": [
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789202274535_rtvx8x_HR78HI6aIAAGqkv.jpg",
      "label": {
        "zh-tw": "參考圖 1",
        "en": "Reference 1"
      }
    },
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789202274484_wplw8t_HR78HIubsAAjyhB.jpg",
      "label": {
        "zh-tw": "參考圖 2",
        "en": "Reference 2"
      }
    }
  ],
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34482
},
{
  "id": "tpl_youmind_gpt_image_2_5_34344",
  "name": {
    "zh-tw": "真人級超寫實肖像",
    "en": "Character Reference to Realistic Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202268752_377apf_HR64YywbYAAsSiV.jpg",
  "author": "Touma",
  "selections": {
    "portrait_view": {
      "zh-tw": "半身正面",
      "en": "frontal half-body view"
    },
    "lighting": {
      "zh-tw": "倫勃朗光",
      "en": "Rembrandt lighting"
    },
    "background_color_clean": {
      "zh-tw": "純淨黑色背景",
      "en": "Pure black background"
    },
    "portrait_mood": {
      "zh-tw": "安靜從容",
      "en": "quiet and composed"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34344,
    "caseUrl": "https://youmind.com/zh-CN/prompts/live-action-avatar-realism-portrait-34344",
    "author": "Touma",
    "authorUrl": "https://x.com/Touma_945",
    "originalUrl": "https://x.com/Touma_945/status/2098317578628436004",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "1cb1d2fbeea264af3c7c6b855da4021cd6a0864f7ac5e0a126c1bf3f9fd388fd"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34344
},
{
  "id": "tpl_youmind_gpt_image_2_5_34343",
  "name": {
    "zh-tw": "東亞女性與花卉肖像",
    "en": "Golden-Hour Flower Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117697341_dfnd6i_HR4TO2-aYAAz-Gh.jpg",
  "author": "M. Asif",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "淡紫色連衣裙",
      "en": "pale lilac dress"
    },
    "botanical_accent": {
      "zh-tw": "粉色雛菊",
      "en": "pink daisies"
    },
    "portrait_mood": {
      "zh-tw": "溫暖微笑",
      "en": "a warm smile"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34343,
    "caseUrl": "https://youmind.com/zh-CN/prompts/east-asian-woman-portrait-flowers-34343",
    "author": "M. Asif",
    "authorUrl": "https://x.com/meAsifAi",
    "originalUrl": "https://x.com/meAsifAi/status/2098275343711010856",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "86a5a48bf94eac149b1d23c0749c2938968e354be682d1b603fcbe8a292d5a1b"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34343
},
{
  "id": "tpl_youmind_gpt_image_2_5_34352",
  "name": {
    "zh-tw": "80 年代寶萊塢復古時尚",
    "en": "Eighties Bollywood Telephone Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117701908_t8u7ii_HR6LjK1bwAAwYLU.jpg",
  "author": "Harboris",
  "selections": {
    "hair_style": {
      "zh-tw": "波浪狀金髮",
      "en": "wavy blonde hair"
    },
    "clothing": {
      "zh-tw": "白色絲綢襯衫",
      "en": "White silk shirt"
    },
    "portrait_mood": {
      "zh-tw": "自信堅定",
      "en": "confident and determined"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34352,
    "caseUrl": "https://youmind.com/zh-CN/prompts/bollywood-retro-fashion-portrait-34352",
    "author": "Harboris",
    "authorUrl": "https://x.com/harboriis",
    "originalUrl": "https://x.com/harboriis/status/2098267933659300039",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8e8881102680aecacad0f159da94ffac5a72eeddd14e4442158f7dfabc1f6fb8"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34352
},
{
  "id": "tpl_youmind_gpt_image_2_5_34499",
  "name": {
    "zh-tw": "動漫少女 12 種表情設定集",
    "en": "Twelve Anime Expression Panels"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202287107_yv9iaa_HR5itP6awAA9qaf.jpg",
  "author": "てんねん",
  "selections": {
    "hair_style": {
      "zh-tw": "雙馬尾",
      "en": "twin tails"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34499,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-expression-sheet-34499",
    "author": "てんねん",
    "authorUrl": "https://x.com/munou_ac",
    "originalUrl": "https://x.com/munou_ac/status/2098224166977806575#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "1be7bdc1730d2eb046ed59963452ac905011d1919092ff61e2ffc10281381f19"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34499
},
{
  "id": "tpl_youmind_gpt_image_2_5_34485",
  "name": {
    "zh-tw": "漫畫咖啡館 AI 對話氣泡",
    "en": "Café Conversation Manga Panel"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202276694_wz7r48_HR8NX57bAAAM04s.jpg",
  "author": "鴻上 善彥 | 成果の出るAIマーケティング",
  "selections": {
    "comic_cast": {
      "zh-tw": "一對青年朋友",
      "en": "two young adult friends"
    },
    "main_text": {
      "zh-tw": "今天也試試新方法吧。",
      "en": "Let us try something new today."
    },
    "supporting_text": {
      "zh-tw": "原來還能這樣！",
      "en": "I never thought of that!"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34485,
    "caseUrl": "https://youmind.com/zh-CN/prompts/manga-cafe-ai-dialogue-34485",
    "author": "鴻上 善彥 | 成果の出るAIマーケティング",
    "authorUrl": "https://x.com/k_4415",
    "originalUrl": "https://x.com/k_4415/status/2098410718777516110#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8e8881102680aecacad0f159da94ffac5a72eeddd14e4442158f7dfabc1f6fb8"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34485
},
{
  "id": "tpl_youmind_gpt_image_2_5_34480",
  "name": {
    "zh-tw": "虛無主義吉祥物漫畫海報",
    "en": "Snack-Time Mascot Story Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202272209_gk67s7_HR7zUqdbIAATQAu.jpg",
  "author": "石英",
  "selections": {
    "character_animal": {
      "zh-tw": "小貓",
      "en": "Little Kitten"
    },
    "snack_subject": {
      "zh-tw": "夾心曲奇",
      "en": "a sandwich cookie"
    },
    "poster_headline": {
      "zh-tw": "日常奇蹟",
      "en": "EVERYDAY MAGIC"
    },
    "art_paper": {
      "zh-tw": "暖白水彩紙",
      "en": "warm white watercolor paper"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34480,
    "caseUrl": "https://youmind.com/zh-CN/prompts/nihilist-mascot-manga-poster-34480",
    "author": "石英",
    "authorUrl": "https://x.com/quartzh",
    "originalUrl": "https://x.com/quartzh/status/2098382587429548503#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "1562117ae44b136b3cf75c201cd7f4db50bc5e6399605a1be46978a6d78a5ff7"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34480
},
{
  "id": "tpl_youmind_gpt_image_2_5_34341",
  "name": {
    "zh-tw": "宏大的垂直梯田式山城景觀",
    "en": "Vertical Terraced Mountain City"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117695234_cey4p1_HR6X4HHbMAABD0f.jpg",
  "author": "leolee",
  "selections": {
    "wall_material": {
      "zh-tw": "風化混凝土",
      "en": "weathered concrete"
    },
    "natural_environment": {
      "zh-tw": "霧氣瀰漫的群山",
      "en": "misty mountains"
    },
    "lighting_time": {
      "zh-tw": "黃昏暮光",
      "en": "dusk twilight"
    },
    "aspect_ratio": {
      "zh-tw": "2:3",
      "en": "2:3"
    }
  },
  "tags": [
    "建築",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34341,
    "caseUrl": "https://youmind.com/zh-CN/prompts/vertical-mountain-cityscape-telephoto-34341",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098281554556674498",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "adb68a2c14d0cb413e1630891df7e6c028b4be9e658a6f068630bd6092b7d988"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34341
},
{
  "id": "tpl_youmind_gpt_image_2_5_34339",
  "name": {
    "zh-tw": "長焦 S 型高架公路城市景觀",
    "en": "S-Curve Highway Megacity"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117694569_yq80cn_HR6Xzbsb0AAWA16.jpg",
  "author": "leolee",
  "selections": {
    "city_name": {
      "zh-tw": "重慶",
      "en": "Chongqing"
    },
    "wall_material": {
      "zh-tw": "風化混凝土",
      "en": "weathered concrete"
    },
    "lighting_time": {
      "zh-tw": "多雲漫射光",
      "en": "overcast diffused light"
    },
    "aspect_ratio": {
      "zh-tw": "3:4",
      "en": "3:4"
    }
  },
  "tags": [
    "建築",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34339,
    "caseUrl": "https://youmind.com/zh-CN/prompts/telephoto-scurve-concrete-cityscape-34339",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098281428866027661",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "a7a95a4ef9c09d8ce909abb4e0a6ed829f1e8ee8dcd9475f3f73d92586f7c094"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34339
},
{
  "id": "tpl_youmind_gpt_image_2_5_34353",
  "name": {
    "zh-tw": "粗野主義城市巨型結構",
    "en": "Brutalist Residential Megastructure"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117702506_p8gsvs_HR6XuMZawAEVYW3.jpg",
  "author": "leolee",
  "selections": {
    "wall_material": {
      "zh-tw": "風化混凝土",
      "en": "weathered concrete"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    },
    "lighting_time": {
      "zh-tw": "多雲漫射光",
      "en": "overcast diffused light"
    },
    "aspect_ratio": {
      "zh-tw": "2:3",
      "en": "2:3"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34353,
    "caseUrl": "https://youmind.com/zh-CN/prompts/brutalist-megastructure-cityscape-34353",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098281347727163721",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "5881dc029aa10e703fb2e7819302129aa0adae2667ee4060dc3ad53f1258164b"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34353
},
{
  "id": "tpl_youmind_gpt_image_2_5_34409",
  "name": {
    "zh-tw": "四格梯子浪漫漫畫",
    "en": "Continuous-Ladder Four-Panel Comic"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117754659_6benod_HR6D9BsbwAAMXM7.jpg",
  "author": "カーブミラー",
  "selections": {
    "comic_cast": {
      "zh-tw": "兩位大學同學",
      "en": "two university classmates"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "comic_location": {
      "zh-tw": "大學校園",
      "en": "a university campus"
    },
    "lighting_time": {
      "zh-tw": "日落霞光",
      "en": "sunset glow"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34409,
    "caseUrl": "https://youmind.com/zh-CN/prompts/ladder-romance-manga-34409",
    "author": "カーブミラー",
    "authorUrl": "https://x.com/kabumira862571",
    "originalUrl": "https://x.com/kabumira862571/status/2098259568547774952#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34409
},
{
  "id": "tpl_youmind_gpt_image_2_5_34402",
  "name": {
    "zh-tw": "超現實牛奶海鮮杯麵廣告",
    "en": "Surreal Winter Cup-Noodle Campaign"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202272786_ncah6h_HR6BDqFbEAAUSB9.jpg",
  "author": "kash",
  "selections": {
    "studio_brand": {
      "zh-tw": "MORNING CLUB",
      "en": "MORNING CLUB"
    },
    "premium_food_subject": {
      "zh-tw": "奶香海鮮杯麵",
      "en": "creamy seafood cup noodles"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "poster_headline": {
      "zh-tw": "日常奇蹟",
      "en": "EVERYDAY MAGIC"
    }
  },
  "tags": [
    "人物",
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34402,
    "caseUrl": "https://youmind.com/zh-CN/prompts/milk-seafood-noodle-ad-34402",
    "author": "kash",
    "authorUrl": "https://x.com/kash_spicy",
    "originalUrl": "https://x.com/kash_spicy/status/2098256410299760805#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "625a162f2a05b7d8318bb3303ced375fd90c8fe9fac0f93fcfd0d8623c7b7326"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34402
},
{
  "id": "tpl_youmind_gpt_image_2_5_34346",
  "name": {
    "zh-tw": "都市生活時尚攝影",
    "en": "Urban Knitwear Lifestyle Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117698618_3d5fqa_HR5yEV5a4AAeKi9.jpg",
  "author": "Meem",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "紅色長風衣",
      "en": "a long red trench coat"
    },
    "bag_content": {
      "zh-tw": "黑色皮革手袋",
      "en": "a black leather handbag"
    },
    "portrait_mood": {
      "zh-tw": "若有所思",
      "en": "thoughtful"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34346,
    "caseUrl": "https://youmind.com/zh-CN/prompts/expensive-lifestyle-city-street-fashion-34346",
    "author": "Meem",
    "authorUrl": "https://x.com/mehvishs25",
    "originalUrl": "https://x.com/mehvishs25/status/2098239922549449108",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34346
},
{
  "id": "tpl_youmind_gpt_image_2_5_34410",
  "name": {
    "zh-tw": "畫廊咖啡館創業海報場景",
    "en": "Gallery Café Lifestyle and Poster Wall"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117755245_7vomq3_HR3evUuWUAYeiAg.jpg",
  "author": "Eliana",
  "selections": {
    "clothing": {
      "zh-tw": "白色絲綢襯衫",
      "en": "White silk shirt"
    },
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    },
    "interior_design_style": {
      "zh-tw": "古典畫廊風格",
      "en": "classical gallery style"
    },
    "interior_lighting": {
      "zh-tw": "溫暖的自然窗光",
      "en": "warm natural window light"
    }
  },
  "tags": [
    "人物",
    "建築",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34410,
    "caseUrl": "https://youmind.com/zh-CN/prompts/gallery-cafe-startup-posters-34410",
    "author": "Eliana",
    "authorUrl": "https://x.com/eliana_jordan",
    "originalUrl": "https://x.com/eliana_jordan/status/2098077923580244280#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34410
},
{
  "id": "tpl_youmind_gpt_image_2_5_34369",
  "name": {
    "zh-tw": "開發者圖像一致性拼貼畫",
    "en": "Three References into One Group Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117726816_ocql94_HRvR928bwAAhBZm.jpg",
  "author": "小碼哥",
  "selections": {
    "travel_location": {
      "zh-tw": "城市咖啡館",
      "en": "an urban café"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    },
    "poster_headline": {
      "zh-tw": "新的旅程",
      "en": "A NEW JOURNEY"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34369,
    "caseUrl": "https://youmind.com/zh-CN/prompts/developer-consistency-collage-34369",
    "author": "小碼哥",
    "authorUrl": "https://x.com/xmglab",
    "originalUrl": "https://x.com/xmglab/status/2097965802351665351#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "2334fcb80f2e19023164bbb179552412b84c5ddd85c5c9e2c9eadef78324f18a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34369
},
{
  "id": "tpl_youmind_gpt_image_2_5_34488",
  "name": {
    "zh-tw": "日語字體對比海報",
    "en": "Thirty-Typeface Specimen Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202278480_3erpa4_HR41l4Ba8AAH5X5.jpg",
  "author": "G2（じーにー）｜AIビジネス翻訳家",
  "selections": {
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    },
    "main_text": {
      "zh-tw": "文字讓想象發生。",
      "en": "Words make imagination happen."
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    },
    "art_paper": {
      "zh-tw": "象牙白棉紙",
      "en": "ivory cotton paper"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34488,
    "caseUrl": "https://youmind.com/zh-CN/prompts/japanese-font-comparison-poster-34488",
    "author": "G2（じーにー）｜AIビジネス翻訳家",
    "authorUrl": "https://x.com/aiclass_g2",
    "originalUrl": "https://x.com/aiclass_g2/status/2098175132267332021#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34488
},
{
  "id": "tpl_youmind_gpt_image_2_5_34394",
  "name": {
    "zh-tw": "電影感科幻漫畫頁面",
    "en": "Domestic Science-Fiction Comic Page"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117746264_ok1h3a_HR2_baJaQAA_vQw.jpg",
  "author": "ステラパス",
  "selections": {
    "comic_cast": {
      "zh-tw": "一對青年朋友",
      "en": "two young adult friends"
    },
    "comic_location": {
      "zh-tw": "未來公寓",
      "en": "a futuristic apartment"
    },
    "main_text": {
      "zh-tw": "天空出現未知信號",
      "en": "Unknown signal in the sky"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34394,
    "caseUrl": "https://youmind.com/zh-CN/prompts/sci-fi-manga-page-34394",
    "author": "ステラパス",
    "authorUrl": "https://x.com/sharil12121",
    "originalUrl": "https://x.com/sharil12121/status/2098043549220741437#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34394
},
{
  "id": "tpl_youmind_gpt_image_2_5_34388",
  "name": {
    "zh-tw": "Q 版像素格鬥角色素材表",
    "en": "Chibi Street Fighter Sprite Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117742367_4c6uth_HR16ppCaEAAq5jA.jpg",
  "author": "すてら",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "sprite_action": {
      "zh-tw": "蓄力與揮擊",
      "en": "charging and striking"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34388,
    "caseUrl": "https://youmind.com/zh-CN/prompts/chibi-pixel-fighter-sprites-34388",
    "author": "すてら",
    "authorUrl": "https://x.com/stella_24r",
    "originalUrl": "https://x.com/stella_24r/status/2097968626150330496#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4d314ed09d840096082a18405220e2808b5e2e03ba852b67e8b8e644bbce81ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34388
},
{
  "id": "tpl_youmind_gpt_image_2_5_34182",
  "name": {
    "zh-tw": "從分鏡草圖到奇幻漫畫頁面",
    "en": "Storyboard Sketch to Finished Fantasy Manga"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028874317_mfeuic_HR1NM6WbsAA7j2D.jpg",
  "author": "tekiteki",
  "selections": {
    "anime_outfit": {
      "zh-tw": "白銀輕甲",
      "en": "white-and-silver light armor"
    },
    "fantasy_weapon": {
      "zh-tw": "符文長劍",
      "en": "runic longsword"
    },
    "comic_location": {
      "zh-tw": "古老城堡",
      "en": "an ancient castle"
    },
    "line_art_style": {
      "zh-tw": "清晰的黑色墨線",
      "en": "clean black ink lines"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34182,
    "caseUrl": "https://youmind.com/zh-CN/prompts/storyboard-to-manga-page-34182",
    "author": "tekiteki",
    "authorUrl": "https://x.com/chenbeidi1111",
    "originalUrl": "https://x.com/chenbeidi1111/status/2097918905675313279#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34182
},
{
  "id": "tpl_youmind_gpt_image_2_5_34181",
  "name": {
    "zh-tw": "九宮格白髮武士姿勢參考圖",
    "en": "Nine Samurai Poses"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028874151_dhmdbn_HR1IaWtbkAAFcKX.jpg",
  "author": "にゃむ",
  "selections": {
    "hair_style": {
      "zh-tw": "銀白長髮",
      "en": "long silver-white hair"
    },
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "fantasy_weapon": {
      "zh-tw": "中世紀長劍",
      "en": "medieval sword"
    },
    "comic_location": {
      "zh-tw": "日式庭院",
      "en": "a Japanese courtyard"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34181,
    "caseUrl": "https://youmind.com/zh-CN/prompts/white-haired-samurai-poses-34181",
    "author": "にゃむ",
    "authorUrl": "https://x.com/nyamnyam_ai",
    "originalUrl": "https://x.com/nyamnyam_ai/status/2097912623794897215#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "616010dd028cebf4942f64a7d4bbed5d4ccd0feae398dde0cb81e7b1b25a245a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34181
},
{
  "id": "tpl_youmind_gpt_image_2_5_34384",
  "name": {
    "zh-tw": "蘋果吉祥物像素精靈圖表",
    "en": "Fruit Mascot Laptop Animation Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202291910_87j9py_HR2rGyVagAAGp1J.jpg",
  "author": "Renoise AI 日本公式",
  "selections": {
    "fruit": {
      "zh-tw": "蘋果",
      "en": "Apple"
    },
    "digital_items": {
      "zh-tw": "銀色筆記本電腦",
      "en": "a silver laptop"
    },
    "sprite_action": {
      "zh-tw": "待機與招手",
      "en": "idle and waving"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34384,
    "caseUrl": "https://youmind.com/zh-CN/prompts/apple-pixel-sprite-sheet-34384",
    "author": "Renoise AI 日本公式",
    "authorUrl": "https://x.com/renoiseaijp",
    "originalUrl": "https://x.com/renoiseaijp/status/2098021502134448308#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "625a162f2a05b7d8318bb3303ced375fd90c8fe9fac0f93fcfd0d8623c7b7326"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34384
},
{
  "id": "tpl_youmind_gpt_image_2_5_34389",
  "name": {
    "zh-tw": "科幻物流車庫機械師",
    "en": "Mechanic in a Science-Fiction Garage"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117743059_agnyfo_HR2i3-ZbEAATHLU.jpg",
  "author": "仲村和航",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "lighting": {
      "zh-tw": "影棚硬光",
      "en": "Studio hard light"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34389,
    "caseUrl": "https://youmind.com/zh-CN/prompts/sci-fi-mechanic-garage-34389",
    "author": "仲村和航",
    "authorUrl": "https://x.com/w_nakamura414",
    "originalUrl": "https://x.com/w_nakamura414/status/2098012088665035073#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34389
},
{
  "id": "tpl_youmind_gpt_image_2_5_34390",
  "name": {
    "zh-tw": "逼真的主題樂園情侶自拍",
    "en": "Theme-Park Couple Selfie"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117743382_febo01_HR1_NfWbcAAiLQd.jpg",
  "author": "Koudai Nakahara",
  "selections": {
    "travel_location": {
      "zh-tw": "主題樂園商業街",
      "en": "a theme-park shopping street"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "portrait_mood": {
      "zh-tw": "溫暖微笑",
      "en": "a warm smile"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34390,
    "caseUrl": "https://youmind.com/zh-CN/prompts/realistic-couple-selfie-34390",
    "author": "Koudai Nakahara",
    "authorUrl": "https://x.com/YEKPtVxjDg42909",
    "originalUrl": "https://x.com/YEKPtVxjDg42909/status/2097972881611465041#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "ad9caef702792f8f05525d550b145756fbe6adbca796f8cde041a0f806f048a0"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34390
},
{
  "id": "tpl_youmind_gpt_image_2_5_34136",
  "name": {
    "zh-tw": "全球旅行目的地海報融合",
    "en": "Three Destinations in One Travel Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028843812_pf4qzi_HR1Ng2gaYAANLg-.jpg",
  "author": "KrishnaG",
  "selections": {
    "travel_location": {
      "zh-tw": "熱帶海島",
      "en": "a tropical island"
    },
    "poster_headline": {
      "zh-tw": "新的旅程",
      "en": "A NEW JOURNEY"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "lighting_time": {
      "zh-tw": "日落霞光",
      "en": "sunset glow"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34136,
    "caseUrl": "https://youmind.com/zh-CN/prompts/global-travel-destination-poster-34136",
    "author": "KrishnaG",
    "authorUrl": "https://x.com/KrishnaBio1",
    "originalUrl": "https://x.com/KrishnaBio1/status/2097918314727231621",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34136
},
{
  "id": "tpl_youmind_gpt_image_2_5_34179",
  "name": {
    "zh-tw": "黏土動畫風格動物辦公室“之前”場景",
    "en": "Overworked Clay Animal Office"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028872502_yzzxjo_HRzjST8a4AAa9gw.jpg",
  "author": "やましょー｜AI系PM・PdM・PMM",
  "selections": {
    "character_animal": {
      "zh-tw": "小熊",
      "en": "a little bear"
    },
    "poster_headline": {
      "zh-tw": "日常奇蹟",
      "en": "EVERYDAY MAGIC"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    },
    "interior_lighting": {
      "zh-tw": "溫暖的自然窗光",
      "en": "warm natural window light"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34179,
    "caseUrl": "https://youmind.com/zh-CN/prompts/claymation-animal-office-before-34179",
    "author": "やましょー｜AI系PM・PdM・PMM",
    "authorUrl": "https://x.com/yamashoyevskii",
    "originalUrl": "https://x.com/yamashoyevskii/status/2097812922424774965#reversed-2",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34179
},
{
  "id": "tpl_youmind_gpt_image_2_5_34204",
  "name": {
    "zh-tw": "循環動作·十六幀貼紙表",
    "en": "Looping Gesture Sticker Frames"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028997995_gwfrp0_HRyXRixa8AA4yAS.jpg",
  "author": "ruofeng",
  "selections": {
    "sprite_action": {
      "zh-tw": "待機與招手",
      "en": "idle and waving"
    },
    "portrait_mood": {
      "zh-tw": "輕鬆俏皮",
      "en": "relaxed and playful"
    },
    "anime_outfit": {
      "zh-tw": "粉色偶像裙",
      "en": "a pink idol dress"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34204,
    "caseUrl": "https://youmind.com/zh-CN/prompts/prompt-line-gif-34204",
    "author": "ruofeng",
    "authorUrl": "https://x.com/oneruofeng",
    "originalUrl": "https://x.com/oneruofeng/status/2097718343629410679",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "3dac4bae44acc59138b5354d7928011fe18678a0bb9a02522ae6bd40e468cec3"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34204
},
{
  "id": "tpl_youmind_gpt_image_2_5_34189",
  "name": {
    "zh-tw": "電影感日落清真寺景觀",
    "en": "Sunset Mosque and Alpine Lake"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028983462_9fqn7y_HRyWSj2XAAABt0j.jpg",
  "author": "KrishnaG",
  "selections": {
    "landscape_location": {
      "zh-tw": "高山湖泊",
      "en": "an alpine lake"
    },
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    },
    "lighting_time": {
      "zh-tw": "日落霞光",
      "en": "sunset glow"
    },
    "aspect_ratio": {
      "zh-tw": "16:9",
      "en": "16:9"
    }
  },
  "tags": [
    "建築",
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34189,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cinematic-sunset-landscape-gif-34189",
    "author": "KrishnaG",
    "authorUrl": "https://x.com/KrishnaBio1",
    "originalUrl": "https://x.com/KrishnaBio1/status/2097716825668702388",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "1be7bdc1730d2eb046ed59963452ac905011d1919092ff61e2ffc10281381f19"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34189
},
{
  "id": "tpl_youmind_gpt_image_2_5_34420",
  "name": {
    "zh-tw": "高端無線耳機攝影廣告",
    "en": "Premium Wireless Earbud Campaign"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202291901_7i3vni_HR67lzoaQAA2plo.jpg",
  "author": "Adam也叫吉米",
  "selections": {
    "studio_brand": {
      "zh-tw": "AURELIA",
      "en": "AURELIA"
    },
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "product_stage": {
      "zh-tw": "光潔的白色檯面",
      "en": "a polished white tabletop"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34420,
    "caseUrl": "https://youmind.com/zh-CN/prompts/wireless-earbuds-studio-ad-34420",
    "author": "Adam也叫吉米",
    "authorUrl": "https://x.com/Adam38363368936",
    "originalUrl": "https://x.com/Adam38363368936/status/2098320765531648122#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "625a162f2a05b7d8318bb3303ced375fd90c8fe9fac0f93fcfd0d8623c7b7326"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34420
},
{
  "id": "tpl_youmind_gpt_image_2_5_34419",
  "name": {
    "zh-tw": "高端冷萃咖啡罐海報",
    "en": "Condensation Cold-Brew Coffee Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202289688_14qlmp_HR67OOhb0AAiN5S.jpg",
  "author": "Adam也叫吉米",
  "selections": {
    "product_stage": {
      "zh-tw": "深色火山岩臺",
      "en": "a dark volcanic stone plinth"
    },
    "studio_brand": {
      "zh-tw": "MORNING CLUB",
      "en": "MORNING CLUB"
    },
    "poster_headline": {
      "zh-tw": "向陽而生",
      "en": "GROW TOWARD THE SUN"
    },
    "lighting": {
      "zh-tw": "大型頂置柔光箱，輕微側向反射光",
      "en": "Large overhead softbox, slight side reflection"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34419,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cold-brew-can-poster-34419",
    "author": "Adam也叫吉米",
    "authorUrl": "https://x.com/Adam38363368936",
    "originalUrl": "https://x.com/Adam38363368936/status/2098320380184388014#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "3c969d493da6dc15fcbc272e2bfd86d2c8ab30ec636bec90589cded9a22c4287"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34419
},
{
  "id": "tpl_youmind_gpt_image_2_5_34417",
  "name": {
    "zh-tw": "奢華琥珀香水廣告",
    "en": "Amber Perfume on Marble"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202288222_r6qq6c_HR6510_boAAIPKP.jpg",
  "author": "Adam也叫吉米",
  "selections": {
    "studio_brand": {
      "zh-tw": "AURELIA",
      "en": "AURELIA"
    },
    "product_stage": {
      "zh-tw": "暖米色大理石臺",
      "en": "a warm beige marble plinth"
    },
    "perfume_floral_set": {
      "zh-tw": "白色花朵與綠葉",
      "en": "white flowers and green leaves"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34417,
    "caseUrl": "https://youmind.com/zh-CN/prompts/luxury-perfume-product-photo-34417",
    "author": "Adam也叫吉米",
    "authorUrl": "https://x.com/Adam38363368936",
    "originalUrl": "https://x.com/Adam38363368936/status/2098319074560450984#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34417
},
{
  "id": "tpl_youmind_gpt_image_2_5_34416",
  "name": {
    "zh-tw": "天然食品店健康購物者",
    "en": "Natural Food Store Shopper"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117757604_uytela_HR3Rr_7bUAAFKRG.jpg",
  "author": "Alex Patrascu",
  "selections": {
    "clothing": {
      "zh-tw": "復古碎花連衣裙",
      "en": "Vintage floral print dress"
    },
    "fruit": {
      "zh-tw": "蘋果",
      "en": "Apple"
    },
    "portrait_mood": {
      "zh-tw": "溫暖微笑",
      "en": "a warm smile"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34416,
    "caseUrl": "https://youmind.com/zh-CN/prompts/natural-foods-store-shopper-34416",
    "author": "Alex Patrascu",
    "authorUrl": "https://x.com/maxescu",
    "originalUrl": "https://x.com/maxescu/status/2098063568260493766#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "3c969d493da6dc15fcbc272e2bfd86d2c8ab30ec636bec90589cded9a22c4287"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34416
},
{
  "id": "tpl_youmind_gpt_image_2_5_34360",
  "name": {
    "zh-tw": "Apple 風格科技宣傳海報",
    "en": "Minimal Technology Launch Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117714326_22xk0g_HR2DU3caIAADvXK.jpg",
  "author": "ᴍᴜʀᴘʜʏ",
  "selections": {
    "apple_style_product": {
      "zh-tw": "無線耳機",
      "en": "wireless earbuds"
    },
    "studio_brand": {
      "zh-tw": "LUMEN",
      "en": "LUMEN"
    },
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "產品",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34360,
    "caseUrl": "https://youmind.com/zh-CN/prompts/apple-style-tech-ad-poster-34360",
    "author": "ᴍᴜʀᴘʜʏ",
    "authorUrl": "https://x.com/Diplomeme",
    "originalUrl": "https://x.com/Diplomeme/status/2097978468642480487",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "6d1f50e6a259ccaee2fe099e9af5dda7c8da1b49014c8060991b516c22754f46"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34360
},
{
  "id": "tpl_youmind_gpt_image_2_5_34287",
  "name": {
    "zh-tw": "奢華產品故事板",
    "en": "Luxury Product Nine-Shot Storyboard"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789029561194_8ap00k_HR11RR_boAA3Bzj.jpg",
  "author": "Wandering Corner",
  "selections": {
    "subject_product": {
      "zh-tw": "香水瓶",
      "en": "a perfume bottle"
    },
    "studio_brand": {
      "zh-tw": "AURELIA",
      "en": "AURELIA"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    },
    "product_stage": {
      "zh-tw": "暖米色大理石臺",
      "en": "a warm beige marble plinth"
    }
  },
  "tags": [
    "產品",
    "攝影",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34287,
    "caseUrl": "https://youmind.com/zh-CN/prompts/luxury-perfume-storyboard-layout-34287",
    "author": "Wandering Corner",
    "authorUrl": "https://x.com/WanderingC76",
    "originalUrl": "https://x.com/WanderingC76/status/2097964022293549127",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34287
},
{
  "id": "tpl_youmind_gpt_image_2_5_34135",
  "name": {
    "zh-tw": "奢華香水商業廣告專案",
    "en": "Perfume Brand Campaign Board"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028843803_barz0w_HR1OdkyaIAAX_HP.jpg",
  "author": "𝐌",
  "selections": {
    "studio_brand": {
      "zh-tw": "ATELIER N",
      "en": "ATELIER N"
    },
    "perfume_floral_set": {
      "zh-tw": "白色花朵與綠葉",
      "en": "white flowers and green leaves"
    },
    "primary_material": {
      "zh-tw": "玻璃",
      "en": "Glass"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    }
  },
  "tags": [
    "產品",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34135,
    "caseUrl": "https://youmind.com/zh-CN/prompts/luxury-perfume-commercial-storyboard-34135",
    "author": "𝐌",
    "authorUrl": "https://x.com/Strength04_X",
    "originalUrl": "https://x.com/Strength04_X/status/2097919290980921451",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "1be7bdc1730d2eb046ed59963452ac905011d1919092ff61e2ffc10281381f19"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34135
},
{
  "id": "tpl_youmind_gpt_image_2_5_34483",
  "name": {
    "zh-tw": "哥特吸血鬼精靈圖集",
    "en": "Gothic Vampire Sprite Sequence"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202275169_a1jmfk_HR8IX73awAAJT4I.jpg",
  "author": "hinoeuma",
  "selections": {
    "hair_style": {
      "zh-tw": "銀白長髮",
      "en": "long silver-white hair"
    },
    "anime_outfit": {
      "zh-tw": "黑色哥特禮裙",
      "en": "a black Gothic dress"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34483,
    "caseUrl": "https://youmind.com/zh-CN/prompts/gothic-vampire-sprite-sheet-34483",
    "author": "hinoeuma",
    "authorUrl": "https://x.com/hinoeuma2",
    "originalUrl": "https://x.com/hinoeuma2/status/2098406041193263217#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34483
},
{
  "id": "tpl_youmind_gpt_image_2_5_34385",
  "name": {
    "zh-tw": "可愛拼布泰迪熊吉祥物",
    "en": "Patchwork Teddy Mascot"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202278280_r2lxq5_HR66fmzaAAAUp77.jpg",
  "author": "あかくま屋",
  "selections": {
    "character_animal": {
      "zh-tw": "小熊",
      "en": "a little bear"
    },
    "fur_color": {
      "zh-tw": "暖焦糖棕色",
      "en": "warm caramel brown"
    },
    "cute_accessory": {
      "zh-tw": "小圍巾",
      "en": "a small scarf"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "寵物"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34385,
    "caseUrl": "https://youmind.com/zh-CN/prompts/patched-teddy-bear-mascot-34385",
    "author": "あかくま屋",
    "authorUrl": "https://x.com/akakuma0219",
    "originalUrl": "https://x.com/akakuma0219/status/2098321495848288520#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4053c77c1adba0f4d721c42965df34a8925b97e4e70abdc7ca7041385129f8dd"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34385
},
{
  "id": "tpl_youmind_gpt_image_2_5_34345",
  "name": {
    "zh-tw": "未來分揀設備工業廣告",
    "en": "Acid-Color Parcel Sorting Machine"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117697846_3x5xbx_HR63Yx2awAAFOad.jpg",
  "author": "leolee",
  "selections": {
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "studio_brand": {
      "zh-tw": "LUMEN",
      "en": "LUMEN"
    },
    "lighting": {
      "zh-tw": "影棚硬光",
      "en": "Studio hard light"
    }
  },
  "tags": [
    "產品",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34345,
    "caseUrl": "https://youmind.com/zh-CN/prompts/industrial-design-sorting-device-ad-34345",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098316162794914054",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "4e868a13c35fca7446cbc64a708edc1da69d6ad35fb0d84da220ecd4db0c7b3f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34345
},
{
  "id": "tpl_youmind_gpt_image_2_5_34500",
  "name": {
    "zh-tw": "蘑菇“愛與和平”海報",
    "en": "Toy Mushroom Peace Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202287487_l9zvc3_HR595YBaUAALAMi.jpg",
  "author": "Genzoh",
  "selections": {
    "botanical_accent": {
      "zh-tw": "粉色雛菊",
      "en": "pink daisies"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    },
    "poster_headline": {
      "zh-tw": "向陽而生",
      "en": "GROW TOWARD THE SUN"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34500,
    "caseUrl": "https://youmind.com/zh-CN/prompts/mushroom-peace-poster-34500",
    "author": "Genzoh",
    "authorUrl": "https://x.com/Genzoh1",
    "originalUrl": "https://x.com/Genzoh1/status/2098252912619405616#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8e8881102680aecacad0f159da94ffac5a72eeddd14e4442158f7dfabc1f6fb8"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34500
},
{
  "id": "tpl_youmind_gpt_image_2_5_34347",
  "name": {
    "zh-tw": "紐約地鐵紀實生活攝影",
    "en": "Quiet Subway Lifestyle Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202267297_cxvk84_HR59raJaEAAK1PI.jpg",
  "author": "simeon-sanai",
  "selections": {
    "clothing": {
      "zh-tw": "白色絲綢襯衫",
      "en": "White silk shirt"
    },
    "accessory_glasses": {
      "zh-tw": "復古圓框眼鏡",
      "en": "Vintage round glasses"
    },
    "location": {
      "zh-tw": "現代地鐵車廂",
      "en": "a modern subway carriage"
    },
    "drink_product": {
      "zh-tw": "冰抹茶拿鐵",
      "en": "an iced matcha latte"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34347,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cozy-nyc-subway-candid-portrait-34347",
    "author": "simeon-sanai",
    "authorUrl": "https://x.com/Naiknelofar788",
    "originalUrl": "https://x.com/Naiknelofar788/status/2098252670385676491",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34347
},
{
  "id": "tpl_youmind_gpt_image_2_5_34180",
  "name": {
    "zh-tw": "魚眼鏡頭哥特蘿莉自拍",
    "en": "Overhead Fisheye Gothic Selfie"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028872615_j84nax_HRz_h4zbUAAqlcq.jpg",
  "author": "ある面",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "anime_outfit": {
      "zh-tw": "黑色哥特禮裙",
      "en": "a black Gothic dress"
    },
    "portrait_mood": {
      "zh-tw": "輕鬆俏皮",
      "en": "relaxed and playful"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34180,
    "caseUrl": "https://youmind.com/zh-CN/prompts/fisheye-lolita-selfie-34180",
    "author": "ある面",
    "authorUrl": "https://x.com/aruomoteomote",
    "originalUrl": "https://x.com/aruomoteomote/status/2097832697439924607#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34180
},
{
  "id": "tpl_youmind_gpt_image_2_5_34406",
  "name": {
    "zh-tw": "將草圖轉化為日式咖啡館華夫餅海報",
    "en": "Sketch to Café Waffle Menu"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117752899_3sr3of_HR4oMp9bQAAaF3U.jpg",
  "author": "バナーナ",
  "selections": {
    "studio_brand": {
      "zh-tw": "MORNING CLUB",
      "en": "MORNING CLUB"
    },
    "main_text": {
      "zh-tw": "現烤華夫餅",
      "en": "Freshly Baked Waffles"
    },
    "supporting_text": {
      "zh-tw": "咖啡套餐 38元",
      "en": "Coffee Set 38 CNY"
    },
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34406,
    "caseUrl": "https://youmind.com/zh-CN/prompts/japanese-cafe-waffle-poster-34406",
    "author": "バナーナ",
    "authorUrl": "https://x.com/1banana2546",
    "originalUrl": "https://x.com/1banana2546/status/2098162096676413491#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "source": [
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789117752824_fduwe2_HR4oMp_aoAAHW_r.jpg",
      "label": {
        "zh-tw": "參考圖 1",
        "en": "Reference 1"
      }
    }
  ],
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34406
},
{
  "id": "tpl_youmind_gpt_image_2_5_34401",
  "name": {
    "zh-tw": "隱藏等足目生物的祭典場景",
    "en": "Hidden Creature at a Summer Festival"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117750002_te9e9y_HR2om-Ya0AAwNhA.jpg",
  "author": "ぐそく｜AI副業の実験ログ",
  "selections": {
    "comic_location": {
      "zh-tw": "日本神社祭典",
      "en": "a Japanese shrine festival"
    },
    "creatures": {
      "zh-tw": "大王具足蟲",
      "en": "a giant isopod"
    },
    "comic_time": {
      "zh-tw": "夜晚",
      "en": "night"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34401,
    "caseUrl": "https://youmind.com/zh-CN/prompts/hidden-isopod-matsuri-34401",
    "author": "ぐそく｜AI副業の実験ログ",
    "authorUrl": "https://x.com/gusoku_ai",
    "originalUrl": "https://x.com/gusoku_ai/status/2098018947207704788#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34401
},
{
  "id": "tpl_youmind_gpt_image_2_5_34166",
  "name": {
    "zh-tw": "巢狀 (Nesting)立方體·三種藝術方向",
    "en": "Nested Cube in Three Art Directions"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028865104_n2sjao_HR1X7WHbMAAAI_h.jpg",
  "author": "Shunz",
  "selections": {
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "art_paper": {
      "zh-tw": "暖白水彩紙",
      "en": "warm white watercolor paper"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    }
  },
  "tags": [
    "產品",
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34166,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cube-style-exploration-poster-34166",
    "author": "Shunz",
    "authorUrl": "https://x.com/rockucn",
    "originalUrl": "https://x.com/rockucn/status/2097929906374008899#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "5cf517b8376649e8c92c434671ee1e6a1878d3e107262be949d776d1f921248c"
  },
  "source": [
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789028865148_15aqgf_HR1X1QWaYAAhly0.png",
      "label": {
        "zh-tw": "參考圖 1",
        "en": "Reference 1"
      }
    }
  ],
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34166
},
{
  "id": "tpl_youmind_gpt_image_2_5_34387",
  "name": {
    "zh-tw": "憂鬱 Q 版女孩拼貼畫",
    "en": "Melancholy Chibi Mood Grid"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117742224_8sb4j6_HR1UgOkbcAAlPxN.jpg",
  "author": "冥土川メイ",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "comic_location": {
      "zh-tw": "安靜的城市街角",
      "en": "a quiet city corner"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34387,
    "caseUrl": "https://youmind.com/zh-CN/prompts/melancholic-chibi-collage-34387",
    "author": "冥土川メイ",
    "authorUrl": "https://x.com/meidogawa_mei",
    "originalUrl": "https://x.com/meidogawa_mei/status/2097926365278609623#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34387
},
{
  "id": "tpl_youmind_gpt_image_2_5_34169",
  "name": {
    "zh-tw": "塗鴉吉祥物·二十五格貼紙",
    "en": "Twenty-Five Doodle Mascot Stickers"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028866948_f8bexy_HR1AgG3agAA26RJ.jpg",
  "author": "Ian (伊恩)",
  "selections": {
    "character_animal": {
      "zh-tw": "小貓",
      "en": "Little Kitten"
    },
    "cute_accessory": {
      "zh-tw": "小圍巾",
      "en": "a small scarf"
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    }
  },
  "tags": [
    "卡通",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34169,
    "caseUrl": "https://youmind.com/zh-CN/prompts/black-mascot-sticker-sheet-34169",
    "author": "Ian (伊恩)",
    "authorUrl": "https://x.com/ianneo_ai",
    "originalUrl": "https://x.com/ianneo_ai/status/2097904228408885683#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "ee929547d6cbec6aa5ddcf0c666815298104d41bcc039e2be95252fe25fddb44"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34169
},
{
  "id": "tpl_youmind_gpt_image_2_5_34393",
  "name": {
    "zh-tw": "朋克漫畫九宮格拼貼",
    "en": "Punk Music Manga Contact Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117743630_clfeqm_HR0_h6faAAAEnei.jpg",
  "author": "みゆー|AI×おじぎねこサロンアンバサダー/Miricanvas公式サポーター",
  "selections": {
    "comic_cast": {
      "zh-tw": "一對音樂人",
      "en": "two musicians"
    },
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    },
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34393,
    "caseUrl": "https://youmind.com/zh-CN/prompts/punk-manga-collage-34393",
    "author": "みゆー|AI×おじぎねこサロンアンバサダー/Miricanvas公式サポーター",
    "authorUrl": "https://x.com/gaogao_1192",
    "originalUrl": "https://x.com/gaogao_1192/status/2097902858071052425#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34393
},
{
  "id": "tpl_youmind_gpt_image_2_5_34405",
  "name": {
    "zh-tw": "Angel Garden 動漫變身",
    "en": "Reference Character in an Angel Garden"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117752288_6jk88q_HR2GLXPbwAAAYrO.jpg",
  "author": "magu@ai",
  "selections": {
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    },
    "editorial_palette": {
      "zh-tw": "奶油白與鼠尾草綠",
      "en": "cream and sage green"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34405,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-angel-garden-transformation-34405",
    "author": "magu@ai",
    "authorUrl": "https://x.com/magu_ai_h",
    "originalUrl": "https://x.com/magu_ai_h/status/2097980537403265112#reversed-1",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "3c969d493da6dc15fcbc272e2bfd86d2c8ab30ec636bec90589cded9a22c4287"
  },
  "source": [
    {
      "type": "image",
      "url": "https://cms-assets.youmind.com/media/1789117752268_gl1did_HR2GLXPakAAWdQx.jpg",
      "label": {
        "zh-tw": "參考圖 1",
        "en": "Reference 1"
      }
    }
  ],
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34405
},
{
  "id": "tpl_youmind_gpt_image_2_5_34395",
  "name": {
    "zh-tw": "九宮格動漫女主角拼貼畫",
    "en": "Anime Heroine Cinematic Grid"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117746601_ikp8ys_HR12kiTaIAAQEl4.jpg",
  "author": "きくらげ（漫畫家・イラストレーター）",
  "selections": {
    "hair_style": {
      "zh-tw": "雙馬尾",
      "en": "twin tails"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34395,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-heroine-collage-34395",
    "author": "きくらげ（漫畫家・イラストレーター）",
    "authorUrl": "https://x.com/kikuragenet",
    "originalUrl": "https://x.com/kikuragenet/status/2097963752801042701#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8e8881102680aecacad0f159da94ffac5a72eeddd14e4442158f7dfabc1f6fb8"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34395
},
{
  "id": "tpl_youmind_gpt_image_2_5_34176",
  "name": {
    "zh-tw": "和風Q版角色動作圖集",
    "en": "Chibi Kimono Action Sprite Atlas"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028870983_7yd6e2_HR1ZqB8bMAARmET.jpg",
  "author": "瑾 黃",
  "selections": {
    "hair_style": {
      "zh-tw": "長長的微亂黑髮",
      "en": "long slightly messy dark hair"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "sprite_action": {
      "zh-tw": "蓄力與揮擊",
      "en": "charging and striking"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34176,
    "caseUrl": "https://youmind.com/zh-CN/prompts/nezuko-sprite-sheet-34176",
    "author": "瑾 黃",
    "authorUrl": "https://x.com/Hjeanine119",
    "originalUrl": "https://x.com/Hjeanine119/status/2097931677213561068#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34176
},
{
  "id": "tpl_youmind_gpt_image_2_5_34400",
  "name": {
    "zh-tw": "櫻花動漫電影海報",
    "en": "Cherry-Blossom Anime Film Poster"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117749564_renut0_HR04HrraYAAUvy1.jpg",
  "author": "千冬",
  "selections": {
    "hair_style": {
      "zh-tw": "銀白長髮",
      "en": "long silver-white hair"
    },
    "anime_outfit": {
      "zh-tw": "藍白學院制服",
      "en": "a blue-and-white academy uniform"
    },
    "lighting_time": {
      "zh-tw": "日落霞光",
      "en": "sunset glow"
    },
    "poster_headline": {
      "zh-tw": "微光時刻",
      "en": "MOMENTS OF LIGHT"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34400,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cherry-blossom-anime-poster-34400",
    "author": "千冬",
    "authorUrl": "https://x.com/chifuyu_sh",
    "originalUrl": "https://x.com/chifuyu_sh/status/2097894710832746841#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34400
},
{
  "id": "tpl_youmind_gpt_image_2_5_34423",
  "name": {
    "zh-tw": "空靈天使近景肖像",
    "en": "Luminous Angel Close-up"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117761695_d3akrk_HRxDKAaboAAdOT6.jpg",
  "author": "magu@ai",
  "selections": {
    "hair_style": {
      "zh-tw": "銀白長髮",
      "en": "long silver-white hair"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "portrait_mood": {
      "zh-tw": "若有所思",
      "en": "thoughtful"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34423,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-angel-girl-portrait-34423",
    "author": "magu@ai",
    "authorUrl": "https://x.com/magu_ai_h",
    "originalUrl": "https://x.com/magu_ai_h/status/2097625371923652677#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4d314ed09d840096082a18405220e2808b5e2e03ba852b67e8b8e644bbce81ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34423
},
{
  "id": "tpl_youmind_gpt_image_2_5_34494",
  "name": {
    "zh-tw": "室內焦距對比示意圖",
    "en": "Focal-Length Room Comparison"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202283878_d38rsz_HR7j4caWsAQnrpA.jpg",
  "author": "Talos",
  "selections": {
    "room_type": {
      "zh-tw": "客廳",
      "en": "Living Room"
    },
    "furniture_set": {
      "zh-tw": "沙發、茶几和落地燈",
      "en": "a sofa, coffee table and floor lamp"
    },
    "floor_material": {
      "zh-tw": "淺色木地板",
      "en": "pale wood flooring"
    },
    "interior_lighting": {
      "zh-tw": "溫暖的自然窗光",
      "en": "warm natural window light"
    }
  },
  "tags": [
    "建築",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34494,
    "caseUrl": "https://youmind.com/zh-CN/prompts/focal-length-comparison-grid-34494",
    "author": "Talos",
    "authorUrl": "https://x.com/talos_world",
    "originalUrl": "https://x.com/talos_world/status/2098367751559496089#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34494
},
{
  "id": "tpl_youmind_gpt_image_2_5_34418",
  "name": {
    "zh-tw": "實驗室精華液產品攝影",
    "en": "Laboratory Serum Product Photography"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202290333_5hd5ni_HR66vmSaMAAx9g4.jpg",
  "author": "Adam也叫吉米",
  "selections": {
    "studio_brand": {
      "zh-tw": "AURELIA",
      "en": "AURELIA"
    },
    "product_stage": {
      "zh-tw": "光潔的白色檯面",
      "en": "a polished white tabletop"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "poster_headline": {
      "zh-tw": "微光時刻",
      "en": "MOMENTS OF LIGHT"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34418,
    "caseUrl": "https://youmind.com/zh-CN/prompts/luxury-serum-lab-ad-34418",
    "author": "Adam也叫吉米",
    "authorUrl": "https://x.com/Adam38363368936",
    "originalUrl": "https://x.com/Adam38363368936/status/2098319843221246342#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "fddb1b6ab943a2f1fc16b2061ce9ae9f4d74b2de55dbd9a1f388736d59d17a26"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34418
},
{
  "id": "tpl_youmind_gpt_image_2_5_33943",
  "name": {
    "zh-tw": "日系審美網紅肖像",
    "en": "Quiet Natural Beauty Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789029563575_edhaa2_HRvLtZnbEAAH4_e.jpg",
  "author": "BubbleBrain",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "超大號白色紐扣襯衫",
      "en": "oversized white button-up shirt"
    },
    "portrait_mood": {
      "zh-tw": "若有所思",
      "en": "thoughtful"
    },
    "lighting": {
      "zh-tw": "自然窗光",
      "en": "Natural window light"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 33943,
    "caseUrl": "https://youmind.com/zh-CN/prompts/taiwanese-influencer-cool-portrait-33943",
    "author": "BubbleBrain",
    "authorUrl": "https://x.com/BubbleBrain",
    "originalUrl": "https://x.com/BubbleBrain/status/2097496212001948053",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "259840570585c318dc1f13f1d9368da34ff9ac96e914942ec59c809d19d4bc5a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_33943
},
{
  "id": "tpl_youmind_gpt_image_2_5_34489",
  "name": {
    "zh-tw": "哥特風 Q 版人偶動作序列圖",
    "en": "Gothic Doll Sixteen-Frame Loop"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202279667_simmnz_HR6wuBcakAA69Bq.jpg",
  "author": "百恐の語り部",
  "selections": {
    "hair_style": {
      "zh-tw": "長長的微亂黑髮",
      "en": "long slightly messy dark hair"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "anime_outfit": {
      "zh-tw": "黑色哥特禮裙",
      "en": "a black Gothic dress"
    },
    "sprite_action": {
      "zh-tw": "行走與回頭",
      "en": "walking and looking back"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34489,
    "caseUrl": "https://youmind.com/zh-CN/prompts/gothic-chibi-sprite-sheet-34489",
    "author": "百恐の語り部",
    "authorUrl": "https://x.com/hyakukyou",
    "originalUrl": "https://x.com/hyakukyou/status/2098310188713611412#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "6d1f50e6a259ccaee2fe099e9af5dda7c8da1b49014c8060991b516c22754f46"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34489
},
{
  "id": "tpl_youmind_gpt_image_2_5_34415",
  "name": {
    "zh-tw": "動漫兔耳舞姿網格圖",
    "en": "Rabbit-Ear Street Dance Pose Sheet"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117758135_b1s59d_HR3Fs-pbwAA93j7.jpg",
  "author": "Kiki",
  "selections": {
    "hair_style": {
      "zh-tw": "雙馬尾",
      "en": "twin tails"
    },
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "eye_color": {
      "zh-tw": "紫色",
      "en": "violet"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34415,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-dance-pose-grid-34415",
    "author": "Kiki",
    "authorUrl": "https://x.com/Mayz1169",
    "originalUrl": "https://x.com/Mayz1169/status/2098050833502134393#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4b75a6677696109dd47f5ebcbac90937f172e41bb7ba2229e630779dc0cdb0a5"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34415
},
{
  "id": "tpl_youmind_gpt_image_2_5_34391",
  "name": {
    "zh-tw": "Q 版騎士攻擊精靈圖表",
    "en": "Armored Beast Knight Attack Sprites"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117744978_4bgxos_HR21tZXaMAADRXi.jpg",
  "author": "パピヨン",
  "selections": {
    "character_animal": {
      "zh-tw": "小狐狸",
      "en": "Little Fox"
    },
    "anime_outfit": {
      "zh-tw": "白銀輕甲",
      "en": "white-and-silver light armor"
    },
    "fantasy_weapon": {
      "zh-tw": "雙手巨劍",
      "en": "two-handed greatsword"
    },
    "background_color_clean": {
      "zh-tw": "純綠色背景",
      "en": "a pure green background"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34391,
    "caseUrl": "https://youmind.com/zh-CN/prompts/chibi-knight-sprite-sheet-34391",
    "author": "パピヨン",
    "authorUrl": "https://x.com/papillon201679",
    "originalUrl": "https://x.com/papillon201679/status/2098032953205153908#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "35a8c3330fe1c8c51e95eea8747cedbc32ead9726e5594ce6d937a0a708e736f"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34391
},
{
  "id": "tpl_youmind_gpt_image_2_5_34158",
  "name": {
    "zh-tw": "Q 版仙俠劍客精靈圖集",
    "en": "Xianxia Swordsman Combat Atlas"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028859687_f6isp3_HR1o9lebsAA-Tqr.jpg",
  "author": "ZodiacRealm",
  "selections": {
    "hair_style": {
      "zh-tw": "長長的微亂黑髮",
      "en": "long slightly messy dark hair"
    },
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "fantasy_weapon": {
      "zh-tw": "符文長劍",
      "en": "runic longsword"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34158,
    "caseUrl": "https://youmind.com/zh-CN/prompts/chibi-xianxia-sprite-sheet-34158",
    "author": "ZodiacRealm",
    "authorUrl": "https://x.com/FruitsAIX",
    "originalUrl": "https://x.com/FruitsAIX/status/2097948542958707036#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8a2c2896a08b51ca4392112eac94be05521bed0d1dddc44533638eebebec3955"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34158
},
{
  "id": "tpl_youmind_gpt_image_2_5_34334",
  "name": {
    "zh-tw": "復古未來主義物流車攝影",
    "en": "Retro-Future Logistics Van"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117690439_4xjpwa_HR63jkEaUAAb7O8.jpg",
  "author": "leolee",
  "selections": {
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "lighting_time": {
      "zh-tw": "正午明亮陽光",
      "en": "midday bright sunlight"
    },
    "aspect_ratio": {
      "zh-tw": "2:3",
      "en": "2:3"
    }
  },
  "tags": [
    "產品",
    "建築",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34334,
    "caseUrl": "https://youmind.com/zh-CN/prompts/retro-futuristic-logistics-vehicle-photography-34334",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098316322761494822",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "021bcf1c203e163cbc63a454f23b3a18407237c3d2945ccdacd9f5bd41a9d2ff"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34334
},
{
  "id": "tpl_youmind_gpt_image_2_5_34338",
  "name": {
    "zh-tw": "酸性未來主義模組化賽博塔",
    "en": "Modular Cyber Tower"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117693792_w80y6x_HR63c2BaYAAPqW3.jpg",
  "author": "leolee",
  "selections": {
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "background_color_clean": {
      "zh-tw": "明亮的天空藍",
      "en": "Bright Sky Blue"
    },
    "lighting": {
      "zh-tw": "影棚硬光",
      "en": "Studio hard light"
    }
  },
  "tags": [
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34338,
    "caseUrl": "https://youmind.com/zh-CN/prompts/acid-futurism-mechanical-tower-34338",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098316254679625917",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "395464ba81f0aa21caf055f37173a353b17b8bb42b105473c0b8842d7b1d90d3"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34338
},
{
  "id": "tpl_youmind_gpt_image_2_5_34351",
  "name": {
    "zh-tw": "未來感鉻合金時尚頭盔",
    "en": "Chrome Fashion Helmet Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117701328_e8hujy_HR63R__bUAAnFJx.jpg",
  "author": "leolee",
  "selections": {
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "background_color_clean": {
      "zh-tw": "明亮的天空藍",
      "en": "Bright Sky Blue"
    }
  },
  "tags": [
    "人物",
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34351,
    "caseUrl": "https://youmind.com/zh-CN/prompts/acid-futurism-fashion-helmet-34351",
    "author": "leolee",
    "authorUrl": "https://x.com/listudio",
    "originalUrl": "https://x.com/listudio/status/2098316082864128381",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "7c06ffa421e3d9aba39ed682498dfe5e44f5f14ff15961908fb7d1f04943ab24"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34351
},
{
  "id": "tpl_youmind_gpt_image_2_5_34478",
  "name": {
    "zh-tw": "折疊風暴天空景觀",
    "en": "Folded Storm Sky"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202271359_qkjag8_HR7y7mXaQAArJiZ.jpg",
  "author": "Zephyra Leigh",
  "selections": {
    "natural_environment": {
      "zh-tw": "霧氣瀰漫的荒原",
      "en": "a misty wasteland"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "editorial_palette": {
      "zh-tw": "銀灰與電光藍",
      "en": "silver gray and electric blue"
    },
    "aspect_ratio": {
      "zh-tw": "2:3",
      "en": "2:3"
    }
  },
  "tags": [
    "創意",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34478,
    "caseUrl": "https://youmind.com/zh-CN/prompts/folded-storm-sky-landscape-34478",
    "author": "Zephyra Leigh",
    "authorUrl": "https://x.com/ZephyraLeigh",
    "originalUrl": "https://x.com/ZephyraLeigh/status/2098381709050097920#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "5cf517b8376649e8c92c434671ee1e6a1878d3e107262be949d776d1f921248c"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34478
},
{
  "id": "tpl_youmind_gpt_image_2_5_34375",
  "name": {
    "zh-tw": "四圖自然風景拼貼",
    "en": "Four Times of Day in Nature"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117732315_4jxjzo_HR3VYhWa0AARv4L.jpg",
  "author": "agim𓍯",
  "selections": {
    "landscape_location": {
      "zh-tw": "高山湖泊",
      "en": "an alpine lake"
    },
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "aspect_ratio": {
      "zh-tw": "1:1",
      "en": "1:1"
    }
  },
  "tags": [
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34375,
    "caseUrl": "https://youmind.com/zh-CN/prompts/nature-photo-collage-34375",
    "author": "agim𓍯",
    "authorUrl": "https://x.com/aGim_asf",
    "originalUrl": "https://x.com/aGim_asf/status/2098067628644291059#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34375
},
{
  "id": "tpl_youmind_gpt_image_2_5_34178",
  "name": {
    "zh-tw": "山路摩托車極速攝影",
    "en": "Mountain-Road Motorcycle Tracking Shot"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117725863_6uy3pt_HR1dxjxbIAA4_lf.jpg",
  "author": "Xiao Yang",
  "selections": {
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "natural_environment": {
      "zh-tw": "霧氣瀰漫的群山",
      "en": "misty mountains"
    },
    "serial_code": {
      "zh-tw": "COAST 77",
      "en": "COAST 77"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "動作"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34178,
    "caseUrl": "https://youmind.com/zh-CN/prompts/mountain-cruiser-trike-ride-34178",
    "author": "Xiao Yang",
    "authorUrl": "https://x.com/XiaoKooeye",
    "originalUrl": "https://x.com/XiaoKooeye/status/2097936299806372188#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "ad9caef702792f8f05525d550b145756fbe6adbca796f8cde041a0f806f048a0"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34178
},
{
  "id": "tpl_youmind_gpt_image_2_5_34160",
  "name": {
    "zh-tw": "手繪城市旅行地圖",
    "en": "Hand-Painted City Travel Map"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028861132_nkkhze_HR0srWLagAAqSDi.jpg",
  "author": "Miles Ma",
  "selections": {
    "city_name": {
      "zh-tw": "廣州",
      "en": "Guangzhou"
    },
    "art_paper": {
      "zh-tw": "暖白水彩紙",
      "en": "warm white watercolor paper"
    },
    "botanical_accent": {
      "zh-tw": "白色小花與綠藤",
      "en": "small white flowers and green vines"
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    }
  },
  "tags": [
    "建築",
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34160,
    "caseUrl": "https://youmind.com/zh-CN/prompts/guangzhou-travel-map-34160",
    "author": "Miles Ma",
    "authorUrl": "https://x.com/miles_mazy",
    "originalUrl": "https://x.com/miles_mazy/status/2097882562274472255#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "625a162f2a05b7d8318bb3303ced375fd90c8fe9fac0f93fcfd0d8623c7b7326"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34160
},
{
  "id": "tpl_youmind_gpt_image_2_5_34396",
  "name": {
    "zh-tw": "春日和服木刻插畫",
    "en": "Spring Kimono Woodblock Illustration"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117746830_dyisxy_HR2AbNUbIAAeDjI.jpg",
  "author": "AIおじさん",
  "selections": {
    "anime_outfit": {
      "zh-tw": "淺色和服",
      "en": "a pale kimono"
    },
    "hair_style": {
      "zh-tw": "銀白長髮",
      "en": "long silver-white hair"
    },
    "botanical_accent": {
      "zh-tw": "櫻花",
      "en": "cherry blossoms"
    },
    "art_paper": {
      "zh-tw": "象牙白棉紙",
      "en": "ivory cotton paper"
    }
  },
  "tags": [
    "人物",
    "建築",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34396,
    "caseUrl": "https://youmind.com/zh-CN/prompts/kyoto-kimono-illustration-34396",
    "author": "AIおじさん",
    "authorUrl": "https://x.com/AIojisan1952",
    "originalUrl": "https://x.com/AIojisan1952/status/2097974447965880419#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34396
},
{
  "id": "tpl_youmind_gpt_image_2_5_34167",
  "name": {
    "zh-tw": "古代僧侶角色概念設計",
    "en": "Ancient Monk Character Concept"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028865210_4la5yi_HR1yfwDbEAAQ5-N.jpg",
  "author": "0xKuriyama |Kendu⚡🔋",
  "selections": {
    "costume_material": {
      "zh-tw": "粗麻布",
      "en": "coarse linen"
    },
    "character_accessories": {
      "zh-tw": "念珠與布袋",
      "en": "prayer beads and a cloth pouch"
    },
    "portrait_mood": {
      "zh-tw": "若有所思",
      "en": "thoughtful"
    },
    "art_paper": {
      "zh-tw": "淺棕再生紙",
      "en": "light brown recycled paper"
    }
  },
  "tags": [
    "人物",
    "遊戲",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34167,
    "caseUrl": "https://youmind.com/zh-CN/prompts/elderly-buddhist-monk-concept-34167",
    "author": "0xKuriyama |Kendu⚡🔋",
    "authorUrl": "https://x.com/Kuriyama890",
    "originalUrl": "https://x.com/Kuriyama890/status/2097959104493039947#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "ad9caef702792f8f05525d550b145756fbe6adbca796f8cde041a0f806f048a0"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34167
},
{
  "id": "tpl_youmind_gpt_image_2_5_34382",
  "name": {
    "zh-tw": "魚類三檢視參考表",
    "en": "Fish Three-View Study"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117738913_e84c5v_HRzqdl8bgAA9zYw.jpg",
  "author": "ジュン卍郎「釣果ログ」をCAMPFIRE出品中",
  "selections": {
    "creatures": {
      "zh-tw": "大口黑鱸",
      "en": "a largemouth bass"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    },
    "art_paper": {
      "zh-tw": "暖白水彩紙",
      "en": "warm white watercolor paper"
    },
    "lighting": {
      "zh-tw": "大型頂置柔光箱，輕微側向反射光",
      "en": "Large overhead softbox, slight side reflection"
    }
  },
  "tags": [
    "寵物",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34382,
    "caseUrl": "https://youmind.com/zh-CN/prompts/largemouth-bass-reference-sheet-34382",
    "author": "ジュン卍郎「釣果ログ」をCAMPFIRE出品中",
    "authorUrl": "https://x.com/KAZAGRUMA",
    "originalUrl": "https://x.com/KAZAGRUMA/status/2097811428195631342#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "9942149c3fbba0ab2762648b795de23cd98f8dcf461372c94eccc78c021a58ab"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34382
},
{
  "id": "tpl_youmind_gpt_image_2_5_34380",
  "name": {
    "zh-tw": "撐傘時尚雜誌封面",
    "en": "Umbrella Fashion Cover"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117737933_8e8a8j_HR5N9cQbsAAXku5.jpg",
  "author": "ダルトワ★TV",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "clothing_female": {
      "zh-tw": "淡紫色連衣裙",
      "en": "pale lilac dress"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    },
    "studio_brand": {
      "zh-tw": "ATELIER N",
      "en": "ATELIER N"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34380,
    "caseUrl": "https://youmind.com/zh-CN/prompts/orange-umbrella-magazine-cover-34380",
    "author": "ダルトワ★TV",
    "authorUrl": "https://x.com/MireilleDartois",
    "originalUrl": "https://x.com/MireilleDartois/status/2098202736403820915#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "ad9caef702792f8f05525d550b145756fbe6adbca796f8cde041a0f806f048a0"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34380
},
{
  "id": "tpl_youmind_gpt_image_2_5_34379",
  "name": {
    "zh-tw": "動漫貴族面對夜間競技場",
    "en": "Noble Before a Night Arena"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117734942_bmzw2a_HR59c1hbQAAKqgT.jpg",
  "author": "Naoyuki Okada / Scarlet Echoes🐲",
  "selections": {
    "hair_style": {
      "zh-tw": "波浪狀金髮",
      "en": "wavy blonde hair"
    },
    "anime_outfit": {
      "zh-tw": "白銀輕甲",
      "en": "white-and-silver light armor"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    },
    "lighting_time": {
      "zh-tw": "月光",
      "en": "moonlight"
    }
  },
  "tags": [
    "人物",
    "卡通",
    "影視"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34379,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-noble-night-arena-34379",
    "author": "Naoyuki Okada / Scarlet Echoes🐲",
    "authorUrl": "https://x.com/naoyuki_okada",
    "originalUrl": "https://x.com/naoyuki_okada/status/2098252939836207238#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "8a2c2896a08b51ca4392112eac94be05521bed0d1dddc44533638eebebec3955"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34379
},
{
  "id": "tpl_youmind_gpt_image_2_5_34491",
  "name": {
    "zh-tw": "蠟筆畫風格人像海報（含照片插圖）",
    "en": "Crayon Travel Portrait with Photo Inset"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202281234_xoatpa_HR5i_ZXakAAj8yF.jpg",
  "author": "liftoff",
  "selections": {
    "city_name": {
      "zh-tw": "上海",
      "en": "Shanghai"
    },
    "clothing": {
      "zh-tw": "戰術機能風外套",
      "en": "Tactical techwear jacket"
    },
    "art_paper": {
      "zh-tw": "淺棕再生紙",
      "en": "light brown recycled paper"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    }
  },
  "tags": [
    "人物",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34491,
    "caseUrl": "https://youmind.com/zh-CN/prompts/crayon-portrait-photo-inset-34491",
    "author": "liftoff",
    "authorUrl": "https://x.com/Dicklong1999",
    "originalUrl": "https://x.com/Dicklong1999/status/2098223392071778322#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "698e2885ff1eec93c0d2469f9fafd54a3022c3c44f6b63ba43d3c6366d7e30ad"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34491
},
{
  "id": "tpl_youmind_gpt_image_2_5_34368",
  "name": {
    "zh-tw": "奢華護膚品主圖",
    "en": "Four-Product Skincare Hero"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117725530_kzng8j_HR3dsirbwAALoVw.jpg",
  "author": "Hoody",
  "selections": {
    "studio_brand": {
      "zh-tw": "AURELIA",
      "en": "AURELIA"
    },
    "product_stage": {
      "zh-tw": "暖米色大理石臺",
      "en": "a warm beige marble plinth"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    },
    "lighting": {
      "zh-tw": "大型頂置柔光箱，輕微側向反射光",
      "en": "Large overhead softbox, slight side reflection"
    }
  },
  "tags": [
    "產品",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34368,
    "caseUrl": "https://youmind.com/zh-CN/prompts/luxury-skincare-product-shot-34368",
    "author": "Hoody",
    "authorUrl": "https://x.com/HoodyLiu",
    "originalUrl": "https://x.com/HoodyLiu/status/2098077077182554210#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "6d1f50e6a259ccaee2fe099e9af5dda7c8da1b49014c8060991b516c22754f46"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34368
},
{
  "id": "tpl_youmind_gpt_image_2_5_34407",
  "name": {
    "zh-tw": "手工冰淇淋品牌提案",
    "en": "Artisan Gelateria Brand Board"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117752763_3oj74u_HR3aOyqbUAA7wKP.jpg",
  "author": "KaiqueUX",
  "selections": {
    "studio_brand": {
      "zh-tw": "MORNING CLUB",
      "en": "MORNING CLUB"
    },
    "travel_location": {
      "zh-tw": "陽光山城",
      "en": "a sunny hillside town"
    },
    "editorial_palette": {
      "zh-tw": "酒紅與暖米色",
      "en": "burgundy and warm beige"
    },
    "botanical_accent": {
      "zh-tw": "橄欖枝",
      "en": "olive branches"
    }
  },
  "tags": [
    "產品",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34407,
    "caseUrl": "https://youmind.com/zh-CN/prompts/gelateria-brand-identity-board-34407",
    "author": "KaiqueUX",
    "authorUrl": "https://x.com/KaiqueUX",
    "originalUrl": "https://x.com/KaiqueUX/status/2098072997219242047#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "5cf517b8376649e8c92c434671ee1e6a1878d3e107262be949d776d1f921248c"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34407
},
{
  "id": "tpl_youmind_gpt_image_2_5_34376",
  "name": {
    "zh-tw": "並排燈具材質編輯",
    "en": "Lamp Material Before-and-After"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117733028_ekdpqg_HR3ClJ7XsAk5xXK.jpg",
  "author": "Marina Cina",
  "selections": {
    "primary_material": {
      "zh-tw": "金屬",
      "en": "Metal"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    },
    "lighting": {
      "zh-tw": "大型頂置柔光箱，輕微側向反射光",
      "en": "Large overhead softbox, slight side reflection"
    },
    "poster_headline": {
      "zh-tw": "保持好奇",
      "en": "STAY CURIOUS"
    }
  },
  "tags": [
    "產品",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34376,
    "caseUrl": "https://youmind.com/zh-CN/prompts/lamp-material-edit-34376",
    "author": "Marina Cina",
    "authorUrl": "https://x.com/cinamarina",
    "originalUrl": "https://x.com/cinamarina/status/2098046950348120375#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "d503dcfdd44cb6216b22dba5a43ecacce36079e0f6445b5906ba9b0a4daaf2dc"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34376
},
{
  "id": "tpl_youmind_gpt_image_2_5_34162",
  "name": {
    "zh-tw": "電影感 AI 影片陣容橫幅",
    "en": "Cinema Lineup Hero Banner"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117730563_gmtb04_HR0y030XQAcITGY.jpg",
  "author": "Jarvis｜AI 商業實驗室",
  "selections": {
    "studio_brand": {
      "zh-tw": "NOVA STUDIO",
      "en": "NOVA STUDIO"
    },
    "poster_headline": {
      "zh-tw": "新的旅程",
      "en": "A NEW JOURNEY"
    },
    "supporting_text": {
      "zh-tw": "六個故事，六種世界",
      "en": "Six stories, six worlds"
    },
    "editorial_palette": {
      "zh-tw": "鈷藍與琥珀金",
      "en": "cobalt blue and amber gold"
    }
  },
  "tags": [
    "影視",
    "圖表"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34162,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cinematic-movie-showcase-banner-34162",
    "author": "Jarvis｜AI 商業實驗室",
    "authorUrl": "https://x.com/jarvis11x",
    "originalUrl": "https://x.com/jarvis11x/status/2097889131464479140#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "2334fcb80f2e19023164bbb179552412b84c5ddd85c5c9e2c9eadef78324f18a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34162
},
{
  "id": "tpl_youmind_gpt_image_2_5_34411",
  "name": {
    "zh-tw": "貓耳角色的日式午餐",
    "en": "Cat-Eared Character at a Japanese Lunch"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117755159_bk23ts_HRyi-YuaIAA13rL.jpg",
  "author": "AI Bard Guild",
  "selections": {
    "hair_style": {
      "zh-tw": "辮子",
      "en": "braided hair"
    },
    "anime_outfit": {
      "zh-tw": "粉色偶像裙",
      "en": "a pink idol dress"
    },
    "premium_food_subject": {
      "zh-tw": "烤鯖魚定食",
      "en": "a grilled mackerel set meal"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34411,
    "caseUrl": "https://youmind.com/zh-CN/prompts/cat-maid-japanese-lunch-34411",
    "author": "AI Bard Guild",
    "authorUrl": "https://x.com/IsekaiBardGuild",
    "originalUrl": "https://x.com/IsekaiBardGuild/status/2097876212177854517#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34411
},
{
  "id": "tpl_youmind_gpt_image_2_5_34199",
  "name": {
    "zh-tw": "照片級寫實遊戲直播肖像",
    "en": "Reference Character as a Live Streamer"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789028994020_cmdfjs_HRyeO5lbgAEm-qo.jpg",
  "author": "ヒロNe｜AIイラスト",
  "selections": {
    "room_style_cute": {
      "zh-tw": "溫馨遊戲房",
      "en": "a cozy gaming room"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    },
    "portrait_mood": {
      "zh-tw": "輕鬆俏皮",
      "en": "relaxed and playful"
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    }
  },
  "tags": [
    "人物",
    "攝影",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34199,
    "caseUrl": "https://youmind.com/zh-CN/prompts/realistic-gaming-livestream-woman-34199",
    "author": "ヒロNe｜AIイラスト",
    "authorUrl": "https://x.com/glum_ai",
    "originalUrl": "https://x.com/glum_ai/status/2097727679948845389",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4053c77c1adba0f4d721c42965df34a8925b97e4e70abdc7ca7041385129f8dd"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34199
},
{
  "id": "tpl_youmind_gpt_image_2_5_34398",
  "name": {
    "zh-tw": "動漫芝士漢堡表情包合集",
    "en": "Six-Panel Anime Burger Reactions"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117748665_ctsk4d_HR2_s8VaMAE83FS.jpg",
  "author": "あいきみ",
  "selections": {
    "premium_food_subject": {
      "zh-tw": "芝士漢堡",
      "en": "a cheeseburger"
    },
    "hair_style": {
      "zh-tw": "雙馬尾",
      "en": "twin tails"
    },
    "anime_outfit": {
      "zh-tw": "粉色偶像裙",
      "en": "a pink idol dress"
    },
    "editorial_palette": {
      "zh-tw": "淡粉與薰衣草紫",
      "en": "blush pink and lavender"
    }
  },
  "tags": [
    "人物",
    "卡通"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34398,
    "caseUrl": "https://youmind.com/zh-CN/prompts/anime-burger-expression-sheet-34398",
    "author": "あいきみ",
    "authorUrl": "https://x.com/AiWithYou1",
    "originalUrl": "https://x.com/AiWithYou1/status/2098043904855863462#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "4053c77c1adba0f4d721c42965df34a8925b97e4e70abdc7ca7041385129f8dd"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34398
},
{
  "id": "tpl_youmind_gpt_image_2_5_33968",
  "name": {
    "zh-tw": "角色戰鬥動作精靈圖",
    "en": "Pixel Combat Animation Frames"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117717967_5j82tp_HRwSI5iaAAAfB2G.jpg",
  "author": "アイビー｜X運用・AIマネタイズ・活用法について発信",
  "selections": {
    "anime_outfit": {
      "zh-tw": "紅黑街頭夾克",
      "en": "a red-and-black street jacket"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    },
    "background_color_clean": {
      "zh-tw": "純白色背景",
      "en": "A pure white background"
    },
    "line_art_style": {
      "zh-tw": "清晰的黑色墨線",
      "en": "clean black ink lines"
    }
  },
  "tags": [
    "卡通",
    "遊戲"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "recommend_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 33968,
    "caseUrl": "https://youmind.com/zh-CN/prompts/pixel-art-animation-sprite-sheet-33968",
    "author": "アイビー｜X運用・AIマネタイズ・活用法について発信",
    "authorUrl": "https://x.com/Aivy___X",
    "originalUrl": "https://x.com/Aivy___X/status/2097572540034302295",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "20c72180ecd526e286e8f927d0b72d89ba95fe444209959b24fc4f127cec4f12"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_33968
},
{
  "id": "tpl_youmind_gpt_image_2_5_34490",
  "name": {
    "zh-tw": "赤壁之戰地圖",
    "en": "Red Cliffs Ink Battle Map"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789202280364_sf5rle_HR3uYUtbEAA41IF.jpg",
  "author": "Miles Ma",
  "selections": {
    "art_paper": {
      "zh-tw": "淺棕再生紙",
      "en": "light brown recycled paper"
    },
    "editorial_palette": {
      "zh-tw": "黑色與硃紅",
      "en": "black and vermilion"
    },
    "main_text": {
      "zh-tw": "赤壁之戰",
      "en": "Battle of Red Cliffs"
    },
    "text_language": {
      "zh-tw": "中文",
      "en": "Chinese"
    }
  },
  "tags": [
    "圖表",
    "創意"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34490,
    "caseUrl": "https://youmind.com/zh-CN/prompts/battle-red-cliffs-map-34490",
    "author": "Miles Ma",
    "authorUrl": "https://x.com/miles_mazy",
    "originalUrl": "https://x.com/miles_mazy/status/2098217963736473701#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "216eebc8fae8dc7db82dfea939fff1bb6cf87f9a0c8fcde065ff76d99e59bb79"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34490
},
{
  "id": "tpl_youmind_gpt_image_2_5_34348",
  "name": {
    "zh-tw": "黑白時尚大片",
    "en": "Hard-Light Monochrome Fashion Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117699396_teaeb9_HR3GmTNasAIZWmE.jpg",
  "author": "Harboris",
  "selections": {
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "clothing_male": {
      "zh-tw": "黑色T恤與白色長袖內搭",
      "en": "a black T-shirt over a white long-sleeve shirt"
    },
    "wall_material": {
      "zh-tw": "風化混凝土",
      "en": "weathered concrete"
    },
    "portrait_mood": {
      "zh-tw": "自信堅定",
      "en": "confident and determined"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34348,
    "caseUrl": "https://youmind.com/zh-CN/prompts/black-white-fashion-editorial-portrait-34348",
    "author": "Harboris",
    "authorUrl": "https://x.com/harboriis",
    "originalUrl": "https://x.com/harboriis/status/2098051393538134448",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "2334fcb80f2e19023164bbb179552412b84c5ddd85c5c9e2c9eadef78324f18a"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34348
},
{
  "id": "tpl_youmind_gpt_image_2_5_34362",
  "name": {
    "zh-tw": "歐洲城市旅行肖像",
    "en": "Relaxed European City Travel Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117712051_824k3x_HR1LFJCbwAAThXe.jpg",
  "author": "Shore Lyn",
  "selections": {
    "city_name": {
      "zh-tw": "巴黎",
      "en": "Paris"
    },
    "hair_style": {
      "zh-tw": "短棕發",
      "en": "short brown hair"
    },
    "clothing_male": {
      "zh-tw": "天藍色針織毛衣與米色工裝褲",
      "en": "a sky-blue knit sweater and beige cargo trousers"
    },
    "lighting_time": {
      "zh-tw": "午後金色陽光",
      "en": "afternoon golden sunlight"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34362,
    "caseUrl": "https://youmind.com/zh-CN/prompts/paris-travel-fashion-portrait-34362",
    "author": "Shore Lyn",
    "authorUrl": "https://x.com/Shorelyn_",
    "originalUrl": "https://x.com/Shorelyn_/status/2097917623946371425",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "community-prompt",
    "sourceNeedsReferenceImages": false,
    "sourcePromptHash": "6d1f50e6a259ccaee2fe099e9af5dda7c8da1b49014c8060991b516c22754f46"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34362
},
{
  "id": "tpl_youmind_gpt_image_2_5_34372",
  "name": {
    "zh-tw": "直閃針織衫肖像",
    "en": "Direct-Flash Knitwear Portrait"
  },
  "imageUrl": "https://cms-assets.youmind.com/media/1789117728128_49l49l_HRz689Eb0AAIMXO.jpg",
  "author": "南鳶 nuyoah",
  "selections": {
    "hair_style": {
      "zh-tw": "深色直髮",
      "en": "straight dark hair"
    },
    "clothing_female": {
      "zh-tw": "酒紅色粗針織毛衣",
      "en": "a burgundy chunky-knit sweater"
    },
    "portrait_mood": {
      "zh-tw": "安靜從容",
      "en": "quiet and composed"
    },
    "wall_material": {
      "zh-tw": "暖灰色混凝土牆",
      "en": "a warm gray concrete wall"
    }
  },
  "tags": [
    "人物",
    "攝影"
  ],
  "language": [
    "zh-tw",
    "en"
  ],
  "bestModel": "GPT-image-2.5",
  "baseImage": "no_base_image",
  "attribution": {
    "collection": "YouMind GPT Image 2.5",
    "collectionUrl": "https://youmind.com/zh-CN/gpt-image-2-5-prompts",
    "caseId": 34372,
    "caseUrl": "https://youmind.com/zh-CN/prompts/realistic-flash-portrait-34372",
    "author": "南鳶 nuyoah",
    "authorUrl": "https://x.com/nanyuan0412",
    "originalUrl": "https://x.com/nanyuan0412/status/2097829144637870574#reversed-0",
    "adaptedBy": "Prompt Fill",
    "sourcePromptType": "image-reconstruction",
    "sourceNeedsReferenceImages": true,
    "sourcePromptHash": "5cf517b8376649e8c92c434671ee1e6a1878d3e107262be949d776d1f921248c"
  },
  "content": TEMPLATE_YOUMIND_GPT_IMAGE_2_5_34372
}
];
