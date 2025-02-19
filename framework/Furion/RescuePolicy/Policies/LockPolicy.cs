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

namespace Furion.RescuePolicy;

/// <summary>
/// 并发锁策略
/// </summary>
[SuppressSniffer]
public sealed class LockPolicy : LockPolicy<object>
{
    /// <summary>
    /// <inheritdoc cref="LockPolicy"/>
    /// </summary>
    public LockPolicy()
        : base()
    {
    }
}

/// <summary>
/// 并发锁策略
/// </summary>
/// <typeparam name="TResult">操作返回值类型</typeparam>
[SuppressSniffer]
public class LockPolicy<TResult> : PolicyBase<TResult>
{
    /// <summary>
    /// 同步锁对象
    /// </summary>
    internal readonly object _syncLock = new();

    /// <summary>
    /// 异步锁对象
    /// </summary>
    internal readonly SemaphoreSlim _asyncLock = new(1);

    /// <summary>
    /// <inheritdoc cref="LockPolicy{TResult}"/>
    /// </summary>
    public LockPolicy()
    {
    }

    /// <inheritdoc />
    public override TResult Execute(Func<TResult> operation, CancellationToken cancellationToken = default)
    {
        // 空检查
        if (operation is null) throw new ArgumentNullException(nameof(operation));

        // 对同步锁对象进行加锁，确保同一时间只有一个线程可以进入同步代码块
        lock (_syncLock)
        {
            // 执行操作方法并返回
            return operation();
        }
    }

    /// <inheritdoc />
    public async override Task<TResult> ExecuteAsync(Func<Task<TResult>> operation, CancellationToken cancellationToken = default)
    {
        // 空检查
        if (operation is null) throw new ArgumentNullException(nameof(operation));

        // 获取异步锁，确保同一时间只有一个异步操作可以进入异步代码块
        await _asyncLock.WaitAsync(cancellationToken);

        try
        {
            // 执行操作方法并返回
            return await operation();
        }
        finally
        {
            // 释放异步锁
            _asyncLock.Release();
        }
    }
}