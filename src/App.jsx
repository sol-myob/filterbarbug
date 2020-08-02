import '@myob/myob-styles/dist/styles/myob-clean.css';
import Card from "@myob/myob-widgets/lib/components/Card/Card";
import FilterBar from "@myob/myob-widgets/lib/components/FilterBar/FilterBar";
import React from "react";
import Search from "@myob/myob-widgets/lib/components/Search/Search";

export const App = () => {
    return (
        <div>
            <p>expected: apply and reset not hidden on mobile</p>
            <p>actual: filter bar disappears</p>
            <Card>
                <FilterBar onApply={() => {}} onReset={() => {}}>
                <Search
                    label="expected: reset not hidden on mobile"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                    placeholder="Search"
                    name="search"
                />
            </FilterBar>
            </Card>
            <p>expected: reset not hidden on mobile</p>
            <p>actual: filter bar disappears</p>
            <Card>
                <FilterBar onReset={() => {}}>
                    <Search
                        onChange={(event) => {
                            console.log(event.target.value)
                        }}
                        placeholder="Search"
                        name="search"
                    />
                </FilterBar>
            </Card>
            <p>working as expected: reset is collapsed into filters menu</p>
            <Card>
                <FilterBar onReset={() => {
                }}>
                    <Search
                        onChange={(event) => {
                            console.log(event.target.value)
                        }}
                        placeholder="Search"
                        name="search"
                    />
                    <Search
                        onChange={(event) => {
                            console.log(event.target.value)
                        }}
                        placeholder="Search"
                        name="search2"
                    />
                </FilterBar>
            </Card>
        </div>
    )
}