/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-button-behavior.js
 */

import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';

import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';

import {PaperRippleBehavior} from './paper-ripple-behavior.js';

interface PaperButtonBehavior extends IronButtonState, IronControlState, PaperRippleBehavior {

  /**
   * The z-depth of this element, from 0-5. Setting to 0 will remove the
   * shadow, and each increasing number greater than 0 will be "deeper"
   * than the last.
   */
  readonly elevation: number|null|undefined;
  hostAttributes: object|null;

  /**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param event .
   */
  _spaceKeyDownHandler(event: KeyboardEvent): void;

  /**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param event .
   */
  _spaceKeyUpHandler(event: KeyboardEvent): void;
  _calculateElevation(): void;
  _computeKeyboardClass(receivedFocusFromKeyboard: any): void;
}

declare const PaperButtonBehavior: object;

export {PaperButtonBehavior};