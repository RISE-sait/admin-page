"use client"

import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useRouterQuery } from "src/hooks/router-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { debounce } from "@mui/material";

export default function () {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname()

    const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");

    const rq = useRouterQuery({
        name: "",
    })

    const handleSearchChange = useCallback(
        debounce((searchTerm: string) => {
            rq.replace({ name: searchTerm });
        }, 300),
        [searchParams, router, pathname]
    )

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearchChange(value);
    }

    return (
        <TextField
            variant="outlined"
            size="small"
            placeholder="Search clients"
            value={searchTerm}
            onChange={onChange}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                },
            }}
            className="mr-8"
        />
    )
}