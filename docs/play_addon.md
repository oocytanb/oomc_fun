# ゲームプレイ

## BP

![entity_bp](images/entity_bp.png)

この世界では、人々は BP を求めて、日夜探求をしています。  
BP が発見されて以来、その良さを知る人々の間で広がり始め、
今や日常生活で利用されるまでに至りました。

### 用途

典型的には、BP をアイテムに「ふりかける」ことで利用されます。  
例えば、小麦に BP をふりかけると、稲が得られます。

| 材料 | クラフトのレシピ |
|-|-|
| BP +<br>小麦 (Wheat) | ![recipe_topping_bp_wheat](images/recipe_topping_bp_wheat.png) |


対象アイテムの一覧:

![recipe_topping_bp_list](images/recipe_topping_bp_list.png)

- 小麦 (Wheat)
- 命の水 (Water of Life)
- 羽根 (Feather)
- 火薬 (Gunpowder)
- 革 (Leather)
- 花 (Flower)
- 腐肉 (Rotten Flesh)
- 砂岩 (Sandstone)
- 苗木 (Sapling)
- Mob の頭 (Mob Head)
- ウール (Wool)
- レンガ (Brick)

## 稲 (Sheaf of Rice)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| BP +<br>小麦 (Wheat) | ![recipe_topping_bp_wheat](images/recipe_topping_bp_wheat.png) |

米を栽培し、収穫することで、稲を入手することもできます。

## 米 (Rice)

### 入手

稲を脱穀機にかけることで、米を得ることができます。

![factory_threshing_machine](images/factory_threshing_machine.png)

耕した土に、米を植えて栽培することができます。

![entyty_rice_crop](images/entity_rice_crop.png) |

## 米飯 (Cooked Rice)

### 入手

米を炊くことで、米飯を得られます。

| 材料 | かまどのレシピ |
|-|-|
| 米 (Rice) | ![recipe_topping_bp_wheat](images/recipe_cooked_rice.png) |

## 親子丼 (Oyakodon)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| タマゴ (Egg) +<br>鶏肉 (Chicken) +<br>米飯 (Cooked Rice) | ![recipe_oyakodon](images/recipe_oyakodon.png) |

## 寿司 (Sushi)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 生魚 (Raw Fish)<sup>1</sup> +<br>米飯 (Cooked Rice) +<br>酢 (Vinegar)+<br>砂糖 (Sugar)| ![recipe_oyakodon](images/recipe_sushi.png) |

<sup>1</sup> 生鮭 (Raw Salmon)、生のタラ (Raw Cod)、フグ (Pufferfish)

## 命の水 (Water of Life)

### 入手

醸造器によって、入手することができます。

![factory_brewing_container](images/factory_brewing_container.png)

### 効果

使用すると、鈍化のステータス効果を 10 秒間、力、耐性、火炎耐性のステータス効果を 5 秒間受けます。

## 酢 (Vinegar)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| BP +<br>命の水 (Water of Life)| ![recipe_topping_bp_water_of_life](images/recipe_topping_bp_water_of_life.png) |

### 効果

使用すると、勤勉のステータス効果を 10 秒間受けます。

## 米俵 (Rice bag)

米俵は、この世界で生き残るための武器となるでしょう。

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 稲 (Sheaf of Rice) +<br>米 (Rice)| ![recipe_rice_bag](images/recipe_rice_bag.png) |


## BP 製造機 (BP Maker)

![factory_bp_maker](images/factory_bp_maker.png)

世界的な BP 需要に応えるため、BP 製造機が開発されました。  
かつては職人技術によって、BP の生産が行われていました。
BP 製造機の登場によって、大量生産が可能になりました。

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 鉄のブロック (Block of Iron) +<br>鍛冶台 (Smithing Table) +<br>oO ストーン (oO Stone) | ![recipe_bp_maker](images/recipe_bp_maker.png) |

### 振る舞い

- 以下のアイテムを、BP 製造機の上に置くか、右クリックして使用すると、BP に変換されます。
  - 土 (Dirt)
  - 丸石 (Cobblestone)
  - 花崗岩 (Granite)
  - 閃緑岩 (Diorite)
  - 安山岩 (Andesite)
  - 砂 (Sand)
  - 砂利 (Gravel)

- BP 製造機の上に置かれたアイテムは、スタック数にかかわらず、1 BP に変換されます。

- ジャック・オ・ランタンを下に置くと、その方向にアイテムを運搬します。

## 脱穀機 (Threshing Machine)

![factory_threshing_machine](images/factory_threshing_machine.png)

稲を脱穀機にかけることで、米を得ることができます。

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| チェーン (Chain) +<br>鍛冶台 (Smithing Table) +<br>oO ストーン (oO Stone) | ![recipe_threshing_machine](images/recipe_threshing_machine.png) |

### 振る舞い

- 稲を脱穀機の上に置くか、右クリックして使用すると、米に変換されます。

- 脱穀機の上に置かれた稲は、スタック数にかかわらず、1 つの米に変換されます。

- ジャック・オ・ランタンを下に置くと、その方向にアイテムを運搬します。

## 醸造器 (Brewing Container)

![factory_brewing_container](images/factory_brewing_container.png)

水と米を醸造器に投入することで、命の水を得ることができます。

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 木材のハーフブロック (Wood Slab) +<br>タル (Barrel) +<br>oO ストーン (oO Stone) | ![recipe_brewing_container](images/recipe_brewing_container.png) |

### 振る舞い

- 水バケツ、および、米を醸造器の上に置くか、右クリックして使用すると、命の水に変換されます。

- 醸造器の上に置かれたアイテムは、スタック数にかかわらず、1 つの命の水に変換されます。

- ジャック・オ・ランタンを下に置くと、その方向にアイテムを運搬します。

## コンベヤ (Conveyor)

![factory_conveyor](images/factory_conveyor.png)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 竹 (Bamboo) +<br>鍛冶台 (Smithing Table) +<br>oOCo ストーン (oOCo Stone) | ![recipe_conveyor](images/recipe_conveyor.png) |

### 振る舞い

- ジャック・オ・ランタンを下に置くと、その方向にアイテムを運搬します。

## リフター (Lifter)

![factory_lifter](images/factory_lifter.png)

### 入手

| 材料 | クラフトのレシピ |
|-|-|
| 鉄格子 (Iron Bars) +<br>鍛冶台 (Smithing Table) +<br>oOCo ストーン (oOCo Stone) | ![recipe_lifter](images/recipe_lifter.png) |

### 振る舞い

- ジャック・オ・ランタンを下に置くと、その方向にアイテムを 1 ブロック分持ち上げて運搬します。

## 生物の oO

![entity_bio_oo](images/entity_bio_oo.png) |

### ドロップ

- oO ストーン (oO Stone)
- 竹 (Bamboo)

### 振る舞い

- 米が好物です。

- 生物の oOCo とパートナーになり子を産みます。

### スポーンエッグ

| 材料 | クラフトのレシピ |
|-|-|
| 卵 (Egg) +<br>米 (Rice)| ![recipe_bio_oo_spawn_egg](images/recipe_bio_oo_spawn_egg.png) |


## 生物の oOCo

![entity_bio_ooco](images/entity_bio_ooco.png) |

### ドロップ

- oOCo ストーン (oOCo Stone)
- 骨粉 (Bone Meal)

### 振る舞い

- 米が好物です。

- 生物の oO とパートナーになり子を産みます。

- バケツを持って、使用すると溶岩を得ることができます。

### スポーンエッグ

| 材料 | クラフトのレシピ |
|-|-|
| 卵 (Egg) +<br>米 (Rice)| ![recipe_bio_ooco_spawn_egg](images/recipe_bio_ooco_spawn_egg.png) |
