import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <div className="w-full max-w-lg">
      <div className="relative flex items-center">
        <div className="absolute left-3 z-10">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>

        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Masukkan kata kunci pencarian..."
          className="pl-10 pr-20 rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button onClick={handleSubmit} className="rounded-l-none px-4 bg-self-primary" type="submit">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
