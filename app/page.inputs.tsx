import React, { ReactElement } from "react"
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from "@fluentui/react-icons"
import {
  GiBanana,
  GiCarrot,
  GiChickenLeg,
  GiGarlic,
  GiMeat,
  GiOrange,
  GiPumpkin,
  GiRoastChicken,
  GiShinyApple,
} from "react-icons/gi"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Slider,
  Switch,
  Textarea,
} from "@/components/done"
import Combobox from "@/components/not-done/Combobox"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DataTable,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/reviewing"
import { columns } from "@/components/reviewing/data-table.components"
import { fetchUsers } from "@/components/reviewing/data-table.input"
import {RadioGroup, RadioGroupItem} from "@/components/done/radio-group";
import {Label} from "@/components/reviewing/label";

type RowItem = {
  file: { icon: ReactElement; label: string }
  author: { label: string; status: string }
  lastUpdated: { label: string; timestamp: number }
  lastUpdate: { icon: ReactElement; label: string }
}

type ColumnItem = { columnKey: string; label: string }

const fontSize = 22
export const rowItems: Array<RowItem> = [
  {
    file: {
      label: "Meeting notes",
      icon: <DocumentRegular fontSize={fontSize} />,
    },
    author: { label: "Max Mustermann", status: "online" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Thursday presentation",
      icon: <FolderRegular fontSize={fontSize} />,
    },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Training recording",
      icon: <VideoRegular fontSize={fontSize} />,
    },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Purchase order",
      icon: <DocumentPdfRegular fontSize={fontSize} />,
    },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular fontSize={fontSize} />,
    },
  },
]

export const columnItems: Array<ColumnItem> = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
]

export const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export const sideBar = {
  Concepts: ["2", "1"].sort(),
  Theme: ["1", "2"].sort(),
  Components: [
    "Button",
    "Input",
    "Combobox",
    "Select",
    "Drawer",
    "Dialog",
    "Tablist",
    "Table",
    "DataGrid",
    "Slider",
    "Accordion",
    "Avatar",
    "Switch",
    "Tooltip",
    "Textarea",
      "RadioGroup",
  ].sort(),
} as const

export const components = [
  {
    header: "Button",
    subText: "Button triggers an action or event when activated.",
    cards: [
      {
        cardHeader: "Variants",
        cardSubtext: (
          <div className="inline">
            <code>(undefined)</code>: the button appears with the default style
            <br />
            <code>primary</code>: emphasizes the button as a primary action.
            <br />
            <code>outline</code>: removes background styling.
            <br />
            <code>subtle</code>: minimizes emphasis to blend into the background
            until hovered or focused
            <br />
            <code>transparent</code>: removes background and border styling.
            <br />
          </div>
        ),
        cardComponent: (
          <>
            <Button className={"w-fit"}>Primary</Button>
            <Button className={"w-fit"} variant="secondary">
              Secondary
            </Button>
            <Button className={"w-fit"} variant="outline">
              Outline
            </Button>
            <Button className={"w-fit"} variant="subtle">
              Subtle
            </Button>
            <Button className={"w-fit"} variant="transparent">
              Transparent
            </Button>
          </>
        ),
      },
      {
        cardHeader: "Toogle",
        cardSubtext:
          "Button has an icon slot that, if specified, renders an icon either before or after the children, as specified by the iconPosition prop.",
        cardComponent: (
          <>
            <Button className={"w-fit"} toggle />
            <Button className={"w-fit"} toggle variant="secondary" />
            <Button className={"w-fit"} toggle variant="outline" />
            <Button className={"w-fit"} toggle variant="subtle" />
            <Button className={"w-fit"} toggle variant="transparent" />
          </>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext: (
          <div className="inline">
            A button can be <code>disabled</code> or{" "}
            <code>disabledFocusable</code>. <code>disabledFocusable</code> is
            used in scenarios where it is important to keep a consistent tab
            order for screen reader and keyboard users. The primary example of
            this pattern is when the disabled button is in a menu or a
            commandbar and is seldom used for standalone buttons.
          </div>
        ),
        cardComponent: (
          <>
            <Button className={"w-fit"} disabled>
              Primary
            </Button>
            <Button className={"w-fit"} disabled variant="secondary">
              Secondary
            </Button>
            <Button className={"w-fit"} disabled variant="outline">
              Outline
            </Button>
            <Button className={"w-fit"} disabled variant="subtle">
              Subtle
            </Button>
            <Button className={"w-fit"} disabled variant="transparent">
              Transparent
            </Button>
          </>
        ),
      },
    ],
  },
  {
    header: "Input",
    subText: "An input component. Enter text into the input.",
    cards: [
      {
        cardHeader: "Appearance",
        cardSubtext:
          "  An input can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.",
        cardComponent: (
          <>
            <Input
              labelText="Example of"
              placeholder="A Outline Input"
              helperText="Helper text"
            />
            <Input
              variant="focus"
              labelText="Example of"
              placeholder="A Outline Input"
              helperText="Helper text"
            />
            <Input
              variant="filledDark"
              labelText="Example of "
              placeholder="A FilledDark Input"
              helperText="Helper text"
            />
            <Input
              variant="filledLight"
              labelText="Warning of"
              placeholder="A FilledLight Input"
              helperText="Helper text"
            />
          </>
        ),
      },
      {
        cardHeader: "States",
        cardSubtext: "",
        cardComponent: (
          <>
            <Input
              state="neutral"
              labelText="Example of"
              placeholder="A Neutral"
              helperText="Input"
            />
            <Input
              state="success"
              labelText="Example of"
              placeholder="A Input"
              helperText="With Success"
            />
            <Input
              state="warning"
              labelText="Example of "
              placeholder="A Input"
              helperText="With Fail"
            />
            <Input
              state="fail"
              labelText="Example of"
              placeholder="A Input"
              helperText="With Warning"
            />
          </>
        ),
      },
    ],
  },
  {
    header: "Combobox",
    subText:
      "A combobox combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: <Combobox input={frameworks} />,
      },
    ],
  },
  {
    header: "Select",
    subText:
      "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Select>
            <SelectTrigger className={"w-40"}>
              <SelectValue placeholder={"Select something"}></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className={""}>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem className={""} value={"apple"}>
                  Apple
                </SelectItem>
                <SelectItem value={"banana"}>Banana</SelectItem>
                <SelectItem value={"blueberry"}>Blueberry</SelectItem>
                <SelectItem value={"grapes"}>Grapes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ),
      },
    ],
  },
  {
    header: "Drawer",
    subText: (
      <div className="flex flex-col">
        <div>
          The Drawer gives users a quick entry point to configuration and
          information. It should be used when retaining context is beneficial to
          users.
        </div>
        <br />
        <div>There are three main components to represent a Drawer:</div>
        <ul className="list-disc pl-8">
          <li>
            <code>OverlayDrawer</code>: An overlay Drawer renders on top of the
            whole page. By default blocks the screen and will require the user's
            full attention. Uses Dialog component under the hood.
          </li>
          <li>
            <code>InlineDrawer</code>: An inline Drawer renders within a
            container and can be placed next to any content.
          </li>
          <li>
            <code>Drawer</code>: A combination of OverlayDrawer and
            InlineDrawer. Used when toggling between the two modes is necessary.
            Often used for responsiveness.
          </li>
        </ul>
      </div>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Drawer>
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <div className={"flex h-[50vh] w-screen flex-col items-center"}>
                <DrawerHeader className="flex flex-col items-center">
                  Im the header!
                </DrawerHeader>
                <DrawerDescription className={" text-slate-50"}>
                  And i the content
                </DrawerDescription>
              </div>
            </DrawerContent>
          </Drawer>
        ),
      },
    ],
  },
  {
    header: "Dialog",
    subText: (
      <div className="inline">
        <code>Dialog</code> is a window overlaid on either the primary window or
        another dialog window. Windows under a modal dialog are inert. That is,
        users cannot interact with content outside an active dialog window.
        Inert content outside an active dialog is typically visually obscured or
        dimmed so it is difficult to discern, and in some implementations,
        attempts to interact with the inert content cause the dialog to close.
      </div>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Dialog>
            <DialogTrigger
              className={
                "dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white"
              }
            >
              Open Dialog
            </DialogTrigger>
            <DialogContent className={"dark:bg-gray-800"}>
              <DialogHeader>
                <DialogTitle className={"text-2xl font-bold "}>
                  This is a dialog.
                </DialogTitle>
              </DialogHeader>
              <h2 className={"text-lg"}>
                Dialogs are often interruptions, so use them for important
                actions. If you need to give someone an update on an action they
                just took but that they don't need to act on, try a toast.
              </h2>
              <div className={"flex flex-row justify-end"}>
                <Button
                  className={"mr-2"}
                  size={"default"}
                  variant={"secondary"}
                >
                  Deny
                </Button>
                <Button className={""} variant={"default"}>
                  Agree
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
  },
  {
    header: "Tablist",
    subText:
      "A tab list provides single selection from tabs. When a tab is selected, the application displays content associated with the selected tab and hides other content. Each tab typically contains a text header and often includes an icon.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Tabs defaultValue={"fruits"} className={"  w-[full]"}>
            <TabsList className={"w-full"}>
              <TabsTrigger value={"fruits"}>Fruits</TabsTrigger>
              <TabsTrigger value={"vegetables"}>Vegetables</TabsTrigger>
              <TabsTrigger value={"meat"}>Meat</TabsTrigger>
            </TabsList>
            <TabsContent value={"fruits"}>
              <div className={"flex w-[20%] flex-row justify-between "}>
                <GiShinyApple size={40} />
                <GiOrange size={40} />
                <GiBanana size={40} />
              </div>
            </TabsContent>
            <TabsContent value={"vegetables"}>
              <div className={"flex w-[20%] flex-row justify-between "}>
                <GiGarlic size={40} />
                <GiPumpkin size={40} />
                <GiCarrot size={40} />
              </div>
            </TabsContent>
            <TabsContent value={"meat"}>
              <div className={"flex w-[20%] flex-row justify-between "}>
                <GiMeat size={40} />
                <GiChickenLeg size={40} />
                <GiRoastChicken size={40} />
              </div>
            </TabsContent>
          </Tabs>
        ),
      },
    ],
  },
  {
    header: "DataGrid",
    subText: (
      <span className="inline">
        This component is a higher level extension of the <code>Table</code>
        primitive component. <code>DataGrid</code> is a feature-rich, so there
        should always be full feature parity with what can be achieved with
        primitives. This component is <strong>opinionated</strong> and this is
        intentional. If the desired scenario can be achieved easily and does not
        vary too much from documented examples, it can be very convenient. If
        the desired scenario varies a lot from the documented examples please
        use the Table components with another state management solution of
        choice.
      </span>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <DataTable
            columns={columns}
            fetchUsers={fetchUsers}
            pagination={{
              manualPagination: true,
              pageIndex: 0,
              pageCount: 10,
              pageSize: 10,
              rowCount: 100,
            }}
          />
        ),
      },
    ],
  },
  {
    header: "Table",
    subText: (
      <>
        <blockquote>
          💡 This component is considered <strong>low-level</strong> and should
          be used when there is a need for more <strong>customization</strong>
          and support for <strong>non-standard features</strong>. Please check
          out the <strong>DataGrid component</strong> if you don't need lots of
          customization and rely on common features. There is less work involved
          and you will benefit from first class Microsoft design and
          accessibility support.
        </blockquote>
        A Table displays sets of two-dimensional data. The primitive components
        can be fully customized to support different feature sets.
      </>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <TableRoot>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rowItems.map(
                ({ file, author, lastUpdated, lastUpdate }, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      <span className="flex items-center gap-2">
                        <>{file.icon}</>
                        <>{file.label}</>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <Avatar
                          aria-label={author.label}
                          status={author.status}
                          // name={author.label}
                        >
                          <AvatarImage
                            src="https://github.com/shadcn.pn"
                            alt="@shadcn"
                          />
                          <AvatarFallback>{author.label}</AvatarFallback>
                        </Avatar>

                        <>{author.label}</>
                      </span>
                    </TableCell>
                    <TableCell>
                      <>{lastUpdated.label}</>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <>{lastUpdate.icon}</>
                        <>{lastUpdate.label}</>
                      </span>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total Edits</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableFooter>
          </TableRoot>
        ),
      },
    ],
  },
  {
    header: "Slider",
    subText:
      "A Slider represents an input that allows user to choose a value from within a specific range.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: <Slider size={"sm"} step={1} />,
      },
    ],
  },
  {
    header: "Accordion",
    subText:
      "An accordion allows users to toggle the display of content by expanding or collapsing sections.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Accordion type="single" size="md" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    ],
  },
  {
    header: "Avatar",
    subText: (
      <>
        An Avatar is a graphical representation of a user, team, or entity.
        <br />
        Avatar can display an image, icon, or initials, and supports various
        sizes and shapes.
      </>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Avatar
            className={"flex h-32 w-32 items-center text-center"}
            status={"online"}
          >
            <img
              alt={"avatar image"}
              src={
                "https://images.pexels.com/photos/20147042/pexels-photo-20147042/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            />
          </Avatar>
        ),
      },
    ],
  },
  {
    header: "Switch",
    subText: (
      <>
        A switch represents a physical switch that allows someone to choose
        between two mutually exclusive options. For example, "On/Off" and
        "Show/Hide". Choosing an option should produce an immediate result.
      </>
    ),
    cards: [{ cardHeader: "", cardSubtext: "", cardComponent: <Switch /> }],
  },
  {
    header: "Textarea",
    subText: <>Textarea allows the user to enter and edit multiline text.</>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Textarea
            error={false}
            className="font-bold text-black dark:text-white"
            labelText="TextArea"
          />
        ),
      },
    ],
  },
    {
        header: "RadioGroup",
        subText: (" A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
        ),
        cards: [{ cardHeader: "", cardSubtext: "", cardComponent:
                <RadioGroup defaultValue="1">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="r1" />
                        <Label htmlFor="r1">Example 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="r2" />
                        <Label htmlFor="r2">Example 2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="r3" />
                        <Label htmlFor="r3">Example 3</Label>
                    </div>
                </RadioGroup>
        }],
    },
] as const
