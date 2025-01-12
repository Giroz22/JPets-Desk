import { createMapper } from "@automapper/core";
import { classes } from "@automapper/classes";

export const mapperConfig = createMapper({
  strategyInitializer: classes(),
});
