/*! SPDX-License-Identifier: MIT */
/*! Copyright (c) 2021 oO (https://github.com/oocytanb) */

/// <reference path="../../node_modules/ts-mcbe-scripting/dist/mcbe-types.d.ts" />

const ENABLE_DEBUG = false;

const system = server.registerSystem(0, 0);

const dlog = ENABLE_DEBUG
  ? (arg: unknown, sys: ServerSystem) => {
      const dce = sys.createEventData('minecraft:display_chat_event');
      dce.data.message =
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
      sys.broadcastEvent('minecraft:display_chat_event', dce);
    }
  : (_arg: unknown, _sys: ServerSystem) => {
      // noop
    };

system.initialize = function () {
  if (ENABLE_DEBUG) {
    const logger_config = this.createEventData(
      'minecraft:script_logger_config'
    );
    logger_config.data.log_errors = true;
    logger_config.data.log_information = true;
    logger_config.data.log_warnings = true;
    this.broadcastEvent('minecraft:script_logger_config', logger_config);
  }

  if (ENABLE_DEBUG) {
    system.listenForEvent('minecraft:block_interacted_with', (ed) => {
      const { block_position } = ed.data;
      const { x, y, z } = block_position;
      const ticking_areas = system.getComponent(
        server.level,
        'minecraft:ticking_areas'
      );

      // my_custom_area created by command
      // `/tickingarea add circle ~ ~ ~ 4 my_custom_area`
      const custom_area = (ticking_areas.data as Record<string, unknown>)
        .my_custom_area as LevelTickingArea | undefined;
      if (custom_area) {
        dlog(['block_interacted', custom_area], system);
        const block = system.getBlock(custom_area, x, y, z);
        dlog(block, system);
      }
    });
  }
};
