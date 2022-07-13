export interface ReactorHandler {
    (hooks: Record<string, any>): void;
}
export declare function createReactor(handler: ReactorHandler): () => void;
