import { Filter, X } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface SearchFiltersProps {
  color: SearchColor | undefined;
  order_by: "relevant" | "latest";
  setColor: (color: SearchColor | undefined) => void;
  setOrderBy: (order_by: "relevant" | "latest") => void;
}

const search_colors: { value: SearchColor; style: {}; label: string }[] = [
  {
    label: "Preto e Branco",
    value: "black_and_white",
    style: { background: "linear-gradient(45deg, #000, #fff)" },
  },
  { label: "Preto", value: "black", style: { backgroundColor: "#000" } },
  { label: "Branco", value: "white", style: { backgroundColor: "#fff" } },
  { label: "Amarelo", value: "yellow", style: { backgroundColor: "#FFEB3B" } },
  { label: "Laranja", value: "orange", style: { backgroundColor: "#FF9800" } },
  { label: "Vermelho", value: "red", style: { backgroundColor: "#F44336" } },
  { label: "Roxo", value: "purple", style: { backgroundColor: "#9C27B0" } },
  { label: "Magenta", value: "magenta", style: { backgroundColor: "#E91E63" } },
  { label: "Verde", value: "green", style: { backgroundColor: "#4CAF50" } },
  {
    label: "Azul Esverdeado",
    value: "teal",
    style: { backgroundColor: "#009688" },
  },
  { label: "Azul", value: "blue", style: { backgroundColor: "#2196F3" } },
];

export const SearchFilters = ({
  color,
  order_by,
  setColor,
  setOrderBy,
}: SearchFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = color !== undefined;

  const onClearFilters = () => {
    setIsOpen(false);
    setColor(undefined);
    setOrderBy("relevant");
  };

  const handleChangeOrderBy = (newOrder: "relevant" | "latest") => {
    setIsOpen(false);
    setOrderBy(newOrder);
  };

  const handleChangeColor = (newColor: SearchColor | undefined) => {
    setIsOpen(false);
    setColor(newColor);
  };

  return (
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white relative">
            <Filter className="size-4" />
            Filtrar
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 size-5 p-0 text-xs">
                1
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-4" align="end">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-semibold">Filtros</h4>
              <Button
                variant="ghost"
                size="sm"
                disabled={!hasActiveFilters}
                onClick={() => {
                  onClearFilters();
                  setIsOpen(false);
                }}
                className="h-auto p-1 text-xs"
              >
                Limpar
              </Button>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2 text-muted-foreground">
                Ordem
              </h5>
              <RadioGroup
                value={order_by}
                onValueChange={handleChangeOrderBy}
                className="flex gap-0"
              >
                <div
                  className={cn(
                    "border p-1 rounded-l flex-1 flex items-center justify-center transition-colors cursor-pointer",
                    order_by === "relevant" &&
                      "bg-blue-500 text-white border-blue-500"
                  )}
                >
                  <RadioGroupItem
                    value="relevant"
                    id="relevant"
                    className="hidden"
                  />
                  <Label htmlFor="relevant">Relevantes</Label>
                </div>
                <div
                  className={cn(
                    "border p-1 rounded-r flex-1 flex items-center justify-center transition-colors cursor-pointer",
                    order_by === "latest" &&
                      "bg-blue-500 text-white border-blue-500"
                  )}
                >
                  <RadioGroupItem
                    value="latest"
                    id="latest"
                    className="hidden"
                  />
                  <Label htmlFor="latest">Novos</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div>
              <h5 className="text-sm font-medium mb-2 text-muted-foreground">
                Cor
              </h5>
              <div className="flex flex-wrap gap-2">
                {search_colors.map((c) => (
                  <Button
                    size="icon"
                    key={c.value}
                    style={c.style}
                    onClick={() => handleChangeColor(c.value)}
                    className={cn(
                      "p-0 size-6 rounded overflow-hidden border-0 shadow",
                      color === c.value && "ring-1 ring-offset-2 ring-blue-500"
                    )}
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <div style={c.style} className={"rounded size-6"} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{c.label}</span>
                      </TooltipContent>
                    </Tooltip>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
