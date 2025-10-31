import {
  goToIdle,
  useIdleViewModel,
  type IdleViewState,
} from "./variants/idle";
import {
  useAddStickerViewModel,
  type AddStickerViewState,
} from "./variants/add-sticker";
import type { ViewModel } from "./view-model-types";
import type { ViewModelParams } from "./view-model-params";
import { useState } from "react";
import {
  useSelectionWindowViewModel,
  type SelectionWindowViewState,
} from "./variants/selection-window";

export type ViewState =
  | IdleViewState
  | AddStickerViewState
  | SelectionWindowViewState;

export function useViewModel(params: Omit<ViewModelParams, "setViewState">) {
  const [viewState, setViewState] = useState<ViewState>(() => goToIdle());

  const newParams = {
    ...params,
    setViewState,
  };

  const states = {
    idle: useIdleViewModel(newParams),
    "add-sticker": useAddStickerViewModel(newParams),
    "selection-window": useSelectionWindowViewModel(newParams),
  };
  let viewModel: ViewModel;
  switch (viewState.type) {
    case "add-sticker":
      viewModel = states["add-sticker"]();
      break;
    case "idle":
      viewModel = states["idle"](viewState);
      break;
    case "selection-window":
      viewModel = states["selection-window"](viewState);
      break;
    default:
      throw new Error("Invalid view state");
  }
  return viewModel;
}
