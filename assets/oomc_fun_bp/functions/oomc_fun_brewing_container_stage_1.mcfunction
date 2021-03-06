execute @e[name="Water Bucket",type=item,r=1] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 function oomc_fun_brewing_container_stage_1_process_water_bucket
execute @e[name="水バケツ",type=item,r=1] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 function oomc_fun_brewing_container_stage_1_process_water_bucket

execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 0 tp @s ~ ~ ~0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~-0.2 oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~-0.2 lit_pumpkin 0 tp @s ~ ~ ~0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 1 tp @s ~-0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~0.2 ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~0.2 ~-1.1 ~ lit_pumpkin 1 tp @s ~-0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 2 tp @s ~ ~ ~-0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~0.2 oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~0.2 lit_pumpkin 2 tp @s ~ ~ ~-0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 3 tp @s ~0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~-0.2 ~-0.1 ~ oomc_fun:brewing_container_stage_1 -1 execute @s ~ ~ ~ detect ~-0.2 ~-1.1 ~ lit_pumpkin 3 tp @s ~0.05 ~ ~
