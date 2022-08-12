import driver from "./driver";

export function context({
  event,
  context,
}: {
  event: any;
  context: any;
}): any {
  return { event, context, driver };
}
