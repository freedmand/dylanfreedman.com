import {
  Atrule,
  ClassSelector,
  Combinator,
  CssNode,
  Declaration,
  Dimension,
  FunctionNode,
  Hash,
  IdSelector,
  Identifier,
  List,
  NumberNode,
  Operator,
  PseudoClassSelector,
  Rule,
  Selector,
  SelectorList,
  StringNode,
  StyleSheet,
  TypeSelector,
  Url,
} from "css-tree";
import { Namer } from "./namer";

const minify = true;

export function stylesheet(...children: CssNode[]): StyleSheet {
  return {
    type: "StyleSheet",
    children: new List<CssNode>().fromArray(children),
  };
}

export function typeSelector(name: string): TypeSelector {
  return {
    type: "TypeSelector",
    name,
  };
}

export function pseudoSelector(name: string): PseudoClassSelector {
  return {
    type: "PseudoClassSelector",
    name,
    children: null,
  };
}

export function classSelector(name: string): ClassSelector {
  return {
    type: "ClassSelector",
    name,
  };
}

export function idSelector(name: string): IdSelector {
  return {
    type: "IdSelector",
    name,
  };
}

export function selectors(...selectorLists: CssNode[]): SelectorList {
  return {
    type: "SelectorList",
    children: new List<CssNode>().fromArray(selectorLists),
  };
}

export function selector(...selectors: CssNode[]): Selector {
  return {
    type: "Selector",
    children: new List<CssNode>().fromArray(selectors),
  };
}

export function rule(
  selectorList: SelectorList | Selector,
  ...declarations: Declaration[]
): Rule {
  return {
    type: "Rule",
    prelude:
      selectorList.type === "Selector" ? selectors(selectorList) : selectorList,
    block: {
      type: "Block",
      children: new List<Declaration>().fromArray(declarations),
    },
  };
}

function _declaration(
  property: string,
  important: boolean,
  ...values: CssNode[]
): Declaration {
  return {
    type: "Declaration",
    property,
    value: {
      type: "Value",
      children: new List<CssNode>().fromArray(values),
    },
    important,
  };
}

export function declaration(
  property: string,
  ...values: CssNode[]
): Declaration {
  return _declaration(property, false, ...values);
}

export function declarationImportant(
  property: string,
  ...values: CssNode[]
): Declaration {
  return _declaration(property, true, ...values);
}

export function fn(name: string, ...values: CssNode[]): FunctionNode {
  return {
    type: "Function",
    name,
    children: new List<CssNode>().fromArray(values),
  };
}

export function fontFace(...declarations: Declaration[]): Atrule {
  return {
    type: "Atrule",
    name: "font-face",
    prelude: null,
    block: {
      type: "Block",
      children: new List<Declaration>().fromArray(declarations),
    },
  };
}

export function widthRule(
  width: Dimension | Identifier | NumberNode,
  mediaFeature: string,
  ...nodes: CssNode[]
): Atrule {
  return {
    type: "Atrule",
    name: "media",
    prelude: {
      type: "AtrulePrelude",
      children: new List<CssNode>().fromArray([
        {
          type: "MediaQueryList",
          children: new List<CssNode>().fromArray([
            {
              type: "MediaQuery",
              children: new List<CssNode>().fromArray([
                {
                  type: "Identifier",
                  name: "screen",
                },
                {
                  type: "Identifier",
                  name: "and",
                },
                {
                  type: "MediaFeature",
                  name: mediaFeature,
                  value: width,
                },
              ]),
            },
          ]),
        },
      ]),
    },
    block: {
      type: "Block",
      children: new List<CssNode>().fromArray(nodes),
    },
  };
}

export function maxWidthRule(
  width: Dimension | Identifier | NumberNode,
  ...nodes: CssNode[]
): Atrule {
  return widthRule(width, "max-width", ...nodes);
}

export function minWidthRule(
  width: Dimension | Identifier | NumberNode,
  ...nodes: CssNode[]
): Atrule {
  return widthRule(width, "min-width", ...nodes);
}

export function operator(value: string): Operator {
  return {
    type: "Operator",
    value,
  };
}

export function comma(): Operator {
  return operator(",");
}

export function combinator(): Combinator {
  return {
    name: " ",
    type: "Combinator",
  };
}

// Values
export function identifier(name: string): Identifier {
  return {
    type: "Identifier",
    name,
  };
}

export function string(text: string): StringNode {
  return {
    type: "String",
    value: text,
  };
}

export function number(value: string): NumberNode {
  return {
    type: "Number",
    value,
  };
}

export function hash(value: string): Hash {
  return {
    type: "Hash",
    value,
  };
}

export function dimension(value: string, unit: string): Dimension {
  return {
    type: "Dimension",
    value,
    unit,
  };
}

export function url(path: string): Url {
  return {
    type: "Url",
    value: path,
  };
}

const classNamer = new Namer();

export function newClass(name: string): string {
  if (minify) {
    return classNamer.newId();
  } else {
    return name;
  }
}
