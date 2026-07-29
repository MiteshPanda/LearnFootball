import { TacticLesson, attackingTactics } from "./attacking";
import { defensiveTactics } from "./defensive";
import { pressingTactics } from "./pressing";
import { buildupTactics } from "./buildup";
import { modernTactics } from "./modern";
import { philosophiesTactics } from "./philosophies";
import { rolesTactics } from "./roles";

export type { TacticLesson };

export const tacticsData: Record<string, TacticLesson> = {
  ...attackingTactics,
  ...defensiveTactics,
  ...pressingTactics,
  ...buildupTactics,
  ...modernTactics,
  ...philosophiesTactics,
  ...rolesTactics,
};
