const roleTokens = [
    "ACCOUNT_MANAGER", "ADMIN", "AGENT", "EXTERNAL_REVIEWER"
] as const;

const roleColorTokens = [
    "pink", "purple", "blue", "orange"
] as const;

export type Roles = typeof roleTokens[number];
export type RoleColors = typeof roleColorTokens[number];

// TODO: map roleTokens to roleColorTokens
export enum RoleColorMap {
    ACCOUNT_MANAGER = "pink",
    ADMIN = "purple",
    AGENT = "blue",
    EXTERNAL_REVIEWER = "orange",
}