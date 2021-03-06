/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-ripple.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts" />

/**
 * Material design: [Surface reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
 *
 * `paper-ripple` provides a visual effect that other paper elements can
 * use to simulate a rippling effect emanating from the point of contact.  The
 * effect can be visualized as a concentric circle with motion.
 *
 * Example:
 *
 *     <div style="position:relative">
 *       <paper-ripple></paper-ripple>
 *     </div>
 *
 * Note, it's important that the parent container of the ripple be relative position, otherwise
 * the ripple will emanate outside of the desired container.
 *
 * `paper-ripple` listens to "mousedown" and "mouseup" events so it would display ripple
 * effect when touches on it.  You can also defeat the default behavior and
 * manually route the down and up actions to the ripple element.  Note that it is
 * important if you call `downAction()` you will have to make sure to call
 * `upAction()` so that `paper-ripple` would end the animation loop.
 *
 * Example:
 *
 *     <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
 *     ...
 *     downAction: function(e) {
 *       this.$.ripple.downAction(e.detail);
 *     },
 *     upAction: function(e) {
 *       this.$.ripple.upAction();
 *     }
 *
 * Styling ripple effect:
 *
 *   Use CSS color property to style the ripple:
 *
 *     paper-ripple {
 *       color: #4285f4;
 *     }
 *
 *   Note that CSS color property is inherited so it is not required to set it on
 *   the `paper-ripple` element directly.
 *
 * By default, the ripple is centered on the point of contact.  Apply the `recenters`
 * attribute to have the ripple grow toward the center of its container.
 *
 *     <paper-ripple recenters></paper-ripple>
 *
 * You can also  center the ripple inside its container from the start.
 *
 *     <paper-ripple center></paper-ripple>
 *
 * Apply `circle` class to make the rippling effect within a circle.
 *
 *     <paper-ripple class="circle"></paper-ripple>
 */
interface PaperRippleElement extends Polymer.Element, Polymer.IronA11yKeysBehavior {
  keyBindings: object;

  /**
   * The initial opacity set on the wave.
   */
  initialOpacity: number|null|undefined;

  /**
   * How fast (opacity per second) the wave fades out.
   */
  opacityDecayVelocity: number|null|undefined;

  /**
   * If true, ripples will exhibit a gravitational pull towards
   * the center of their container as they fade away.
   */
  recenters: boolean|null|undefined;

  /**
   * If true, ripples will center inside its container
   */
  center: boolean|null|undefined;

  /**
   * A list of the visual ripples.
   */
  ripples: any[]|null|undefined;

  /**
   * True when there are visible ripples animating within the
   * element.
   */
  readonly animating: boolean|null|undefined;

  /**
   * If true, the ripple will remain in the "down" state until `holdDown`
   * is set to false again.
   */
  holdDown: boolean|null|undefined;

  /**
   * If true, the ripple will not generate a ripple effect
   * via pointer interaction.
   * Calling ripple's imperative api like `simulatedRipple` will
   * still generate the ripple effect.
   */
  noink: boolean|null|undefined;
  _animating: boolean|null|undefined;
  _boundAnimate: Function|null|undefined;
  readonly target: any;
  readonly shouldKeepAnimating: any;
  attached(): void;
  detached(): void;
  simulatedRipple(): void;

  /**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   */
  uiDownAction(event?: Event|null): void;

  /**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   */
  downAction(event?: Event|null): void;

  /**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   */
  uiUpAction(event?: Event|null): void;

  /**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   */
  upAction(event?: Event|null): void;
  onAnimationComplete(): void;
  addRipple(): any;
  removeRipple(ripple: any): void;

  /**
   * This conflicts with Element#antimate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
   */
  animate(): void;
  _onEnterKeydown(): void;
  _onSpaceKeydown(): void;
  _onSpaceKeyup(): void;

  /**
   * effect.
   */
  _holdDownChanged(newVal: any, oldVal: any): void;
}

interface HTMLElementTagNameMap {
  "paper-ripple": PaperRippleElement;
}
