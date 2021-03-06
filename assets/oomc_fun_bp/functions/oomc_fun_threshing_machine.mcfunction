execute @e[name="Sheaf of Rice",type=item,r=1] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 function oomc_fun_threshing_machine_process_rice
execute @e[name="稲",type=item,r=1] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 function oomc_fun_threshing_machine_process_rice

execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 0 tp @s ~ ~ ~0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~-0.2 oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~-0.2 lit_pumpkin 0 tp @s ~ ~ ~0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 1 tp @s ~-0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~0.2 ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~0.2 ~-1.1 ~ lit_pumpkin 1 tp @s ~-0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 2 tp @s ~ ~ ~-0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~0.2 oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~0.2 lit_pumpkin 2 tp @s ~ ~ ~-0.05
execute @e[type=item,r=1.2] ~ ~ ~ detect ~ ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~ ~-1.1 ~ lit_pumpkin 3 tp @s ~0.05 ~ ~
execute @e[type=item,r=1.2] ~ ~ ~ detect ~-0.2 ~-0.1 ~ oomc_fun:threshing_machine -1 execute @s ~ ~ ~ detect ~-0.2 ~-1.1 ~ lit_pumpkin 3 tp @s ~0.05 ~ ~
