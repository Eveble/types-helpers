## [2.5.3](https://github.com/eveble/types-helpers/compare/v2.5.2...v2.5.3) (2024-02-20)


### Bug Fixes

* **release:** update eveble dependencies on yarn.lock ([4682d20](https://github.com/eveble/types-helpers/commit/4682d20de835ca1398c6c2b0b684fef6d7b552b4))

## [2.5.2](https://github.com/eveble/types-helpers/compare/v2.5.1...v2.5.2) (2023-04-23)


### Bug Fixes

* **docs:** fix docs build do to issue with node_modules types ([41ab12b](https://github.com/eveble/types-helpers/commit/41ab12bf51be7189ea90b0bf3f0c447551a6f6c5))
* **docs:** update docs build process ([e72aea4](https://github.com/eveble/types-helpers/commit/e72aea4ad35a7b24f5d62ef13f07107411ff04eb))

## [2.5.1](https://github.com/eveble/types-helpers/compare/v2.5.0...v2.5.1) (2021-05-27)


### Bug Fixes

* **deps:** remove typeorm ([49edde1](https://github.com/eveble/types-helpers/commit/49edde1e63d7fc59153c5de759fe5f58336aa6a7))

# [2.5.0](https://github.com/eveble/types-helpers/compare/v2.4.0...v2.5.0) (2021-05-22)


### Features

* add NON_ENUMERABLE_VALUE_KEY constant ([d7a0f5d](https://github.com/eveble/types-helpers/commit/d7a0f5dd79a617e9f5b2f418648d96c26e0d1111))

# [2.4.0](https://github.com/eveble/types-helpers/compare/v2.3.4...v2.4.0) (2021-05-18)


### Features

* add from static method to ValueNumber ([0c7efd4](https://github.com/eveble/types-helpers/commit/0c7efd4834fc455eb808ad26ceda890187628ee0))
* add from static method to ValueString ([8a21b1b](https://github.com/eveble/types-helpers/commit/8a21b1b031fbf66ff9378750ae764f7234747b27))

## [2.3.4](https://github.com/eveble/types-helpers/compare/v2.3.3...v2.3.4) (2021-05-18)


### Bug Fixes

* add support for transforming array of ValueNumbers ([830a695](https://github.com/eveble/types-helpers/commit/830a6957733d86aee69ae0a66dc79295d934cf53))
* add support for transforming array of ValueStrings ([88ca409](https://github.com/eveble/types-helpers/commit/88ca40938f13020f63a7f07e913372826b795250))

## [2.3.3](https://github.com/eveble/types-helpers/compare/v2.3.2...v2.3.3) (2021-05-16)


### Bug Fixes

* implement toString, valueOf ([8132945](https://github.com/eveble/types-helpers/commit/81329453ca2ab30594518a034b6a6882ec91cc02))

## [2.3.2](https://github.com/eveble/types-helpers/compare/v2.3.1...v2.3.2) (2021-05-16)


### Bug Fixes

* apply HookableMixin to ValueNumber ([86ac709](https://github.com/eveble/types-helpers/commit/86ac709a4decf5c0604145e6af84ee5cb1fe07e4))

## [2.3.1](https://github.com/eveble/types-helpers/compare/v2.3.0...v2.3.1) (2021-05-14)


### Bug Fixes

* return ValueTransformer type on transformer generator method ([dfec49f](https://github.com/eveble/types-helpers/commit/dfec49fe880d4e8e6d3a6d1def09b08dcdb5ec17))

# [2.3.0](https://github.com/eveble/types-helpers/compare/v2.2.0...v2.3.0) (2021-05-14)


### Features

* add Column transformator generator for TypeORM ([ea92725](https://github.com/eveble/types-helpers/commit/ea92725efb736e2fcda3fb339d63a89c8cea40bf))

# [2.2.0](https://github.com/eveble/types-helpers/compare/v2.1.0...v2.2.0) (2021-05-08)


### Features

* add toPlainObject method ([049cd82](https://github.com/eveble/types-helpers/commit/049cd8276bde5c216c35ccb483db507fab8c666d))

# [2.1.0](https://github.com/eveble/types-helpers/compare/v2.0.0...v2.1.0) (2021-05-08)


### Features

* add equals method on ValueNumber ([7fba87d](https://github.com/eveble/types-helpers/commit/7fba87d300a63bb42100d56499e7a68077415bf0))
* add equals method on ValueString ([fd43bd3](https://github.com/eveble/types-helpers/commit/fd43bd33f2336bb7bc57a5a3502fc5f7c6639c59))

# [2.0.0](https://github.com/eveble/types-helpers/compare/v1.4.1...v2.0.0) (2021-05-08)


* refactor!: remove use of ValueString as standalone class without mixins ([f7072b7](https://github.com/eveble/types-helpers/commit/f7072b7b547a0d1da0e71424f4571c8ebd6a8e2e))


### BREAKING CHANGES

* remove use of ValueString as standalone class without mixins

## [1.4.1](https://github.com/eveble/types-helpers/compare/v1.4.0...v1.4.1) (2021-05-08)


### Bug Fixes

* define proto methods non-enumerable on ValueString ([0cfd713](https://github.com/eveble/types-helpers/commit/0cfd713378c01cda8ac134067efb21c8e66f91f5))
* defines methods as instance members ([0958eb5](https://github.com/eveble/types-helpers/commit/0958eb5460d40db046c899463f66e25cf9965718))

# [1.4.0](https://github.com/eveble/types-helpers/compare/v1.3.0...v1.4.0) (2021-05-07)


### Bug Fixes

* extend String directly on ValueString ([55d52fd](https://github.com/eveble/types-helpers/commit/55d52fdea1e8d6dc09abfbeb9ee3738358668788))


### Features

* add StandardizedValueString ([6b6f935](https://github.com/eveble/types-helpers/commit/6b6f9357959abb0208e936f64151751a342b935c))

# [1.3.0](https://github.com/eveble/types-helpers/compare/v1.2.0...v1.3.0) (2021-05-06)


### Features

* implement equals method to value primitives ([207703c](https://github.com/eveble/types-helpers/commit/207703c494b28804b6a528203c25c83251bbbea3))

# [1.2.0](https://github.com/eveble/types-helpers/compare/v1.1.1...v1.2.0) (2021-05-06)


### Features

* add ValueNumber ([04d26ca](https://github.com/eveble/types-helpers/commit/04d26ca94a27c546276536d3fb670f85dd138b0f))
* add ValueString ([2fa407f](https://github.com/eveble/types-helpers/commit/2fa407f848c00d1fcd70e2db67e70d191c1b91e7))

## [1.1.1](https://github.com/eveble/types-helpers/compare/v1.1.0...v1.1.1) (2021-03-31)


### Bug Fixes

* export I18nError ([c4b8cf3](https://github.com/eveble/types-helpers/commit/c4b8cf370b78295506c6f3cc99ecefb257a43a5f))

# [1.1.0](https://github.com/eveble/types-helpers/compare/v1.0.4...v1.1.0) (2021-03-31)


### Features

* add I18nError ([1a25c42](https://github.com/eveble/types-helpers/commit/1a25c42a093b3ef843e79ddc5d04789844f12848))

## [1.0.4](https://github.com/eveble/types-helpers/compare/v1.0.3...v1.0.4) (2020-07-23)


### Bug Fixes

* **deps:** bump @eveble/eveble to latest ([b15ae20](https://github.com/eveble/types-helpers/commit/b15ae208c346e74d28a616fd624f6d3d2029af0e))

## [1.0.3](https://github.com/eveble/types-helpers/compare/v1.0.2...v1.0.3) (2020-07-12)


### Bug Fixes

* **mixins:** type namespace to Eveble ([b613526](https://github.com/eveble/types-helpers/commit/b6135269903fe7aba2545698807c02cf03393925))

## [1.0.2](https://github.com/eveble/types-helpers/compare/v1.0.1...v1.0.2) (2020-07-06)


### Bug Fixes

* validator type not allowing arguments ([209f581](https://github.com/eveble/types-helpers/commit/209f581cad243d4d8a46f580eb149fcd37f7d0dd))

## [1.0.1](https://github.com/eveble/types-helpers/compare/v1.0.0...v1.0.1) (2020-07-06)


### Bug Fixes

* **exports:** exported types name to HelpersTypes ([c3306e5](https://github.com/eveble/types-helpers/commit/c3306e5b6721601086f8e4c7cf9724788a8781cd))

# 1.0.0 (2020-07-06)


### Features

* **mixins:** add GeneratorMixin ([d255d42](https://github.com/eveble/types-helpers/commit/d255d4299c26587cbb05ad6dd5563d569ca54f9a))
* **mixins:** add StandardizedMixin ([cad22a6](https://github.com/eveble/types-helpers/commit/cad22a6ad2870630e5763fffbef5053da5d655f5))
* **mixins:** add ValidableMixin ([b957f26](https://github.com/eveble/types-helpers/commit/b957f260a228e232533f2824592f78fb870c2b31))
* **mixins:** add ValidatorMixin ([5ccf013](https://github.com/eveble/types-helpers/commit/5ccf0139396c4b113ab9461fd0122127c2d4b130))
* add errors ([e91a3af](https://github.com/eveble/types-helpers/commit/e91a3af36682694eab23fe87c98b0d182ee4eea9))
* add Standard ([519c9ae](https://github.com/eveble/types-helpers/commit/519c9ae3712dd710b65ca5eddb8c08be19aeca5a))
