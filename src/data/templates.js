/**
 * @typedef {Object} TemplateConfig
 * @property {string} id - 唯一識別符號，建議使用 'tpl_' 前綴
 * @property {string|Object} name - 樣板顯示名稱，支援雙語物件 {"zh-tw": string, en: string} 或單語言字串
 * @property {string|Object} content - 樣板內容，支援 markdown 和 {{variable}} 變數，支援雙語物件 {"zh-tw": string, en: string} 或單語言字串
 * @property {string} imageUrl - 預覽縮略圖 URL
 * @property {string[]} [imageUrls] - 多圖預覽陣列
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
 *   language: "zh-tw"  // 或 ["zh-tw"]
 * }
 */

/**
 * 樣板系統版本號，每次更新 templates.js 或 banks.js 時請更新此版本號
 */
export const SYSTEM_DATA_VERSION = "0.8.5";

/**
 * 分享功能正式環境域名（掃碼匯入需使用公網可存取地址）
 * 留空則自動使用當前存取地址
 */
export const PUBLIC_SHARE_URL = ""; 

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

export const DEFAULT_TEMPLATE_CONTENT = {
  "zh-tw": `### Role (角色設定)
你是一位頂尖的 {{role}}，擅長製作詳盡的角色設定圖（Character Sheet）。你具備“像素級拆解”的能力，能夠透視角色的穿著層級、捕捉微表情變化，並將與其相關的物品進行具象化還原。你特別擅長通過 {{subject}} 的私密物品、隨身物件和生活細節來側面豐滿人物性格與背景故事。

### Task (任務目標)
根據使用者上傳或描述的主體形象，生成一張**“全景式角色深度概念分解圖”**。該圖片必須包含 {{layout_focus}}，並在其周圍環繞展示該人物的服裝分層、不同表情、核心道具、材質特寫，以及極具生活氣息的私密與隨身物品展示。

### Visual Guidelines (視覺規範)
**1. 構圖佈局 (Layout):**
- **中心位 (Center):** 放置角色的 {{layout_focus}}，作為視覺錨點。
- **環繞位 (Surroundings):** 在中心人物四周空白處，有序排列拆解後的元素。
- **視覺引導 (Connectors):** 使用{{connectors}}，將周邊的拆解物品與中心人物的對應部位或所屬區域連線起來。

**2. 拆解內容 (Deconstruction Details):**
- **服裝分層 (Clothing Layers):** 將角色的服裝拆分為單品展示
- **私密內著拆解:** 獨立展示角色的內層衣物，重點突出設計感與材質。例如： {{underwear_style}} （展示細節與剪裁）。
- **表情集 (Expression Sheet):** 在角落繪製 3-4 個不同的頭部特寫，展示不同的情緒，如： {{expressions}} 。
- **材質特寫 (Texture & Zoom):** 選取關鍵部位進行放大特寫. 例如： {{texture_zoom}} ，增加對小物件材質的描繪。
- **動作:** 繪製特殊的動作和表情，例如：{{action_detail}}，增加動作的深度刻畫。
- **特殊視角:** 繪製從某種特殊場景下拍攝的特殊視角，例如：{{special_view}}

- **關聯物品 (Related Items):**
 - **隨身包袋與內容物:** 繪製 {{bag_content}}，並將其“打開”，展示散落在旁的物品。
 - **美妝與護理:** 展示 {{cosmetics}}。
 - **私密生活物件:** 具象化角色隱藏面的物品。根據角色性格可能包括： {{private_items}}，需以一種設計圖的客觀視角呈現。

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
You are a top-tier {{role}}, specializing in creating detailed Character Sheets. You possess the ability of "pixel-level deconstruction," capable of seeing through the layering of characters' outfits, capturing subtle facial expressions, and restoring related items into concrete visuals. You particularly excel at enriching character personalities and background stories through {{subject}}'s private items, personal belongings, and daily life details.

### Task
Based on the subject image uploaded or described by the user, generate a **"Panoramic Deep Concept Deconstruction Map"**. This image must include the character's {{layout_focus}}, surrounded by displays of their clothing layers, different expressions, core props, material close-ups, and intimate and everyday items that evoke a sense of life.

### Visual Guidelines
**1. Layout:**
- **Center:** Place the character's {{layout_focus}} as the visual anchor.
- **Surroundings:** Arrange the deconstructed elements in an orderly manner in the empty spaces around the central character.
- **Connectors:** Use {{connectors}} to link the peripheral items to the corresponding body parts or areas of the central character.

**2. Deconstruction Details:**
- **Clothing Layers:** Break down the character's clothing into individual items for display.
- **Intimate Underwear Deconstruction:** Independently display the character's inner layers, highlighting design sense and materials. For example: {{underwear_style}} (showcasing details and tailoring).
- **Expression Sheet:** Draw 3-4 different head close-ups in the corner, showing different emotions like: {{expressions}}.
- **Texture & Zoom:** Select key parts for enlarged close-ups. For example: {{texture_zoom}}, adding more depiction of the materials of small items.
- **Action:** Draw special movements and expressions, such as: {{action_detail}}, increasing depth in action portrayal.
- **Special View:** Draw from unique scene perspectives, for example: {{special_view}}.

- **Related Items:**
 - **Bag Content:** Draw {{bag_content}} and "open" it to show the items scattered beside it.
 - **Cosmetics & Care:** Show {{cosmetics}}.
 - **Private Life Items:** Concretize the character's hidden-side items. Depending on the personality, these could include: {{private_items}}, presented from an objective design-sheet perspective.

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
  "節日"
];

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
export const INITIAL_TEMPLATES_CONFIG = [
  {
    id: "tpl_default",
    name: { "zh-tw": "角色概念分解圖", en: "Character Concept Sheet" },
    content: DEFAULT_TEMPLATE_CONTENT,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/ec433cf214faf102.jpg",
    author: "@berryxia（Berryxia.AI）",
    selections: {},
    tags: ["人物", "創意", "圖表"],
    language: ["zh-tw", "en"]
  },
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
    language: ["zh-tw", "en"]
  },
  {
    id: "tpl_fashion",
    name: { "zh-tw": "時尚情緒板插畫", en: "Fashion Moodboard" },
    content: TEMPLATE_FASHION_MOODBOARD,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/4d9f92ccb4113fdd.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {},
    tags: ["人物", "創意", "卡通"],
    language: ["zh-tw", "en"]
  },
  {
    id: "tpl_character_selfie",
    name: { "zh-tw": "人物趣味合影", en: "Character Selfie" },
    content: TEMPLATE_CHARACTER_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/c2312d24d0f2c38e.jpeg",
    author: "@tanshilong（MarioTan）",
    selections: {},
    tags: ["人物", "創意"],
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
  },
  {
    id: "tpl_manga_reality",
    name: { "zh-tw": "漫畫人物成真", en: "Manga to Reality" },
    content: TEMPLATE_MANGA_TO_REALITY,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/16/f5291c56ece88cd9.jpg",
    author: "@tanshilong（MarioTan）",
    selections: {
      "character_originality": { "zh-tw": "使用附圖中的人物，確保結果與人物一致性", en: "Use character in attachment, ensure consistency" },
      "comic_scene": { "zh-tw": "唯美的臥室", en: "Beautiful bedroom" },
      "ratio": { "zh-tw": "9:16直式構圖", en: "9:16 Vertical" }
    },
    tags: ["人物", "創意", "卡通"],
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
  },
  {
    id: "tpl_photo_grid_v2",
    name: { "zh-tw": "3x3 攝影網格出格版", en: "3x3 Photo Grid (Out of Box)" },
    content: TEMPLATE_PHOTO_GRID_V2,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/17/77bfd2bf7abc3eac.png",
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    tags: ["產品", "創意"],
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
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
    language: ["zh-tw", "en"]
  }
];
