export type Schema = {
    currentField: Set<String>
    nextField: Map<String, Schema>
}