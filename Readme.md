# Node.js basics

### npm scripts:
#### File system
```bash
npm run fs:copy
```
```bash
npm run fs:create
```
```bash
npm run fs:delete
```
```bash
npm run fs:list
```
```bash
npm run fs:read
```
```bash
npm run fs:rename
```

#### Command line interface(src/cli):
```bash
npm run cli:args -- --arg1 value1 --arg2 value2
```
```bash
RSS_FIRST_NEWS='First news' RSS_SECOND_NEWS='Second news' npm run cli:env
```

#### Modules(src/modules)
```bash
npm run modules:cj-to-esm
```

#### Hash (src/hash)
```bash
npm run hash:calc
```

#### Streams (src/streams)
```bash
npm run streams:read
```
```bash
npm run streams:transform
```
```bash
npm run streams:write
```
#### Zlib (src/zip)
```bash
npm run zip:compress
```
```bash
npm run zip:decompress
```
#### Worker Threads (src/wt)
```bash
npm run wt:run
```

#### Child Processes (src/cp)
```bash
npm run cp:cp -- firstArg secondArg thirdArg
```
