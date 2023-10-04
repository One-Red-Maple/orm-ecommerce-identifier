import { platforms } from "./platforms";
interface Platform {
    name: keyof typeof platforms | "Other";
}
export declare function getPlatformByCheerio(input: string): Promise<Platform>;
export {};
