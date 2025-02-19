﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Reflection;

namespace Furion.DatabaseAccessor;

/// <summary>
/// Sql 代理方法元数据
/// </summary>
[SuppressSniffer]
public sealed class SqlProxyMethod
{
    /// <summary>
    /// 参数模型
    /// </summary>
    public object ParameterModel { get; set; }

    /// <summary>
    /// 方法返回值
    /// </summary>
    public Type ReturnType { get; internal set; }

    /// <summary>
    /// 数据库操作上下文
    /// </summary>
    public DbContext Context { get; set; }

    /// <summary>
    /// 是否是异步方法
    /// </summary>
    public bool IsAsync { get; internal set; }

    /// <summary>
    /// 命令类型
    /// </summary>
    public CommandType CommandType { get; set; }

    /// <summary>
    /// 最终 Sql 语句
    /// </summary>
    public string FinalSql { get; set; }

    /// <summary>
    /// 当前执行的方法
    /// </summary>
    public MethodInfo Method { get; internal set; }

    /// <summary>
    /// 传递参数
    /// </summary>
    public object[] Arguments { get; internal set; }

    /// <summary>
    /// 拦截Id
    /// </summary>
    public string InterceptorId { get; internal set; }

    /// <summary>
    /// 返回受影响行数
    /// </summary>
    /// <remarks>只有非查询类操作有效</remarks>
    public bool RowEffects { get; internal set; }
}