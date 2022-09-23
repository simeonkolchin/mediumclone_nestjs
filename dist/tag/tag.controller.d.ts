import { TagService } from "./tag.service";
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findAll(): string[];
}
