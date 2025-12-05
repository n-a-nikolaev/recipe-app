import { Provider } from "@/components/ui/provider";
import { render as rtlRender } from "@testing-library/react";

export function render(ui) {
  return rtlRender(<>{ui}</>, {
    wrapper: (props) => <Provider>{props.children}</Provider>,
  });
}
